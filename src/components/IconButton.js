(() => ({
  name: 'IconButton',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { IconButton } = window.MaterialUI.Core;
    const { linkType, color, linkTo, linkToExternal, disabled, icon } = options;
    const isDev = B.env === 'dev';
    let button;
    if (linkType === 'External' && linkToExternal !== '') {
      button = (
        <IconButton
          disabled={disabled}
          color={color}
          aria-label={icon}
          color={color}
          href={linkToExternal}
        >
          {React.createElement(Icons[icon])}
        </IconButton>
      );
    } else if (linkType === 'Internal' && linkTo !== '') {
      button = (
        <IconButton
          disabled={disabled}
          color={color}
          aria-label={icon}
          color={color}
          component={B.Link}
          endpoint={linkTo}
        >
          {React.createElement(Icons[icon])}
        </IconButton>
      );
    } else {
      button = (
        <IconButton
          disabled={disabled}
          color={color}
          aria-label={icon}
          color={color}
        >
          {React.createElement(Icons[icon])}
        </IconButton>
      );
    }

    return isDev ? <div>{button}</div> : button;
  })(),
  styles: () => () => ({}),
}))();
