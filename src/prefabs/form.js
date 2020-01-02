(() => ({
  name: 'Form',
  icon: 'FormIcon',
  category: 'MATERIAL',
  structure: [
    {
      name: 'FormMaterial',
      options: [
        {
          value: '',
          label: 'Post endpoint',
          key: 'resourceUrl',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Redirect after submit',
          key: 'redirect',
          type: 'ENDPOINT',
        },
        {
          value: 'Thanks for submitting the form!',
          label: 'Success message',
          key: 'formSuccessMessage',
          type: 'TEXT',
        },
        {
          value: 'Failed to submit the form!',
          label: 'Error message',
          key: 'formErrorMessage',
          type: 'TEXT',
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [],
    },
  ],
}))();
