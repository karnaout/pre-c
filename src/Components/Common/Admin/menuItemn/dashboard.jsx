// assets
import { IconDashboard, IconUsers, IconLogout } from '@tabler/icons-react';
// constant
const icons = {
    IconDashboard,
    IconUsers,
    IconLogout
};
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

// ==============================|| SUBSCRIBER MENU ITEMS ||============================== //

const subscriber = {
    id: 'Participants',
    title: 'Participants ',
    type: 'group',
    children: [
        {
            id: 'subscriberList',
            title: 'Participants',
            type: 'item',
            url: '/Participants',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

// ==============================|| LOGOUT MENU ITEM ||============================== //

const logout = {
    id: 'logout',
    title: 'Logout',
    type: 'item',
    url: '/logout',
    icon: icons.IconLogout,
    breadcrumbs: false
};

export { dashboard, subscriber, logout };
