(() => ({
  name: 'GridItem',
  icon: 'ColumnIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'GridItem',
      options: [
				{
				  type: 'CUSTOM',
				  label: 'SX Size',
				  key: 'xssize',
				  value: '6',
				  configuration: {
				    as: 'DROPDOWN',
				    dataType: 'string',
				    allowedInput: [
				      {
				        name: '5',
				        value: '5'
				      },

				      {
				        name: '6',
				        value: '6'
				      },
				      {
				        name: '7',
				        value: '7'
				      },
				      {
				        name: '8',
				        value: '8'
				      }
				    ]
				  }
				},
				{
          value: 'title2',
          label: 'Heading type',
          key: 'headingType',
          type: 'HEADING_TYPOGRAPHY',
        },
      ],
      descendants: [],
    },
  ],
}))();
