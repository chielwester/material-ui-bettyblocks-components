(() => ({
  name: 'TableColumn',
  icon: 'Table',
  category: 'DATA',
  structure: [
    {
      name: 'TableColumn',
      options: [
        {
          type: 'TEXT',
          label: 'Label',
          key: 'label',
          value: 'Column',
        },
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
      descendants: [
        {
          name: 'Typography',
          descendants: [],
          options: [
            {
              type: 'VARIABLE',
              label: 'Text',
              key: 'text',
              value: ['text'],
              configuration: {
                as: 'MULTILINE',
              },
            },
          ],
        },
      ],
    },
  ],
}))();
