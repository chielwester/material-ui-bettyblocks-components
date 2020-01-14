(() => ({
  name: 'Accordion',
  icon: 'AccordionIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Accordion',
      options: [],
      descendants: [
        {
          name: 'ExpansionPanel',
          descendants: [],
          options: [
            {
              value: 'Expansion panel',
              label: 'Summary',
              key: 'summary',
              type: 'TEXT',
            },
            {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
              label: 'Details',
              key: 'details',
              type: 'TEXT',
            },
          ],
        },
        {
          name: 'ExpansionPanel',
          descendants: [],
          options: [
            {
              value: 'Expansion panel',
              label: 'Summary',
              key: 'summary',
              type: 'TEXT',
            },
            {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
              label: 'Details',
              key: 'details',
              type: 'TEXT',
            },
          ],
        },
      ],
    },
  ],
}))();
