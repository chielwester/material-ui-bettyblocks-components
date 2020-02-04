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
          label: 'Value',
          key: 'text',
          type: 'TEXT',
        },
        {
          type: 'TOGGLE',
          label: 'Data options',
          key: 'dataOptions',
          value: false,
        },
        {
          type: 'MODEL',
          label: 'Model',
          key: 'model',
          value: '',
          configuration: {
            // condition: {
            //   type: 'SHOW',
            //   option: 'dataOptions',
            //   comparator: 'EQ',
            //   value: true,
            // },
          },
        },
        {
          type: 'PROPERTY',
          label: 'Property',
          key: 'property',
          value: '',
          configuration: {
            dependsOn: 'model',
            // condition: {
            //   type: 'SHOW',
            //   option: 'dataOptions',
            //   comparator: 'EQ',
            //   value: true,
            // },
          },
        },
        {
          type: 'TEXT',
          label: 'Options',
          key: 'selectOptions',
          value: 'a\nb\nc',
          configuration: {
            as: 'MULTILINE',
            // condition: {
            //   type: 'SHOW',
            //   option: 'dataOptions',
            //   comparator: 'EQ',
            //   value: false,
            // },
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
          key: 'error',
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
