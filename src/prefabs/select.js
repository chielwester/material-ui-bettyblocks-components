(() => ({
  name: 'Select',
  icon: 'SelectIcon',
  category: 'MATERIAL',
  structure: [
    {
      name: 'Select',
      options: [
				{
				  type: 'TEXT',
				  label: 'Label',
				  key: 'label',
				  value: 'Material Select',
				},
        {
          value: '',
          label: 'Name',
          key: 'formComponentName',
          type: 'TEXT',
        },
				{
				  type: 'TOGGLE',
				  label: 'Blanco option?',
				  key: 'blancooption',
				  value: true,
				},
				{
				  type: 'TEXT',
				  label: 'Blanco label',
				  key: 'blancolabel',
				  value: 'None',
				},
        {
          value: true,
          label: 'Full Width',
          key: 'fullwidth',
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
				  label: 'Default Value',
				  key: 'defaultValue',
				  value: [],
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
