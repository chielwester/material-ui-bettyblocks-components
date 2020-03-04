(() => ({
  name: 'IconButton',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Icons } = window.MaterialUI;
    const { IconButton } = window.MaterialUI.Core;
    const { icon, disabled, color } = options;
    const isDev = B.env === 'dev';
    const button = (
      <IconButton disabled={disabled} color={color} aria-label={icon}>
        {React.createElement(Icons[icon])}
      </IconButton>
    );

    return isDev ? <div>{button}</div> : button;
  })(),
  styles: () => () => ({}),
}))();
