import { useRouter } from "next/router";
import { Button, Image, Space, Typography } from "antd";

import { TicketLabel } from "./TicketLabel";
import { ITicket } from "../interfaces/ITicket";

import Location from "../assets/icons/Location.svg";
import Heart from "../assets/icons/Heart.svg";
import { Reviews } from "./Reviews";
import Link from "next/link";

interface ITicketCardProps {
  ticket: ITicket;
}

export const TicketCard: React.FC<ITicketCardProps> = ({ ticket }) => {
  const router = useRouter();

  return (
    <Space
      style={{
        boxShadow: "0px 2px 4px rgba(11, 31, 77, 0.08)",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ position: "relative" }}>
          <Image
            src={ticket.images}
            alt={ticket.description}
            height={230}
            width={230}
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              padding: 14,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TicketLabel />
            <Heart />
          </div>
        </div>

        <div
          style={{
            padding: "33.5px 24px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              className="heading-3"
              style={{ color: "var(--brand-color-black)" }}
            >
              {ticket.name}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 8,
                marginBottom: 52,
              }}
            >
              <Location />
              <Typography
                className="paragraph-3"
                style={{ color: "var(--gray-80)", fontWeight: 450 }}
              >
                {ticket.location}
              </Typography>
            </div>
            <Reviews />
          </div>
        </div>
      </div>

      <div
        style={{
          padding: 24,
          borderLeft: "1px solid #E7E9ED",
          height: 163,
        }}
      >
        <Typography style={{ fontSize: 12, fontWeight: 450, color: "#858FA6" }}>
          de R$ 2.351,28 por
        </Typography>
        <div style={{ display: "flex", marginBottom: 24 }}>
          <Typography style={{ fontSize: 14, fontWeight: 450, color: "#000" }}>
            R$
          </Typography>
          <Typography
            style={{ fontSize: 24, fontWeight: 700, color: "#4070F4" }}
          >
            {ticket.price}
          </Typography>
        </div>

        <Link href={`/ticket/${ticket.id}`}>
          Saber mais
          {/* <Button type="primary"></Button> */}
        </Link>
      </div>
    </Space>
  );
};
