(() => ({
  name: 'BottomNavigation',
  type: 'NAVIGATION_BAR',
  allowedTypes: ['NAVIGATION_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		const {env, useText} = B;

		const { handleChange } = options;
		return <div>
			<BottomNavigation
			     value={0}
			     onChange={(event, newValue) => {

			     }}
			     showLabels
			     className={classes.root}
			   >
					 {children}
			 </BottomNavigation>
		 		</div>
  })(),
  styles: B => ({ typography }) => ({
  }),
}))();
