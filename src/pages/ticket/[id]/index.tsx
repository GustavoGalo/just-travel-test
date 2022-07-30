import Image from "next/image";
import { useRouter } from "next/router";
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Divider,
  InputNumber,
  Row,
  Typography,
  message,
} from "antd";
import { GetStaticPaths, GetStaticProps } from "next";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Reviews } from "../../../components/Reviews";

import { ITicket } from "../../../interfaces/ITicket";
import { LocationType } from "../../../interfaces/IGoogleMapsGeocodeResponse";

import { listTickets } from "../../../services/listTickets";
import { getTicketById } from "../../../services/getTicketById";
import { getLocalCoordinatesFromLocation } from "../../../services/getLocalCoordinatesFromLocation";

import Arrow from "../../../assets/icons/Arrow.svg";
import Location from "../../../assets/icons/Location.svg";
import StaticLandscape from "../../../assets/images/StaticLandscape.png";
import AirlineTicket from "../../../assets/icons/airline-ticket.svg";
import WiFi from "../../../assets/icons/WiFi.svg";
import CoffeCup from "../../../assets/icons/coffee-cup.svg";
import Home from "../../../assets/icons/home-house-big.svg";
import Calendar from "../../../assets/icons/caledar.svg";
import User from "../../../assets/icons/User.svg";
import moment from "moment";
import { useState } from "react";

interface IPageProps {
  ticket: ITicket;
  location: LocationType;
}

const { Panel } = Collapse;

