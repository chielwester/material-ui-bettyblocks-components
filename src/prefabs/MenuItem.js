(() => ({
  name: 'MenuItem',
  icon: 'ButtonIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'MenuItem',
      options: [
        {
          type: 'VARIABLE',
          label: 'Text',
          key: 'text',
          value: [''],
        },
        {
          value: '',
          label: 'Page',
          key: 'linkTo',
          type: 'ENDPOINT',
        },
        {
          label: 'Icon',
          key: 'icon',
          value: 'None',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              {
                name: '',
                value: 'None',
              },
              {
                name: 'ExpandMore',
                value: 'ExpandMore',
              },
              {
                name: 'FilterList',
                value: 'FilterList',
              },
              {
                name: 'Search',
                value: 'Search',
              },
              {
                name: 'FileCopy',
                value: 'FileCopy',
              },
              {
                name: 'GetApp',
                value: 'GetApp',
              },
              {
                name: 'Email',
                value: 'Email',
              },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
