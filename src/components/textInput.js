(() => ({
  name: 'TextInput',
  type: 'TEXT_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {env} = B;
    const isEmpty = children.length === 0;
		const { handleChange } = options;
		console.log(options);
		return <div>
			<TextField
				name={options.formComponentName}
				label={options.label}
				variant={options.variant}
				margin={options.margin}
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
