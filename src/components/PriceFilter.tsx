import { CSSProperties, useState } from "react";

const SelectedStyles: CSSProperties = {
  backgroundColor: "var(--brand-color-blue)",
  border: "1px solid var(--brand-color-blue)",
  padding: 8,
  borderRadius: 2,
  color: "white",
  cursor: "pointer",
};

const UnselectedStyles: CSSProperties = {
  border: "1px solid var(--gray-20)",
  padding: 8,
  borderRadius: 2,
  color: "var(--gray-20)",
  cursor: "pointer",
};

type PriceLogicType = "<250" | ">=250&&<500" | ">=500&&<1000" | ">=1000";

export const PriceFilter: React.FC = () => {
  const [selected, setSelected] = useState<PriceLogicType>("<250");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <div
          style={selected === "<250" ? SelectedStyles : UnselectedStyles}
          onClick={() => setSelected("<250")}
        >
          Até R$ 250,00
        </div>
        <div
          style={selected === ">=250&&<500" ? SelectedStyles : UnselectedStyles}
          onClick={() => setSelected(">=250&&<500")}
        >
          R$ 250,00 a R$ 500,00
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <div
          style={
            selected === ">=500&&<1000" ? SelectedStyles : UnselectedStyles
          }
          onClick={() => setSelected(">=500&&<1000")}
        >
          R$ 500,00 a R$ 1000,00
        </div>
        <div
          style={selected === ">=1000" ? SelectedStyles : UnselectedStyles}
          onClick={() => setSelected(">=1000")}
        >
          Mais de R$ 1000,00
        </div>
      </div>
    </div>
  );
};
