export const ACCOUNT_NAV = [
  { label: 'Dashboard', tab: 'dashboard', icon: '📊' },
  { label: 'Orders', tab: 'orders', icon: '📦' },
  { label: 'Address', tab: 'address', icon: '🏠' },
];

export const accountPath = (tab = 'dashboard') =>
  tab === 'dashboard' ? '/account' : `/account?tab=${tab}`;
