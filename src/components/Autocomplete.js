(() => ({
  name: 'Autocomplete',
  type: 'TEXT_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const [open, setOpen] = useState(false);
		const [suggestions, setSuggestions] = useState([]);
		const loading = open && suggestions.length === 0;
		const [inputValue, setInputValue] = useState('');
		const [hiddenValue, setHiddenValue] = useState('');

		const handleChange = event => {
			setInputValue(event.target.value);
		}

		const handleSelect = newValue => {
			if(options.handleValueChange) {
				options.handleValueChange({name: options.formComponentName, value: newValue ? newValue.id : null});
			}
		}

		useEffect(() => {
			let active = true;

			if(!inputValue) {
				setSuggestions([]);
				return undefined;
			}

			(async () => {
	      const response = await fetch(options.endpoint + '?search=' + inputValue);

	      const countries = await response.json();

	      if (active) {
	        setSuggestions(countries);
	      }
	    })();

	    return () => {
	      active = false;
	    };
		}, [loading, inputValue]);

		useEffect(() => {
	    if (!open) {
	      setSuggestions([]);
	    }
	  }, [open]);

  	return (<div>
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
			onChange={(event, newValue) => {handleSelect(newValue)}}
      getOptionSelected={(option, value) => {
				return option.name === value.name}
			}
      getOptionLabel={option => option.name}
      options={suggestions}
      loading={loading}

      renderInput={params => (
        <TextField
				{...params}
          label={options.label}
          fullWidth
          variant={options.variant}
					margin={options.margin}
					onChange={handleChange}
        />
      )}
    />

		</div>);
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
