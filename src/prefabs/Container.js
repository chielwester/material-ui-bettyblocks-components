(() => ({
  name: 'Container',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Container',
      options: [
        {
          label: 'Disable gutters',
          key: 'disableGutters',
          value: false,
          type: 'TOGGLE',
        },
        {
          label: 'Fixed',
          key: 'fixed',
          value: false,
          type: 'TOGGLE',
        },
      ],
      descendants: [],
    },
  ],
}))();
