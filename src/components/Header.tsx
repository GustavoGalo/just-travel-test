import { Divider, Typography } from "antd";
import Image from "next/image";

import Logo from "../assets/images/Logo.png";
import Brazil from "../assets/images/Brazil.png";

import User from "../assets/icons/User.svg";
import Question from "../assets/icons/Question.svg";

export const Header: React.FC = () => (
  <header
    style={{
      height: 100,
      borderBottom: "0.8px solid #E7E9ED",
      padding: "35px 60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Image src={Logo} alt="brand logo" height={30} />
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          borderRight: "1px solid #E7E9ED",
          alignItems: "center",
          gap: 16,
          paddingRight: 20,
        }}
      >
        <Typography
          style={{ fontSize: 12, fontWeight: 450, color: "var(--gray-100)" }}
        >
          Cotação dólar hoje: R$5,53
        </Typography>
        <Image src={Brazil} alt="Brazil flag" height={21} />
        <Question />
      </div>
      <div
        style={{
          paddingLeft: 20,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <User />
        <Typography style={{ fontSize: 16, fontWeight: 700, color: "#4070F4" }}>
          Entrar
        </Typography>
      </div>
    </div>
  </header>
);
