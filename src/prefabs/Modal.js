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
