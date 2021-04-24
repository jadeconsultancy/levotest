import "./styles/App.scss";
import React from "react";
import cardInfo from "../cards.json";
import CardList from "./components/CardList";

function App() {
  return <CardList cardInfo={cardInfo} />;
}

export default App;
