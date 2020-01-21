(() => ({
  name: 'RoundButton',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'RoundButton',
      options: [
        {
          label: 'Icon',
          key: 'icon',
          value: 'Search',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
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
        {
          type: 'VARIABLE',
          label: 'Button text',
          key: 'buttonText',
          value: ['Button'],
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'variant',
              comparator: 'EQ',
              value: 'extended',
            },
          },
        },
        {
          type: 'CUSTOM',
          label: 'variant',
          key: 'variant',
          value: 'round',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Round', value: 'round' },
              { name: 'Extended', value: 'extended' },
            ],
          },
        },
        {
          label: 'Color',
          key: 'color',
          value: 'default',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Default',
                value: 'default',
              },
              {
                name: 'Inherit',
                value: 'inherit',
              },
              {
                name: 'Primary',
                value: 'primary',
              },
              {
                name: 'Secondary',
                value: 'secondary',
              },
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
              {
                name: 'Internal page',
                value: 'Internal',
              },
              {
                name: 'External page',
                value: 'External',
              },
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
