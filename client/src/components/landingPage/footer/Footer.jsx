import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../../assets/2.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.logo}>
          <p>logo</p>
        </div>
        <div className={styles.paragraph}>
          <p>© 2023 CodeBusters. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
