import React, { useState } from 'react';
import './faq.css'; // Import custom CSS for styling

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const faqs = [
        { question: "What is the mission of our business?", answer: "Our mission is to provide quality services that enhance customer satisfaction." },
        { question: "How can I contact customer support?", answer: "You can reach our customer support via email at support@example.com." },
        { question: "What services do you offer?", answer: "We offer a variety of services including consulting, marketing, and customer support." },
        { question: "What are your business hours?", answer: "Our business hours are Monday to Friday, 9 AM to 5 PM." },
        { question: "How can I provide feedback?", answer: "You can provide feedback through our website's feedback form." },
        { question: "Do you have a return policy?", answer: "Yes, we have a 30-day return policy on all products." },
        { question: "Is there a warranty on your services?", answer: "Yes, we offer a one-year warranty on all services provided." },
        { question: "How can I track my order?", answer: "You will receive an email with tracking information once your order has shipped." },
        { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to select countries." },
        { question: "How can I apply for a job?", answer: "You can apply for a job through our careers page on the website." },
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container mt-5 text-center">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                    <div className="faq-card" key={index}>
                        <div className="faq-card-header" id={`heading${index}`}>
                            <h5 className="mb-0">
                                <button
                                    className={`faq-btn ${activeIndex === index ? 'active' : ''}`}
                                    type="button"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    {faq.question}
                                </button>
                            </h5>
                        </div>
                        <div
                            id={`collapse${index}`}
                            className={`collapse ${activeIndex === index ? 'show' : ''}`}
                            aria-labelledby={`heading${index}`}
                            data-parent="#faqAccordion"
                        >
                            <div className="faq-card-body">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
