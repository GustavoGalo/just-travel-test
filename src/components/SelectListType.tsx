import { useState } from "react";

import Hamburguer from "../assets/icons/Hamburguer.svg";
import Grid from "../assets/icons/Grid.svg";

interface ISelectListTypeProps {
  listType: "columns" | "grid";
}

export const SelectListType: React.FC<ISelectListTypeProps> = ({
  listType,
}) => {
  const [selectedListType, setListType] = useState(listType);

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <div
        style={{
          border: "0.8px solid var(--brand-color-blue)",
          borderRadius: 2,
          height: 42,
          width: 42,
          paddingTop: 8,
          paddingLeft: 8,
          cursor: "pointer",
          filter:
            selectedListType === "columns" ? "grayscale(0)" : "grayscale(1)",
        }}
        onClick={() => setListType("columns")}
      >
        <Hamburguer />
      </div>
      <div
        style={{
          border: "0.8px solid var(--brand-color-blue)",
          borderRadius: 2,
          height: 42,
          width: 42,
          paddingTop: 8,
          paddingLeft: 8,
          cursor: "pointer",
          filter: selectedListType === "grid" ? "grayscale(0)" : "grayscale(1)",
        }}
        onClick={() => setListType("grid")}
      >
        <Grid />
      </div>
    </div>
  );
};
