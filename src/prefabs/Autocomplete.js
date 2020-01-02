(() => ({
  name: 'Autocomplete',
  icon: 'AutoCompleteIcon',
  category: 'MATERIAL',
  structure: [
    {
      name: 'Autocomplete',
      options: [
				{
				  type: 'TEXT',
				  label: 'Label',
				  key: 'label',
				  value: 'Material Autocomplete',
				},
        {
          value: '',
          label: 'Data endpoint',
          key: 'endpoint',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Name',
          key: 'formComponentName',
          type: 'TEXT',
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
			],
      descendants: [],
    },
  ],
}))();
