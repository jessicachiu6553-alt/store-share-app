import CustomerTable from "../components/List/CustomerList";
import FileListTable from "../components/List/FileListTable";
import PageTopBar from "../components/PageTopBar";
import { useAuthStore } from "../store/useAuthStore";

const AllFiles = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div style={{ textAlign: "center" }}>
      <PageTopBar />
      {/* <p>This is your AllFiles page.</p> */}
      {/* <CustomerTable /> */}

      {isAuthenticated && <FileListTable />}
    </div>
  );
};

export default AllFiles;
