import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: <Icon icon="fluent:person-12-filled" width={25} />,
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: <Icon icon="tabler:sun-filled" width={25} />,
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          {
            title: t('Dashboard'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
          },
          {
            title: t('Health and Wellness Portal'),
            path: paths.dashboard.general.ecommerce,
            icon: ICONS.ecommerce,
          },
          {
            title: t('Volunteer Portal'),
            path: '/volunteer-portal',
            icon: <VPIcon />,
          },
          {
            title: t('Contractor Portal'),
            path: paths.dashboard.general.banking,
            icon: ICONS.blog,
          },
          {
            title: t('Directory'),
            path: '/directory',
            icon: <UserIcon />,
          },
          {
            title: t('Data Management'),
            path: '/data-management',
            icon: <DMIcon />,
            children: [
              { title: t('MYMM App'), path: paths.dashboard.user.root },
              { title: t('Products'), path: paths.dashboard.user.cards },
              { title: t('Customers'), path: paths.dashboard.user.list },
              { title: t('Courses'), path: paths.dashboard.user.new },
              { title: t('Polices & Disclaimers'), path: paths.dashboard.user.demo.edit },
              { title: t('Dr Joe Live'), path: paths.dashboard.user.account },
              { title: t('Homepage Editor'), path: paths.dashboard.user.account },
              { title: t('Events'), path: paths.dashboard.user.account },
              { title: t('Community Groups'), path: paths.dashboard.user.account },
              { title: t('Orders'), path: paths.dashboard.user.account },
              { title: t('Discount Codes'), path: paths.dashboard.user.account },
            ],
          },
          {
            title: t('Finance'),
            path: paths.dashboard.general.booking,
            icon: ICONS.analytics,
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      // {
      //   subheader: t('management'),
      //   items: [
      //     // USER
      //     {
      //       title: t('user'),
      //       path: paths.dashboard.user.root,
      //       icon: ICONS.user,
      //       children: [
      //         { title: t('profile'), path: paths.dashboard.user.root },
      //         { title: t('cards'), path: paths.dashboard.user.cards },
      //         { title: t('list'), path: paths.dashboard.user.list },
      //         { title: t('create'), path: paths.dashboard.user.new },
      //         { title: t('edit'), path: paths.dashboard.user.demo.edit },
      //         { title: t('account'), path: paths.dashboard.user.account },
      //       ],
      //     },

      //     // PRODUCT
      //     {
      //       title: t('product'),
      //       path: paths.dashboard.product.root,
      //       icon: ICONS.product,
      //       children: [
      //         { title: t('list'), path: paths.dashboard.product.root },
      //         {
      //           title: t('details'),
      //           path: paths.dashboard.product.demo.details,
      //         },
      //         { title: t('create'), path: paths.dashboard.product.new },
      //         { title: t('edit'), path: paths.dashboard.product.demo.edit },
      //       ],
      //     },

      //     // ORDER
      //     {
      //       title: t('order'),
      //       path: paths.dashboard.order.root,
      //       icon: ICONS.order,
      //       children: [
      //         { title: t('list'), path: paths.dashboard.order.root },
      //         { title: t('details'), path: paths.dashboard.order.demo.details },
      //       ],
      //     },

      //     // INVOICE
      //     {
      //       title: t('invoice'),
      //       path: paths.dashboard.invoice.root,
      //       icon: ICONS.invoice,
      //       children: [
      //         { title: t('list'), path: paths.dashboard.invoice.root },
      //         {
      //           title: t('details'),
      //           path: paths.dashboard.invoice.demo.details,
      //         },
      //         { title: t('create'), path: paths.dashboard.invoice.new },
      //         { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      //       ],
      //     },

      //     // BLOG
      //     {
      //       title: t('blog'),
      //       path: paths.dashboard.post.root,
      //       icon: ICONS.blog,
      //       children: [
      //         { title: t('list'), path: paths.dashboard.post.root },
      //         { title: t('details'), path: paths.dashboard.post.demo.details },
      //         { title: t('create'), path: paths.dashboard.post.new },
      //         { title: t('edit'), path: paths.dashboard.post.demo.edit },
      //       ],
      //     },

      //     // JOB
      //     {
      //       title: t('job'),
      //       path: paths.dashboard.job.root,
      //       icon: ICONS.job,
      //       children: [
      //         { title: t('list'), path: paths.dashboard.job.root },
      //         { title: t('details'), path: paths.dashboard.job.demo.details },
      //         { title: t('create'), path: paths.dashboard.job.new },
      //         { title: t('edit'), path: paths.dashboard.job.demo.edit },
      //       ],
      //     },

      //     // TOUR
      //     {
      //       title: t('tour'),
      //       path: paths.dashboard.tour.root,
      //       icon: ICONS.tour,
      //       children: [
      //         { title: t('list'), path: paths.dashboard.tour.root },
      //         { title: t('details'), path: paths.dashboard.tour.demo.details },
      //         { title: t('create'), path: paths.dashboard.tour.new },
      //         { title: t('edit'), path: paths.dashboard.tour.demo.edit },
      //       ],
      //     },

      //     // FILE MANAGER
      //     {
      //       title: t('file_manager'),
      //       path: paths.dashboard.fileManager,
      //       icon: ICONS.folder,
      //     },

      //     // MAIL
      //     {
      //       title: t('mail'),
      //       path: paths.dashboard.mail,
      //       icon: ICONS.mail,
      //       info: <Label color="error">+32</Label>,
      //     },

      //     // CHAT
      //     {
      //       title: t('chat'),
      //       path: paths.dashboard.chat,
      //       icon: ICONS.chat,
      //     },

      //     // CALENDAR
      //     {
      //       title: t('calendar'),
      //       path: paths.dashboard.calendar,
      //       icon: ICONS.calendar,
      //     },

      //     // KANBAN
      //     {
      //       title: t('kanban'),
      //       path: paths.dashboard.kanban,
      //       icon: ICONS.kanban,
      //     },
      //   ],
      // },

      // // DEMO MENU STATES
      // {
      //   subheader: t(t('other_cases')),
      //   items: [
      //     {
      //       // default roles : All roles can see this entry.
      //       // roles: ['user'] Only users can see this item.
      //       // roles: ['admin'] Only admin can see this item.
      //       // roles: ['admin', 'manager'] Only admin/manager can see this item.
      //       // Reference from 'src/guards/RoleBasedGuard'.
      //       title: t('item_by_roles'),
      //       path: paths.dashboard.permission,
      //       icon: ICONS.lock,
      //       roles: ['admin', 'manager'],
      //       caption: t('only_admin_can_see_this_item'),
      //     },
      //     {
      //       title: t('menu_level'),
      //       path: '#/dashboard/menu_level',
      //       icon: ICONS.menuItem,
      //       children: [
      //         {
      //           title: t('menu_level_1a'),
      //           path: '#/dashboard/menu_level/menu_level_1a',
      //         },
      //         {
      //           title: t('menu_level_1b'),
      //           path: '#/dashboard/menu_level/menu_level_1b',
      //           children: [
      //             {
      //               title: t('menu_level_2a'),
      //               path: '#/dashboard/menu_level/menu_level_1b/menu_level_2a',
      //             },
      //             {
      //               title: t('menu_level_2b'),
      //               path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b',
      //               children: [
      //                 {
      //                   title: t('menu_level_3a'),
      //                   path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3a',
      //                 },
      //                 {
      //                   title: t('menu_level_3b'),
      //                   path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3b',
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       title: t('item_disabled'),
      //       path: '#disabled',
      //       icon: ICONS.disabled,
      //       disabled: true,
      //     },
      //     {
      //       title: t('item_label'),
      //       path: '#label',
      //       icon: ICONS.label,
      //       info: (
      //         <Label color="info" startIcon={<Iconify icon="solar:bell-bing-bold-duotone" />}>
      //           NEW
      //         </Label>
      //       ),
      //     },
      //     {
      //       title: t('item_caption'),
      //       path: '#caption',
      //       icon: ICONS.menuItem,
      //       caption:
      //         'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
      //     },
      //     {
      //       title: t('item_external_link'),
      //       path: 'https://www.google.com/',
      //       icon: ICONS.external,
      //     },
      //     {
      //       title: t('blank'),
      //       path: paths.dashboard.blank,
      //       icon: ICONS.blank,
      //     },
      //   ],
      // },
    ],
    [t]
  );

  return data;
}

