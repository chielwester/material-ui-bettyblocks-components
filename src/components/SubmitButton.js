(() => ({
  name: 'SubmitButton',
  type: 'SUBMIT_BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Button, FormControl } = window.MaterialUI.Core;
    const { variant, disabled, color, margin } = options;
    const isDev = B.env === 'dev';
    const button = (
      <FormControl margin={margin}>
        <Button
          type="submit"
          disabled={disabled}
          variant={variant}
          color={color}
        >
          {options.buttonText}
        </Button>
      </FormControl>
    );
    return isDev ? <div>{button}</div> : button;
  })(),
  styles: () => () => ({
    root: {
      flexGrow: 1,
    },
  }),
}))();
