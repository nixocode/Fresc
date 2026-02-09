import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo.png"
                                alt="Fresc"
                                className={styles.logoImg}
                            />
                        </Link>
                        <p className={styles.tagline}>
                            Fresh produce at discounted prices from local fruit shops near you.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <Link href="#how-it-works">How it works</Link>
                        <Link href="#for-shops">For shops</Link>
                        <Link href="#download">Download</Link>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms</Link>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Fresc. Made with 🍓 in Barcelona.</p>
                </div>
            </div>
        </footer>
    );
}
