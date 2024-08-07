import styled from "styled-components";
import { ReactTyped } from "react-typed";
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
            <ReactTyped
              strings={[
                t("Organize your classes with ease!"),
                t("Organize your classes from anywhere!"),
                t("Organize your schedule quickly!"),
                t("Organize your school routine with Schoolish!"),
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              showCursor={true}
              style={{ fontSize: "35px", fontWeight: "bolder" }}
            />
          </div>
          <Space height="25px" />
          <h3 style={{ fontWeight: "normal" }}>
            {t(
              "Meet Schoolish, the new platform designed to help teachers better organize their classes and groups. With Schoolish, you can manage schedules, plan lessons efficiently and keep all important information in one place. Simplify your school routine and have more time to focus on what really matters:"
            )}{" "}
            <span style={{ fontWeight: "bolder", textDecoration: "underline" }}>
              {t("teaching")}
            </span>
            .
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
              {t("Create a free account")}
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
              {t("Why Schoolish?")}
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
            text: t("Bye bye, papers scattered across the table!"),
            color: "#000",
            weight: "bold",
          }}
          subtitle={{
            text: t("Organization"),
            color: "#a200ff",
            weight: "bold",
          }}
          text={{
            text: t(
              "With Schoolish, teachers can centralize all relevant information in one place. This includes schedules, class materials, student grades, and more. No more papers scattered across your desk!"
            ),
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
            text: t("Easy preparation and efficient execution!"),
            color: "#000",
            weight: "bold",
          }}
          subtitle={{
            text: t("Planning"),
            color: "#a200ff",
            weight: "bold",
          }}
          text={{
            text: t(
              "Our platform enables teachers to plan their lessons more effectively. They can create detailed schedules, set goals, and track student progress."
            ),
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
            text: t("Work from anywhere!"),
            color: "#000",
            weight: "bold",
          }}
          subtitle={{
            text: t("Remote access"),
            color: "#a200ff",
            weight: "bold",
          }}
          text={{
            text: t(
              "With the ability to access Schoolish from anywhere, teachers don’t need to be in-person to manage their classes. This is especially helpful for those working in hybrid or remote learning."
            ),
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
            text: t("Protection for confidential information!"),
            color: "#000",
            weight: "bold",
          }}
          subtitle={{
            text: t("Data Security"),
            color: "#a200ff",
            weight: "bold",
          }}
          text={{
            text: t(
              "Schoolish offers robust security to protect sensitive student data. Information is stored in encrypted form, giving teachers peace of mind and keeping everyone private."
            ),
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
          {t("Find out how Schoolish can help you in your school life")}{" "}
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
          {t("Create a free account")}
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
