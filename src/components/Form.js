(() => ({
  name: 'Form',
  category: 'FORM',
  type: 'FORM',
  allowedTypes: [
    'AUTO_COMPLETE',
    'DATE_PICKER',
    'DATE_TIME_PICKER',
    'TIME_PICKER',
    'DROPDOWN',
    'MULTISELECT',
    'CHECKBOX',
    'TEXT_INPUT',
    'RADIO_BUTTON_GROUP',
    'FILE_INPUT',
    'IMAGE_INPUT',
    'SUBMIT_BUTTON',
    'ALERT',
    'TEXT',
    'BUTTON',
    'DIVIDER',
    'PROGRESS',
    'IMAGE',
    'CONTAINER_COMPONENT',
    'FORM_COMPONENT',
    'CONTENT_COMPONENT',
    'ROW',
    'DROPZONE',
    'LINK',
    'SWITCH',
  ],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const isDev = B.env === 'dev';
    const { __SECRET_CONTEXT_DO_NOT_USE, Children, Action } = B;
    const [state, setState] = useState({});
    const { actionId } = options;
    const [status, setStatus] = useState(null);
    const [showValid, setShowValid] = useState(null);
    const showPlaceholder = children.length === 0;
    const isPristine = showPlaceholder && B.env === 'dev';
    const ref = React.createRef();

    const validateForm = () => {
      setShowValid(true);
      const formElement = ref.current;
      const requiredFields = formElement.querySelectorAll(':required');
      const requiredFieldArray = Array.from(requiredFields);
      const remainingFields = requiredFieldArray.reduce(
        (accumulator, currentValue) => {
          if (currentValue.value !== '') {
            return accumulator - 1;
          }
          return accumulator;
        },
        requiredFieldArray.length,
      );
      return remainingFields === 0;
    };

    const form = (
      <Action actionId={actionId}>
        {(callAction, { data, loading, error }) => (
          <form
            onSubmit={event => {
              event.preventDefault();
              callAction({
                variables: {input: state}
              });
            }}
            className={classes.form}
            noValidate
            autoComplete={false}
            ref={ref}
          >
            <div
              className={[
                showPlaceholder ? classes.empty : '',
                isPristine ? classes.pristine : '',
              ].join(' ')}
            >
              {isPristine ? 'Form' : <Children state={state} setState={setState} loading={loading}>{children}</Children>}
            </div>
            {status && status === 'success' && (
              <p className={classes.success}>{options.formSuccessMessage}</p>
            )}
            {status && status === 'error' && (
              <p className={classes.error}>{options.formErrorMessage}</p>
            )}
          </form>
        )}
      </Action>

    );

    return isDev ? <div>{form}</div> : form;
  })(),

  styles: () => () =>
    ({
      empty: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '4rem',
        height: '100%',
        width: '100%',
        fontSize: '0.75rem',
        color: '#262A3A',
        textTransform: 'uppercase',
        boxSizing: 'border-box',
      },
      pristine: {
        borderWidth: '0.0625rem',
        borderColor: '#AFB5C8',
        borderStyle: 'dashed',
        backgroundColor: '#F0F1F5',
      },
    }),
}))();
