import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";

import colors from "../styles/colors";
import { languages } from "../services/i18n";

export default function Footer() {
  const cookies = useMemo(() => new Cookies(), []);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (
      cookies.get("schoolish-language") &&
      languages
        .map(({ code }) => code)
        .includes(cookies.get("schoolish-language"))
    ) {
      i18n.changeLanguage(cookies.get("schoolish-language"));
    } else {
      cookies.set("schoolish-language", i18n.language);
    }
  }, [cookies, i18n]);

  return (
    <>
      <Footer_Component>
        <div className="columns">
          <div className="column">
            <h1>Quem somos?</h1>
            <div>
              <a href="/sobre">Sobre o Schoolish</a>
              <div className="underline-decoration"></div>
            </div>
            <div>
              <a href="/sobre#visao">Visão</a>
              <div className="underline-decoration"></div>
            </div>
            <div>
              <a href="/sobre#social_media">Redes Sociais</a>
              <div className="underline-decoration"></div>
            </div>
            <div>
              <a href="/sobre#branding">Branding</a>
              <div className="underline-decoration"></div>
            </div>
          </div>
          <div className="column">
            <h1>Páginas Importantes</h1>
            <a href="/schoolish-for/teachers">Schoolish para Professores</a>
            <a href="/schoolish-for/students">Schoolish para Alunos</a>
            <a href="/why_schoolish">Por que Schoolish?</a>
          </div>
          <div className="column">
            <h1>Políticas</h1>
            <a href="/policies/cookies">Política de Cookies</a>
            <a href="/policies/terms-of-use">Termos de Uso do Schoolish</a>
            <a href="/policies/privacy-policy">
              Política de Privacidade do Schoolish
            </a>
            <a href="/policies/partners-privacy-policy">
              Política de Privacidade de Parceiros
            </a>
            <a href="/policies/dont-sell-my-data">DSMD!</a>
            <a href=""></a>
          </div>
          <div className="column">
            <h1>Contato</h1>
            <a href="/contact#whatsapp">WhatsApp</a>
            <a href="/contact#email">E-mail</a>
            <a href="/contact#location">Localização</a>
            <a href="/contact#online-chat">Chat online</a>
            <a href="/contact#form">Formulário de contato</a>
            <a href=""></a>
          </div>
        </div>
      </Footer_Component>
      <div
        className="footer-bar"
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          width: "100vw",
          padding: "15px",
        }}
      >
        <select
          defaultValue={
            cookies.get("schoolish-language") &&
            languages
              .map(({ code }) => code)
              .includes(cookies.get("schoolish-language"))
              ? cookies.get("schoolish-language")
              : i18n.language
          }
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
            cookies.set("schoolish-language", e.target.value);
          }}
        >
          {languages.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

const Footer_Component = styled.footer`
  background-color: #cfcfcf;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 25px;

  & .columns {
    display: flex;
    flex-direction: column;
    font-size: medium;
    color: var(--main-color);

    & a {
      text-decoration: none;
      color: #000000;
      font-size: 17px;
    }

    & h1 {
      text-transform: uppercase;
      margin-bottom: 7px;
      color: ${colors.mainColor};
      font-weight: bolder;
    }

    & .column {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
    }
  }
`;