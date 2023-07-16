const mockInvoices = [
    {
        id: '2054PR',
        status: 'Paid',
        billFrom: {
          streetAddress: '789 Elm Street',
          city: 'Los Angeles',
          postCode: '90001',
          country: 'USA',
        },
        billTo: {
          clientName: 'Jane Smith',
          clientEmail: 'jane@example.com',
          streetAddress: '321 Oak Street',
          city: 'Los Angeles',
          postCode: '90001',
          country: 'USA',
        },
        issueDate: new Date('2019-05-15').toDateString(),
        paymentTerms: '30 days',
        projectDescription: 'Project ABC',
        itemList: [
          {
            name: 'Item 1',
            quantity: 1,
            unitPrice: 100,
          },
          {
            name: 'Item 2',
            quantity: 2,
            unitPrice: 50,
          }
        ]
    },

    {
        id: 'HOZVXR',
        status: 'Pending',
        billFrom: {
          streetAddress: '321 Maple Avenue',
          city: 'San Francisco',
          postCode: '94101',
          country: 'USA',
        },
        billTo: {
          clientName: 'Michael Johnson',
          clientEmail: 'michael@example.com',
          streetAddress: '654 Pine Street',
          city: 'San Francisco',
          postCode: '94101',
          country: 'USA',
        },
        issueDate: new Date('2021-10-21').toDateString(),
        paymentTerms: '30 days',
        projectDescription: 'Project XYZ',
        itemList: [
          {
            name: 'Item 1',
            quantity: 1,
            unitPrice: 150,
          },
          {
            name: 'Item 2',
            quantity: 3,
            unitPrice: 75,
          },
          {
            name: 'Item 3',
            quantity: 2,
            unitPrice: 120,
          }
        ]
    },

    {
      id: 'ASW23G',
      status: 'Draft',
      billFrom: {
        streetAddress: '321 Maple Avenue',
        city: 'San Francisco',
        postCode: '94101',
        country: 'USA',
      },
      billTo: {
        clientName: 'Michael Johnson',
        clientEmail: 'michael@example.com',
        streetAddress: '654 Pine Street',
        city: 'San Francisco',
        postCode: '94101',
        country: 'USA',
      },
      issueDate: new Date('2023-06-10').toDateString(),
      paymentTerms: '30 days',
      projectDescription: 'Project XYZ',
      itemList: [
        {
          name: 'Item 1',
          quantity: 1,
          unitPrice: 150,
        },
        {
          name: 'Item 2',
          quantity: 3,
          unitPrice: 75,
        },
        {
          name: 'Item 3',
          quantity: 2,
          unitPrice: 120,
        },
      ],
    }
]

const generateRandomId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 6; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

export default mockInvoices;