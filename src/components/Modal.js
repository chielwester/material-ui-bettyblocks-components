(() => ({
  name: 'Modal',
  type: 'TEXT',
  allowedTypes: ['PAGE_BODY'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Modal } = window.MaterialUI.Core;
    const [open, setOpen] = useState(options.open);
    const isDev = B.env === 'dev';
    const isPristine = isDev && !children.length;

    return (
      <div className={[isPristine ? classes.pristine : ''].join(' ')}>
        {open ? null : (
          <button type="button" onClick={() => setOpen(true)}>
            Open Modal
          </button>
        )}

        {isDev ? (
          open ? (
            <div>{children.length ? children : 'Empty modal'}</div>
          ) : null
        ) : (
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className={classes.paper}>{children}</div>
          </Modal>
        )}
      </div>
    );
  })(),
  styles: () => () => ({
    pristine: {
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
      backgroundColor: '#F0F1F5',
      height: '100px',
    },
    paper: {
      position: 'absolute',
      backgroundColor: 'white',
      border: '2px solid #000',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
      padding: '5px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
}))();
