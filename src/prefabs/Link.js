(() => ({
  name: 'Link',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Link',
      options: [
        {
          type: 'VARIABLE',
          label: 'Link text',
          key: 'linkText',
          value: ['Link'],
        },
        {
          type: 'CUSTOM',
          label: 'Link to',
          key: 'linkType',
          value: 'Internal',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Internal page', value: 'Internal' },
              { name: 'External page', value: 'External' },
            ],
          },
        },
        {
          value: '',
          label: 'Page',
          key: 'linkTo',
          type: 'ENDPOINT',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'Internal',
            },
          },
        },
        {
          value: '',
          label: 'URL',
          key: 'linkToExternal',
          type: 'TEXT',
          configuration: {
            placeholder: 'Starts with https:// or http://',
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'External',
            },
          },
        },
        {
          label: 'Color',
          key: 'color',
          value: 'primary',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              'default',
              'error',
              'inherit',
              'primary',
              'secondary',
              'textPrimary',
              'textSecondary',
            ].map(type => ({
              name: type.charAt(0).toUpperCase() + type.slice(1),
              value: type,
            })),
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
