import { lessons, exams, getLessonsByCategory } from './studyItems';

const BADGES = [
  // Category completion badges
  {
    id: 'intro-master',
    titleKey: 'badgeIntroMaster',
    descKey: 'badgeIntroMasterDesc',
    icon: 'star',
    color: '#00B894',
    condition: (completedLessons: string[]) =>
      getLessonsByCategory('intro').every(l => completedLessons.includes(l.id))
  },
  {
    id: 'grade2-master',
    titleKey: 'badgeGrade2Master',
    descKey: 'badgeGrade2MasterDesc',
    icon: 'zap',
    color: '#FDCB6E',
    condition: (completedLessons: string[]) =>
      getLessonsByCategory('grade2').every(l => completedLessons.includes(l.id))
  },
  {
    id: 'grade1-master',
    titleKey: 'badgeGrade1Master',
    descKey: 'badgeGrade1MasterDesc',
    icon: 'flame',
    color: '#E17055',
    condition: (completedLessons: string[]) =>
      getLessonsByCategory('grade1').every(l => completedLessons.includes(l.id))
  },
  {
    id: 'command-master',
    titleKey: 'badgeCommandMaster',
    descKey: 'badgeCommandMasterDesc',
    icon: 'target',
    color: '#6C5CE7',
    condition: (completedLessons: string[]) =>
      getLessonsByCategory('commands').every(l => completedLessons.includes(l.id))
  },
  // Cumulative badges
  {
    id: 'first-step',
    titleKey: 'badgeFirstStep',
    descKey: 'badgeFirstStepDesc',
    icon: 'footprints',
    color: '#74B9FF',
    condition: (completedLessons: string[]) => completedLessons.length >= 1
  },
  {
    id: 'explorer',
    titleKey: 'badgeExplorer',
    descKey: 'badgeExplorerDesc',
    icon: 'compass',
    color: '#55EFC4',
    condition: (completedLessons: string[]) => completedLessons.length >= 10
  },
  {
    id: 'challenger',
    titleKey: 'badgeChallenger',
    descKey: 'badgeChallengerDesc',
    icon: 'sword',
    color: '#FD79A8',
    condition: (completedLessons: string[]) => completedLessons.length >= 15
  },
  // Grand master - all lessons done
  {
    id: 'grand-master',
    titleKey: 'badgeGrandMaster',
    descKey: 'badgeGrandMasterDesc',
    icon: 'trophy',
    color: '#FFD700',
    condition: (completedLessons: string[]) => completedLessons.length >= lessons.length
  }
];

export function getBadges(completedLessons: string[]) {
  return BADGES.map(badge => ({
    ...badge,
    earned: badge.condition(completedLessons)
  }));
}
