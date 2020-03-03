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
    const { Children, Action } = B;
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

    const buildFilter = ([lhs, operator, rhs]) => {
      if (!lhs || !rhs) {
        return {};
      }

      const lhsProperty = B.getProperty(lhs);

      if (!lhsProperty) {
        return {};
      }

      const { name: propertyName, kind } = lhsProperty;

      const getRawValue = (opts, value) =>
        opts.includes(kind) ? parseInt(value, 10) : value;

      const getInputVariableValue = value => {
        const variable = B.getVariable(value.id);
        if (variable) {
          // eslint-disable-next-line no-undef
          const params = useParams();

          return variable.kind === 'integer'
            ? parseInt(params[variable.name], 10)
            : params[variable.name];
        }

        return null;
      };

      const isInputVariable = value =>
        value && value[0] && value[0].type === 'INPUT';

      const rhsValue = isInputVariable(rhs)
        ? getInputVariableValue(rhs[0])
        : getRawValue(['serial', 'integer'], rhs[0]);

      return {
        [propertyName]: {
          [operator]: rhsValue,
        },
      };
    };

    const WithData = () => {
      const where = buildFilter(options.filter);
      const variables = Object.assign(
        {
          skip: 0,
          take: 1,
        },
        Object.keys(where).length !== 0 && {
          where,
        },
      );

      return (
        <B.GetAll
          modelId={options.model}
          __SECRET_VARIABLES_DO_NOT_USE={variables}
        >
          {({ loading, error, data }) => {
            if (loading) return 'loading...';
            if (error) return 'failed';

            const item = data.results[0];

            return (
              <>
                {item && (
                  <B.GetOneProvider key={item.id} value={item}>
                    {form}
                  </B.GetOneProvider>
                )}
              </>
            );
          }}
        </B.GetAll>
      );
    };

    const Form = () => {
      return (
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

    if (isDev) {
      return <div>{form}</div>;
    }

    if (options.model) {
      const where = buildFilter(options.filter);
      const variables = Object.assign(
        {
          skip: 0,
          take: 1,
        },
        Object.keys(where).length !== 0 && {
          where,
        },
      );

      return (
        <B.GetAll
          modelId={options.model}
          __SECRET_VARIABLES_DO_NOT_USE={variables}
        >
          {({ loading, error, data }) => {
            if (loading) return 'loading...';
            if (error) return 'failed';

            const item = data.results[0];

            return (
              <>
                {item && (
                  <B.GetOneProvider key={item.id} value={item}>
                    {form}
                  </B.GetOneProvider>
                )}
              </>
            );
          }}
        </B.GetAll>
      );
    }

    return form;
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
