'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import Logo from './Logo';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const offset = 52 + 20; // header height + padding
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Logo height={48} />
                </Link>

                <nav className={styles.nav}>
                    <a href="#how-it-works" className={styles.navLink} onClick={(e) => scrollTo(e, 'how-it-works')}>
                        How it works
                    </a>
                    <a href="#for-shops" className={styles.navLink} onClick={(e) => scrollTo(e, 'for-shops')}>
                        For shops
                    </a>
                    <a href="#download" className={styles.ctaLink} onClick={(e) => scrollTo(e, 'download')}>
                        Download
                    </a>
                </nav>

                <button
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span>{menuOpen ? '✕' : '☰'}</span>
                </button>

                {menuOpen && (
                    <div className={styles.mobileMenu}>
                        <a
                            href="#how-it-works"
                            className={styles.mobileLink}
                            onClick={(e) => scrollTo(e, 'how-it-works')}
                        >
                            How it works
                        </a>
                        <a
                            href="#for-shops"
                            className={styles.mobileLink}
                            onClick={(e) => scrollTo(e, 'for-shops')}
                        >
                            For shops
                        </a>
                        <a
                            href="#download"
                            className={styles.mobileLink}
                            onClick={(e) => scrollTo(e, 'download')}
                        >
                            Download
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
