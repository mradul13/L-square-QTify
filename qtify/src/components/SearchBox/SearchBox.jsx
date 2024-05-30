import React, { useState } from "react";
import styles from "./SearchBox.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";


const SearchBox = (props) => {
  const { placeholder } = props;
	const [inputValue, setInputValue] = useState("");

	return (
		<div>
			<div>
				<form className={styles.wrapper}>
					<input
						className={styles.search}
						placeholder={placeholder}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<button className={styles.searchButton} type="submit">
						<SearchIcon className={styles.searchIcon} />
					</button>
				</form>
			</div>
		</div>
	);
};

export default SearchBox;