(() => ({
  name: 'Button',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Button',
      options: [
        {
          type: 'VARIABLE',
          label: 'Button text',
          key: 'buttonText',
          value: ['Button'],
        },
        {
          type: 'CUSTOM',
          label: 'variant',
          key: 'variant',
          value: 'contained',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Text', value: 'text' },
              { name: 'Outlined', value: 'outlined' },
              { name: 'Contained', value: 'contained' },
            ],
          },
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
      ],
      descendants: [],
    },
  ],
}))();