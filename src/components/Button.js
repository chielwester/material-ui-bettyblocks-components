(() => ({
  name: 'Button',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { Button } = window.MaterialUI.Core;
    const { linkType, color, linkToExternal, variant, startIcon } = options;
    const isDev = B.env === 'dev';
    const button =
      linkType === 'External' ? (
        <Button
          variant={variant}
          color={color}
          href={linkToExternal}
          startIcon={
            startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
          }
        >
          {options.buttonText}
        </Button>
      ) : (
        <Button
          variant={variant}
          color={color}
          component={B.Link}
          endpointId={options.linkTo}
          startIcon={
            startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
          }
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
