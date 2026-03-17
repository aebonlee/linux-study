import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import useAOS from '../hooks/useAOS';

const TAG_MAP = {
  general: { ko: '일반', en: 'General', color: '#6b7280' },
  exam: { ko: '시험일정', en: 'Exam', color: '#ef4444' },
  content: { ko: '콘텐츠', en: 'Content', color: '#3b82f6' },
  feature: { ko: '기능', en: 'Feature', color: '#10b981' },
};

export default function CommAnnouncements() {
  useAOS();
  const { t, language } = useLanguage();
  const { user, profile } = useAuth();
  const isKo = language === 'ko';
  const isAdmin = profile?.role === 'admin';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ title_ko: '', content_ko: '', tag: 'general', is_pinned: false });

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    if (!supabase) { setLoading(false); return; }
    try {
      const { data } = await supabase
        .from('announcements')
        .select('*')
        .order('is_pinned', { ascending: false })
        .order('published_at', { ascending: false });
      setItems(data || []);
    } catch (e) {
      console.error('announcements fetch error:', e);
    } finally {
      setLoading(false);
    }
  }

  function openCreate() {
    setEditItem(null);
    setForm({ title_ko: '', content_ko: '', tag: 'general', is_pinned: false });
    setShowModal(true);
  }

  function openEdit(e, item) {
    e.stopPropagation();
    setEditItem(item);
    setForm({ title_ko: item.title_ko, content_ko: item.content_ko, tag: item.tag, is_pinned: item.is_pinned });
    setShowModal(true);
  }

  async function handleSave() {
    if (!form.title_ko.trim() || !form.content_ko.trim()) return;
    try {
      if (editItem) {
        await supabase.from('announcements').update(form).eq('id', editItem.id);
      } else {
        await supabase.from('announcements').insert([form]);
      }
      setShowModal(false);
      fetchData();
    } catch (e) {
      console.error('announcements save error:', e);
    }
  }

  async function handleDelete(e, id) {
    e.stopPropagation();
    if (!confirm(t('confirmDelete'))) return;
    try {
      await supabase.from('announcements').delete().eq('id', id);
      fetchData();
    } catch (e) {
      console.error('announcements delete error:', e);
    }
  }

  if (loading) return (
    <div className="progress-page">
      <section className="page-header"><div className="container"><h1>{t('announceTitle')}</h1></div></section>
      <div className="container"><p>{t('loadingText')}</p></div>
    </div>
  );

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('announceTitle')}</h1>
          <p>{t('announceSubtitle')}</p>
        </div>
      </section>

      <div className="container">
        {isAdmin && (
          <div className="community-toolbar">
            <div />
            <button className="community-toolbar-btn" onClick={openCreate}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              {t('announceNew')}
            </button>
          </div>
        )}

        <div className="announce-section" data-aos="fade-up" style={{ borderBottom: 'none' }}>
          {items.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>{t('announceEmpty')}</p>
          ) : (
            <div className="announce-list">
              {items.map(item => {
                const isOpen = expandedId === item.id;
                const tagInfo = TAG_MAP[item.tag] || TAG_MAP.general;
                const tagLabel = isKo ? tagInfo.ko : tagInfo.en;
                const title = isKo ? item.title_ko : (item.title_en || item.title_ko);
                const content = isKo ? item.content_ko : (item.content_en || item.content_ko);

                return (
                  <div key={item.id} className={`announce-item ${isOpen ? 'open' : ''}`}>
                    <button className="announce-item-header" onClick={() => setExpandedId(isOpen ? null : item.id)}>
                      {item.is_pinned && <span className="announce-tag" style={{ background: '#f59e0b' }}>{t('announcePinned')}</span>}
                      <span className="announce-tag" style={{ background: tagInfo.color }}>{tagLabel}</span>
                      <span className="announce-title-text">{title}</span>
                      <span className="announce-date">{item.published_at?.slice(0, 10)}</span>
                      {isAdmin && (
                        <span className="announce-item-actions">
                          <button className="announce-action-btn" onClick={(e) => openEdit(e, item)}>{t('announceEdit')}</button>
                          <button className="announce-action-btn delete" onClick={(e) => handleDelete(e, item.id)}>{t('announceDelete')}</button>
                        </span>
                      )}
                      <svg className={`announce-chevron ${isOpen ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    {isOpen && (
                      <div className="announce-item-body"><p>{content}</p></div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">{editItem ? t('announceEdit') : t('announceNew')}</h3>
            <div className="modal-form">
              <div className="modal-field">
                <label>{t('announceFormTitle')}</label>
                <input value={form.title_ko} onChange={e => setForm({ ...form, title_ko: e.target.value })} />
              </div>
              <div className="modal-field">
                <label>{t('announceFormContent')}</label>
                <textarea value={form.content_ko} onChange={e => setForm({ ...form, content_ko: e.target.value })} />
              </div>
              <div className="modal-field">
                <label>{t('announceFormTag')}</label>
                <select value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })}>
                  {Object.entries(TAG_MAP).map(([key, val]) => (
                    <option key={key} value={key}>{isKo ? val.ko : val.en}</option>
                  ))}
                </select>
              </div>
              <div className="modal-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" checked={form.is_pinned} onChange={e => setForm({ ...form, is_pinned: e.target.checked })} />
                  {t('announcePinned')}
                </label>
              </div>
              <div className="modal-actions">
                <button className="modal-btn secondary" onClick={() => setShowModal(false)}>{t('cancel')}</button>
                <button className="modal-btn primary" onClick={handleSave}>{t('save')}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
