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
          disabled={disabled}
          variant={variant}
          color={color}
          onClick={options.onClick}
          type="submit"
          disabled={parent.loading ? true : false}
        >
          {options.buttonText}
        </Button>
      </FormControl>
    );
    return isDev ? <div>{button}</div> : button;
  })(),
  styles: (B) => (t) => {
    const style = new B.Styling(t);
    return {
      root: {
        flexGrow: 1,
      },
    }
  },
}))();
