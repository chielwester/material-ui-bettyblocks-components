(() => ({
  name: 'NavigationTabs',
  icon: 'TabGroupIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'NavigationTabs',
      options: [
        {
          label: 'Centered',
          key: 'centered',
          value: true,
          type: 'TOGGLE',
        },
      ],
      descendants: [
        {
          name: 'NavigationTab',
          descendants: [],
          options: [
            {
              type: 'TEXT',
              label: 'Label',
              key: 'label',
              value: 'New tab',
            },
            {
              type: 'TOGGLE',
              label: 'Disabled',
              key: 'disabled',
              value: false,
            },
            {
              value: '',
              label: 'Page',
              key: 'linkTo',
              type: 'ENDPOINT',
            },
          ],
        },
      ],
    },
  ],
}))();
