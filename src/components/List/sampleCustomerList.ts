export interface Customer {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: "Active" | "Inactive";
}

export const sampleCustomersData: Customer[] = [
  {
    id: 1,
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    id: 2,
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    id: 3,
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    id: 5,
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    id: 6,
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    id: 7,
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    id: 8,
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    id: 9,
    name: "Sarah Johnson",
    company: "Apple",
    phone: "(415) 555-0132",
    email: "sarah@apple.com",
    country: "Canada",
    status: "Active"
  },
  {
    id: 10,
    name: "Michael Chen",
    company: "Amazon",
    phone: "(206) 555-0145",
    email: "michael@amazon.com",
    country: "Singapore",
    status: "Active"
  },
  {
    id: 11,
    name: "Emily Rodriguez",
    company: "Netflix",
    phone: "(408) 555-0198",
    email: "emily@netflix.com",
    country: "Mexico",
    status: "Inactive"
  },
  {
    id: 12,
    name: "David Kim",
    company: "Samsung",
    phone: "(310) 555-0156",
    email: "david@samsung.com",
    country: "South Korea",
    status: "Active"
  },
  {
    id: 13,
    name: "Lisa Anderson",
    company: "Oracle",
    phone: "(650) 555-0178",
    email: "lisa@oracle.com",
    country: "Australia",
    status: "Active"
  },
  {
    id: 14,
    name: "James Wilson",
    company: "IBM",
    phone: "(914) 555-0189",
    email: "james@ibm.com",
    country: "United Kingdom",
    status: "Inactive"
  },
  {
    id: 15,
    name: "Maria Garcia",
    company: "Spotify",
    phone: "(212) 555-0167",
    email: "maria@spotify.com",
    country: "Spain",
    status: "Active"
  },
  {
    id: 16,
    name: "Robert Taylor",
    company: "Intel",
    phone: "(503) 555-0143",
    email: "robert@intel.com",
    country: "Germany",
    status: "Active"
  },
  {
    id: 17,
    name: "Jennifer Lee",
    company: "Twitter",
    phone: "(415) 555-0191",
    email: "jennifer@twitter.com",
    country: "Japan",
    status: "Inactive"
  },
  {
    id: 18,
    name: "William Brown",
    company: "Uber",
    phone: "(628) 555-0174",
    email: "william@uber.com",
    country: "France",
    status: "Active"
  },
  {
    id: 19,
    name: "Patricia Martinez",
    company: "Airbnb",
    phone: "(415) 555-0185",
    email: "patricia@airbnb.com",
    country: "Italy",
    status: "Active"
  },
  {
    id: 20,
    name: "Christopher Davis",
    company: "LinkedIn",
    phone: "(650) 555-0196",
    email: "christopher@linkedin.com",
    country: "Netherlands",
    status: "Inactive"
  }
];
