import React from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";


function LandingPage() {

	return (
		<div>
			<Navbar />
			<div className={styles.landingPageSearchWrapper}>
				<SearchBox
					placeholder="Search a album of your choice"
				/>
			</div>
            <HeroSection />
		</div>
	);
}

export default LandingPage;