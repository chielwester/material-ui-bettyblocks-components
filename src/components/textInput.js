(() => ({
  name: 'TextInput',
  type: 'TEXT_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {env, useText} = B;
    const isEmpty = children.length === 0;
		const { handleChange } = options;
		const currentValue = B.env === 'prod' ? useText(options.defaultValue) : options.defaultValue.join(' ');
		console.log(options);
		return <div>
			<TextField
				name={options.formComponentName}
				label={options.label}
				variant={options.variant}
				margin={options.margin}
				value={currentValue}
				{...(options.multiline ? {multiline: true}: {})}
				{...(options.fullwidth ? {fullWidth: true}: {})}
				onChange={e => {
          if (handleChange) {
            handleChange(e);
          }
        }}
			/>

		</div>
  })(),
  styles: B => ({ typography }) => ({
  }),
}))();
