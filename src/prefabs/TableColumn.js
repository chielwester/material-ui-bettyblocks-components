(() => ({
  name: 'TableColumn',
  icon: 'Table',
  category: 'DATA',
  structure: [
    {
      name: 'TableColumn',
      options: [
        {
          value: '',
          label: 'Property',
          key: 'property',
          type: 'PROPERTY',
        },
        {
          type: 'TEXT',
          label: 'Label',
          key: 'label',
          value: 'Column',
        },
        // {
        //   value: 'Body1',
        //   label: 'Header Type',
        //   key: 'type',
        //   type: 'FONT',
        // },
        {
          type: 'CUSTOM',
          label: 'Column Alignment',
          key: 'align',
          value: 'left',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'left' },
              { name: 'Center', value: 'center' },
              { name: 'Right', value: 'right' },
              { name: 'Justify', value: 'justify' },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();

