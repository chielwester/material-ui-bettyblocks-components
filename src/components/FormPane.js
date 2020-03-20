(() => ({
  name: 'FormPane',
  type: 'PANE',
  allowedTypes: ['PAGE_BODY', 'APP_BAR', 'FORM'],
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

    const ConditionalWrapper = ({ condition, wrapper, children }) =>
      condition ? wrapper(children) : children;
    const { activePanel, setActivePanel, togglePanel } = parent;

    // if (open === false) togglePanel(index);
    const isDev = B.env === 'dev';
    const isActive = isDev || activePanel === index;
    return (
      <div className={classes.root}>
        <ConditionalWrapper
          condition={!isActive}
          wrapper={children => (
            <div className={classes.overlay}>
              <div
                onClick={() => setActivePanel(index)}
                className={classes.backdrop}
              />
              {children}
            </div>
          )}
        >
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
      position: 'relative',
    },
    backdrop: {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.6,
      backgroundColor: 'white',
    },
  }),
}))();
