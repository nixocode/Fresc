'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logo.png"
                        alt="Fresc"
                        className={styles.logoImg}
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link href="#how-it-works" className={styles.navLink}>
                        How it works
                    </Link>
                    <Link href="#for-shops" className={styles.navLink}>
                        For shops
                    </Link>
                    <Link href="#download" className={styles.ctaLink}>
                        Download
                    </Link>
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
                        <Link
                            href="#how-it-works"
                            className={styles.mobileLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            How it works
                        </Link>
                        <Link
                            href="#for-shops"
                            className={styles.mobileLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            For shops
                        </Link>
                        <Link
                            href="#download"
                            className={styles.mobileLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            Download
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
