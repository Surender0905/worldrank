import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import SearchInput from "../components/searchInput/SearchInput";
import CountriesTable from "../components/countriesTables/CountriesTable";
import { useState } from "react";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword.toLowerCase()) ||
      country.region.toLowerCase().includes(keyword.toLowerCase()) ||
      country.subregion.toLowerCase().includes(keyword.toLowerCase())
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.count}> Found {countries.length}countries</div>

      <SearchInput
        placeholder="Filter Name , Regin or SubRegion"
        onChange={onInputChange}
      />
      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
