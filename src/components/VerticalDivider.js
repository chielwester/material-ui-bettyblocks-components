(() => ({
  name: 'VerticalDivider',
  type: 'DIVIDER',
  allowedTypes: ['ROW'],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Divider } = window.MaterialUI.Core;
    const { light, variant } = options;
    const isDev = B.env === 'dev';
    const divider = (
      <Divider
        light={light}
        variant={variant}
        orientation="vertical"
      ></Divider>
    );
    return isDev ? <div>{divider}</div> : divider;
  })(),
  styles: () => () => ({}),
}))();
