import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, moveStock }) {

const portfolioStocks = portfolio.map(stock => <Stock stock={stock} key={stock.id} moveStock={moveStock}/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStocks
      }
    </div>
  );
}

export default PortfolioContainer;
