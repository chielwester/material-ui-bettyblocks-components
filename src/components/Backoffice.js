(() => ({
  name: 'Backoffice',
  type: 'PAGE_BODY',
  allowedTypes: ['DRAWER', 'VIEW_TRAIL'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    return <div className={classes.root}>{children}</div>;
  })(),
  styles: () => () => {
    const drawerWidth = 250;

    return {
      root: {
        display: 'flex',
        height: '100vh',
        '& div.view-trail': {
          // width: `calc(100% - ${drawerWidth}px)`,
          // marginLeft: drawerWidth,
          flexGrow: 1,
        },
        '& div.drawer': {
          width: drawerWidth,
          flexShrink: 0,
          '& div.MuiDrawer-paper ': {
            width: drawerWidth,
          },
        },
      },

      appBar: {
        // transition: theme.transitions.create(['margin', 'width'], {
        //   easing: theme.transitions.easing.sharp,
        //   duration: theme.transitions.duration.leavingScreen,
        // }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        // transition: theme.transitions.create(['margin', 'width'], {
        //   easing: theme.transitions.easing.easeOut,
        //   duration: theme.transitions.duration.enteringScreen,
        // }),
      },
      menuButton: {
        // marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },

      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        // padding: theme.spacing(0, 1),
        // ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        // transition: theme.transitions.create('margin', {
        //   easing: theme.transitions.easing.sharp,
        //   duration: theme.transitions.duration.leavingScreen,
        // }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        // transition: theme.transitions.create('margin', {
        //   easing: theme.transitions.easing.easeOut,
        //   duration: theme.transitions.duration.enteringScreen,
        // }),
        marginLeft: 0,
      },
    };
  },
}))();
