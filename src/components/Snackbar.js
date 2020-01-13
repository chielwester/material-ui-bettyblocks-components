(() => ({
  name: 'Snackbar',
  type: 'SNACKBAR',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const [open, setOpen] = useState(true);
    const { Snackbar } = window.MaterialUI.Core;
    const { Alert } = window.MaterialUI.Lab;
    const {
      anchorOriginHorizontal,
      anchorOriginVertical,
      message,
      severity,
      variant,
    } = options;
    const isDev = B.env === 'dev';
    const close = () => setOpen(false);
    const snackbar = (
      <Snackbar
        anchorOrigin={{
          horizontal: anchorOriginHorizontal,
          vertical: anchorOriginVertical,
        }}
        open={open}
      >
        <Alert
          elevation={6}
          severity={severity}
          variant={variant}
          onClose={close}
        >
          {message}
        </Alert>
      </Snackbar>
    );
    return isDev ? <div>{snackbar}</div> : snackbar;
  })(),
  styles: () => () => ({}),
}))();
