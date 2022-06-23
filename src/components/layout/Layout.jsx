import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";
import Logo from "./logo/Logo";

const Layout = ({ children, title = "World Rank" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Logo />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>&copy; 2022 Surender </footer>
    </div>
  );
};

export default Layout;