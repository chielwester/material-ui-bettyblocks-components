(() => ({
  name: 'AppBar',
  type: 'APP_BAR',
  allowedTypes: ['TOOLBAR', 'TABS'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { AppBar } = window.MaterialUI.Core;
    const appBar = <AppBar position={options.position}>{children}</AppBar>;
    const isDev = B.env === 'dev';
    return isDev ? <div>{appBar}</div> : appBar;
  })(),
  styles: () => () => ({
    root: {
      flexGrow: 1,
    },
  }),
}))();
