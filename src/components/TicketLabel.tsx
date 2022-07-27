import { Typography } from "antd";

export const TicketLabel = () => (
  <div
    style={{
      padding: "4px 12px",
      boxShadow: "0px 4px 8px rgba(11, 31, 77, 0.1)",
      borderRadius: 15,
      position: "relative",
      backgroundColor: "white",
    }}
  >
    <Typography style={{ fontSize: 12, fontWeight: 450 }}>Ingresso</Typography>
  </div>
);
