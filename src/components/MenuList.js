(() => ({
  name: 'MenuList',
  type: 'NAVIGATION_TABS',
  allowedTypes: ['MENU_ITEM'],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { MenuList } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const menuList = <MenuList>{children}</MenuList>;
    return isDev ? <div>{menuList}</div> : menuList;
  })(),
  styles: () => () => ({}),
}))();
