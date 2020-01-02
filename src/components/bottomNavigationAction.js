(() => ({
  name: 'BottomNavigationAction',
  type: 'NAVIGATION_ITEM',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {env, useText} = B;
		const { handleChange } = options;

		return <span>
			<BottomNavigationAction showLabel label={options.label}></BottomNavigationAction>
 		</span>
  })(),
  styles: B => ({ typography }) => ({
  }),
}))();
