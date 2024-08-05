import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

import Navbar from "../components/Navbar";
import Space from "../components/Space";
import HomeBlock from "../components/HomeBlock";
import Footer from "../components/Footer";

import Colors from "../styles/colors.tsx";

function Page() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Space height="80px" />
      <Overview>
        <div>
          <div className="typingContainer" style={{ display: "flex" }}>
            <TypeAnimation
              sequence={[
                "Organize suas aulas com facilidade!",
                1000,

                "Organize suas turma de qualquer",

                "Organize suas turmas de quaquer",

                "Organize suas turmas de qualquer lugar!",
                1000,

                "Organize sua agenda com rapidez!",
                1000,

                "Organize sua rotina escolar com o Scholish!",
                200,
                "Organize sua rotina escolar com o Schoolish!",
                2500,
              ]}
              wrapper="h1"
              speed={75}
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <Space height="25px" />
          <h3 style={{ fontWeight: "normal" }}>
            {t("home-page-meet-schoolish")}{" "}
            <span style={{ fontWeight: "bolder", textDecoration: "underline" }}>
              {t("teaching")}
            </span>.
          </h3>
          <Space height="25px" />
          <div
            className="cta"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <button
              style={{
                marginRight: "10px",
                height: "50px",
                width: "250px",
                borderRadius: "5px",
                border: "none",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
                backgroundColor: Colors.mainColor,
              }}
              className="signupButton"
              onClick={() => {
                window.location.href = "/signup";
              }}
            >
              Crie uma conta grátis
            </button>
            <span
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                marginLeft: "10px",
                fontSize: "16px",
                textDecoration: "underline",
                color: Colors.mainColor,
                textAlign: "center",
              }}
              onClick={() => {
                document
                  .getElementById("whySchoolish")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Por que Schoolish?
            </span>
          </div>
        </div>
      </Overview>

      <section
        id="whySchoolish"
        style={{
          scrollMarginTop: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <HomeBlock
          title={{
            text: "Adeus, papéis espalhados pela mesa!",
            color: "#000",
            weight: "bold",
          }}
          subtitle={{
            text: "Organização",
            color: "#a200ff",
            weight: "bold",
          }}
          text={{
            text: "Com o Schoolish, os professores podem centralizar todas as informações relevantes em um só lugar. Isso inclui horários, materiais de aula, notas dos alunos e muito mais. Adeus, papéis espalhados pela mesa!",
            color: "#000",
            weight: "normal",
          }}
          image={{
            imageURL: "https://via.placeholder.com/150",
            imageAlt: "Agenda",
          }}
        />
        <Space height="50px" />
        <HomeBlock
          title={{
            text: "Facilidade na preparação e eficiência na execução!",
            color: "#000",
            weight: "bold",
          }}
          subtitle={{
            text: "Planejamento",
            color: "#a200ff",
            weight: "bold",
          }}
          text={{
            text: "A plataforma permite que os professores planejem suas lições de forma mais eficaz. Eles podem criar cronogramas detalhados, definir metas e acompanhar o progresso dos alunos.",
            color: "#000",
            weight: "normal",
          }}
          image={{
            imageURL: "https://via.placeholder.com/150",
            imageAlt: "Agenda",
          }}
        />
        <Space height="50px" />
        <HomeBlock
          title={{
            text: "Trabalhe de qualquer lugar!",
            color: "#000",
            weight: "bold",
          }}
          subtitle={{
            text: "Acesso Remoto:",
            color: "#a200ff",
            weight: "bold",
          }}
          text={{
            text: "Com a possibilidade de acessar o Schoolish de qualquer lugar, os professores não precisam estar presencialmente na escola para gerenciar suas turmas. Isso é especialmente útil para quem trabalha com ensino híbrido ou à distância.",
            color: "#000",
            weight: "normal",
          }}
          image={{
            imageURL: "https://via.placeholder.com/150",
            imageAlt: "Agenda",
          }}
        />
        <Space height="50px" />
        <HomeBlock
          title={{
            text: "Proteção para informações confidenciais!",
            color: "#000",
            weight: "bold",
          }}
          subtitle={{
            text: "Segurança dos Dados",
            color: "#a200ff",
            weight: "bold",
          }}
          text={{
            text: "O Schoolish oferece segurança robusta para proteger dados sensíveis dos alunos. As informações são armazenadas de forma criptografada, garantindo tranquilidade aos professores e mantendo a privacidade de todos.",
            color: "#000",
            weight: "normal",
          }}
          image={{
            imageURL: "https://via.placeholder.com/150",
            imageAlt: "Agenda",
          }}
        />
        <Space height="50px" />
        <span
          style={{
            fontWeight: "bold",
            cursor: "pointer",
            marginLeft: "10px",
            fontSize: "16px",
            textDecoration: "underline",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderColor: "#000000",
          }}
          onClick={() => (window.location.href = "/why_schoolish")}
        >
          Saiba como o Schoolish pode te ajudar na vida escolar{" "}
          <div className="arrow arrow-right"></div>
        </span>
        <Space height="25px" />
        <button
          style={{
            marginRight: "10px",
            height: "50px",
            width: "calc(100vw - 100px)",
            borderRadius: "25px",
            border: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
            margin: "0 auto",
            backgroundColor: `${Colors.mainColor}`,
          }}
          className="signupButton"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Crie uma conta grátis
        </button>
        <Space height="50px" />
      </section>
      <Footer />
    </>
  );
}

const Overview = styled.main`
  width: calc(100vw - 40px);
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export default Page;
