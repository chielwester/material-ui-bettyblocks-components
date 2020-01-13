(() => ({
  name: 'RadioGroupInput',
  icon: 'RadioButtonIcon',
  category: 'FORM',
  structure: [
    {
      name: 'RadioGroupInput',
      options: [
        {
          value: '',
          label: 'Name',
          key: 'name',
          type: 'TEXT',
        },
        {
          value: 'Label',
          label: 'Label',
          key: 'label',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Value',
          key: 'text',
          type: 'TEXT',
        },
        {
          type: 'TEXT',
          label: 'Options',
          key: 'selectOptions',
          value: 'a\nb\nc',
          configuration: {
            as: 'MULTILINE',
          },
        },
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
        {
          value: '',
          label: 'Helper text',
          key: 'helperText',
          type: 'TEXT',
        },
      ],
      descendants: [],
    },
  ],
}))();
