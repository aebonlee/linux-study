-- =============================================
-- Linux Study - Supabase 테이블 설정
-- 실제 DB 스키마 기준 (2026-03-18 확인)
-- =============================================
-- ※ 이 Supabase 프로젝트는 다른 프로젝트와 공유됨
-- ※ user_profiles, handle_new_user 트리거는 공용이므로 수정 금지

-- ═══════════════════════════════════════════
-- 공용 테이블 (이미 존재, 수정 금지)
-- ═══════════════════════════════════════════
-- user_profiles: 사용자 프로필 (공용, 트리거 자동 생성)
--   id uuid PK, email, display_name, avatar_url, role, provider, created_at, updated_at ...
--   RLS: 자신 조회/수정 가능, 누구나 조회 가능

-- ═══════════════════════════════════════════
-- 1. user_progress (학습 완료 기록)
-- ═══════════════════════════════════════════
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  problem_id text NOT NULL,
  completed_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, problem_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_select_own_progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "users_insert_own_progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "users_update_own_progress" ON user_progress
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "users_delete_own_progress" ON user_progress
  FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress (user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_problem_id ON user_progress (problem_id);

-- ═══════════════════════════════════════════
-- 2. exam_results (모의고사 점수 기록)
-- ═══════════════════════════════════════════
CREATE TABLE IF NOT EXISTS exam_results (
  id bigserial PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  exam_id text NOT NULL,
  score integer NOT NULL,
  total integer NOT NULL,
  completed_at timestamptz DEFAULT now(),
  UNIQUE(user_id, exam_id)
);

ALTER TABLE exam_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_select_own_exams" ON exam_results
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "users_insert_own_exams" ON exam_results
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "users_update_own_exams" ON exam_results
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "users_delete_own_exams" ON exam_results
  FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_exam_results_user_id ON exam_results (user_id);
CREATE INDEX IF NOT EXISTS idx_exam_results_exam_id ON exam_results (exam_id);

-- ═══════════════════════════════════════════
-- 3. page_views (페이지 방문 기록)
-- ═══════════════════════════════════════════
-- ※ 컬럼명: path (page_path 아님), visitor_id, user_id
CREATE TABLE IF NOT EXISTS page_views (
  id bigserial PRIMARY KEY,
  path text NOT NULL,
  visitor_id text NOT NULL,
  user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_page_views" ON page_views
  FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_select_page_views" ON page_views
  FOR SELECT TO anon USING (true);
CREATE POLICY "auth_insert_page_views" ON page_views
  FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "auth_select_page_views" ON page_views
  FOR SELECT TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views (path);
CREATE INDEX IF NOT EXISTS idx_page_views_visitor_id ON page_views (visitor_id);

-- ═══════════════════════════════════════════
-- 4. announcements (공지사항)
-- ═══════════════════════════════════════════
CREATE TABLE IF NOT EXISTS announcements (
  id bigserial PRIMARY KEY,
  title_ko text NOT NULL,
  title_en text,
  content_ko text NOT NULL,
  content_en text,
  tag text NOT NULL DEFAULT 'general',
  is_pinned boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_select_announcements" ON announcements
  FOR SELECT USING (true);

CREATE INDEX IF NOT EXISTS idx_announcements_published ON announcements (published_at DESC);

-- ═══════════════════════════════════════════
-- 5. board_posts (게시판)
-- ═══════════════════════════════════════════
-- ※ id는 uuid, board_type 사용 (category 아님)
CREATE TABLE IF NOT EXISTS board_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  board_type text NOT NULL,
  user_id uuid,
  author_name text NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  file_url text,
  view_count integer DEFAULT 0,
  is_pinned boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  views integer DEFAULT 0
);

ALTER TABLE board_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "board_posts_select" ON board_posts
  FOR SELECT USING (true);
CREATE POLICY "board_posts_insert" ON board_posts
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "board_posts_update" ON board_posts
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "board_posts_delete" ON board_posts
  FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_board_posts_board_type ON board_posts (board_type);
CREATE INDEX IF NOT EXISTS idx_board_posts_created ON board_posts (created_at DESC);

-- ═══════════════════════════════════════════
-- 6. board_replies (게시판 댓글)
-- ═══════════════════════════════════════════
CREATE TABLE IF NOT EXISTS board_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES board_posts(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name text,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE board_replies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_select_replies" ON board_replies
  FOR SELECT USING (true);
CREATE POLICY "auth_insert_replies" ON board_replies
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "owner_delete_replies" ON board_replies
  FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_board_replies_post ON board_replies (post_id);

-- ═══════════════════════════════════════════
-- 7. gallery_items (갤러리)
-- ═══════════════════════════════════════════
-- ※ 컬럼명: title/description (title_ko/description_ko 아님)
CREATE TABLE IF NOT EXISTS gallery_items (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  title_en text,
  category text DEFAULT 'project',
  image_url text,
  description text,
  description_en text,
  date text,
  created_at timestamptz DEFAULT now(),
  author_id uuid,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "gallery_select" ON gallery_items
  FOR SELECT USING (true);

CREATE INDEX IF NOT EXISTS idx_gallery_created ON gallery_items (created_at DESC);
