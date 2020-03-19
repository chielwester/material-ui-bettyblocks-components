(() => ({
  name: 'FormPane',
  icon: 'FormIcon',
  category: 'PANES',
  structure: [
    {
      name: 'FormPane',
      options: [
        {
          value: 600,
          label: 'Width',
          key: 'width',
          type: 'NUMBER',
        },
        {
          value: false,
          label: 'Show delete confirmation',
          key: 'showDeleteConfirmation',
          type: 'TOGGLE',
        },
      ],
      descendants: [
        {
          name: 'AppBar',
          descendants: [
            {
              name: 'Toolbar',
              options: [
                {
                  label: 'Title',
                  key: 'title',
                  value: ['Form'],
                  type: 'VARIABLE',
                },
              ],
              descendants: [
                {
                  name: 'IconButton',
                  options: [
                    {
                      label: 'Icon',
                      key: 'icon',
                      value: 'Delete',
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
                {
                  name: 'IconButton',
                  options: [
                    {
                      label: 'Icon',
                      key: 'icon',
                      value: 'Cancel',
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
                      label: 'Disabled',
                      key: 'disabled',
                      value: false,
                      type: 'TOGGLE',
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
            },
          ],
          options: [
            {
              label: 'Position',
              key: 'position',
              value: 'static',
              type: 'CUSTOM',
              configuration: {
                as: 'DROPDOWN',
                dataType: 'string',
                allowedInput: [
                  {
                    name: 'Fixed',
                    value: 'fixed',
                  },
                  {
                    name: 'Absolute',
                    value: 'absolute',
                  },
                  {
                    name: 'Sticky',
                    value: 'sticky',
                  },
                  {
                    name: 'Static',
                    value: 'static',
                  },
                  {
                    name: 'Relative',
                    value: 'relative',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'Container',
          options: [
            {
              label: 'Max width',
              key: 'maxWidth',
              value: 'lg',
              type: 'CUSTOM',
              configuration: {
                as: 'DROPDOWN',
                dataType: 'string',
                allowedInput: ['xs', 'sm', 'md', 'lg', 'xl', 'none'].map(
                  value => ({
                    name: value.charAt(0).toUpperCase() + value.slice(1),
                    value,
                  }),
                ),
              },
            },
            {
              label: 'Disable gutters',
              key: 'disableGutters',
              value: false,
              type: 'TOGGLE',
            },
            {
              label: 'Fixed',
              key: 'fixed',
              value: false,
              type: 'TOGGLE',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
