(() => ({
  name: 'ButtonGroup',
  icon: 'ButtonIcon',
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
      descendants: [],
    },
  ],
}))();
