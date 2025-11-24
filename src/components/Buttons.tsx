import { type JSX } from "react";

type BtnColor = "btnBlue" | "btnRed" | "btnGreen" | "btnMint" | "btnCyan";

interface ButtonProps {
  label: string;
  onClick: () => void;
  btnColor?: BtnColor;
  disabled?: boolean;
}

const Buttons: React.FC<ButtonProps> = ({
  label = "",
  onClick = () => {},
  btnColor = "btnBlue",
  disabled = false,
}) => {
  return (
    <button
      style={{
        ...styles.button,
        backgroundColor: getButtonColorValue(btnColor),
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <span style={styles.btnLabel}>{label}</span>
    </button>
  );
};

const styles: Record<string, React.CSSProperties> = {
  button: {
    // padding: "10px",
    height: "35px",
    width: "150px",
    border: "none",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLabel: {
    fontFamily: "Arial",
    fontSize: "18px",
    fontWeight: "550", //semi-bold
    color: "#fff",
  },
};

const getButtonColorValue = (color?: BtnColor): string => {
  switch (color) {
    case "btnRed":
      return "#FF383C";
    case "btnGreen":
      return "#34C759";
    case "btnMint":
      return "#00C8B3";
    case "btnCyan":
      return "#00C0E8";
    case "btnBlue":
      return "#2D68FE";
    default:
      return "#2D68FE";
  }
};

export default Buttons;
