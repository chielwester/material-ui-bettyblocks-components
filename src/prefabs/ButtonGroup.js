(() => ({
  name: 'ButtonGroup',
  icon: 'ButtonGroupIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'ButtonGroup',
      options: [
        {
          type: 'CUSTOM',
          label: 'variant',
          key: 'variant',
          value: 'contained',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Text',
                value: 'text',
              },
              {
                name: 'Outlined',
                value: 'outlined',
              },
              {
                name: 'Contained',
                value: 'contained',
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
        {
          label: 'Size',
          key: 'size',
          value: 'medium',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Small',
                value: 'small',
              },
              {
                name: 'Medium',
                value: 'medium',
              },
              {
                name: 'Large',
                value: 'large',
              },
            ],
          },
        },
        {
          label: 'Fullwidth',
          key: 'fullWidth',
          value: false,
          type: 'TOGGLE',
        },
        {
          label: 'Disable Focus Ripple',
          key: 'disableFocusRipple',
          value: false,
          type: 'TOGGLE',
        },
        {
          label: 'Disable Ripple',
          key: 'disableRipple',
          value: false,
          type: 'TOGGLE',
        },
        {
          label: 'Disabled',
          key: 'disabled',
          value: false,
          type: 'TOGGLE',
        },
      ],
      descendants: [
        {
          name: 'GroupButton',
          options: [
            {
              type: 'VARIABLE',
              label: 'Button text',
              key: 'buttonText',
              value: ['Button'],
            },
            {
              label: 'StartIcon',
              key: 'startIcon',
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
        {
          name: 'GroupButton',
          options: [
            {
              type: 'VARIABLE',
              label: 'Button text',
              key: 'buttonText',
              value: ['Button'],
            },
            {
              label: 'StartIcon',
              key: 'startIcon',
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
    },
  ],
}))();
