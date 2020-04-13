import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'خانه',
    icon: 'keypad-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'امکانات',
    group: true,
  },
  {
    title: 'مرتب سازی',
    icon: 'layout-outline',
    children: [
      {
        title: 'بر اساس نویسنده',
        link: '/pages/others/user-list',
      },
      {
        title: 'بر اساس تگ',
        link: '/pages/others/tag-list',
      },
      {
        title: 'جستجو',
        link: '/pages/others/smart-table',
      },
    ],
  },
];
