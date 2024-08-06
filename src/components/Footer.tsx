import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";

import colors from "../styles/colors";
import { languages } from "../services/i18n";

export default function Footer() {
  const cookies = useMemo(() => new Cookies(), []);
  const { i18n, t } = useTranslation();

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
            <h1>{t("Who we are?")}</h1>
            <div>
              <a href="/about">{t("About Schoolish")}</a>
              <div className="underline-decoration"></div>
            </div>
            <div>
              <a href="/about#vision">{t("Vision")}</a>
              <div className="underline-decoration"></div>
            </div>
            <div>
              <a href="/about#social_media">{t("Social Media")}</a>
              <div className="underline-decoration"></div>
            </div>
            <div>
              <a href="/about#branding">{t("Branding")}</a>
              <div className="underline-decoration"></div>
            </div>
          </div>
          <div className="column">
            <h1>{t("Important Pages")}</h1>
            <a href="/schoolish-for/teachers">{t("Schoolish for Teachers")}</a>
            <a href="/schoolish-for/students">{t("Schoolish for Students")}</a>
            <a href="/why_schoolish">{t("Why Schoolish?")}</a>
          </div>
          <div className="column">
            <h1>{t("Policies")}</h1>
            <a href="/policies/cookies">{t("Cookie Policy")}</a>
            <a href="/policies/terms-of-use">{t("Schoolish Terms of Use")}</a>
            <a href="/policies/privacy-policy">
              {t("Schoolish Privacy Policy")}
            </a>
            <a href="/policies/partners-privacy-policy">
              {t("Partner Privacy Policy")}
            </a>
            <a href="/policies/dont-sell-my-data">{t("DSMD")}</a>
          </div>
          <div className="column">
            <h1>{t("Contact")}</h1>
            <a href="/contact#whatsapp">{t("WhatsApp")}</a>
            <a href="/contact#email">{t("Email")}</a>
            <a href="/contact#location">{t("Location")}</a>
            <a href="/contact#online-chat">{t("Online chat")}</a>
            <a href="/contact#form">{t("Contact form")}</a>
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
            // window.location.reload();
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