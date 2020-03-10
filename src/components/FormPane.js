(() => ({
  name: 'FormPane',
  type: 'PANE',
  allowedTypes: ['PAGE_BODY'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      Dialog,
      DialogTitle,
      DialogContent,
      DialogContentText,
      DialogActions,
      Button,
    } = window.MaterialUI.Core;
    const { showDeleteConfirmation } = options;
    const closeConfirmationBox = () => {};

    // useEffect(() => {
    //   B.defineFunction('LoadRecord', () => {
    //     console.log('LOAD RECORD!');
    //   });
    // }, []);

    const ConditionalWrapper = ({ condition, wrapper, children }) =>
      condition ? wrapper(children) : children;
    const { activePanel, setActivePanel, togglePanel } = parent;

    // if (open === false) togglePanel(index);

    const isActive = activePanel === index;
    return (
      <div className={classes.root}>
        <ConditionalWrapper
          condition={!isActive}
          wrapper={children => (
            <div
              onClick={() => setActivePanel(index)}
              className={classes.overlay}
            >
              {children}
            </div>
          )}
        >
          <Dialog
            open={showDeleteConfirmation}
            onClose={() => closeConfirmationBox()}
          >
            <DialogTitle>Delete record</DialogTitle>
            <DialogContent>
              <DialogContentText>
                If you delete this record it will be gone forever. There is no
                undo.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => closeConfirmationBox()}
                color="default"
              >
                Cancel
              </Button>
              <Button onClick={() => closeConfirmationBox()} color="danger">
                Delete
              </Button>
            </DialogActions>
          </Dialog>

          {children.length ? children : <span>Form panel</span>}
        </ConditionalWrapper>
      </div>
    );
  })(),
  styles: () => () => ({
    root: {
      boxShadow: '0 0 0 0.5px',
      overflowX: 'fixed',
      overflowY: 'auto',
      height: '100%',
      position: 'relative',
      whiteSpace: 'nowrap',
    },
    overlay: {
      height: '100%',
      opacity: 0.1,
      zIndex: 1,
      opacity: 0.6,
    },
  }),
}))();
