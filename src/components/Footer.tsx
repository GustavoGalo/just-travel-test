import Image from "next/image";
import { Button, Typography } from "antd";

import { LocationCard } from "./LocationCard";

import Logo from "../assets/images/WhiteLogo.svg";
import World from "../assets/images/World.svg";
import Brazil from "../assets/images/Brazil.png";

import BalnearioCamboriu from "../assets/images/BalnearioCamboriu.png";
import SaoPaulo from "../assets/images/SaoPaulo.png";
import Salvador from "../assets/images/Salvador.png";
import RioDeJaneiro from "../assets/images/RioDeJaneiro.png";
import Florianopolis from "../assets/images/Florianopolis.png";

import LinkedIn from "../assets/icons/LinkedIn.svg";
import Instagram from "../assets/icons/Instagram.svg";

export const Footer = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div
      style={{
        height: 235,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#4070F4",
        justifyContent: "space-between",
        padding: "0 100px",
      }}
    >
      <World />
      <Typography style={{ color: "white", fontSize: 22, fontWeight: 500 }}>
        Pacotes a partir de R$499? Até parece viagem!<br></br> Descubra o seu
        próximo destino por um precinho que só o lorem tem.
      </Typography>
      <Button style={{ color: "#4070F4" }}>Conhecer mais pacotes</Button>
    </div>
    <div
      style={{
        padding: "95px 58px",
      }}
    >
      <Typography
        style={{
          fontSize: 40,
          fontWeight: 700,
          color: "#0A2156",
          marginBottom: 16,
        }}
      >
        Conheça o Brasil
      </Typography>
      <Typography style={{ fontSize: 20, color: "#556282", marginBottom: 32 }}>
        Estes destinos incríveis têm muito a oferecer
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <LocationCard
          image={BalnearioCamboriu}
          imageAlt="Balneário Camboriú landscape"
          location="Balneário Camboriú"
        />
        <LocationCard
          image={SaoPaulo}
          imageAlt="São Paulo landscape"
          location="São Paulo"
        />
        <LocationCard
          image={Salvador}
          imageAlt="Salvador landscape"
          location="Salvador"
        />
        <LocationCard
          image={RioDeJaneiro}
          imageAlt="Rio De Janeiro landscape"
          location="Rio De Janeiro"
        />
        <LocationCard
          image={Florianopolis}
          imageAlt="Florianópolis landscape"
          location="Florianópolis"
        />
      </div>
    </div>
    <div
      style={{
        display: "flex",
        backgroundColor: "#4070F4",
        padding: "75px 60px 32px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Logo />
        <Typography
          style={{
            width: 384,
            color: "white",
            fontWeight: 450,
            fontSize: 14,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit id
          consequat dignissim metus. Mi et aenean quam lacus, enim nunc. Enim
          pellentesque interdum dui, integer bibendum at id. Sed nisi, enim,
          eleifend duis arcu, orci nisl massa.
        </Typography>

        <div style={{ display: "flex", gap: 8 }}>
          <LinkedIn />
          <Instagram />
        </div>
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Typography style={{ fontSize: 16, fontWeight: 700, color: "white" }}>
            Conheça
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Quem somos
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Trabalhe conosco
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Seja um parceiro
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Typography style={{ fontSize: 16, fontWeight: 700, color: "white" }}>
            Viaje
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Pacotes
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Passagens
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Hotéis
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Typography style={{ fontSize: 16, fontWeight: 700, color: "white" }}>
            Fale consoco
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Central de Ajuda
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Política de privacidade
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Política de cookies
          </Typography>
          <Typography style={{ fontSize: 14, color: "white" }}>
            Termos de uso
          </Typography>
        </div>
      </div>
    </div>
    <div
      style={{
        padding: "32px 60px",
        backgroundColor: "#0BB07B",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography style={{ color: "white" }}>
        Copyright 2021 | Just Travel Travel Tech. All Rights Reserved.
      </Typography>
      <div style={{ display: "flex", gap: 16 }}>
        <Typography style={{ color: "white" }}>
          Engineering made in Brazil
        </Typography>
        <Image src={Brazil} alt="Brazil flag" />
      </div>
    </div>
  </div>
);
