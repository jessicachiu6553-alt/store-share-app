import { useState } from "react";
// import { Search, ChevronDown } from "lucide-react";
// import { customersData } from "../data/customers";
import {Customer, sampleCustomersData} from "./sampleCustomerList";


export default function CustomerTable() {
  const [customers] = useState<Customer[]>(sampleCustomersData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCustomers = customers.slice(startIndex, endIndex);



  return (
    <div style={styles.container}>
      {/* Background with shadow */}
      <div style={styles.backgroundContainer}>
        <svg style={styles.svg} fill="none" preserveAspectRatio="none" viewBox="0 0 1088 932">
          <g filter="url(#filter0_d_1_136)">
            <path d="M60 50C60 36.1929 71.1929 25 85 25H1003C1016.81 25 1028 36.1929 1028 50V862C1028 875.807 1016.81 887 1003 887H85C71.1929 887 60 875.807 60 862V50Z" fill="white" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="932" id="filter0_d_1_136" width="1088" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="30" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.885625 0 0 0 0 0.92625 0 0 0 0 0.975 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_136" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_136" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <div style={styles.headerContainer}>
        <p style={styles.headerTitle}>
          All Customers
        </p>
        <p style={styles.headerSubtitle}>
          Active Members
        </p>
      </div>

      {/* Search Box */}
      {/* <div style={styles.searchContainer}>
        <div style={styles.searchBox}>
          <Search style={styles.searchIcon} />
          <p style={styles.searchText}>
            Search
          </p>
        </div>
      </div> */}

      {/* Sort Dropdown */}
      {/* <div style={styles.sortContainer}>
        <div style={styles.sortBox}>
          <ChevronDown style={styles.sortIcon} />
          <p style={styles.sortText}>
            <span>Short by : </span>
            <span style={styles.sortTextBold}>Newest</span>
          </p>
        </div>
      </div> */}

      {/* Table */}
      <div style={styles.tableContainer}>
        {/* Table Headers */}
        <div style={styles.tableHeadersContainer}>
          <p style={{ ...styles.tableHeader, left: 0 }}>Customer Name</p>
          <p style={{ ...styles.tableHeader, left: "172px" }}>Company</p>
          <p style={{ ...styles.tableHeader, left: "303px" }}>Phone Number</p>
          <p style={{ ...styles.tableHeader, left: "459px" }}>Email</p>
          <p style={{ ...styles.tableHeader, left: "666px" }}>Country</p>
          <p style={{ ...styles.tableHeader, left: "840.5px", textAlign: "center", transform: "translateX(-50%)" }}>Status</p>
        </div>

        {/* Header separator line */}
        <div style={styles.headerSeparator}>
          <svg style={styles.svg} fill="none" preserveAspectRatio="none" viewBox="0 0 968 1">
            <line stroke="#EEEEEE" x2="968" y1="0.5" y2="0.5" />
          </svg>
        </div>

        {/* Table Rows */}
        {currentCustomers.map((customer, index) => (
          <div key={customer.id}>
            <div style={{ ...styles.rowContainer, top: `${55 + index * 69}px` }}>
              <p style={{ ...styles.rowField, left: 0 }}>{customer.name}</p>
              <p style={{ ...styles.rowField, left: "172px" }}>{customer.company}</p>
              <p style={{ ...styles.rowField, left: "303px" }}>{customer.phone}</p>
              <p style={{ ...styles.rowField, left: "459px" }}>{customer.email}</p>
              <p style={{ ...styles.rowField, left: "666px" }}>{customer.country}</p>
              
              {/* Status Badge */}
              <div style={customer.status === "Active" ? styles.statusBadgeActive : styles.statusBadgeInactive}>
                <div style={customer.status === "Active" ? styles.statusBorderActive : styles.statusBorderInactive} />
                <p style={customer.status === "Active" ? styles.statusTextActive : styles.statusTextInactive}>
                  {customer.status}
                </p>
              </div>
            </div>

            {/* Row separator line */}
            {index < currentCustomers.length - 1 && (
              <div style={{ ...styles.rowSeparator, top: `${104 + index * 69}px` }}>
                <svg style={styles.svg} fill="none" preserveAspectRatio="none" viewBox="0 0 888 1">
                  <line stroke="#EEEEEE" x2="888" y1="0.5" y2="0.5" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={styles.footerContainer}>
        <p style={styles.footerText}>
          {`Showing data ${startIndex + 1} to ${Math.min(endIndex, customers.length)} of ${customers.length} entries`}
        </p>
      </div>

      {/* Pagination */}
      <div style={styles.paginationContainer}>
        {/* Previous button */}
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          style={styles.paginationButton}
        >
          {"<"}
        </button>

        {/* Page 1 */}
        <button
          onClick={() => setCurrentPage(1)}
          style={currentPage === 1 ? styles.paginationButtonActive : styles.paginationButton}
        >
          1
        </button>

        {/* Page 2 */}
        <button
          onClick={() => setCurrentPage(2)}
          style={currentPage === 2 ? { ...styles.paginationButtonActive, paddingLeft: "9px", paddingRight: "9px" } : styles.paginationButton}
        >
          2
        </button>

        {/* Page 3 */}
        <button
          onClick={() => setCurrentPage(3)}
          style={currentPage === 3 ? { ...styles.paginationButtonActive, paddingLeft: "8px", paddingRight: "8px" } : { ...styles.paginationButton, paddingLeft: "8px", paddingRight: "8px" }}
        >
          3
        </button>

        {/* Page 4 */}
        <button
          onClick={() => setCurrentPage(4)}
          style={currentPage === 4 ? styles.paginationButtonActive : styles.paginationButton}
        >
          4
        </button>

        {/* Ellipsis */}
        <div style={styles.paginationEllipsis}>
          ...
        </div>

        {/* Last page */}
        <button
          onClick={() => setCurrentPage(totalPages)}
          style={{ ...styles.paginationButton, paddingLeft: "5px", paddingRight: "5px" }}
        >
          40
        </button>

        {/* Next button */}
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          style={styles.paginationButton}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}


  const styles: Record<string, React.CSSProperties> = {
    container: {
      position: "relative",
      width: "968px",
      height: "812px",
    },
    backgroundContainer: {
      position: "absolute",
      inset: "-6.16% -6.2% -8.62% -6.2%",
    },
    svg: {
      display: "block",
      width: "100%",
      height: "100%",
    },
    headerContainer: {
      position: "absolute",
      left: "38px",
      top: "30px",
    },
    headerTitle: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      lineHeight: "normal",
      fontStyle: "normal",
      fontSize: "22px",
      color: "black",
      whiteSpace: "nowrap",
      letterSpacing: "-0.22px",
    },
    headerSubtitle: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      lineHeight: "normal",
      fontStyle: "normal",
      color: "#16c098",
      fontSize: "14px",
      whiteSpace: "nowrap",
      letterSpacing: "-0.14px",
      marginTop: "10px",
    },
    searchContainer: {
      position: "absolute",
      left: "538px",
      top: "44px",
    },
    searchBox: {
      position: "relative",
      backgroundColor: "#f9fbff",
      height: "38px",
      borderRadius: "10px",
      width: "216px",
    },
    searchIcon: {
      position: "absolute",
      left: "8px",
      top: "7px",
      width: "24px",
      height: "24px",
      color: "#7E7E7E",
    },
    searchText: {
      position: "absolute",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      lineHeight: "normal",
      left: "40px",
      fontStyle: "normal",
      color: "#b5b7c0",
      fontSize: "12px",
      whiteSpace: "nowrap",
      top: "10px",
      letterSpacing: "-0.12px",
    },
    sortContainer: {
      position: "absolute",
      left: "770px",
      top: "44px",
    },
    sortBox: {
      position: "relative",
      backgroundColor: "#f9fbff",
      height: "38px",
      borderRadius: "10px",
      width: "154px",
    },
    sortIcon: {
      position: "absolute",
      right: "12px",
      top: "10px",
      width: "18px",
      height: "18px",
      color: "#3D3C42",
    },
    sortText: {
      position: "absolute",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      lineHeight: "normal",
      left: "15px",
      fontStyle: "normal",
      color: "#7e7e7e",
      fontSize: "12px",
      whiteSpace: "nowrap",
      top: "10px",
      letterSpacing: "-0.12px",
    },
    sortTextBold: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      color: "#3d3c42",
    },
    tableContainer: {
      position: "absolute",
      left: "0",
      top: "131px",
      width: "100%",
    },
    tableHeadersContainer: {
      position: "absolute",
      left: "38px",
      top: "0",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      lineHeight: "normal",
      fontStyle: "normal",
      color: "#b5b7c0",
      fontSize: "14px",
      whiteSpace: "nowrap",
      letterSpacing: "-0.14px",
    },
    tableHeader: {
      position: "absolute",
      top: "0",
    },
    headerSeparator: {
      position: "absolute",
      height: "0",
      left: "0",
      top: "35px",
      width: "968px",
    },
    rowContainer: {
      position: "absolute",
      left: "38px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      lineHeight: "normal",
      fontStyle: "normal",
      color: "#292d32",
      fontSize: "14px",
      whiteSpace: "nowrap",
      letterSpacing: "-0.14px",
    },
    rowField: {
      position: "absolute",
      top: "0",
    },
    statusBadgeActive: {
      position: "absolute",
      left: "806px",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingTop: "4px",
      paddingBottom: "4px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(22,192,152,0.38)",
    },
    statusBadgeInactive: {
      position: "absolute",
      left: "806px",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingTop: "4px",
      paddingBottom: "4px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffc5c5",
    },
    statusBorderActive: {
      position: "absolute",
      border: "1px solid #00b087",
      inset: "0",
      pointerEvents: "none",
      borderRadius: "4px",
    },
    statusBorderInactive: {
      position: "absolute",
      border: "1px solid #df0404",
      inset: "0",
      pointerEvents: "none",
      borderRadius: "4px",
    },
    statusTextActive: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      lineHeight: "normal",
      fontStyle: "normal",
      position: "relative",
      flexShrink: 0,
      fontSize: "14px",
      whiteSpace: "nowrap",
      letterSpacing: "-0.14px",
      color: "#008767",
    },
    statusTextInactive: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      lineHeight: "normal",
      fontStyle: "normal",
      position: "relative",
      flexShrink: 0,
      fontSize: "14px",
      whiteSpace: "nowrap",
      letterSpacing: "-0.14px",
      color: "#df0404",
    },
    rowSeparator: {
      position: "absolute",
      height: "0",
      left: "40px",
      width: "888px",
    },
    footerContainer: {
      position: "absolute",
      left: "38px",
      top: "750px",
    },
    footerText: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      lineHeight: "normal",
      fontStyle: "normal",
      color: "#b5b7c0",
      fontSize: "14px",
      whiteSpace: "nowrap",
      letterSpacing: "-0.14px",
    },
    paginationContainer: {
      position: "absolute",
      left: "657px",
      top: "748px",
      display: "flex",
      gap: "5px",
    },
    paginationButton: {
      backgroundColor: "#f5f5f5",
      border: "1px solid #eeeeee",
      borderRadius: "4px",
      paddingLeft: "9px",
      paddingRight: "9px",
      paddingTop: "6px",
      paddingBottom: "6px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      lineHeight: "1",
      color: "#404b52",
      fontSize: "12px",
      letterSpacing: "-0.12px",
      cursor: "pointer",
    },
    paginationButtonActive: {
      backgroundColor: "#5932ea",
      border: "1px solid #5932ea",
      borderRadius: "4px",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "6px",
      paddingBottom: "6px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      lineHeight: "1",
      color: "white",
      fontSize: "12px",
      letterSpacing: "-0.12px",
      cursor: "pointer",
    },
    paginationEllipsis: {
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingTop: "6px",
      paddingBottom: "6px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      lineHeight: "1",
      color: "black",
      fontSize: "12px",
      letterSpacing: "-0.12px",
    },
  };