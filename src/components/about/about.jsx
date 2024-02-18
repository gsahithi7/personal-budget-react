import React from 'react';
import './about.css';
class About extends React.Component {
  render() {
    return (
      <div className="container center">
        <img src="bg.png" alt="Background Main Image" className="main-image" />
        <div className="page-area">
          <div className="text-box">
            <h1>Stay on track</h1>
            <p>
              Do you know where you are spending your money? If you really stop to track it down,
              you would get surprised! Proper budget management depends on real data... and this
              app will help you with that!
            </p>
            
            <aside className="tips">
              <h2>Tips:</h2>
              <ul>
                <li>Keep receipts for all purchases.</li>
                <li>Create a monthly budget plan.</li>
                <li>Review your expenses regularly.</li>
              </ul>
            </aside>
          </div>
      
          <div className="text-box alerts">
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
          </div>
      
          <div className="text-box results">
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get out of debt faster!
              Also, they live happier lives... since they expend without guilt or fear...
              because they know it is all good and accounted for.
            </p>
          </div>
      
          <div className="text-box free">
            <h1>Free</h1>
            <p>
              This app is free!!! And you are the only one holding your data!
            </p>
          </div>
      
        
          <article className="alerts">
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
          </article>
      
          <article className="results">
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get out of debt faster!
              Also, they live happier lives... since they expend without guilt or fear...
              because they know it is all good and accounted for.
            </p>
          </article>
        </div>
      </div>
    );
  }
}

export default About;
