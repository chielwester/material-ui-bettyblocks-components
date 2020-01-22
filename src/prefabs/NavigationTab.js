(() => ({
  name: 'NavigationTab',
  icon: 'ButtonIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'NavigationTab',
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
      descendants: [],
    },
  ],
}))();
