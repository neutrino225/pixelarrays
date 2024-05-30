/** @format */

import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
const Home = () => {
	return (
		<main className={styles.main}>
			<Hero />
			<Gallery />
		</main>
	);
};

export default Home;
