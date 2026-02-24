import styles from '../legal.module.css';

export const metadata = {
    title: 'Terms of Service - Fresc',
    description: 'Terms and conditions for using the Fresc platform.',
};

export default function TermsPage() {
    return (
        <div className={styles.legal}>
            <h1>Terms of Service</h1>
            <p className={styles.updated}>Last updated: February 2026</p>

            <h2>1. About Fresc</h2>
            <p>
                Fresc is a platform that connects consumers with local fruit shops offering
                discounted fresh produce. We act as a marketplace — the produce is sold directly
                by the shops, not by Fresc.
            </p>

            <h2>2. Using Fresc</h2>
            <p>By using Fresc, you agree to:</p>
            <ul>
                <li>Provide accurate information when creating your account</li>
                <li>Use the platform for its intended purpose</li>
                <li>Not attempt to manipulate or abuse the service</li>
                <li>Respect local shops and their staff when collecting orders</li>
            </ul>

            <h2>3. Deals & Pricing</h2>
            <p>
                All prices and discounts displayed on Fresc are set by individual shop owners.
                Fresc does not guarantee pricing accuracy. Deals are subject to availability and
                may change without notice.
            </p>

            <h2>4. For Shop Owners</h2>
            <p>Shop owners who list on Fresc agree to:</p>
            <ul>
                <li>Provide accurate descriptions and pricing for listed items</li>
                <li>Honour deals displayed to consumers through the app</li>
                <li>Maintain food safety standards for all listed produce</li>
                <li>Respond to consumer enquiries in a timely manner</li>
            </ul>

            <h2>5. Liability</h2>
            <p>
                Fresc is a marketplace connecting buyers and sellers. We are not responsible for
                the quality, safety, or availability of produce listed by shops. Any disputes
                regarding products should be resolved directly with the shop.
            </p>

            <h2>6. Account Termination</h2>
            <p>
                We reserve the right to suspend or terminate accounts that violate these terms.
                You may delete your account at any time through the app settings.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
                We may update these terms from time to time. Continued use of Fresc after changes
                constitutes acceptance of the updated terms.
            </p>

            <h2>8. Governing Law</h2>
            <p>
                These terms are governed by the laws of Spain. Any disputes shall be resolved
                in the courts of Barcelona.
            </p>

            <h2>9. Contact</h2>
            <p>
                Questions about these terms? Reach us at{' '}
                <a href="mailto:hello@fresc.app">hello@fresc.app</a>.
            </p>
        </div>
    );
}
