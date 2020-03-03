(() => ({
  name: 'AutoComplete',
  type: 'AUTO_COMPLETE',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      label,
      formComponentName,
      required,
      disabled,
      variant,
      size,
      fullWidth,
      error,
      margin,
      freeSolo,
      helperText,
      model,
      actionInputId
    } = options;
    const isDev = B.env === 'dev';
    const { Autocomplete } = window.MaterialUI.Lab;
    const { TextField, CircularProgress } = window.MaterialUI.Core;
    const { getProperty, getActionInput } = B;
    const actionInput = getActionInput(actionInputId);
    const [currentValue, setCurrentValue] = useState();
    const value = actionInput ? parent.state[actionInput.name] : currentValue;

    const searchProp = options.property
      ? getProperty(options.property) && getProperty(options.property)
      : null;

    const valueProp = options.valueproperty
      ? getProperty(options.valueproperty) && getProperty(options.valueproperty)
      : null;

    const [searchParam, setSearchParam] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [records, setRecords] = React.useState([]);

		const handleChange = (event, newValue) => {
      if(actionInput) {
        parent.setState({
          ...parent.state,
          [actionInput.name]: newValue[valueProp.name]
        });
      } else {
        setCurrentValue(newValue[valueProp.name]);
      }

			if(options.handleValueChange) {
				options.handleValueChange({name: formComponentName, value: newValue[valueProp.name]});
			}
		}

    const autoComplete = (loading, onInputChange) => (
      <Autocomplete
        onInputChange={onInputChange}
        onChange={handleChange}
        open={open}
        freeSolo={freeSolo}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option[searchProp && searchProp.name] === value}
        getOptionLabel={option => option[searchProp && searchProp.name]}
        options={records}
        loading={loading}
        renderInput={params => (
          <TextField
            {...params}
            name={formComponentName}
            disabled={disabled}
            variant={variant}
            label={label}
            value={searchParam}
            fullWidth={fullWidth}
            size={size}
            required={required}
            error={error}
            margin={margin}
            helperText={helperText}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    );

    function buildFilter([lhs, operator, rhs]) {
      if (!lhs || !rhs) {
        return null;
      }

      const lhsProperty = getProperty(lhs);

      if (!lhsProperty) {
        return null;
      }

      const { name: propertyName, kind } = lhsProperty;

      const getRawValue = (opts, value) =>
        opts.includes(kind) ? parseInt(value, 10) : value;

      const getInputVariableValue = value => {
        const variable = B.getVariable(value.id);
        if (variable) {
          //  eslint-disable-next-line no-undef
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
    }

    let where = {};

    const filter = buildFilter(options.filter);

    if (filter !== null) {
      where = filter;
    }

    if (searchProp && searchParam !== '') {
      where[searchProp.name] = {
        ...(where[searchProp.name] ? where[searchProp.name] : {}),
        regex: searchParam,
      };
    }

    const variables = searchProp && Object.assign(
      {
        sort: {
          field: searchProp.name,
          order: 'ASC',
        },
      },
      Object.keys(where).length !== 0 && {
        where,
      },
    );

    const frame = (
      <B.GetAll modelId={model} __SECRET_VARIABLES_DO_NOT_USE={variables}>
        {({ loading, error, data, refetch }) => {
          if (!isDev && data && !loading && !error) {
            setRecords(data.results);
          }
          return autoComplete(loading, (_event, value) => {
            setSearchParam(value);
            refetch && refetch();
          });
        }}
      </B.GetAll>
    );
    // };

    // const selectField = (
    //   <TextField
    //     select
    //     className={classes.selectField}
    //     value={value}
    //     size={size}
    //     variant={variant}
    //     fullWidth={fullWidth}
    //     onChange={event => setValue(event.target.value)}
    //     inputProps={{ name }}
    //     required={required}
    //     disabled={disabled}
    //     label={label}
    //     error={error}
    //     margin={margin}
    //     helperText={helperText}
    //   >
    //     {(selectOptions || '').split('\n').map(option => (
    //       <MenuItem key={option} value={option}>
    //         {option}
    //       </MenuItem>
    //     ))}
    //   </TextField>
    // );

    return isDev ? <div>{frame}</div> : frame;
  })(),
  styles: () => () => {},
}))();
