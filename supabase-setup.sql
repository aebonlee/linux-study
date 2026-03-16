-- =============================================
-- Linux Study - Supabase 테이블 설정
-- Supabase Dashboard > SQL Editor에서 실행하세요
-- =============================================

-- 1. 페이지 방문 기록 테이블
CREATE TABLE IF NOT EXISTS page_views (
  id bigserial PRIMARY KEY,
  page_path text NOT NULL,
  visitor_id text,
  created_at timestamptz DEFAULT now()
);

-- 2. RLS 활성화
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- 3. 익명 사용자도 삽입/조회 가능하도록
CREATE POLICY "anon_insert_page_views" ON page_views
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_select_page_views" ON page_views
  FOR SELECT TO anon USING (true);

-- 4. 성능 인덱스
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_page_path ON page_views (page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_visitor_id ON page_views (visitor_id);
