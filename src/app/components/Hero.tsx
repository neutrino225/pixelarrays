/** @format */
import styles from "../styles/hero.module.css";
import Image from "next/image";
import img from "../../../public/heroimg.jpeg";

const Hero = () => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#273036"
					fillOpacity="1"
					d="M0,192L48,160C96,128,192,64,288,48C384,32,480,64,576,64C672,64,768,32,864,48C960,64,1056,128,1152,154.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
			</svg>
			<section className={`${styles.section} ${styles.hero}`}>
				<div className={styles.herowrapper}>
					<h1 className={styles.maintitle}>
						Capturing Moments, Creating Memories
					</h1>
					<p className={styles.maindesc}>
						Through my lens, I capture the essence of life, from captivating
						landscapes to emotive portraits. Join me on this visual journey as I
						showcase my passion for photography and share moments frozen in
						time.
					</p>
				</div>
				<div className={styles.heroimgwrapper}>
					<Image
						src={img}
						alt="Hero Image"
						width={800}
						height={600}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className={styles.heroimg}
						placeholder="blur"
					/>
				</div>
			</section>
		</>
	);
};

export default Hero;
