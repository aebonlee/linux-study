// Progress page data: cert intro

export const certIntro = {
  grade2: {
    title: '리눅스 마스터 2급',
    titleEn: 'Linux Master Grade 2',
    level: '2급',
    levelEn: 'Grade 2',
    type: '국가공인',
    typeEn: 'National',
    organizer: 'KAIT (한국정보통신진흥협회)',
    organizerEn: 'KAIT (Korea Assoc. of ICT Promotion)',
    rounds: [
      {
        name: '1차 (온라인)',
        nameEn: 'Round 1 (Online)',
        format: 'CBT 객관식 60문항 / 60분',
        formatEn: 'CBT Multiple-choice 60Q / 60min',
        passing: '60점 이상 (100점 만점)',
        passingEn: '60+ out of 100',
      },
      {
        name: '2차 (오프라인)',
        nameEn: 'Round 2 (Offline)',
        format: '객관식 + 단답형 80문항 / 100분',
        formatEn: 'MC + Short answer 80Q / 100min',
        passing: '60점 이상 (100점 만점)',
        passingEn: '60+ out of 100',
      },
    ],
  },
  grade1: {
    title: '리눅스 마스터 1급',
    titleEn: 'Linux Master Grade 1',
    level: '1급',
    levelEn: 'Grade 1',
    type: '국가공인',
    typeEn: 'National',
    organizer: 'KAIT (한국정보통신진흥협회)',
    organizerEn: 'KAIT (Korea Assoc. of ICT Promotion)',
    rounds: [
      {
        name: '1차 (온라인)',
        nameEn: 'Round 1 (Online)',
        format: 'CBT 객관식 100문항 / 100분',
        formatEn: 'CBT Multiple-choice 100Q / 100min',
        passing: '과목당 40점 이상, 평균 60점 이상',
        passingEn: '40+ per subject, 60+ average',
      },
      {
        name: '2차 (오프라인)',
        nameEn: 'Round 2 (Offline)',
        format: '객관식 + 단답형 + 서술형 100문항 / 100분',
        formatEn: 'MC + Short + Essay 100Q / 100min',
        passing: '과목당 40점 이상, 평균 60점 이상',
        passingEn: '40+ per subject, 60+ average',
      },
    ],
  },
};

export interface Announcement {
  id: string;
  tag: string;
  tagEn: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  date: string;
}

export const announcements: Announcement[] = [];

export interface BoardPost {
  id: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  author: string;
  date: string;
  replies: number;
}

export const boardPosts: BoardPost[] = [];

export interface GalleryItem {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  color: string;
}

export const galleryItems: GalleryItem[] = [];
