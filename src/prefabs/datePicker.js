(() => ({
  name: 'DatePicker',
  icon: 'DatePickerIcon',
  category: 'MATERIAL',
  structure: [
    {
      name: 'DatePicker',
      options: [
				{
				  type: 'TEXT',
				  label: 'Label',
				  key: 'label',
				  value: 'Material Textinput',
				},
				{
				  type: 'TEXT',
				  label: 'Placeholder',
				  key: 'placeholder',
				  value: '',
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
				  type: 'NUMBER',
				  label: 'Multiline rows',
				  key: 'multilinerows',
				  value: 4,
				},
				{
				  type: 'NUMBER',
				  label: 'Multiline max rows',
				  key: 'multilinemaxrows',
				  value: 4,
				},
				{
				  type: 'CUSTOM',
				  label: 'Input type',
				  key: 'inputtype',
				  value: 'text',
				  configuration: {
				    as: 'BUTTONGROUP',
				    dataType: 'string',
				    allowedInput: [
				      {
				        name: 'Text',
				        value: 'text'
				      },
				      {
				        name: 'Password',
				        value: 'password'
				      },
				      {
				        name: 'Number',
				        value: 'number'
				      },
				      {
				        name: 'Search',
				        value: 'search'
				      }

				    ]
				  }
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
