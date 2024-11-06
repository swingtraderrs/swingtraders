import { useState } from 'react';

function StockMarketModules() {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  const modules = [
    {
      title: "Module 1: Introduction to Stocks",
      content: [
        "What is a Stock/Share?",
        "Definition and ownership.",
        "Rights of shareholders (dividends, voting)."
      ]
    },
    {
      title: "Module 2: Motivation to Learn",
      content: [
        "Why Do You Want to Learn the Stock Market?",
        "Wealth creation opportunities.",
        "Financial literacy and informed decision-making.",
        "Understanding market dynamics and economic indicators."
      ]
    },
    {
      title: "Module 3: Market Overview",
      content: [
        "Types of Markets",
        "Derivative Market: Explanation and significance.",
        "Currency Market (Forex): Overview of currency trading.",
        "Commodity Market: Types of commodities and trading basics."
      ]
    },
    {
      title: "Module 4: Understanding Derivatives",
      content: [
        "Types of Derivatives",
        "Equity Derivatives: Definition and examples.",
        "Futures: Concept and trading mechanics.",
        "Options: Explanation of call and put options, rights vs. obligations."
      ]
    },
    {
      title: "Module 5: Equity Trading Basics",
      content: [
        "How to Trade in Equity",
        "Steps to open a brokerage account.",
        "Types of orders (market orders, limit orders, stop-loss orders).",
        "Importance of research and analysis."
      ]
    },
    {
      title: "Module 6: Investment Strategies",
      content: [
        "Investment Types",
        "Long-term Investment: Buy and hold strategy.",
        "Swing Trading: Concept and techniques for capturing price swings.",
        "Intraday Trading: Characteristics and strategies for trading within a single day."
      ]
    },
    {
      title: "Module 7: Key Terminology",
      content: [
        "Basic Terms in Trading",
        "Bullish: Definition and market implications.",
        "Bearish: Understanding market downturns.",
        "Consolidation: Price movements and trader psychology.",
        "Index: Overview and purpose.",
        "Nifty 50: Importance in the Indian market.",
        "Bank Nifty: Focus on banking stocks.",
        "Finnifty: Overview of financial services index.",
        "Midcap 200: Characteristics of mid-cap stocks."
      ]
    }
  ];

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center py-5">Our Course Curriculam</h1>
        <div className="row justify-content-center">
          {modules.map((module, index) => (
            <div
              key={index}
              className="col-12 col-md-5 mb-3 d-flex flex-column align-items-center"
              style={{ marginBottom: '10px' }}
            >
              {/* Accordion Heading */}
              <div
                className="w-100 p-3 d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #ddd',
                  cursor: 'pointer'
                }}
                onClick={() => toggleModule(index)}
              >
                <h5 className="m-0">{module.title}</h5>
                <span
                  style={{
                    fontSize: '18px',
                    transform: openModule === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s'
                  }}
                >
                  ▼
                </span>
              </div>

              {/* Accordion Content */}
              {openModule === index && (
                <div
                  className="w-100 p-3"
                  style={{
                    border: '1px solid #ddd',
                    borderTop: 'none',
                    backgroundColor: '#ffffff'
                  }}
                >
                  {module.content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="d-flex align-items-center mb-2"
                      style={{
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        padding: '8px',
                        backgroundColor: '#fdfdfd'
                      }}
                    >
                      <span style={{ color: '#007bff', marginRight: '8px' }}>➤</span>
                      <p className="m-0" style={{ fontSize: '14px', color: '#333' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StockMarketModules;
