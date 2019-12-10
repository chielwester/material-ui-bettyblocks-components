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
				  value: 'Material Datepicker',
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
          label: 'Disable Toolbar',
          key: 'disableToolbar',
          type: 'TOGGLE',
        },
				{
				  type: 'CUSTOM',
				  label: 'Variant',
				  key: 'variant',
				  value: 'normal',
				  configuration: {
				    as: 'BUTTONGROUP',
				    dataType: 'string',
				    allowedInput: [
				      {
				        name: 'Normal',
				        value: 'normal'
				      },
				      {
				        name: 'Inline',
				        value: 'inline'
				      },
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
				},
				{
				  type: 'CUSTOM',
				  label: 'Date format',
				  key: 'dateformat',
				  value: 'MM/dd/yyyy',
				  configuration: {
				    as: 'BUTTONGROUP',
				    dataType: 'string',
				    allowedInput: [
				      {
				        name: 'MM/dd/yyyy',
				        value: 'MM/dd/yyyy'
				      },
				      {
				        name: 'dd/MM/yyyy',
				        value: 'dd/MM/yyyy'
				      },
				    ]
				  }
				}
      ],
      descendants: [],
    },
  ],
}))();
