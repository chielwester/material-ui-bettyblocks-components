(() => ({
  name: 'HorizontalDivider',
  type: 'DIVIDER',
  allowedTypes: ['ROW'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Divider } = window.MaterialUI.Core;
    const { light, variant } = options;
    const isDev = B.env === 'dev';
    const divider = (
      <Divider
        light={light}
        variant={variant}
        orientation="horizontal"
      ></Divider>
    );
    return isDev ? <div>{divider}</div> : divider;
  })(),
  styles: () => () => ({}),
}))();
