(() => ({
  name: 'RoundButton',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { Fab } = window.MaterialUI.Core;
    const {
      linkType,
      color,
      linkToExternal,
      icon,
      variant,
      buttonText,
    } = options;
    const isDev = B.env === 'dev';
    const button =
      linkType === 'External' ? (
        <Fab color={color} href={linkToExternal} variant={variant}>
          {React.createElement(Icons[icon])}
          {variant === 'extended' && buttonText}
        </Fab>
      ) : (
        <Fab
          color={color}
          component={B.Link}
          endpointId={options.linkTo}
          variant={variant}
        >
          {React.createElement(Icons[icon])}
          {variant === 'extended' && buttonText}
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
