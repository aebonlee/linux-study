import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import useAOS from '../hooks/useAOS';

const CATEGORIES = ['all', 'project', 'infographic', 'screenshot', 'other'];

export default function CommGallery() {
  useAOS();
  const { t } = useLanguage();
  const { user } = useAuth();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', category: 'infographic', image_url: '' });

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    if (!supabase) { setLoading(false); return; }
    try {
      const { data } = await supabase
        .from('gallery_items')
        .select('*')
        .order('created_at', { ascending: false });
      setItems(data || []);
    } catch (e) {
      console.error('gallery fetch error:', e);
    } finally {
      setLoading(false);
    }
  }

  const filtered = filter === 'all' ? items : items.filter(i => i.category === filter);

  const catLabel = (key) => t(`galleryCat${key.charAt(0).toUpperCase() + key.slice(1)}`);

  function openCreate() {
    setEditItem(null);
    setForm({ title: '', description: '', category: 'infographic', image_url: '' });
    setShowModal(true);
  }

  function openEdit(item) {
    setEditItem(item);
    setForm({ title: item.title, description: item.description || '', category: item.category, image_url: item.image_url || '' });
    setShowModal(true);
  }

  async function handleSave() {
    if (!form.title.trim()) return;
    try {
      if (editItem) {
        await supabase.from('gallery_items').update(form).eq('id', editItem.id);
      } else {
        await supabase.from('gallery_items').insert([{ ...form, author_id: user.id }]);
      }
      setShowModal(false);
      fetchData();
    } catch (e) {
      console.error('gallery save error:', e);
    }
  }

  async function handleDelete(id) {
    if (!confirm(t('confirmDelete'))) return;
    try {
      await supabase.from('gallery_items').delete().eq('id', id);
      fetchData();
    } catch (e) {
      console.error('gallery delete error:', e);
    }
  }

  if (loading) return (
    <div className="progress-page">
      <section className="page-header"><div className="container"><h1>{t('galleryTitle')}</h1></div></section>
      <div className="container"><p>{t('loadingText')}</p></div>
    </div>
  );

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('galleryTitle')}</h1>
          <p>{t('gallerySubtitle')}</p>
        </div>
      </section>

      <div className="container">
        <div className="community-toolbar">
          <div className="category-filter">
            {CATEGORIES.map(cat => (
              <button key={cat} className={`category-filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
                {catLabel(cat)}
              </button>
            ))}
          </div>
          {user && (
            <button className="community-toolbar-btn" onClick={openCreate}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              {t('galleryAdd')}
            </button>
          )}
        </div>

        {!user && (
          <div className="login-prompt">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {t('loginRequired')}
          </div>
        )}

        <div className="gallery-prog-section" data-aos="fade-up">
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>{t('galleryEmpty')}</p>
          ) : (
            <div className="gallery-prog-grid">
              {filtered.map(item => (
                <div key={item.id} className="gallery-prog-card">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.title} />
                  ) : (
                    <div className="gallery-placeholder">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                  )}
                  <h4 className="gallery-prog-title">{item.title}</h4>
                  <p className="gallery-prog-desc">{item.description}</p>
                  {user && user.id === item.author_id && (
                    <div className="gallery-card-actions">
                      <button className="gallery-action-btn" onClick={() => openEdit(item)}>{t('galleryEdit')}</button>
                      <button className="gallery-action-btn delete" onClick={() => handleDelete(item.id)}>{t('galleryDelete')}</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">{editItem ? t('galleryEditTitle') : t('galleryAddTitle')}</h3>
            <div className="modal-form">
              <div className="modal-field">
                <label>{t('galleryFormTitle')}</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
              </div>
              <div className="modal-field">
                <label>{t('galleryFormDesc')}</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
              </div>
              <div className="modal-field">
                <label>{t('galleryFormImage')}</label>
                <input value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." />
              </div>
              <div className="modal-field">
                <label>{t('galleryFormCategory')}</label>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                  {CATEGORIES.filter(c => c !== 'all').map(cat => (
                    <option key={cat} value={cat}>{catLabel(cat)}</option>
                  ))}
                </select>
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
