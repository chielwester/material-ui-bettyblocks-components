(() => ({
  name: 'Modal',
  icon: 'PanelIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Modal',
      options: [
        {
          type: 'TOGGLE',
          label: 'Open',
          key: 'open',
          value: true,
        },
        {
          type: 'TEXT',
          value: 'Open Modal',
          key: 'buttontext',
          label: 'Button Text'
        }
      ],
      descendants: [
        {
          name: 'Container',
          descendants: [],
          options: [],
        },
      ],
    },
  ],
}))();
