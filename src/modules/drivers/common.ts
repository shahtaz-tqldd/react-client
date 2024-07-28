export const drivers = [
  {
    customer: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-23",
    amount: "$250.00",
    statusVariant: "secondary",
  },
  {
    customer: "Olivia Smith",
    email: "olivia@example.com",
    type: "Refund",
    status: "Declined",
    date: "2023-06-24",
    amount: "$150.00",
    statusVariant: "destructive",
  },
  {
    customer: "Noah Williams",
    email: "noah@example.com",
    type: "Subscription",
    status: "Fulfilled",
    date: "2023-06-25",
    amount: "$350.00",
    statusVariant: "default",
  },
  {
    customer: "Emma Brown",
    email: "emma@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-26",
    amount: "$450.00",
    statusVariant: "primary",
  },
];

export const tabs = [
  { label: "Week", value: "week" },
  { label: "Months", value: "months" },
  { label: "Years", value: "years" },
];

export const filters = [
  { label: "Date", value: "date" },
  { label: "Status", value: "status" },
  { label: "Price", value: "price" },
];

export const driverTableColumns = [
  { title: "Customer", field: "user" },
  { title: "Date", field: "date" },
  { title: "Type", field: "type" },
  { title: "Status", field: "status" },
  { title: "Amount", field: "amount" },
];
