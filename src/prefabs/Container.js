(() => ({
  name: 'Container',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Container',
      options: [
        {
          label: 'Max width',
          key: 'maxWidth',
          value: 'lg',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: ['xs', 'sm', 'md', 'lg', 'xl', 'none'].map(value => ({
              name: value.charAt(0).toUpperCase() + value.slice(1),
              value,
            })),
          },
        },
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
