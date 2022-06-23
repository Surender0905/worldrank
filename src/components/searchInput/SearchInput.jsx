import React from "react";
import styles from "./SearchInput.module.css";
import { FcSearch } from "react-icons/fc";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...rest} />
      <FcSearch className={styles.icon} />
    </div>
  );
};

export default SearchInput;
