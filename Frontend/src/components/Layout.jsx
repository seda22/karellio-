import Header from "./Header";
import destinations from "../data/Destinations.js"
import IslandCards from "./IslandCards.jsx"
import { useState } from "react";

const Layout = () => {

  const [selectedIsland, setSelectedIsland] = useState(null);

  return(
    <div className="layout-div">
    <Header/>
    <main className="main">
        <section className="destination-section"><IslandCards destinations={destinations} onSelect={setSelectedIsland}/></section>
        <section className="content-section">İçerik Alanı</section>
    </main>
    </div>
  )
}

export default Layout;