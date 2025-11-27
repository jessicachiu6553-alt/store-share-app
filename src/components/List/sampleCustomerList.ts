export interface Customer {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: "Active" | "Inactive";
}

export const sampleCustomersDataKeyList:string[] = [
  "id",
  "name",
  'company',
  'phone',
  'email',
  'country',
  'status'
];

export const sampleCustomersData: Customer[] = 
[
  { "id": 1, "name": "Jane Cooper", "company": "Microsoft", "phone": "(225) 555-0118", "email": "jane@microsoft.com", "country": "United States", "status": "Active" },
  { "id": 2, "name": "Floyd Miles", "company": "Yahoo", "phone": "(205) 555-0100", "email": "floyd@yahoo.com", "country": "Kiribati", "status": "Inactive" },
  { "id": 3, "name": "Ronald Richards", "company": "Adobe", "phone": "(302) 555-0107", "email": "ronald@adobe.com", "country": "Israel", "status": "Inactive" },
  { "id": 4, "name": "Marvin McKinney", "company": "Tesla", "phone": "(252) 555-0126", "email": "marvin@tesla.com", "country": "Iran", "status": "Active" },
  { "id": 5, "name": "Jerome Bell", "company": "Google", "phone": "(629) 555-0129", "email": "jerome@google.com", "country": "Réunion", "status": "Active" },
  { "id": 6, "name": "Kathryn Murphy", "company": "Microsoft", "phone": "(406) 555-0120", "email": "kathryn@microsoft.com", "country": "Curaçao", "status": "Active" },
  { "id": 7, "name": "Jacob Jones", "company": "Yahoo", "phone": "(208) 555-0112", "email": "jacob@yahoo.com", "country": "Brazil", "status": "Active" },
  { "id": 8, "name": "Kristin Watson", "company": "Facebook", "phone": "(704) 555-0127", "email": "kristin@facebook.com", "country": "Åland Islands", "status": "Inactive" },
  { "id": 9, "name": "Sarah Johnson", "company": "Apple", "phone": "(415) 555-0132", "email": "sarah@apple.com", "country": "Canada", "status": "Active" },
  { "id": 10, "name": "Michael Chen", "company": "Amazon", "phone": "(206) 555-0145", "email": "michael@amazon.com", "country": "Singapore", "status": "Active" },
  { "id": 11, "name": "Emily Rodriguez", "company": "Netflix", "phone": "(408) 555-0198", "email": "emily@netflix.com", "country": "Mexico", "status": "Inactive" },
  { "id": 12, "name": "David Kim", "company": "Samsung", "phone": "(310) 555-0156", "email": "david@samsung.com", "country": "South Korea", "status": "Active" },
  { "id": 13, "name": "Lisa Anderson", "company": "Oracle", "phone": "(650) 555-0178", "email": "lisa@oracle.com", "country": "Australia", "status": "Active" },
  { "id": 14, "name": "James Wilson", "company": "IBM", "phone": "(914) 555-0189", "email": "james@ibm.com", "country": "United Kingdom", "status": "Inactive" },
  { "id": 15, "name": "Maria Garcia", "company": "Spotify", "phone": "(212) 555-0167", "email": "maria@spotify.com", "country": "Spain", "status": "Active" },
  { "id": 16, "name": "Robert Taylor", "company": "Intel", "phone": "(503) 555-0143", "email": "robert@intel.com", "country": "Germany", "status": "Active" },
  { "id": 17, "name": "Jennifer Lee", "company": "Twitter", "phone": "(415) 555-0191", "email": "jennifer@twitter.com", "country": "Japan", "status": "Inactive" },
  { "id": 18, "name": "William Brown", "company": "Uber", "phone": "(628) 555-0174", "email": "william@uber.com", "country": "France", "status": "Active" },
  { "id": 19, "name": "Patricia Martinez", "company": "Airbnb", "phone": "(415) 555-0185", "email": "patricia@airbnb.com", "country": "Italy", "status": "Active" },
  { "id": 20, "name": "Christopher Davis", "company": "LinkedIn", "phone": "(650) 555-0196", "email": "christopher@linkedin.com", "country": "Netherlands", "status": "Inactive" },

  { "id": 21, "name": "Alex Thompson", "company": "Dropbox", "phone": "(312) 555-0201", "email": "alex@dropbox.com", "country": "United States", "status": "Active" },
  { "id": 22, "name": "Victoria Evans", "company": "Slack", "phone": "(646) 555-0227", "email": "victoria@slack.com", "country": "New Zealand", "status": "Inactive" },
  { "id": 23, "name": "Daniel Perez", "company": "PayPal", "phone": "(702) 555-0213", "email": "daniel@paypal.com", "country": "Argentina", "status": "Active" },
  { "id": 24, "name": "Olivia Martin", "company": "Zoom", "phone": "(213) 555-0234", "email": "olivia@zoom.com", "country": "South Africa", "status": "Active" },
  { "id": 25, "name": "Henry Scott", "company": "Spotify", "phone": "(323) 555-0249", "email": "henry@spotify.com", "country": "Sweden", "status": "Inactive" },
  { "id": 26, "name": "Chloe Adams", "company": "Apple", "phone": "(415) 555-0266", "email": "chloe@apple.com", "country": "United States", "status": "Active" },
  { "id": 27, "name": "Nathan Rivera", "company": "IBM", "phone": "(510) 555-0255", "email": "nathan@ibm.com", "country": "Peru", "status": "Inactive" },
  { "id": 28, "name": "Sophia Nguyen", "company": "Microsoft", "phone": "(206) 555-0277", "email": "sophia@microsoft.com", "country": "Vietnam", "status": "Active" },
  { "id": 29, "name": "Ethan Hall", "company": "Google", "phone": "(650) 555-0284", "email": "ethan@google.com", "country": "Ireland", "status": "Inactive" },
  { "id": 30, "name": "Grace Young", "company": "Amazon", "phone": "(718) 555-0293", "email": "grace@amazon.com", "country": "Philippines", "status": "Active" },

  { "id": 31, "name": "Aaron Foster", "company": "Adobe", "phone": "(949) 555-0301", "email": "aaron@adobe.com", "country": "United States", "status": "Active" },
  { "id": 32, "name": "Natalie Simmons", "company": "Tesla", "phone": "(626) 555-0322", "email": "natalie@tesla.com", "country": "UAE", "status": "Inactive" },
  { "id": 33, "name": "Logan Price", "company": "Netflix", "phone": "(408) 555-0333", "email": "logan@netflix.com", "country": "Colombia", "status": "Active" },
  { "id": 34, "name": "Ava Brooks", "company": "Zoom", "phone": "(702) 555-0349", "email": "ava@zoom.com", "country": "China", "status": "Inactive" },
  { "id": 35, "name": "Jack Turner", "company": "Intel", "phone": "(503) 555-0361", "email": "jack@intel.com", "country": "Finland", "status": "Active" },
  { "id": 36, "name": "Mia Hernandez", "company": "Oracle", "phone": "(650) 555-0374", "email": "mia@oracle.com", "country": "Portugal", "status": "Inactive" },
  { "id": 37, "name": "Leo Morris", "company": "Samsung", "phone": "(213) 555-0388", "email": "leo@samsung.com", "country": "Chile", "status": "Active" },
  { "id": 38, "name": "Aria Clark", "company": "Facebook", "phone": "(704) 555-0393", "email": "aria@facebook.com", "country": "Denmark", "status": "Inactive" },
  { "id": 39, "name": "Ryan Walker", "company": "Twitter", "phone": "(415) 555-0400", "email": "ryan@twitter.com", "country": "India", "status": "Active" },
  { "id": 40, "name": "Zoe Edwards", "company": "Uber", "phone": "(628) 555-0412", "email": "zoe@uber.com", "country": "Malaysia", "status": "Active" },

  { "id": 41, "name": "Adam Clark", "company": "PayPal", "phone": "(702) 555-0423", "email": "adam@paypal.com", "country": "Ukraine", "status": "Active" },
  { "id": 42, "name": "Samantha Brooks", "company": "LinkedIn", "phone": "(650) 555-0434", "email": "samantha@linkedin.com", "country": "Croatia", "status": "Inactive" },
  { "id": 43, "name": "Tyler Hughes", "company": "Spotify", "phone": "(212) 555-0448", "email": "tyler@spotify.com", "country": "Switzerland", "status": "Active" },
  { "id": 44, "name": "Hannah Flores", "company": "Apple", "phone": "(415) 555-0455", "email": "hannah@apple.com", "country": "United States", "status": "Inactive" },
  { "id": 45, "name": "Carter Bailey", "company": "Intel", "phone": "(503) 555-0467", "email": "carter@intel.com", "country": "Austria", "status": "Active" },
  { "id": 46, "name": "Lily Ramirez", "company": "Oracle", "phone": "(650) 555-0476", "email": "lily@oracle.com", "country": "Belgium", "status": "Active" },
  { "id": 47, "name": "Hunter Ward", "company": "Microsoft", "phone": "(206) 555-0482", "email": "hunter@microsoft.com", "country": "Hong Kong", "status": "Inactive" },
  { "id": 48, "name": "Ella Bennett", "company": "Amazon", "phone": "(718) 555-0499", "email": "ella@amazon.com", "country": "South Korea", "status": "Active" },
  { "id": 49, "name": "Brandon Morris", "company": "IBM", "phone": "(914) 555-0505", "email": "brandon@ibm.com", "country": "Egypt", "status": "Inactive" },
  { "id": 50, "name": "Scarlett Perez", "company": "Google", "phone": "(650) 555-0511", "email": "scarlett@google.com", "country": "France", "status": "Active" },

  { "id": 51, "name": "Owen Russell", "company": "Adobe", "phone": "(302) 555-0529", "email": "owen@adobe.com", "country": "Canada", "status": "Inactive" },
  { "id": 52, "name": "Nora Parker", "company": "Airbnb", "phone": "(415) 555-0535", "email": "nora@airbnb.com", "country": "Italy", "status": "Active" },
  { "id": 53, "name": "Eli Mitchell", "company": "Tesla", "phone": "(252) 555-0541", "email": "eli@tesla.com", "country": "Mexico", "status": "Active" },
  { "id": 54, "name": "Aubrey Ramirez", "company": "Samsung", "phone": "(310) 555-0550", "email": "aubrey@samsung.com", "country": "Taiwan", "status": "Inactive" },
  { "id": 55, "name": "Isaac Coleman", "company": "Netflix", "phone": "(408) 555-0556", "email": "isaac@netflix.com", "country": "Japan", "status": "Active" },
  { "id": 56, "name": "Paisley Sanders", "company": "Slack", "phone": "(646) 555-0567", "email": "paisley@slack.com", "country": "Brazil", "status": "Inactive" },
  { "id": 57, "name": "Julian Rivera", "company": "Spotify", "phone": "(212) 555-0578", "email": "julian@spotify.com", "country": "Spain", "status": "Active" },
  { "id": 58, "name": "Alice Simmons", "company": "Microsoft", "phone": "(225) 555-0589", "email": "alice@microsoft.com", "country": "United States", "status": "Active" },
  { "id": 59, "name": "Miles Cooper", "company": "Facebook", "phone": "(704) 555-0590", "email": "miles@facebook.com", "country": "Netherlands", "status": "Inactive" },
  { "id": 60, "name": "Camila Murphy", "company": "Google", "phone": "(650) 555-0601", "email": "camila@google.com", "country": "Greece", "status": "Active" },

//   { "id": 61, "name": "Grayson Hughes", "company": "Amazon", "phone": "(718) 555-0614", "email": "grayson@amazon.com", "country": "Singapore", "status": "Active" },
//   { "id": 62, "name": "Piper Allen", "company": "Uber", "phone": "(628) 555-0623", "email": "piper@uber.com", "country": "Germany", "status": "Inactive" },
//   { "id": 63, "name": "Ezra Rogers", "company": "Intel", "phone": "(503) 555-0636", "email": "ezra@intel.com", "country": "United Kingdom", "status": "Active" },
//   { "id": 64, "name": "Lucy Bailey", "company": "Oracle", "phone": "(650) 555-0647", "email": "lucy@oracle.com", "country": "Australia", "status": "Inactive" },
//   { "id": 65, "name": "Maverick Jenkins", "company": "Zoom", "phone": "(702) 555-0651", "email": "maverick@zoom.com", "country": "South Africa", "status": "Active" },
//   { "id": 66, "name": "Anna Carter", "company": "LinkedIn", "phone": "(650) 555-0662", "email": "anna@linkedin.com", "country": "New Zealand", "status": "Inactive" },
//   { "id": 67, "name": "Santiago Ortiz", "company": "Apple", "phone": "(415) 555-0674", "email": "santiago@apple.com", "country": "Argentina", "status": "Active" },
//   { "id": 68, "name": "Hazel Ramirez", "company": "IBM", "phone": "(914) 555-0685", "email": "hazel@ibm.com", "country": "Chile", "status": "Inactive" },
//   { "id": 69, "name": "Roman Fox", "company": "Facebook", "phone": "(704) 555-0699", "email": "roman@facebook.com", "country": "Czech Republic", "status": "Active" },
//   { "id": 70, "name": "Elena Stone", "company": "Microsoft", "phone": "(225) 555-0700", "email": "elena@microsoft.com", "country": "United States", "status": "Active" },

//   { "id": 71, "name": "Weston Briggs", "company": "Netflix", "phone": "(408) 555-0712", "email": "weston@netflix.com", "country": "Canada", "status": "Inactive" },
//   { "id": 72, "name": "Clara Rivera", "company": "Samsung", "phone": "(310) 555-0724", "email": "clara@samsung.com", "country": "South Korea", "status": "Active" },
//   { "id": 73, "name": "Elias Knight", "company": "Amazon", "phone": "(718) 555-0736", "email": "elias@amazon.com", "country": "France", "status": "Inactive" },
//   { "id": 74, "name": "Madeline Foster", "company": "Google", "phone": "(650) 555-0748", "email": "madeline@google.com", "country": "Poland", "status": "Active" },
//   { "id": 75, "name": "Jonathan Wells", "company": "Tesla", "phone": "(252) 555-0750", "email": "jonathan@tesla.com", "country": "Italy", "status": "Active" },
//   { "id": 76, "name": "Violet Harper", "company": "Spotify", "phone": "(212) 555-0765", "email": "violet@spotify.com", "country": "United Kingdom", "status": "Inactive" },
//   { "id": 77, "name": "Declan Fox", "company": "Intel", "phone": "(503) 555-0778", "email": "declan@intel.com", "country": "Sweden", "status": "Active" },
//   { "id": 78, "name": "Ariana Wells", "company": "Oracle", "phone": "(650) 555-0783", "email": "ariana@oracle.com", "country": "Japan", "status": "Inactive" },
//   { "id": 79, "name": "Asher Benson", "company": "LinkedIn", "phone": "(650) 555-0794", "email": "asher@linkedin.com", "country": "Finland", "status": "Active" },
//   { "id": 80, "name": "Penelope Hall", "company": "Adobe", "phone": "(302) 555-0800", "email": "penelope@adobe.com", "country": "Spain", "status": "Active" }
];


