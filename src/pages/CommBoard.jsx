import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import useAOS from '../hooks/useAOS';

const BOARD_TYPES = ['all', 'free', 'question', 'review', 'tip'];

const TYPE_MAP = {
  free: { ko: '자유', en: 'Free' },
  question: { ko: '질문답변', en: 'Q&A' },
  review: { ko: '시험후기', en: 'Review' },
  tip: { ko: '학습팁', en: 'Tips' },
};

export default function CommBoard() {
  useAOS();
  const { t, language } = useLanguage();
  const { user, profile } = useAuth();
  const isKo = language === 'ko';

  const [view, setView] = useState('list');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Detail view
  const [currentPost, setCurrentPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');

  // Write view
  const [editPost, setEditPost] = useState(null);
  const [form, setForm] = useState({ title: '', content: '', board_type: 'free' });

  const fetchPosts = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    try {
      const { data } = await supabase
        .from('board_posts')
        .select('*')
        .order('created_at', { ascending: false });
      setPosts(data || []);
    } catch (e) {
      console.error('board fetch error:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const filtered = filter === 'all' ? posts : posts.filter(p => p.board_type === filter);

  const typeLabel = (key) => {
    if (key === 'all') return t('boardCatAll');
    const m = TYPE_MAP[key];
    return m ? (isKo ? m.ko : m.en) : key;
  };

  async function openDetail(post) {
    try {
      if (supabase) {
        await supabase.rpc('increment_view_count', { p_id: post.id });
      }
      const { data: postData } = await supabase
        .from('board_posts')
        .select('*')
        .eq('id', post.id)
        .single();
      setCurrentPost(postData || post);

      const { data: replyData } = await supabase
        .from('board_replies')
        .select('*')
        .eq('post_id', post.id)
        .order('created_at', { ascending: true });
      setReplies(replyData || []);
      setReplyText('');
      setView('detail');
    } catch (e) {
      console.error('board detail error:', e);
    }
  }

  function openWrite(post = null) {
    setEditPost(post);
    setForm(post
      ? { title: post.title, content: post.content, board_type: post.board_type }
      : { title: '', content: '', board_type: 'free' }
    );
    setView('write');
  }

  function goBack() {
    setView('list');
    setCurrentPost(null);
    setReplies([]);
    fetchPosts();
  }

  async function handleSave() {
    if (!form.title.trim() || !form.content.trim()) return;
    try {
      if (editPost) {
        await supabase.from('board_posts').update(form).eq('id', editPost.id);
      } else {
        await supabase.from('board_posts').insert([{
          ...form,
          user_id: user.id,
          author_name: profile?.display_name || user.email?.split('@')[0] || 'User',
        }]);
      }
      goBack();
    } catch (e) {
      console.error('board save error:', e);
    }
  }

  async function handleDeletePost(id) {
    if (!confirm(t('confirmDelete'))) return;
    try {
      await supabase.from('board_posts').delete().eq('id', id);
      goBack();
    } catch (e) {
      console.error('board delete error:', e);
    }
  }

  async function handleReplySubmit() {
    if (!replyText.trim() || !currentPost) return;
    try {
      await supabase.from('board_replies').insert([{
        post_id: currentPost.id,
        user_id: user.id,
        author_name: profile?.display_name || user.email?.split('@')[0] || 'User',
        content: replyText.trim(),
      }]);
      const { data } = await supabase
        .from('board_replies')
        .select('*')
        .eq('post_id', currentPost.id)
        .order('created_at', { ascending: true });
      setReplies(data || []);
      setReplyText('');
    } catch (e) {
      console.error('reply submit error:', e);
    }
  }

  async function handleReplyDelete(replyId) {
    if (!confirm(t('confirmDelete'))) return;
    try {
      await supabase.from('board_replies').delete().eq('id', replyId);
      setReplies(prev => prev.filter(r => r.id !== replyId));
    } catch (e) {
      console.error('reply delete error:', e);
    }
  }

  if (loading) return (
    <div className="progress-page">
      <section className="page-header"><div className="container"><h1>{t('boardTitle')}</h1></div></section>
      <div className="container"><p>{t('loadingText')}</p></div>
    </div>
  );

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('boardTitle')}</h1>
          <p>{t('boardSubtitle')}</p>
        </div>
      </section>

      <div className="container">
        {/* ===== LIST VIEW ===== */}
        {view === 'list' && (
          <div data-aos="fade-up">
            <div className="community-toolbar">
              <div className="category-filter">
                {BOARD_TYPES.map(cat => (
                  <button key={cat} className={`category-filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
                    {typeLabel(cat)}
                  </button>
                ))}
              </div>
              {user && (
                <button className="community-toolbar-btn" onClick={() => openWrite()}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  {t('boardWrite')}
                </button>
              )}
            </div>

            {!user && (
              <div className="login-prompt">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {t('loginRequired')}
              </div>
            )}

            <div className="community-section" style={{ borderBottom: 'none' }}>
              {filtered.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>{t('boardEmpty')}</p>
              ) : (
                <div className="board-list">
                  {filtered.map(post => (
                    <div key={post.id} className="board-item clickable" onClick={() => openDetail(post)}>
                      <span className="board-category">{typeLabel(post.board_type)}</span>
                      <span className="board-title-text">{post.title}</span>
                      <div className="board-meta">
                        <span className="board-author">{post.author_name || '-'}</span>
                        <span className="board-date">{post.created_at?.slice(0, 10)}</span>
                        <span className="board-views">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          {post.view_count || 0}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== DETAIL VIEW ===== */}
        {view === 'detail' && currentPost && (
          <div data-aos="fade-up">
            <div className="community-toolbar">
              <button className="community-toolbar-btn secondary" onClick={goBack}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                {t('boardBack')}
              </button>
              <div />
            </div>

            <div className="board-detail">
              <div className="board-detail-header">
                <span className="board-category">{typeLabel(currentPost.board_type)}</span>
                <h2 className="board-detail-title">{currentPost.title}</h2>
              </div>
              <div className="board-detail-meta">
                <span>{t('boardAuthor')}: {currentPost.author_name || '-'}</span>
                <span>{currentPost.created_at?.slice(0, 10)}</span>
                <span>{t('boardViews')}: {currentPost.view_count || 0}</span>
              </div>
              <div className="board-detail-content">{currentPost.content}</div>
              {user && user.id === currentPost.user_id && (
                <div className="board-detail-actions">
                  <button className="modal-btn secondary" onClick={() => openWrite(currentPost)}>{t('boardEdit')}</button>
                  <button className="modal-btn secondary" onClick={() => handleDeletePost(currentPost.id)}>{t('boardDelete')}</button>
                </div>
              )}
            </div>

            <div className="reply-section">
              <h3 className="reply-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                {t('boardReplies')} ({replies.length})
              </h3>
              {replies.length === 0 ? (
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t('boardReplyEmpty')}</p>
              ) : (
                <div className="reply-list">
                  {replies.map(reply => (
                    <div key={reply.id} className="reply-item">
                      <div className="reply-meta">
                        <span>{reply.author_name || '-'} · {reply.created_at?.slice(0, 10)}</span>
                        {user && user.id === reply.user_id && (
                          <button className="announce-action-btn delete" onClick={() => handleReplyDelete(reply.id)}>{t('boardReplyDelete')}</button>
                        )}
                      </div>
                      <div className="reply-content">{reply.content}</div>
                    </div>
                  ))}
                </div>
              )}
              {user ? (
                <div className="reply-form">
                  <textarea
                    value={replyText}
                    onChange={e => setReplyText(e.target.value)}
                    placeholder={t('boardReplyPlaceholder')}
                  />
                  <button onClick={handleReplySubmit}>{t('boardReplyWrite')}</button>
                </div>
              ) : (
                <div className="login-prompt" style={{ marginTop: '16px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {t('loginRequired')}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== WRITE VIEW ===== */}
        {view === 'write' && (
          <div data-aos="fade-up">
            <div className="board-write">
              <h3 className="board-write-title">{editPost ? t('boardEditTitle') : t('boardWriteTitle')}</h3>
              <div className="board-write-form">
                <div>
                  <label>{t('boardFormCategory')}</label>
                  <select value={form.board_type} onChange={e => setForm({ ...form, board_type: e.target.value })}>
                    {BOARD_TYPES.filter(c => c !== 'all').map(cat => (
                      <option key={cat} value={cat}>{typeLabel(cat)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>{t('announceFormTitle')}</label>
                  <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder={t('boardFormTitle')} />
                </div>
                <div>
                  <label>{t('announceFormContent')}</label>
                  <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder={t('boardFormContent')} />
                </div>
                <div className="board-write-actions">
                  <button className="modal-btn secondary" onClick={goBack}>{t('cancel')}</button>
                  <button className="modal-btn primary" onClick={handleSave}>{t('save')}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
