import { Space, Typography } from "antd";
import { useState } from "react";

import Hotel from "../assets/icons/Hotel.svg";
import House from "../assets/icons/House.svg";
import Apartment from "../assets/icons/Apartment.svg";

interface IPropertyTypeFilter {
  propertyType: "house" | "apartment" | "hotel";
}

export const PropertyTypeFilter: React.FC<IPropertyTypeFilter> = ({
  propertyType,
}) => {
  const [propertyTypeState, setPropertyTypeState] = useState(propertyType);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          padding: 8,
          border: "1px solid var(--brand-color-blue)",
          borderRadius: 2,
          maxWidth: 190,
          filter:
            propertyTypeState === "house" ? "grayscale(0)" : "grayscale(1)",
          cursor: "pointer",
        }}
        onClick={() => setPropertyTypeState("house")}
      >
        <House />
        <Typography
          className="paragraph-3"
          style={{ color: "var(--brand-color-blue)" }}
        >
          casa (346)
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          gap: 12,
          padding: 8,
          border: "1px solid var(--brand-color-blue)",
          borderRadius: 2,
          maxWidth: 190,
          filter:
            propertyTypeState === "apartment" ? "grayscale(0)" : "grayscale(1)",
          cursor: "pointer",
        }}
        onClick={() => setPropertyTypeState("apartment")}
      >
        <Apartment />
        <Typography
          className="paragraph-3"
          style={{ color: "var(--brand-color-blue)" }}
        >
          Apartamento (234)
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          gap: 12,
          padding: 8,
          border: "1px solid var(--brand-color-blue)",
          borderRadius: 2,
          maxWidth: 190,
          filter:
            propertyTypeState === "hotel" ? "grayscale(0)" : "grayscale(1)",
          cursor: "pointer",
        }}
        onClick={() => setPropertyTypeState("hotel")}
      >
        <Hotel />
        <Typography
          className="paragraph-3"
          style={{
            color: "var(--brand-color-blue)",
          }}
        >
          Hotel (23)
        </Typography>
      </div>
    </div>
  );
};
