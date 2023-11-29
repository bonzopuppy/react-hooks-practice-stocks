import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sort, setSort] = useState("Alphabetically");

  const [filter, setFilter] = useState("Tech");



  function moveStock(stock) {
    if (stocks.some(s => s.id === stock.id)) {
      addToPortfolio(stock);
    } else {
      removeFromPortfolio(stock);
    }
  }

  function addToPortfolio(stock) {
    setPortfolio([...portfolio, stock]);
    setStocks(stocks.filter((s) => s.id !== stock.id));
  }

  function removeFromPortfolio(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
    setStocks([...stocks, stock]);
  }

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  function sortStocks() {
    if (sort === "Alphabetically") {
      return [...stocks].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return [...stocks].sort((a, b) => a.price - b.price);
    }
  }

  const filteredStocks = sortStocks().filter((stock) => stock.type === filter);
  

  return (
    <div>
      <SearchBar sort={sort} setSort={setSort} filter={filter} setFilter={setFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} moveStock={moveStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} moveStock={moveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
