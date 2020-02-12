(() => ({
  name: 'SelectInput',
  icon: 'SelectIcon',
  category: 'FORM',
  structure: [
    {
      name: 'SelectInput',
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
          label: 'Input',
          key: 'actionInputId',
          type: 'ACTION_INPUT',
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
          label: 'Full width',
          key: 'fullWidth',
          value: true,
        },
        {
          type: 'TOGGLE',
          label: 'Disabled',
          key: 'disabled',
          value: false,
        },
        {
          value: false,
          label: 'Required',
          key: 'required',
          type: 'TOGGLE',
        },
        {
          label: 'Variant',
          key: 'variant',
          value: 'standard',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Standard', value: 'standard' },
              { name: 'Outlined', value: 'outlined' },
              { name: 'Filled', value: 'filled' },
            ],
          },
        },
        {
          label: 'Size',
          key: 'size',
          value: 'medium',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Medium', value: 'medium' },
              { name: 'Small', value: 'small' },
            ],
          },
        },
        {
          value: false,
          label: 'Error',
          key: 'hasError',
          type: 'TOGGLE',
        },
        {
          label: 'Margin',
          key: 'margin',
          value: 'none',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'None', value: 'none' },
              { name: 'Dense', value: 'dense' },
              { name: 'Normal', value: 'normal' },
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
