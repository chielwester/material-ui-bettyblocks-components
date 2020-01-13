(() => ({
  name: 'Button',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Button } = window.MaterialUI.Core;
    const { linkType, linkTo, linkToExternal, variant } = options;
    const isDev = B.env === 'dev';
    const button =
      linkType === 'External' ? (
        <Button variant={variant} color="inherit" href={linkToExternal}>
          {options.buttonText}
        </Button>
      ) : (
        <Button
          variant={variant}
          color="inherit"
          component={B.Link}
          endpointId={options.linkTo}
        >
          {options.buttonText}
        </Button>
      );
    return isDev ? <div>{button}</div> : button;
  })(),
  styles: () => () => ({
    root: {
      flexGrow: 1,
    },
  }),
}))();
