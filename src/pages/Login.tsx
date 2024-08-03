import { FormEvent, useState, useEffect, useRef } from "react";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

import { auth, errors } from "../services/firebase";
import colors from "../styles/colors";
import setAlertMessage from "../utils/setAlertMessage";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const alertMessageBox = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });

    // Limpeza da subscrição
    return () => unsubscribe();
  }, []);

  function onLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      setAlertMessage({
        ref: alertMessageBox,
        type: "info",
        message: "Preencha todos os campos.",
      });
      return;
    }

    setPersistence(auth, browserSessionPersistence).then(async () => {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setIsLogged(true);
        })
        .catch((error) => {
          const errorCode = String(error.message)
            .replace("Firebase: Error (", "")
            .replace(").", "");
          const errorMessage =
            errors.auth[errorCode as keyof typeof errors.auth] ||
            "Erro desconhecido. Tente novamente mais tarde ou <a href=''>atualize a página</a>.";
            setAlertMessage({
              ref: alertMessageBox,
              type: "warning",
              message: errorMessage,
            });
        });
    });
  }

  return (
    <Login>
      {isLogged && <Navigate to="/dashboard" replace={true} />}
      <div className="form-structor">
        <form className="signup" onSubmit={onLogin}>
          <h2
            className="form-title"
            id="signup"
            style={{ fontWeight: "bolder", marginBottom: "20px" }}
          >
            Seja bem-vindo!
          </h2>
          <div className="alertMessageBox" ref={alertMessageBox}></div>
          <div className="form-holder">
            <input
              type="email"
              className="input"
              placeholder="E-mail"
              onInput={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />
            <input
              type="password"
              className="input"
              placeholder="Senha"
              onInput={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
          </div>
          <button className="submit-btn" type="submit">
            Entrar
          </button>
        </form>
        <div className="login slide-up">
          <div className="center">
            <h2 className="form-title" id="login">
              ou <strong>cadastre-se</strong>
            </h2>
          </div>
        </div>
      </div>
    </Login>
  );
}

export default Page;

const Login = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e3e3e3;

  .form-structor {
    background-color: #222;
    border-radius: 15px;
    height: 650px;
    width: 450px;
    position: relative;
    overflow: hidden;

    @media (max-width: 600px) {
      height: 100vh;
      width: 100vw;
      border-radius: 0px;
    }


    &::after {
      content: "";
      opacity: 0.5;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1000px;
      background-image: url("https://images.unsplash.com/photo-1554042317-efd62f19bc95?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    }

    .signup {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 65%;
      z-index: 5;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;

      &.slide-up {
        top: 5%;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
      }

      &.slide-up .form-title {
        font-size: 1em;
        cursor: pointer;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .form-title {
        color: #fff;
        font-size: 1.7em;
        text-align: center;

        span {
          color: color: #fff;;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
      }

      .form-holder {
        border-radius: 15px;
        background-color: ${colors.mainColor};
        overflow: hidden;
        margin-top: 50px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        .input {
          border: 0;
          outline: none;
          box-shadow: none;
          display: block;
          height: 50px;
          line-height: 30px;
          padding: 8px 15px;
          border-bottom: 1px solid #eee;
          width: 100%;
          font-size: 12px;

          &:last-child {
            border-bottom: 0;
          }
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }

      .submit-btn {
        background-color: ${colors.mainColor};
        color: white;
        border: 0;
        border-radius: 15px;
        display: block;
        margin: 15px auto;
        padding: 15px 45px;
        width: 100%;
        font-size: 13px;
        font-weight: bolder;
        cursor: pointer;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        &:hover {
          transition: all 0.3s ease;
          background-color: ${colors.secondaryColor};
        }
      }
    }

    .login {
      position: absolute;
      top: 20%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 5;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;

      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -20px;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        background-color: ${colors.mainColor};
        width: 200%;
        height: 250px;
        border-radius: 50%;
        z-index: 4;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

      }

      .center {
        position: absolute;
        top: calc(50% - 10%);
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 65%;
        z-index: 5;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        .form-title {
          color: #fff;
          font-size: 1.7em;
          text-align: center;

          span {
            color: #fff;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
          }
        }

        .form-holder {
          border-radius: 15px;
          background-color: ${colors.mainColorLight};
          border: 1px solid #eee;
          overflow: hidden;
          margin-top: 50px;
          opacity: 1;
          visibility: visible;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;

          .input {
            border: 0;
            outline: none;
            box-shadow: none;
            display: block;
            height: 30px;
            line-height: 30px;
            padding: 8px 15px;
            border-bottom: 1px solid #eee;
            width: 100%;
            font-size: 12px;

            &:last-child {
              border-bottom: 0;
            }
            &::-webkit-input-placeholder {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }

        .submit-btn {
          background-color: #6b92a4;
          color: white;
          border: 0;
          border-radius: 15px;
          display: block;
          margin: 15px auto;
          padding: 15px 45px;
          width: 100%;
          font-size: 13px;
          font-weight: bolder;
          cursor: pointer;
          opacity: 1;
          visibility: visible;
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;

          &:hover {
            transition: all 0.3s ease;
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      }

      &.slide-up {
        top: 90%;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      &.slide-up .center {
        top: 10%;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      &.slide-up .form-title {
        font-size: 1em;
        margin: 0;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }
    }
  }
`;
