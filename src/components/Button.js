(() => ({
  name: 'Button',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { Button } = window.MaterialUI.Core;
    const {
      linkType,
      color,
      linkTo,
      linkToExternal,
      variant,
      size,
      startIcon,
      buttonText,
    } = options;
    const isDev = B.env === 'dev';
    let button;
    if (linkType === 'External' && linkToExternal !== '') {
      button = (
        <Button
          variant={variant}
          color={color}
          href={linkToExternal}
          size={size}
          startIcon={
            startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
          }
        >
          {buttonText}
        </Button>
      );
    } else if (linkType === 'Internal' && linkTo !== '') {
      button = (
        <Button
          variant={variant}
          color={color}
          component={B.Link}
          endpoint={linkTo}
          size={size}
          startIcon={
            startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
          }
        >
          {buttonText}
        </Button>
      );
    } else {
      button = (
        <Button
          variant={variant}
          color={color}
          size={size}
          startIcon={
            startIcon !== 'None' ? React.createElement(Icons[startIcon]) : null
          }
        >
          {buttonText}
        </Button>
      );
    }

    return isDev ? <div>{button}</div> : button;
  })(),
  styles: () => () => ({
    root: {
      flexGrow: 1,
    },
  }),
}))();
