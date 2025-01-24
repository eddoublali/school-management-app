const menuItems = [
  // Dashboard
  {
    label: 'Accueil',
    icon: 'Home',
    href: '/home',
  },

  { type: 'divider' },

  // Educational Structure
  {
    label: 'Filières',
    icon: 'BookMarked',
    href: '/specializations',
  },
  {
    label: 'Modules',
    icon: 'BookOpen',
    href: '/modules',
  },
  {
    label: 'Cours',
    icon: 'BookOpenText',
    href: '/courses',
  },
  {
    label: 'Compétences',
    icon: 'BookMarked',
    href: '/competences',
  },

  { type: 'divider' },

  // People & Groups
  {
    label: 'Formateurs',
    icon: 'UserRound',
    href: '/formateur',
  },
  {
    label: 'Stagiaires',
    icon: 'Users',
    href: '/trainees',
  },
  {
    label: 'Groupes',
    icon: 'Users',
    href: '/groups',
  },

  { type: 'divider' },

  // Planning & Monitoring
  {
    label: 'Emploi du temps',
    icon: 'Calendar',
    href: '/schedule',
  },
  {
    label: 'Planificateur',
    icon: 'Calendar',
    href: '/Scheduler',
  },
  {
    label: 'Présence',
    icon: 'ClipboardCheck',
    href: '/attendance',
  },
  {
    label: 'Quiz',
    icon: 'MessageCircleQuestion',
    href: '/quizzes',
  },

  { type: 'divider' },

  // Documentation & Requests
  {
    label: 'Générer documents',
    icon: 'Stars',
    href: '/docs',
  },
  {
    label: 'Documents',
    icon: 'FileText',
    href: '/documents',
  },
  {
    label: 'Demandes',
    icon: 'FileStack',
    href: '/demandes',
  },

  { type: 'divider' },

  // Administration
  {
    label: 'Secteurs',
    icon: 'FolderCog',
    href: '/secteurs',
  },
  {
    label: 'Paramètres',
    icon: 'Settings',
    href: '/settings',
  },
];

export default menuItems;
