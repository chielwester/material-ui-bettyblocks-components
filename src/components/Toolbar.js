(() => ({
  name: 'Toolbar',
  type: 'TOOLBAR',
  allowedTypes: ['TABS', 'BUTTON'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Toolbar, IconButton, Typography } = window.MaterialUI.Core;
    // const { Menu } = window.MaterialUI.Icons;
    const toolbar = (
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {/* <Menu /> */}
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
          {options.title}
        </Typography>
        {children}
      </Toolbar>
    );

    const isDev = B.env === 'dev';
    return isDev ? <div>{toolbar}</div> : toolbar;
  })(),
  styles: () => () => ({
    menuButton: {
      // marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
}))();
