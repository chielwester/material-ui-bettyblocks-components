(() => ({
  name: 'ButtonGroup',
  type: 'BUTTON',
  allowedTypes: ['BUTTONGROUPBUTTON'],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { ButtonGroup } = window.MaterialUI.Core;
    const { color, variant, size, fullWidth, disabled } = options;

    return (
      <div className={classes.root}>
        <ButtonGroup
          size={size}
          variant={variant}
          color={color}
          fullWidth={fullWidth}
          disabled={disabled}
        >
          <B.Children
            size={size}
            variant={variant}
            color={color}
            disabled={disabled}
            fullWidth={fullWidth}
          >
            {children}
          </B.Children>
        </ButtonGroup>
      </div>
    );
  })(),
  styles: () => () => ({
    root: {
      flexGrow: 1,
    },
  }),
}))();
