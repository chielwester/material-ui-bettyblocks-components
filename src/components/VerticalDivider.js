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
        className={classes.root}
        variant={variant}
        orientation="vertical"
      ></Divider>
    );
    return isDev ? <div className={classes.dev}>{divider}</div> : divider;
  })(),
  styles: () => () => ({
    root: {
      width: ({ options: { width } }) => width,
    },
    dev: {
      '& hr': {
        heighwidtht: ({ options: { width } }) => width,
      },
    },
  }),
}))();
