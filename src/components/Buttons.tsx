import { type JSX } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}


const Buttons: React.FC<ButtonProps> = ({
  label = "",
  onClick = () => {},
  variant = "primary",
  disabled = false,
}) => {
  const stylesInner: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "#007bff",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
    },
    secondary: {
      padding: "10px 16px",
      backgroundColor: "#6c757d",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
    },
  };

  return (
    <button style={{...styles.button, ...stylesInner[variant]}} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

const styles: Record<string, React.CSSProperties> = {
  button: {
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
};
export default Buttons;
