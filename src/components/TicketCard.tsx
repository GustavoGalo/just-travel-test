import NextImage from "next/image";
import { useRouter } from "next/router";
import { Button, Image, Space, Typography } from "antd";

import { TicketLabel } from "./TicketLabel";
import { ITicket } from "../interfaces/ITicket";

import Pin from "../assets/icons/Pin.svg";
import Heart from "../assets/icons/Heart.svg";
import { Reviews } from "./Reviews";

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
            <NextImage
              src={Heart}
              alt="Heart icon"
              style={{
                filter: "invert(100%)  brightness(200%) contrast(200%)",
                boxShadow: "0px 4px 8px rgba(11, 31, 77, 0.1)",
              }}
            />
          </div>
        </div>

        <div style={{ padding: "33.5px 24px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              style={{ fontSize: 22, fontWeight: 500, color: "#0A2156" }}
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
              <NextImage src={Pin} alt="pin icon" />
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: 450,
                  color: "#3C4C70",
                  marginLeft: 4,
                }}
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

        <Button
          onClick={() => router.push(`/ticket/${ticket.id}`)}
          type="primary"
        >
          Saber mais
        </Button>
      </div>
    </Space>
  );
};
