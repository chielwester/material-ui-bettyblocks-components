(() => ({
  name: 'IconButton',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { Fab } = window.MaterialUI.Core;
    const { linkType, color, linkToExternal, icon } = options;
    const isDev = B.env === 'dev';
    const button =
      linkType === 'External' ? (
        <Fab color={color} href={linkToExternal}>
          {React.createElement(Icons[icon])}
        </Fab>
      ) : (
        <Fab color={color} component={B.Link} endpointId={options.linkTo}>
          {React.createElement(Icons[icon])}
        </Fab>
      );
    return isDev ? <div>{button}</div> : button;
  })(),
  styles: () => () => ({
    root: {
      flexGrow: 1,
    },
  }),
}))();
