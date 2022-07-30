import { Typography } from "antd";

export const Reviews = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div
      style={{
        borderRadius: 2,
        backgroundColor: "#4070F4",
      }}
    >
      <Typography
        style={{
          fontWeight: 450,
          fontSize: 14,
          color: "#fff",
          padding: 10,
        }}
      >
        6.3
      </Typography>
    </div>
    <Typography
      style={{
        fontSize: 14,
        fontWeight: 450,
        color: "#000",
        marginLeft: 4,
      }}
    >
      Excellent
    </Typography>
    <Typography
      style={{
        fontSize: 14,
        fontWeight: 450,
        color: "#9EA5B8",
        marginLeft: 4,
      }}
    >
      (423 Reviews)
    </Typography>
  </div>
);
