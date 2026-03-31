import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ICONS: Record<string, React.ReactElement> = {
  star: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/>
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/>
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none">
      <path d="M12 23c-3.866 0-7-3.134-7-7 0-3 2-5.5 4-7.5.667 2.167 2.333 3.5 5 4-1-4 1-8 3-10 0 3 2.5 5.5 3 8.5S22 16 22 16c0 3.866-3.134 7-7 7h-3z"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  footprints: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none">
      <path d="M4 16.5C4 18.43 5.57 20 7.5 20s3.5-1.57 3.5-3.5V14H7.5C5.57 14 4 15.57 4 16.5zM7.5 6C5.57 6 4 7.57 4 9.5S5.57 13 7.5 13H11V9.5C11 7.57 9.43 6 7.5 6zM16.5 4c-1.93 0-3.5 1.57-3.5 3.5V11h3.5c1.93 0 3.5-1.57 3.5-3.5S18.43 4 16.5 4zM13 14v2.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5H13z"/>
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="currentColor"/>
    </svg>
  ),
  sword: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 17.5L3 6V3h3l11.5 11.5"/>
      <path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/>
    </svg>
  ),
  crown: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none">
      <path d="M2 20h20v2H2v-2zm1-7l4 4 5-6 5 6 4-4-1-9H4L3 13z"/>
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none">
      <path d="M7 2v2H4c0 3 2 5 4 6v2c-2 0-4 1-4 3h16c0-2-2-3-4-3v-2c2-1 4-3 4-6h-3V2H7zm-1 4H5c0 1.5.8 2.8 2 3.5L7 6h-1zm12 0h-1l.01 3.5c1.2-.7 2-2 2-3.5h-1zM8 20h8v2H8v-2z"/>
    </svg>
  )
};

interface Badge {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  color: string;
  earned: boolean;
}

interface Props {
  badge: Badge;
}

export default function BadgeCard({ badge }: Props) {
  const { t } = useLanguage();

  return (
    <div className={`badge-card ${badge.earned ? 'earned' : 'locked'}`}>
      {badge.earned && <div className="badge-check">&#10003;</div>}
      <div
        className="badge-icon"
        style={{ color: badge.earned ? badge.color : undefined }}
      >
        {ICONS[badge.icon]}
      </div>
      <h4 className="badge-title">{t(badge.titleKey)}</h4>
      <p className="badge-desc">{t(badge.descKey)}</p>
      <span className={`badge-status ${badge.earned ? 'earned' : 'locked'}`}>
        {badge.earned ? t('badgeEarned') : t('badgeLocked')}
      </span>
    </div>
  );
}
