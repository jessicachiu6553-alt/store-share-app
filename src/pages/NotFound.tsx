import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
                <button onClick={handleGoBack}>Go Back</button>
                <button onClick={handleGoHome}>Go Home</button>
            </div>
        </div>
    );
}

export default NotFound;
