/** @format */

import styles from "./page.module.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTop";

const Home = () => {
	return (
		<main className={styles.main}>
			<ScrollToTopButton />
			<Hero />
			<Gallery />
		</main>
	);
};

export default Home;
