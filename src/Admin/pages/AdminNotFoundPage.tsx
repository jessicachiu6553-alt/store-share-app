import { useNavigate } from "react-router-dom";

function AdminNotFoundPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/admin/adminHome");
        }
    };

    const handleGoHome = () => {
        navigate("/admin/adminHome");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the admin page you are looking for does not exist.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
                <button onClick={handleGoBack}>Go Back</button>
                <button onClick={handleGoHome}>Go to Admin Home</button>
            </div>
        </div>
    );
}

export default AdminNotFoundPage;
