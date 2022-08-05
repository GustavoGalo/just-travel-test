import { GetServerSideProps } from "next";
import { Button, Col, Divider, Rate, Row, Typography } from "antd";

import { ITicket } from "../../interfaces/ITicket";
import { listTickets } from "../../services/listTickets";
import { TicketCardList } from "../../components/TicketCardList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LocationRatings } from "../../components/LocationRatings";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CheckboxInput } from "../../components/CheckboxInput";
import { PropertyTypeFilter } from "../../components/PropertyTypeFilter";
import { ProgressBar } from "../../components/ProgressBar";
import { SelectListType } from "../../components/SelectListType";
import { SearchLocationDateBar } from "../../components/SearchLocationDateBar";
import { PriceFilter } from "../../components/PriceFilter";
import Head from "next/head";

interface IPageProps {
  tickets: ITicket[];
}

const Tickets: React.FC<IPageProps> = ({ tickets }) => {
  const filter = useAppSelector((state) => state);

  return (
    <>
      <Head>
        <title>Just Travel - Ingressos</title>
      </Head>
      <Header />
      <div
        style={{
          height: 120,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 60px",
          flexWrap: "wrap",
        }}
      >
        <SearchLocationDateBar />
        <SelectListType listType="columns" />
      </div>
      <div style={{ backgroundColor: "#F6F6F6" }}>
        <Row gutter={24} style={{ padding: "36px 42px" }}>
          <Col span={6}>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0px 2px 4px rgba(11, 31, 77, 0.08)",
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #E7E9ED",
                  paddingBottom: 12,
                }}
              >
                <Typography
                  style={{ fontSize: 24, fontWeight: 700, color: "#0A2156" }}
                >
                  Filtro
                </Typography>
                <Button type="link">Limpar todos os filtros</Button>
              </div>
              <div style={{ marginTop: 24 }}>
                <Typography
                  style={{ fontSize: 16, fontWeight: 700, color: "#0A2156" }}
                >
                  Preço
                </Typography>
                <PriceFilter />
              </div>
              <Divider />
              <div>
                <Typography
                  className="paragraph-2"
                  style={{ fontWeight: 700, color: "#0A2156" }}
                >
                  Tipo de propriedade
                </Typography>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <LocationRatings />
                </div>
              </div>
              <div>
                <Typography
                  className="paragraph-2"
                  style={{
                    fontWeight: 700,
                    color: "#0A2156",
                    paddingBottom: 12,
                  }}
                >
                  Comodidades
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <CheckboxInput isChecked={false} label="Wi-Fi" />
                  <CheckboxInput isChecked={false} label="Cozinha" />
                  <CheckboxInput isChecked={false} label="Máquina de Lavar" />
                  <CheckboxInput isChecked={false} label="Ar-condicionado" />
                  <CheckboxInput isChecked={false} label="Secadora" />
                </div>
              </div>
              <Divider />
              <div>
                <Typography
                  className="paragraph-2"
                  style={{
                    fontWeight: 700,
                    color: "#0A2156",
                    paddingBottom: 12,
                  }}
                >
                  Tipo de propriedade
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <PropertyTypeFilter propertyType="house" />
                </div>
              </div>
              <Divider />
              <div>
                <Typography
                  className="paragraph-2"
                  style={{
                    fontWeight: 700,
                    color: "#0A2156",
                    paddingBottom: 12,
                  }}
                >
                  Review Score
                </Typography>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  <ProgressBar
                    percentage={9}
                    label="Excelente (543)"
                    labelBar="9+"
                  />
                  <ProgressBar
                    percentage={8}
                    label="Muito bom (543)"
                    labelBar="8+"
                  />
                  <ProgressBar percentage={7} label="Bom (543)" labelBar="7+" />
                  <ProgressBar percentage={6} label="Ruim (14)" labelBar="6+" />
                  <ProgressBar percentage={1} label="Pessímo (14)" />
                </div>
              </div>
            </div>
          </Col>
          <Col span={18}>
            <TicketCardList tickets={tickets} />
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
};

export default Tickets;

export const getServerSideProps: GetServerSideProps = async () => {
  const tickets = await listTickets();

  return {
    props: {
      tickets,
    },
  };
};
