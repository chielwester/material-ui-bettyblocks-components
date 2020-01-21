(() => ({
  name: 'HorizontalDivider',
  icon: 'RowIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'HorizontalDivider',
      options: [
        {
          type: 'TOGGLE',
          label: 'Light',
          key: 'light',
          value: false,
        },
        {
          type: 'SIZE',
          label: 'Height',
          key: 'height',
          value: '1px',
          configuration: {
            as: 'UNIT'
          }
        },
        {
          type: 'CUSTOM',
          label: 'variant',
          key: 'variant',
          value: 'fullWidth',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Full width', value: 'fullWidth' },
              { name: 'Inset', value: 'inset' },
              { name: 'Middle', value: 'middle' },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
