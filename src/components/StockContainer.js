import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, moveStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock stock={stock} key={stock.id} moveStock={moveStock}/>)}
    </div>
  );
}

export default StockContainer;
