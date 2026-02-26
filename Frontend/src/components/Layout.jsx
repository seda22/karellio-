import Header from "./Header";
import destinations from "../data/Destinations.js"
import IslandCards from "./IslandCards.jsx"
import { useState } from "react";
import IslandDetails from "./IslandDetails.jsx"

const Layout = () => {

  const [selectedIsland, setSelectedIsland] = useState(destinations[0]);

  return(
    <div className="layout-div">
    <Header/>
    <main className="main">
        <section className="destination-section"><IslandCards destinations={destinations} onSelect={setSelectedIsland} selectedIsland={selectedIsland}/></section>
        <section className="content-section"><IslandDetails selectedIsland={selectedIsland}/></section>
    </main>
    </div>
  )
}

export default Layout;