import styles from '../legal.module.css';

export const metadata = {
    title: 'Privacy Policy - Fresc',
    description: 'How Fresc collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
    return (
        <div className={styles.legal}>
            <h1>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: February 2026</p>

            <h2>1. Information We Collect</h2>
            <p>
                When you use Fresc, we collect information to provide you with the best experience
                finding discounted fresh produce near you. This includes:
            </p>
            <ul>
                <li><strong>Account information</strong> — your name, email address, and password when you create an account.</li>
                <li><strong>Location data</strong> — your approximate location to show nearby shops and deals. This is only collected when you use the app.</li>
                <li><strong>Usage data</strong> — which shops you follow, deals you view, and how you interact with the app.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Show you relevant deals from nearby fruit shops</li>
                <li>Send notifications about new offers from shops you follow</li>
                <li>Improve our service and personalise your experience</li>
                <li>Communicate important updates about your account</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>
                We do not sell your personal data. We only share information with:
            </p>
            <ul>
                <li><strong>Shop owners</strong> — basic analytics about how many people viewed their deals (never personal details).</li>
                <li><strong>Service providers</strong> — trusted partners who help us run the app (hosting, analytics).</li>
            </ul>

            <h2>4. Data Storage & Security</h2>
            <p>
                Your data is stored securely using industry-standard encryption. We retain your information
                only as long as your account is active or as needed to provide our services.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Withdraw consent for location tracking at any time</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
                Our website uses minimal cookies for essential functionality only. We do not use
                third-party advertising cookies.
            </p>

            <h2>7. Contact Us</h2>
            <p>
                If you have questions about this privacy policy, contact us at{' '}
                <a href="mailto:hello@fresc.app">hello@fresc.app</a>.
            </p>
        </div>
    );
}
