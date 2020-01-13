(() => ({
  name: 'LinearProgress',
  icon: 'ImageIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'LinearProgress',
      options: [
        {
          label: 'Color',
          key: 'color',
          value: 'inherit',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Inherit', value: 'inherit' },
              { name: 'Primary', value: 'primary' },
              { name: 'Secondary', value: 'secondary' },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