const Ticket: React.FC<IPageProps> = ({ ticket, location }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
  });

  const router = useRouter();
  const [datePickerStatus, setDatePickerStatus] = useState<
    "error" | "warning" | ""
  >("");
  const [selectedDate, setSelectedDate] = useState(
    moment(ticket.createdAt).format("DD/MM/YYYY")
  );
  const [tickets, seTickets] = useState(1);
  const [childrensTicket, setChildrensTicket] = useState(0);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BRL",
  });

  const key = "updatable";

  const openMessage = () => {
    message.loading({ content: "Processando...", key });
    setTimeout(() => {
      message.success({
        content: "Compra realizada com sucesso!",
        key,
        duration: 2,
      });

      router.back();
    }, 1000);
  };

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#F6F6F6" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "auto",
            padding: "56px 60px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <Row>
            <Col span={24}>
              <div style={{ display: "flex", gap: 20 }}>
                <Arrow
                  style={{ cursor: "pointer" }}
                  onClick={() => router.back()}
                />
                <div>
                  <Typography
                    style={{ fontSize: 24, fontWeight: 700, color: "#0A2156" }}
                  >
                    {ticket.name}
                  </Typography>
                  <div
                    style={{
                      paddingTop: 8,
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >
                    <Location />
                    <Typography
                      style={{
                        fontSize: 14,
                        fontWeight: 450,
                        color: "#3C4C70",
                      }}
                    >
                      {ticket.location}
                    </Typography>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Image src={StaticLandscape} alt="StaticLandscape" height={434} />
            <Button
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#4070F4",
              }}
            >
              Visualizar mais fotos
            </Button>
          </Row>
          <Row>
            <Col span={15}>
              <div
                style={{ display: "flex", gap: 24, flexDirection: "column" }}
              >
                <Reviews />
                <div style={{ display: "flex", gap: 14 }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      justifyContent: "center",
                    }}
                  >
                    <AirlineTicket />
                    <Typography
                      style={{
                        fontSize: 14,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      Passagem Aérea
                    </Typography>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <WiFi />
                    <Typography
                      style={{
                        fontSize: 14,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      Wi-fi
                    </Typography>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <CoffeCup />
                    <Typography
                      style={{
                        fontSize: 14,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      Café de manhã
                    </Typography>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Home />
                    <Typography
                      style={{
                        fontSize: 14,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      Quarto
                    </Typography>
                  </div>
                </div>
                <div>
                  <Typography
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      color: "#0A2156",
                      marginBottom: 8,
                    }}
                  >
                    Sobre o Ingresso selecionado:
                  </Typography>
                  <Typography
                    style={{ fontSize: 16, fontWeight: 450, color: "#9EA5B8" }}
                  >
                    {ticket.description}
                  </Typography>
                </div>
                <div>
                  <Typography
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      color: "#0A2156",
                      marginBottom: 8,
                    }}
                  >
                    Localização
                  </Typography>
                  {isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={{ height: 435, width: "100%" }}
                      center={location}
                      zoom={10}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Col>
            <Col span={9} style={{ padding: 30 }}>
              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: 8,
                  padding: 32,
                }}
              >
                <Collapse bordered={false} ghost expandIconPosition="right">
                  <Panel
                    header={
                      <div style={{ display: "flex", gap: 16 }}>
                        <Calendar />
                        <div>
                          <Typography
                            style={{
                              fontSize: 16,
                              fontWeight: 700,
                              color: "#0A2156",
                            }}
                          >
                            Data do Ingresso
                          </Typography>
                          <Typography
                            style={{
                              fontSize: 16,
                              fontWeight: 450,
                              color: "#9EA5B8",
                            }}
                          >
                            {selectedDate}
                          </Typography>
                        </div>
                      </div>
                    }
                    key="1"
                  >
                    <DatePicker
                      onChange={(data) => {
                        const dateIsValid = moment(ticket.createdAt).diff(
                          moment(data)
                        );

                        if (dateIsValid > 0) setDatePickerStatus("error");
                        else {
                          setDatePickerStatus("");
                          setSelectedDate(moment(data).format("DD/MM/YYYY"));
                        }
                      }}
                      style={{ width: "100%" }}
                      defaultValue={moment(ticket.createdAt)}
                      status={datePickerStatus}
                      value={moment(selectedDate, "DD/MM/YYYY")}
                    />
                  </Panel>
                </Collapse>
                <Divider />
                <Collapse bordered={false} ghost expandIconPosition="right">
                  <Panel
                    header={
                      <div style={{ display: "flex", gap: 16 }}>
                        <User />
                        <div>
                          <Typography
                            style={{
                              fontSize: 16,
                              fontWeight: 700,
                              color: "#0A2156",
                            }}
                          >
                            Ingressos
                          </Typography>
                          <Typography
                            style={{
                              fontSize: 16,
                              fontWeight: 450,
                              color: "#9EA5B8",
                            }}
                          >
                            03 Ingressos
                          </Typography>
                        </div>
                      </div>
                    }
                    key="1"
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexDirection: "column",
                        paddingLeft: 32,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: 16,
                            fontWeight: 450,
                            color: "#9EA5B8",
                          }}
                        >
                          Ingresso infantil
                        </Typography>
                        <InputNumber
                          min={0}
                          defaultValue={0}
                          bordered={false}
                          value={childrensTicket}
                          onChange={(value) => setChildrensTicket(value)}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: 16,
                            fontWeight: 450,
                            color: "#9EA5B8",
                          }}
                        >
                          Ingresso Adultos
                        </Typography>
                        <InputNumber
                          min={1}
                          defaultValue={1}
                          bordered={false}
                          value={tickets}
                          onChange={(value) => seTickets(value)}
                        />
                      </div>
                    </div>
                  </Panel>
                </Collapse>
                <Divider />
                <div
                  style={{
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      style={{
                        fontSize: 16,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      {childrensTicket} Ingresso infantil
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 16,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      {/* R$ {childrensTicket * Number(ticket.price)} */}
                      {formatter.format(childrensTicket * Number(ticket.price))}
                    </Typography>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      style={{
                        fontSize: 16,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      {tickets} Ingresso Adultos
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 16,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      {/* R$ {tickets * Number(ticket.price)} */}
                      {formatter.format(tickets * Number(ticket.price))}
                    </Typography>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      style={{
                        fontSize: 16,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      Seguro viajem
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 16,
                        fontWeight: 450,
                        color: "#9EA5B8",
                      }}
                    >
                      {formatter.format(Number(ticket.price))}
                    </Typography>
                  </div>
                </div>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 24,
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "black",
                    }}
                  >
                    Valor total
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#4070F4",
                    }}
                  >
                    {formatter.format(
                      (tickets + childrensTicket + 1) * Number(ticket.price)
                    )}
                  </Typography>
                </div>
                <Button
                  type="primary"
                  style={{
                    width: "100%",
                    height: 58,
                    backgroundColor: "#4070F4",
                  }}
                  onClick={openMessage}
                >
                  Comprar Ingresso
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ticket;

export const getStaticPaths: GetStaticPaths = async () => {
  const tickets = await listTickets();

  const paths = tickets.map((ticket) => ({ params: { id: ticket.id } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ticket = await getTicketById(params?.id as string);
  const location = await getLocalCoordinatesFromLocation(ticket.location);

  return { props: { ticket, location } };
};
