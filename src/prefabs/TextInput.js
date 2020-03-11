(() => ({
  name: 'TextInput',
  icon: 'TextInputIcon',
  category: 'FORM',
  structure: [
    {
      name: 'TextInput',
      options: [
        {
          value: 'text',
          label: 'Type',
          key: 'type',
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
          label: 'Name',
          key: 'formComponentName',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Placeholder',
          key: 'placeholder',
          type: 'TEXT',
        },
        {
          value: 'Label',
          label: 'Label',
          key: 'label',
          type: 'TEXT',
        },
        {
          value: [],
          label: 'Value',
          key: 'text',
          type: 'VARIABLE',
        },
        {
          type: 'TOGGLE',
          label: 'Full width',
          key: 'fullWidth',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Disabled',
          key: 'disabled',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Readonly',
          key: 'readOnly',
          value: false,
        },
        {
          value: false,
          label: 'Required',
          key: 'required',
          type: 'TOGGLE',
        },
        {
          value: false,
          label: 'Multiline',
          key: 'multiline',
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
