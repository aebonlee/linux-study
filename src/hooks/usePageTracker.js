import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function getVisitorId() {
  let id = localStorage.getItem('linux-study-visitor-id');
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('linux-study-visitor-id', id);
  }
  return id;
}

export default function usePageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!supabase) return;

    const record = async () => {
      try {
        await supabase.from('page_views').insert({
          page_path: location.pathname,
          visitor_id: getVisitorId()
        });
      } catch {
        // 테이블 미생성 시 무시
      }
    };

    record();
  }, [location.pathname]);
}

export async function fetchSiteStats() {
  if (!supabase) return null;

  try {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const [todayRes, totalRes, popularRes, weeklyRes] = await Promise.all([
      // 오늘 순 방문자
      supabase.from('page_views')
        .select('visitor_id')
        .gte('created_at', todayStart),
      // 전체 순 방문자
      supabase.from('page_views')
        .select('visitor_id'),
      // 인기 페이지 (최근 7일)
      supabase.from('page_views')
        .select('page_path')
        .gte('created_at', weekAgo),
      // 최근 7일 일별 방문 수
      supabase.from('page_views')
        .select('created_at, visitor_id')
        .gte('created_at', weekAgo)
    ]);

    // 순 방문자 계산
    const todayVisitors = new Set((todayRes.data || []).map(r => r.visitor_id)).size;
    const totalVisitors = new Set((totalRes.data || []).map(r => r.visitor_id)).size;
    const totalPageViews = (totalRes.data || []).length;

    // 인기 페이지 (조회 수 기준 상위 5개)
    const pageCounts = {};
    (popularRes.data || []).forEach(r => {
      if (r.page_path && r.page_path !== '/') {
        pageCounts[r.page_path] = (pageCounts[r.page_path] || 0) + 1;
      }
    });
    const popularPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([path, count]) => ({ path, count }));

    // 최근 7일 일별 통계
    const dailyCounts = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const key = `${d.getMonth() + 1}/${d.getDate()}`;
      dailyCounts[key] = new Set();
    }
    (weeklyRes.data || []).forEach(r => {
      const d = new Date(r.created_at);
      const key = `${d.getMonth() + 1}/${d.getDate()}`;
      if (dailyCounts[key]) dailyCounts[key].add(r.visitor_id);
    });
    const dailyStats = Object.entries(dailyCounts).map(([date, visitors]) => ({
      date,
      count: visitors.size
    }));

    return { todayVisitors, totalVisitors, totalPageViews, popularPages, dailyStats };
  } catch {
    return null;
  }
}
