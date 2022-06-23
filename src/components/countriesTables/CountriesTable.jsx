import React from "react";
import { useState } from "react";
import styles from "./Country.module.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Link from "next/link";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <AiOutlineDown className={styles.arrow1} color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <AiOutlineUp color="inherit" />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();

  const [value, setValue] = useState();

  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div>
      <div className={styles.head}>
        <button
          className={styles.head_name}
          onClick={() => setValueAndDirection("name")}
        >
          <div>Name</div>
          {value === "population" && <SortArrow direction={direction} />}
        </button>
        <button
          className={styles.head_population}
          onClick={() => setValueAndDirection("population")}
        >
          <div>Population</div>
          {value === "population" && <SortArrow direction={direction} />}
        </button>
      </div>
      {orderedCountries.map((country) => (
        <Link
          href={`/country/${country.alpha3Code}`}
          // href="/country/[id]"
          // as={`/country/${country.alpha3Code}`}
          key={country.alpha3Code}
        >
          <div className={styles.country} key={country.name}>
            <div className={styles.name}>{country.name}</div>
            <div className={styles.population}>{country.population}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesTable;
