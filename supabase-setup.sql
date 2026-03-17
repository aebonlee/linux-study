-- =============================================
-- Linux Study - Supabase 전체 테이블 설정
-- Supabase Dashboard > SQL Editor에서 실행하세요
-- =============================================

-- ═══════════════════════════════════════════
-- 1. profiles (사용자 프로필)
-- ═══════════════════════════════════════════
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 자신의 프로필만 조회/수정 가능
CREATE POLICY "users_select_own_profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "users_update_own_profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "users_insert_own_profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- 회원가입 시 자동 프로필 생성 트리거
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NULL)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 기존 트리거가 있으면 삭제 후 재생성
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ═══════════════════════════════════════════
-- 2. user_progress (학습 완료 기록)
-- ═══════════════════════════════════════════
CREATE TABLE IF NOT EXISTS user_progress (
  id bigserial PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  problem_id text NOT NULL,
  completed_at timestamptz DEFAULT now(),
  UNIQUE(user_id, problem_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- 자신의 진도만 CRUD
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
-- 3. exam_results (모의고사 점수 기록)
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

-- 자신의 시험 결과만 CRUD
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
-- 4. page_views (페이지 방문 기록)
-- ═══════════════════════════════════════════
CREATE TABLE IF NOT EXISTS page_views (
  id bigserial PRIMARY KEY,
  page_path text NOT NULL,
  visitor_id text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- 익명 사용자도 삽입/조회 가능
CREATE POLICY "anon_insert_page_views" ON page_views
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_select_page_views" ON page_views
  FOR SELECT TO anon USING (true);

-- 인증된 사용자도 삽입/조회 가능
CREATE POLICY "auth_insert_page_views" ON page_views
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "auth_select_page_views" ON page_views
  FOR SELECT TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_page_path ON page_views (page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_visitor_id ON page_views (visitor_id);
