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
          label: 'Option type',
          key: 'optionType',
          value: 'static',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Static', value: 'static' },
              { name: 'Data', value: 'data' },
            ],
          },
        },
        {
          type: 'MODEL',
          label: 'Model',
          key: 'model',
          value: '',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'data',
            },
          },
        },
        {
          type: 'PROPERTY',
          label: 'Property',
          key: 'property',
          value: '',
          configuration: {
            dependsOn: 'model',
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'data',
            },
          },
        },
        {
          type: 'TEXT',
          label: 'Options',
          key: 'selectOptions',
          value: 'a\nb\nc',
          configuration: {
            as: 'MULTILINE',
            condition: {
              type: 'SHOW',
              option: 'optionType',
              comparator: 'EQ',
              value: 'static',
            },
          },
        },
        {
          type: 'TOGGLE',
          label: 'Row',
          key: 'row',
          value: true,
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
