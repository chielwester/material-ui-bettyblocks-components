(() => ({
  name: 'Button',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { Button } = window.MaterialUI.Core;
    const {
      linkType,
      color,
      linkToExternal,
      variant,
      size,
      startIcon,
    } = options;
    const isDev = B.env === 'dev';
    const button =
      linkType === 'External' ? (
        <Button
          variant={parent ? parent.variant : variant}
          color={parent ? parent.color : color}
          href={linkToExternal}
          size={parent ? parent.size : size}
          disabled={parent ? parent.disabled : false}
          fullWidth={parent ? parent.fullWidth : false}
          startIcon={
            startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
          }
        >
          {options.buttonText}
        </Button>
      ) : (
        <Button
          variant={parent ? parent.variant : variant}
          color={parent ? parent.color : color}
          component={B.Link}
          endpointId={options.linkTo}
          size={parent ? parent.size : size}
          disabled={parent ? parent.disabled : false}
          fullWidth={parent ? parent.fullWidth : false}
          startIcon={
            startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
          }
        >
          {options.buttonText}
        </Button>
      );
    return isDev ? <div> {button} </div> : button;
  })(),
  styles: () => () => ({
    root: {
      flexGrow: 1,
    },
  }),
}))();
