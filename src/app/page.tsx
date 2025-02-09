import Cta from '@/components/CTA';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import styles from './home.module.css';

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Navbar />
				<main>
					<Hero />
					<Cta />
				</main>
				<footer></footer>
			</div>
		</div>
	);
}
