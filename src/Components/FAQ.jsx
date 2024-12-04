


import React, { useState } from 'react';


const styles = {
  faqToggle: {
    transition: 'transform 0.3s ease',
  },
  rotate: {
    transform: 'rotate(90deg)',
  },
  faqContent: {
    paddingLeft: '20px', // Padding for content
    marginTop: '10px',   // Space between the question and answer
  },
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1); 

  const faqItems = [
    {
      question: "What is Bet of the Day?",
      answer: "Bet of the Day is a daily prediction based on AI and data analysis, offering expert insights to help you make smarter bets and increase your chances of winning.",
    },
    {
      question: "How accurate are your predictions?",
      answer: "Our predictions are powered by advanced algorithms and real-time data, ensuring a high level of accuracy to give you the best possible odds.",
    },
    {
      question: "Is there a fee to access the predictions?",
      answer: "We offer both free and premium plans. You can start with free tips or upgrade to a premium plan for exclusive, higher-accuracy predictions.",
    },
    {
      question: "How often are predictions updated?",
      answer: "Predictions are updated daily to reflect the latest match data, team statistics, and other key variables for the most accurate results.",
    },
    {
      question: "Do I need an account to use your services?",
      answer: "You can view limited predictions without an account, but signing up will unlock additional features and the ability to access multiple daily predictions.",
    },
    {
      question: "Is my personal information secure on your site?",
      answer: "Absolutely! We prioritize your privacy and use encryption to ensure that your data and personal information are always safe and secure.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index); // Toggle the active index
  };

  return (
    <div className='section-bg dark-background'>
 <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p style={{color:'white'}}>
          Got questions? <br /> We've got answers! Our FAQ section is here to help you understand everything you need to know about our daily betting predictions, accuracy, pricing plans, and more. Whether you're a seasoned bettor or new to the game, we provide all the information you need to get started and make the most of our services.
        </p>
      </div>
    <section id="faq" className="faq section section-bg dark-background">
     

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqItems.map((item, index) => (
                <div
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  key={index}
                >
                  <h3 onClick={() => toggleFAQ(index)}>
                    {item.question}
                    <i
                      className={`faq-toggle bi bi-chevron-right ${activeIndex === index ? 'rotate' : ''}`}
                      style={activeIndex === index ? styles.rotate : styles.faqToggle} // Apply rotation when active
                    ></i>
                  </h3>
                  {activeIndex === index && (
                    <div className="faq-content" style={styles.faqContent}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default FAQ;

