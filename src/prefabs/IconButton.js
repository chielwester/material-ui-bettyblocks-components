(() => ({
  name: 'IconButton',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'IconButton',
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
                name: 'Cancel',
                value: 'Cancel',
              },
              {
                name: 'Close',
                value: 'Close',
              },
              {
                name: 'Save',
                value: 'Save',
              },
              {
                name: 'Delete',
                value: 'Delete',
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
        {
          label: 'Disabled',
          key: 'disabled',
          value: false,
          type: 'TOGGLE',
        },
        {
          type: 'CUSTOM',
          label: 'type',
          key: 'type',
          value: 'button',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Submit',
                value: 'submit',
              },
              {
                name: 'Reset',
                value: 'reset',
              },
              {
                name: 'Button',
                value: 'button',
              },
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
      ],
      descendants: [],
    },
  ],
}))();
