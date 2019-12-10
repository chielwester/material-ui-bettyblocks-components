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

		return <div>
			<TextField
				name={options.formComponentName}
				label={options.label}
				variant={options.variant}
				margin={options.margin}
				type={options.inputtype}
				defaultValue={currentValue}
				placeholder={options.placeholder}
				{...(options.multiline ? {multiline: true, rows: options.multilinerows, rowsMax: options.multilinemaxrows}: {})}
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
