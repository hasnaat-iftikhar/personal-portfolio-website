import Link from "next/link";
import React from "react";

// Components
import Button from "../../elements/button";

// Styles
import styles from "./styles.module.scss";

import ExternalLink from "../../../public/external-link.svg";

const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/hasnaat-iftikhar/",
              "_blank"
            );
          }}
          style={{
            height: "60px",
            backgroundColor: "#0073af",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 10,
            cursor: "pointer",
            flex: 1,
          }}
        >
          <img
            src="/connect-with-hasnaat-iftikhar-on-linkedin.png"
            alt="Connect with Hasnaat Iftikhar on Linkedin!"
            width="35px"
            style={{
              borderRadius: 6,
            }}
          />
          <a
            style={{
              color: "#fff",
              letterSpacing: "0.5px",
              fontWeight: 500,
            }}
          >
            Connect with me on LinkedIn!
          </a>
          <div style={{ width: "18px", height: "18px" }}>
            <ExternalLink color="white" width="100%" height="100%" />
          </div>
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/Hasnaat-Iftikhar", "_blank");
          }}
          style={{
            height: "60px",
            backgroundColor: "#171515",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 10,
            cursor: "pointer",
            flex: 1,
          }}
        >
          <img
            src="/connect-with-hasnaat-iftikhar-on-github.png"
            alt="Connect with Hasnaat Iftikhar on GitHub!"
            width="35px"
            style={{
              borderRadius: 6,
            }}
          />
          <a
            style={{
              color: "#fff",
              letterSpacing: "0.5px",
              fontWeight: 500,
            }}
          >
            Follow me on GitHub!
          </a>
          <div style={{ width: "18px", height: "18px" }}>
            <ExternalLink color="white" width="100%" height="100%" />
          </div>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.h_flex}>
          <h3 className={styles.logo_text}>
            Your name
            <span className={styles.highlightedDot}>.</span>
          </h3>

          <Button
            onClick={() => {
              window.open(
                "https://github.com/Hasnaat-Iftikhar/personal-portfolio-website",
                "_blank"
              );
            }}
          >
            Download this template
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
