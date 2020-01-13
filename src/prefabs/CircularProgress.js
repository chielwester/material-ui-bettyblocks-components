(() => ({
  name: 'CircularProgress',
  icon: 'ImageIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'CircularProgress',
      options: [
        {
          label: 'Color',
          key: 'color',
          value: 'default',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Default', value: 'default' },
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
