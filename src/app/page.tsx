import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Fresh</span> produce.
            <br />
            <span className={styles.subtitle}>Discounted daily.</span>
          </h1>
          <p className={styles.description}>
            Discover deals from local fruit shops near you.
            Save money, eat fresh, and reduce food waste in your neighborhood.
          </p>
          <div className={styles.buttons}>
            <a href="#download" className="btn btn-primary">
              Download the app
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section}>
        <div className={styles.container} style={{ maxWidth: '900px' }}>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-savings.png" alt="Save money" className={styles.benefitImg} />
              <h4>Save up to 50%</h4>
              <p>Real discounts on fresh produce</p>
            </div>
            <div className={styles.benefit}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-fresh.png" alt="Fresh produce" className={styles.benefitImg} />
              <h4>Always fresh</h4>
              <p>Quality guaranteed by local shops</p>
            </div>
            <div className={styles.benefit}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-location.png" alt="Nearby shops" className={styles.benefitImg} />
              <h4>Walk to collect</h4>
              <p>All shops within minutes away</p>
            </div>
            <div className={styles.benefit}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-eco.png" alt="Eco friendly" className={styles.benefitImg} />
              <h4>Zero waste</h4>
              <p>Help reduce food waste locally</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className={styles.sectionAlt}>
        <div className={styles.container} style={{ maxWidth: '900px' }}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.sectionDescription}>
            Finding fresh deals is simple
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <h3>Browse deals</h3>
              <p>See discounted items from fruit shops within walking distance of you.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>2</div>
              <h3>Follow shops</h3>
              <p>Get notified when your favorite local shops post new offers.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>3</div>
              <h3>Collect fresh</h3>
              <p>Pick up your fresh produce at the discounted price. Simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Shops */}
      <section id="for-shops" className={styles.sectionGreen}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>For shop owners</h2>
          <p className={styles.sectionDescription}>
            Turn surplus produce into new customers
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.check}>✓</span>
              <span>Free 30-day trial</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.check}>✓</span>
              <span>List items in 30 seconds</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.check}>✓</span>
              <span>Real-time analytics</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.check}>✓</span>
              <span>Notify your followers</span>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="#contact" className="btn btn-primary">
              Register your shop
            </a>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get Fresc</h2>
          <p className={styles.sectionDescription}>
            Download free and start saving today
          </p>
          <div className={styles.downloadButtons}>
            <a href="#" className={styles.storeBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.storeIcon}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <span className={styles.storeLabel}>Download on the</span>
                <span className={styles.storeName}>App Store</span>
              </div>
            </a>
            <a href="#" className={styles.storeBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.storeIcon}>
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div>
                <span className={styles.storeLabel}>Get it on</span>
                <span className={styles.storeName}>Google Play</span>
              </div>
            </a>
          </div>
          <p className={styles.note}>
            Now available in Sant Antoni, Barcelona. More neighborhoods coming soon.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Local shops</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>30%</div>
              <div className={styles.statLabel}>Average savings</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>5 min</div>
              <div className={styles.statLabel}>Walk to collect</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
