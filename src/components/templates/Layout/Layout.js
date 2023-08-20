import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <header className={styles.header}></header> */}
      <main className={styles.mainStyle}>{children}</main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Layout;
