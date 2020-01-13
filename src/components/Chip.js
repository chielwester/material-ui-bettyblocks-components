(() => ({
  name: 'Chip',
  type: 'CHIP',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Chip } = window.MaterialUI.Core;
    const { label, disabled, variant, color } = options;
    const isDev = B.env === 'dev';
    const chip = (
      <Chip
        className={classes.chip}
        label={label}
        disabled={disabled}
        variant={variant}
        color={color}
      ></Chip>
    );
    return isDev ? <span>{chip}</span> : chip;
  })(),
  styles: (B) => theme => {
    const style = new B.Styling(theme);
    return {
      chip: {
        margin: style.getSpacing('M'),
      },
    };
  },
}))();
