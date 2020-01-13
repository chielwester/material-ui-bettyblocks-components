(() => ({
  name: 'Alert',
  icon: 'AlertIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Alert',
      options: [
        {
          type: 'VARIABLE',
          label: 'Message',
          key: 'message',
          value: ['Message'],
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
