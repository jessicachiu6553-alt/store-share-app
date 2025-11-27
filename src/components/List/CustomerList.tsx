import { useEffect, useState } from "react";
// import { Search, ChevronDown } from "lucide-react";
// import { customersData } from "../data/customers";
import {Customer, sampleCustomersData, sampleCustomersDataKeyList} from "./sampleCustomerList";


export default function CustomerTable() {
  const [customers] = useState<Customer[]>(sampleCustomersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCustomers = customers.slice(startIndex, endIndex);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerContainer}>
          <div style={styles.headerTitle}>
            All Customers
          </div>
          <div style={styles.headerSubtitle}>
            Active Members
          </div>
        </div>

        {/* Controls */}
        {/* <div style={styles.controlsContainer}> */}
          {/* Search Box */}
          {/* <div style={styles.searchBox}>
            <Search style={styles.searchIcon} />
            <span style={styles.searchText}>
              Search
            </span>
          </div> */}

          {/* Sort Dropdown */}
          {/* <div style={styles.sortBox}>
            <ChevronDown style={styles.sortIcon} />
            <span style={styles.sortText}>
              <span>Short by : </span>
              <span style={styles.sortTextBold}>Newest</span>
            </span>
          </div> */}
        {/* </div> */}

        {/* Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Customer Name</th>
                <th style={styles.tableHeader}>Company</th>
                <th style={styles.tableHeader}>Phone Number</th>
                <th style={styles.tableHeader}>Email</th>
                <th style={styles.tableHeader}>Country</th>
                <th style={styles.tableHeaderStatus}>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer) => (
                <tr key={customer.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{customer.name}</td>
                  <td style={styles.tableCell}>{customer.company}</td>
                  <td style={styles.tableCell}>{customer.phone}</td>
                  <td style={styles.tableCell}>{customer.email}</td>
                  <td style={styles.tableCell}>{customer.country}</td>
                  <td style={styles.tableCellStatus}>
                    <span style={customer.status === "Active" ? styles.statusBadgeActive : styles.statusBadgeInactive}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div style={styles.footerContainer}>
          <div style={styles.footerText}>
            {`Showing data ${startIndex + 1} to ${Math.min(endIndex, customers.length)} of ${customers.length} entries`}
          </div>

 {/* Pagination */}
          <div style={styles.paginationContainer}>
            {/* Previous button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              style={styles.paginationButton}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>

            {/* Render page numbers dynamically */}
            {(() => {
              const pages = [];
              const maxVisiblePages = 7; // Total buttons to show including ellipsis
              
              if (totalPages <= maxVisiblePages) {
                // Show all pages if total is small
                for (let i = 1; i <= totalPages; i++) {
                  pages.push(
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      style={currentPage === i ? styles.paginationButtonActive : styles.paginationButton}
                    >
                      {i}
                    </button>
                  );
                }
              } else {
                // Always show first page
                pages.push(
                  <button
                    key={1}
                    onClick={() => setCurrentPage(1)}
                    style={currentPage === 1 ? styles.paginationButtonActive : styles.paginationButton}
                  >
                    1
                  </button>
                );

                // Calculate range around current page
                let startPage = Math.max(2, currentPage - 1);
                let endPage = Math.min(totalPages - 1, currentPage + 1);

                // Adjust range if at start
                if (currentPage <= 3) {
                  startPage = 2;
                  endPage = Math.min(4, totalPages - 1);
                }

                // Adjust range if at end
                if (currentPage >= totalPages - 2) {
                  startPage = Math.max(2, totalPages - 3);
                  endPage = totalPages - 1;
                }

                // Show ellipsis after first page if needed
                if (startPage > 2) {
                  pages.push(
                    <div key="ellipsis-start" style={styles.paginationEllipsis}>
                      ...
                    </div>
                  );
                }

                // Show middle pages
                for (let i = startPage; i <= endPage; i++) {
                  pages.push(
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      style={currentPage === i ? styles.paginationButtonActive : styles.paginationButton}
                    >
                      {i}
                    </button>
                  );
                }

                // Show ellipsis before last page if needed
                if (endPage < totalPages - 1) {
                  pages.push(
                    <div key="ellipsis-end" style={styles.paginationEllipsis}>
                      ...
                    </div>
                  );
                }

                // Always show last page
                pages.push(
                  <button
                    key={totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                    style={currentPage === totalPages ? styles.paginationButtonActive : styles.paginationButton}
                  >
                    {totalPages}
                  </button>
                );
              }

              return pages;
            })()}

            {/* Next button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              style={styles.paginationButton}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

  const styles: Record<string, React.CSSProperties> = {
    wrapper: {
      width: "100%",
      maxWidth: "1200px",
      // margin: "0 auto",
    //   padding: isMobile ? "20px 10px" : "40px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      // backgroundColor: 'red'
    },
    container: {
      position: "relative",
      width: "100%",
      // maxWidth: "968px",
    //   minHeight: "812px",
      backgroundColor: "white",
      borderRadius: "25px",
      // boxShadow: "0 10px 60px rgba(226, 236, 249, 0.5)",
      padding:"10px 50px",
      marginBottom: "40px",
    },
    headerContainer: {
    //   marginBottom: isMobile ? "20px" : "30px",
      marginBottom: "30px",
    },
    headerTitle: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    //   fontSize: isMobile ? "18px" : "22px",
      fontSize: "22px",
      color: "black",
      letterSpacing: "-0.22px",
      marginBottom: "10px",
      textAlign: "left",

    },
    headerSubtitle: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      color: "#16c098",
    //   fontSize: isMobile ? "12px" : "14px",
      fontSize: "14px",
      letterSpacing: "-0.14px",
      textAlign: "left",
    },
    controlsContainer: {
      display: "flex",
    //   flexDirection: isMobile ? "column" : "row",
    //   gap: isMobile ? "10px" : "16px",
    //   marginBottom: isMobile ? "20px" : "30px",
      justifyContent: "flex-end",
    //   alignItems: isMobile ? "stretch" : "center",

      flexDirection: "row",
      gap: "16px",
      marginBottom: "30px",
      alignItems: "center",
    },
    searchBox: {
      position: "relative",
      backgroundColor: "#f9fbff",
      height: "38px",
      borderRadius: "10px",
    //   width: isMobile ? "100%" : "216px",
      width: "216px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "40px",
    },
    searchIcon: {
      position: "absolute",
      left: "8px",
      width: "24px",
      height: "24px",
      color: "#7E7E7E",
    },
    searchText: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      color: "#b5b7c0",
      fontSize: "12px",
      letterSpacing: "-0.12px",
    },
    sortBox: {
      position: "relative",
      backgroundColor: "#f9fbff",
      height: "38px",
      borderRadius: "10px",
    //   width: isMobile ? "100%" : "154px",
      width: "154px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "15px",
      paddingRight: "35px",
    },
    sortIcon: {
      position: "absolute",
      right: "12px",
      width: "18px",
      height: "18px",
      color: "#3D3C42",
    },
    sortText: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      color: "#7e7e7e",
      fontSize: "12px",
      letterSpacing: "-0.12px",
    },
    sortTextBold: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      color: "#3d3c42",
    },
    tableWrapper: {
      overflowX: "auto",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
    //   minWidth: isMobile ? "800px" : "100%",
      minWidth: "100%",
      borderCollapse: "collapse",
    },
    tableHeader: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "#b5b7c0",
    //   fontSize: isMobile ? "12px" : "14px",
      fontSize: "14px",
      letterSpacing: "-0.14px",
      textAlign: "left",
      paddingBottom: "14px",
      borderBottom: "1px solid #EEEEEE",
    },
    tableHeaderStatus: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "#b5b7c0",
    //   fontSize: isMobile ? "12px" : "14px",
      fontSize: "14px",
      letterSpacing: "-0.14px",
      textAlign: "center",
      paddingBottom: "14px",
      borderBottom: "1px solid #EEEEEE",
    },
    tableRow: {
      borderBottom: "1px solid #EEEEEE",
    },
    tableCell: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "#292d32",
    //   fontSize: isMobile ? "12px" : "14px",
      fontSize: "14px",
      letterSpacing: "-0.14px",
      padding: "20px 8px 20px 0",
      whiteSpace: "nowrap",
      textAlign: "left",
    },
    tableCellStatus: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "#292d32",
    //   fontSize: isMobile ? "12px" : "14px",
      fontSize: "14px",
      letterSpacing: "-0.14px",
      padding: "20px 0",
      textAlign: "center",
    },
    statusBadgeActive: {
      display: "inline-block",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingTop: "4px",
      paddingBottom: "4px",
      borderRadius: "4px",
      backgroundColor: "rgba(22,192,152,0.38)",
      border: "1px solid #00b087",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
    //   fontSize: isMobile ? "12px" : "14px",
      fontSize: "14px",
      letterSpacing: "-0.14px",
      color: "#008767",
    },
    statusBadgeInactive: {
      display: "inline-block",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingTop: "4px",
      paddingBottom: "4px",
      borderRadius: "4px",
      backgroundColor: "#ffc5c5",
      border: "1px solid #df0404",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
    //   fontSize: isMobile ? "12px" : "14px",
      fontSize: "14px",
      letterSpacing: "-0.14px",
      color: "#df0404",
    },
    footerContainer: {
      display: "flex",
    //   flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
    //   alignItems: isMobile ? "flex-start" : "center",
      marginTop: "20px",
    //   gap: isMobile ? "15px" : "0",

      flexDirection: "row",
      alignItems: "center",
      gap: "0",
    },
    footerText: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "#b5b7c0",
    //   fontSize: isMobile ? "12px" : "14px",
      fontSize: "14px",
      letterSpacing: "-0.14px",
    },
    paginationContainer: {
      display: "flex",
      gap: "5px",
      flexWrap: "wrap",
    },
    paginationButton: {
      backgroundColor: "#f5f5f5",
      border: "1px solid #eeeeee",
      borderRadius: "4px",
      padding: "6px 9px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "#404b52",
      fontSize: "12px",
      letterSpacing: "-0.12px",
      cursor: "pointer",
      minWidth: "32px",
      textAlign: "center",
    },
    paginationButtonActive: {
      backgroundColor: "#5932ea",
      border: "1px solid #5932ea",
      borderRadius: "4px",
      padding: "6px 10px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "white",
      fontSize: "12px",
      letterSpacing: "-0.12px",
      cursor: "pointer",
      minWidth: "32px",
      textAlign: "center",
    },
    paginationEllipsis: {
      padding: "6px 5px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "black",
      fontSize: "12px",
      letterSpacing: "-0.12px",
      minWidth: "32px",
      textAlign: "center",
    },
  };