function DMIcon() {
  return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.32">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4435 13.1005C20.0578 13.2122 22 14.8834 22 17.5C22 20.1166 20.0578 21.7878 17.4435 21.8995C16.0754 21.9579 14.2938 22 12 22C9.7062 22 7.9246 21.9579 6.5565 21.8995C3.94225 21.7878 2 20.1166 2 17.5C2 14.8834 3.94225 13.2122 6.5565 13.1005C7.9246 13.0421 9.7062 13 12 13C14.2938 13 16.0754 13.0421 17.4435 13.1005ZM4 17.5C4 18.8807 5.11929 20 6.5 20C7.88071 20 9 18.8807 9 17.5C9 16.1193 7.88071 15 6.5 15C5.11929 15 4 16.1193 4 17.5Z"
            fill="#637381"
          />
          <path
            d="M17.5 9C18.8807 9 20 7.88071 20 6.5C20 5.11929 18.8807 4 17.5 4C16.1193 4 15 5.11929 15 6.5C15 7.88071 16.1193 9 17.5 9Z"
            fill="#637381"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5565 2.10053C3.94225 2.2122 2 3.88336 2 6.5C2 9.11665 3.94225 10.7878 6.5565 10.8995C7.9246 10.9579 9.7062 11 12 11C14.2938 11 16.0754 10.9579 17.4435 10.8995C20.0578 10.7878 22 9.11665 22 6.5C22 3.88336 20.0578 2.2122 17.4435 2.10053C16.0754 2.04209 14.2938 2 12 2C9.7062 2 7.9246 2.04209 6.5565 2.10053ZM20 6.5C20 7.88071 18.8807 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z"
          fill="#637381"
        />
        <path
          d="M6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5C9 18.8807 7.88071 20 6.5 20Z"
          fill="#637381"
        />
      </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.32">
        <path
          d="M12.5845 7.76946C12.8511 7.23353 13.001 6.62933 13.001 5.99011C13.001 5.35089 12.8511 4.74669 12.5845 4.21076C13.1308 3.47036 14.0093 2.99011 15.0001 2.99011C16.6569 2.99011 18.0001 4.33326 18.0001 5.99011C18.0001 7.64697 16.6569 8.99011 15.0001 8.99011C14.0093 8.99011 13.1308 8.50986 12.5845 7.76946Z"
          fill="#637381"
        />
        <path
          d="M14.0598 19.7559C14.6564 19.9067 15.312 19.9901 16.0001 19.9901C18.7615 19.9901 21.0001 18.647 21.0001 16.9901C21.0001 15.3333 18.7615 13.9901 16.0001 13.9901C15.3111 13.9901 14.6547 14.0737 14.0574 14.225C15.2614 14.9434 16.001 15.9179 16.001 16.9911C16.001 18.0636 15.2623 19.0376 14.0598 19.7559Z"
          fill="#637381"
        />
      </g>
      <path
        d="M9.00098 9.99011C11.2101 9.99011 13.001 8.19925 13.001 5.99011C13.001 3.78097 11.2101 1.99011 9.00098 1.99011C6.79184 1.99011 5.00098 3.78097 5.00098 5.99011C5.00098 8.19925 6.79184 9.99011 9.00098 9.99011Z"
        fill="#637381"
      />
      <path
        d="M9.00098 20.9911C12.867 20.9911 16.001 19.2003 16.001 16.9911C16.001 14.782 12.867 12.9911 9.00098 12.9911C5.13498 12.9911 2.00098 14.782 2.00098 16.9911C2.00098 19.2003 5.13498 20.9911 9.00098 20.9911Z"
        fill="#637381"
      />
    </svg>
  );
}

function VPIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.32"
        d="M8.25 6.75C6.5955 6.75 5.25 8.0955 5.25 9.75C5.25 11.4045 6.5955 12.75 8.25 12.75C9.9045 12.75 11.25 11.4045 11.25 9.75C11.25 8.0955 9.9045 6.75 8.25 6.75ZM7.125 11.901V7.599L10.3523 9.75L7.125 11.901ZM20.25 1.5H3.75C2.0955 1.5 0.75 2.8455 0.75 4.5V15C0.75 16.6545 2.0955 18 3.75 18H20.25C21.9045 18 23.25 16.6545 23.25 15V4.5C23.25 2.8455 21.9045 1.5 20.25 1.5ZM8.25 14.25C5.76825 14.25 3.75 12.2318 3.75 9.75C3.75 7.26825 5.76825 5.25 8.25 5.25C10.7318 5.25 12.75 7.26825 12.75 9.75C12.75 12.2318 10.7318 14.25 8.25 14.25ZM20.25 13.5H14.25V12H20.25V13.5ZM20.25 10.5H14.25V9H20.25V10.5ZM20.25 7.5H14.25V6H20.25V7.5Z"
        fill="#637381"
      />
      <path d="M14.25 21V19.5H9.75V21H6.75V22.5H17.25V21H14.25Z" fill="#637381" />
      <path
        d="M8.25 6.75C6.5955 6.75 5.25 8.0955 5.25 9.75C5.25 11.4045 6.5955 12.75 8.25 12.75C9.9045 12.75 11.25 11.4045 11.25 9.75C11.25 8.0955 9.9045 6.75 8.25 6.75ZM7.125 11.901V7.599L10.3523 9.75L7.125 11.901ZM8.25 14.25C5.76825 14.25 3.75 12.2318 3.75 9.75C3.75 7.26825 5.76825 5.25 8.25 5.25C10.7318 5.25 12.75 7.26825 12.75 9.75C12.75 12.2318 10.7318 14.25 8.25 14.25ZM20.25 13.5H14.25V12H20.25V13.5ZM20.25 10.5H14.25V9H20.25V10.5ZM20.25 7.5H14.25V6H20.25V7.5Z"
        fill="#637381"
      />
    </svg>
  );
}
