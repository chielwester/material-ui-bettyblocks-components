(() => ({
  name: 'TextInput',
  icon: 'TextInputIcon',
  category: 'MATERIAL',
  structure: [
    {
      name: 'TextInput',
      options: [
				{
				  type: 'TEXT',
				  label: 'Label',
				  key: 'label',
				  value: 'Material Textinput',
				},
        {
          value: '',
          label: 'Name',
          key: 'formComponentName',
          type: 'TEXT',
        },
        {
          value: true,
          label: 'Full Width',
          key: 'fullwidth',
          type: 'TOGGLE',
        },
        {
          value: false,
          label: 'Multiline',
          key: 'multiline',
          type: 'TOGGLE',
        },
				{
				  type: 'CUSTOM',
				  label: 'Variant',
				  key: 'variant',
				  value: 'standard',
				  configuration: {
				    as: 'BUTTONGROUP',
				    dataType: 'string',
				    allowedInput: [
				      {
				        name: 'Standard',
				        value: 'standard'
				      },
				      {
				        name: 'Filled',
				        value: 'filled'
				      },
				      {
				        name: 'Outlined',
				        value: 'outlined'
				      }
				    ]
				  }
				},
				{
				  type: 'VARIABLE',
				  label: 'Variable',
				  key: 'defaultValue',
				  value: ['Some text...'],
				},
				{
				  type: 'CUSTOM',
				  label: 'Margin',
				  key: 'margin',
				  value: 'none',
				  configuration: {
				    as: 'BUTTONGROUP',
				    dataType: 'string',
				    allowedInput: [
				      {
				        name: 'None',
				        value: 'none'
				      },
				      {
				        name: 'Dense',
				        value: 'dense'
				      },
				      {
				        name: 'Normal',
				        value: 'normal'
				      }
				    ]
				  }
				}
      ],
      descendants: [],
    },
  ],
}))();
