(() => ({
  name: 'GroupButton',
  type: 'GROUPBUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { Button } = window.MaterialUI.Core;
    const { linkType, linkToExternal, startIcon } = options;
    const isDev = B.env === 'dev';
    const button =
      linkType === 'External' ? (
        <Button
          variant={parent.variant}
          color={parent.color}
          href={linkToExternal}
          size={parent.size}
          disabled={parent.disabled}
          fullWidth={parent.fullWidth}
          startIcon={
            startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
          }
        >
          {options.buttonText}
        </Button>
      ) : (
        <Button
          variant={parent.variant}
          color={parent.color}
          component={B.Link}
          endpoint={options.linkTo}
          size={parent.size}
          disabled={parent.disabled}
          fullWidth={parent.fullWidth}
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
