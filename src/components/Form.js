(() => ({
  name: 'Form',
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
    const { Children, Action, GetOneProvider, useText } = B;
    const [state, setState] = useState({});
    const { actionId } = options;
    const showPlaceholder = children.length === 0;
    const isPristine = showPlaceholder && B.env === 'dev';
    const ref = React.createRef();
    const [formState, setFormState] = useState({});

    const handleInputValue = ({ name, value }) => {
      setFormState(prev => {
        return { ...prev, [name]: value };
      });
    };

    const form = (
      <Action actionId={actionId}>
        {(callAction, { data, loading, error }) => {
          if (data) {
            const response_data = data.actionb5;
            if (response_data.redirect) {
              window.location.hash = response_data.redirect;
            }
          }
          return (
            <form
              onSubmit={event => {
                event.preventDefault();
                callAction({
                  variables: { input: formState },
                });
              }}
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
                {isPristine ? (
                  'Form'
                ) : (
                  <Children
                    state={state}
                    setState={setState}
                    loading={loading}
                    handleInputValue={handleInputValue}
                  >
                    {children}
                  </Children>
                )}
              </div>
            </form>
          );
        }}
      </Action>
    );

    const withData = options.model ? (
      <B.GetOne modelId={options.model} filter={options.filter}>
        {({ loading, error, data }) => {
          if (loading) return 'loading...';
          if (error) return 'failed';

          return Object.keys(data).length ? (
            <GetOneProvider key={data.id} value={data}>
              {form}
            </GetOneProvider>
          ) : (
            'Record not found'
          );
        }}
      </B.GetOne>
    ) : (
      form
    );

    return <div>{isDev ? form : withData}</div>;
  })(),

  styles: () => () => ({
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
