const site = {
  name: 'Linux Study',
  nameKo: '리눅스 마스터 자격증 학습',
  description: '리눅스 마스터 자격증 취득을 위한 체계적인 학습 플랫폼 - 2급/1급 시험 대비',
  url: 'https://linux-study.dreamitbiz.com',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'Linux', className: 'brand-dream' },
      { text: ' Study', className: 'brand-it' }
    ]
  },

  themeColor: '#0046C8',

  menuItems: [
    {
      labelKey: 'site.nav.intro',
      path: '/intro/what-is-linux',
      activePath: '/intro',
      dropdown: [
        { path: '/intro/what-is-linux', labelKey: 'site.nav.whatIsLinux' },
        { path: '/intro/history', labelKey: 'site.nav.history' },
        { path: '/intro/distributions', labelKey: 'site.nav.distributions' },
      ]
    },
    {
      labelKey: 'site.nav.grade2',
      path: '/grade2',
      activePath: '/grade2',
      dropdown: [
        { path: '/grade2/overview', labelKey: 'site.nav.grade2Overview' },
        { path: '/grade2/part1-ch1', labelKey: 'site.nav.grade2P1Ch1' },
        { path: '/grade2/part1-ch2', labelKey: 'site.nav.grade2P1Ch2' },
        { path: '/grade2/part1-ch3', labelKey: 'site.nav.grade2P1Ch3' },
        { path: '/grade2/part2-ch1', labelKey: 'site.nav.grade2P2Ch1' },
        { path: '/grade2/part2-ch2', labelKey: 'site.nav.grade2P2Ch2' },
        { path: '/grade2/part2-ch3', labelKey: 'site.nav.grade2P2Ch3' },
      ]
    },
    {
      labelKey: 'site.nav.grade1',
      path: '/grade1',
      activePath: '/grade1',
      dropdown: [
        { path: '/grade1/overview', labelKey: 'site.nav.grade1Overview' },
        { path: '/grade1/part1-ch1', labelKey: 'site.nav.grade1P1Ch1' },
        { path: '/grade1/part1-ch2', labelKey: 'site.nav.grade1P1Ch2' },
        { path: '/grade1/part2-ch1', labelKey: 'site.nav.grade1P2Ch1' },
        { path: '/grade1/part2-ch2', labelKey: 'site.nav.grade1P2Ch2' },
        { path: '/grade1/part3-ch1', labelKey: 'site.nav.grade1P3Ch1' },
        { path: '/grade1/part3-ch2', labelKey: 'site.nav.grade1P3Ch2' },
      ]
    },
    {
      labelKey: 'site.nav.commands',
      path: '/commands',
      activePath: '/commands',
      dropdown: [
        { path: '/commands/basic', labelKey: 'site.nav.cmdBasic' },
        { path: '/commands/file', labelKey: 'site.nav.cmdFile' },
        { path: '/commands/process', labelKey: 'site.nav.cmdProcess' },
        { path: '/commands/network', labelKey: 'site.nav.cmdNetwork' },
        { path: '/commands/admin', labelKey: 'site.nav.cmdAdmin' },
      ]
    },
    {
      labelKey: 'site.nav.exam',
      path: '/exam',
      activePath: '/exam',
      dropdown: [
        { path: '/exam/grade2-round1', labelKey: 'site.nav.examGrade2R1' },
        { path: '/exam/grade2-round2', labelKey: 'site.nav.examGrade2R2' },
        { path: '/exam/grade1-round1', labelKey: 'site.nav.examGrade1R1' },
        { path: '/exam/grade1-round2', labelKey: 'site.nav.examGrade1R2' },
      ]
    },
    { path: '/references', labelKey: 'site.nav.references', activePath: '/references' },
    { path: '/training', labelKey: 'site.nav.training', activePath: '/training' }
  ],

  footerLinks: [
    { path: '/grade2', labelKey: 'site.nav.grade2' },
    { path: '/grade1', labelKey: 'site.nav.grade1' },
    { path: '/commands', labelKey: 'site.nav.commands' },
    { path: '/references', labelKey: 'site.nav.references' },
    { path: '/training', labelKey: 'site.nav.training' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'DB Study', url: 'https://db-study.dreamitbiz.com' },
    { name: 'KoreaTech 컴퓨팅 사고', url: 'https://koreatech.dreamitbiz.com' }
  ]
};

export default site;
