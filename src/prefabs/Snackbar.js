(() => ({
  name: 'Snackbar',
  icon: 'AlertIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Snackbar',
      options: [
        {
          type: 'VARIABLE',
          label: 'Message',
          key: 'message',
          value: ['Message'],
        },
        {
          label: 'Position Horizontal',
          key: 'anchorOriginHorizontal',
          value: 'center',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'left' },
              { name: 'Center', value: 'center' },
              { name: 'Right', value: 'right' },
            ],
          },
        },
        {
          label: 'Position Vertical',
          key: 'anchorOriginVertical',
          value: 'bottom',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Top', value: 'top' },
              { name: 'Bottom', value: 'bottom' },
            ],
          },
        },
        {
          label: 'Severity',
          key: 'severity',
          value: 'success',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Error', value: 'error' },
              { name: 'Info', value: 'info' },
              { name: 'Success', value: 'success' },
              { name: 'Warning', value: 'warning' },
            ],
          },
        },
        {
          label: 'Variant',
          key: 'variant',
          value: 'standard',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Filled', value: 'filled' },
              { name: 'Outlined', value: 'outlined' },
              { name: 'Standard', value: 'standard' },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
