/* eslint-disable @next/next/no-img-element */
//////// eslint-disable-next-line @next/next/no-img-element
import React from "react";
import Layout from "../../components/layout/Layout";
import styles from "./country.module.css";

const Country = ({ country }) => {
  return (
    <>
      {country.map((detail, index) => {
        return (
          <Layout key={index} title={detail.name.common}>
            <div>
              <div className={styles.overview_panel}>
                <img src={detail.flags.png} alt="flag" />

                <h1 className={styles.overview_name}>{detail.name.common}</h1>
                <div className={styles.overview_region}>{detail.region}</div>
              </div>
              <div>
                <div className={styles.overview_numbers}>
                  <p className={styles.overview_label}>Population</p>
                  <p className={styles.overview_label}>{detail.population}</p>
                </div>

                <div className={styles.overview_numbers}>
                  <p className={styles.overview_label}>Capital</p>
                  <p className={styles.overview_label}>{detail.capital}</p>
                </div>
                <div className={styles.overview_numbers}>
                  <p className={styles.overview_label}>Area</p>
                  <p className={styles.overview_label}>{detail.area}</p>
                </div>
              </div>
            </div>
          </Layout>
        );
      })}
    </>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.id}`);
  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};
