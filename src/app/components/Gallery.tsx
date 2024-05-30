/** @format */

import Image from "next/image";
import images from "../utils/importImages";
import styles from "../styles/gallery.module.css";

const Gallery = () => {
	return (
		// create mansonary grid
		<section className={styles.gallery}>
			{images.map((image, index) => (
				<div key={index} className={styles.galleryitem}>
					<Image
						src={image}
						alt="Gallery Image"
						width={800}
						height={600}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className={styles.galleryimg}
						placeholder="blur"
						blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU"
					/>
				</div>
			))}
		</section>
	);
};

export default Gallery;
