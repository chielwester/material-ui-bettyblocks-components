(() => ({
  name: 'BottomNavigation',
  icon: 'NavbarIcon',
  category: 'MATERIAL',
  structure: [
    {
      name: 'BottomNavigation',
      options: [

      ],
      descendants: [{
      	name: 'BottomNavigationAction',
				options: [
					{
						label: 'Label',
						key: 'label',
						value: 'Home',
						type: 'TEXT'
					}
				],
				descendants: []
      }],
    },
  ],
}))();
