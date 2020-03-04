(() => ({
  name: 'Backoffice',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Backoffice',
      options: [],
      descendants: [
        {
          name: 'Drawer',
          descendants: [
            {
              name: 'HorizontalDivider',
              options: [
                {
                  type: 'TOGGLE',
                  label: 'Light',
                  key: 'light',
                  value: false,
                },
                {
                  type: 'SIZE',
                  label: 'Height',
                  key: 'height',
                  value: '1px',
                  configuration: {
                    as: 'UNIT',
                  },
                },
                {
                  type: 'CUSTOM',
                  label: 'variant',
                  key: 'variant',
                  value: 'fullWidth',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Full width', value: 'fullWidth' },
                      { name: 'Inset', value: 'inset' },
                      { name: 'Middle', value: 'middle' },
                    ],
                  },
                },
              ],
              descendants: [],
            },
          ],
          options: [
            {
              label: 'Anchor',
              key: 'anchor',
              value: 'left',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Left', value: 'left' },
                  { name: 'Top', value: 'top' },
                  { name: 'Right', value: 'right' },
                  { name: 'Bottom', value: 'bottom' },
                ],
              },
            },
            {
              label: 'Variant',
              key: 'variant',
              value: 'persistent',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Permanent', value: 'permanent' },
                  { name: 'Persistent', value: 'persistent' },
                  { name: 'Temporary', value: 'temporary' },
                ],
              },
            },
            { label: 'Open', key: 'open', value: true, type: 'TOGGLE' },
          ],
        },
        {
          name: 'ViewTrail',
          descendants: [
            {
              name: 'GridPane',
              options: [
                {
                  value: 1600,
                  label: 'Width',
                  key: 'width',
                  type: 'NUMBER',
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
                          value: ['Grid'],
                          type: 'VARIABLE',
                        },
                      ],
                      descendants: [],
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
                      value: 'none',
                      type: 'CUSTOM',
                      configuration: {
                        as: 'DROPDOWN',
                        dataType: 'string',
                        allowedInput: [
                          'xs',
                          'sm',
                          'md',
                          'lg',
                          'xl',
                          'none',
                        ].map(value => ({
                          name: value.charAt(0).toUpperCase() + value.slice(1),
                          value,
                        })),
                      },
                    },
                    {
                      label: 'Disable gutters',
                      key: 'disableGutters',
                      value: true,
                      type: 'TOGGLE',
                    },
                    {
                      label: 'Fixed',
                      key: 'fixed',
                      value: false,
                      type: 'TOGGLE',
                    },
                  ],
                  descendants: [
                    {
                      name: 'Table',
                      options: [
                        {
                          value: '',
                          label: 'Model',
                          key: 'model',
                          type: 'MODEL',
                        },
                        {
                          type: 'TEXT',
                          label: 'Title',
                          key: 'title',
                          value: '',
                        },
                        {
                          value: ['', 'eq', ''],
                          label: 'Filter',
                          key: 'filter',
                          type: 'FILTER',
                          configuration: {
                            dependsOn: 'model',
                          },
                        },
                        {
                          value: '',
                          label: 'Search on property',
                          key: 'searchProperty',
                          type: 'PROPERTY',
                          configuration: {
                            dependsOn: 'model',
                          },
                        },
                      ],
                      descendants: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'FormPane',
              options: [
                {
                  value: 600,
                  label: 'Width',
                  key: 'width',
                  type: 'NUMBER',
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
                      descendants: [],
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
                      value: 'none',
                      type: 'CUSTOM',
                      configuration: {
                        as: 'DROPDOWN',
                        dataType: 'string',
                        allowedInput: [
                          'xs',
                          'sm',
                          'md',
                          'lg',
                          'xl',
                          'none',
                        ].map(value => ({
                          name: value.charAt(0).toUpperCase() + value.slice(1),
                          value,
                        })),
                      },
                    },
                    {
                      label: 'Disable gutters',
                      key: 'disableGutters',
                      value: true,
                      type: 'TOGGLE',
                    },
                    {
                      label: 'Fixed',
                      key: 'fixed',
                      value: false,
                      type: 'TOGGLE',
                    },
                  ],
                  descendants: [
                    {
                      name: 'Form',
                      options: [
                        {
                          value: '',
                          label: 'Action',
                          key: 'actionId',
                          type: 'ACTION',
                          configuration: {
                            apiVersion: 'v1',
                          },
                        },
                        {
                          value: '',
                          label: 'Model',
                          key: 'model',
                          type: 'MODEL',
                        },
                        {
                          value: [''],
                          label: 'Record ID',
                          key: 'recordId',
                          type: 'VARIABLE',
                        },
                      ],
                      descendants: [],
                    },
                  ],
                },
              ],
            },
          ],
          options: [
            { label: 'Active', key: 'active', value: 0, type: 'NUMBER' },
          ],
        },
      ],
    },
  ],
}))();