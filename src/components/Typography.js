(() => ({
  name: 'Typography',
  type: 'TEXT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Typography } = window.MaterialUI.Core;
    const { variant, text, gutterBottom, display, align, color } = options;
    const isDev = B.env === 'dev';
    const typography = (
      <Typography
        align={align}
        variant={variant}
        gutterBottom={gutterBottom}
        display={display}
        color={color}
      >
        <B.Text value={text} />
      </Typography>
    );
    return isDev ? <span>{typography}</span> : typography;
  })(),
  styles: () => () => ({}),
}))();
