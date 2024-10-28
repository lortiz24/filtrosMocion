import { Icon } from "../Icon";
// import classes from "./register.module.css";
import "./register.css";
export const Register = () => {
  return (
    <div
      style={{
        padding: "",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: 'url("assets/register/BG_Registro.png")',
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundImage: 'url("assets/register/registerGradient.png")',
          top: -146,
          zIndex: 1,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          width: "239px" /* El ancho será el de la imagen */,
          height: "1117px" /* La altura será la de la imagen */,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: "234px",
            backgroundImage: 'url("assets/register/Avatar.png")',
            zIndex: 10,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "109px",
            height: "211px",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "257px",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage: 'url("assets/register/LogoBgRegister.png")',
            width: "100%",
            height: "514px",
          }}
        />
        <div style={{ rowGap: "34px" }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "120px",
              textAlign: "center",
            }}
          >
            Registro
          </p>
          <div
            style={{
              padding: "0px 113px",
              position: "relative",
            }}
          >
            {/* <div style={{ position: "relative", width: "100%" }}>
              <input
                className={classes.input}
                type="text"
                placeholder="Código"
                style={{
                  display: "inline-block",
                  boxSizing: "border-box",
                  height: "110px",
                  width: "100%",
                  borderRadius: "24px",
                  border: "solid white 1.5px",
                  fontSize: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  paddingLeft: "45px", // Ajusta el padding para que no se superponga con el ícono
                  color: "white", // Cambia el color del texto
                }}
              />
            </div> */}

            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input placeholder="Search" type="search" className="input" />
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "7 0px",
            padding: "0px 113px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <button
            style={{
              padding: "43px 113px",
              fontSize: "65px",
              borderRadius: "24px",
              backgroundColor: "#EB0AFF",
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
