'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: 'Is Fresc really free?',
        answer: 'Yes! Fresc is completely free to download and use. We make money from a small commission on sales, so you never pay extra.',
    },
    {
        question: 'Where is Fresc available?',
        answer: 'We\'re currently live in Sant Antoni, Barcelona, and expanding to more neighborhoods soon. Follow us to get notified when we launch in your area.',
    },
    {
        question: 'How do the discounts work?',
        answer: 'Local fruit shops list produce they want to sell quickly at reduced prices — usually 20-50% off. You browse, pick what you want, and walk to the shop to collect it.',
    },
    {
        question: 'Is the produce still fresh?',
        answer: 'Absolutely. Shops discount items to sell them faster, not because they\'re bad. Think of it like an end-of-day deal — still perfectly good, just needs to be eaten soon.',
    },
    {
        question: 'How do I register my shop?',
        answer: 'Tap "Register your shop" on the app or website. You\'ll get a free 30-day trial. Listing items takes about 30 seconds — just snap a photo, set a price, and publish.',
    },
    {
        question: 'Can I get notifications for new deals?',
        answer: 'Yes! Follow your favourite shops and you\'ll get a notification whenever they post new discounts. You can also browse the feed anytime.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently asked questions</h2>
                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggle(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={styles.chevron}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            <div className={styles.answerWrap} style={{ maxHeight: openIndex === index ? '300px' : '0' }}>
                                <div className={styles.answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
