import Header from "./Header";
import destinations from "../data/Destinations.js"
import IslandCards from "./IslandCards.jsx"

const Layout = () => {

  return(
    <div className="layout-div">
    <Header/>
    <main className="main">
        <section className="destination-section"><IslandCards destinations={destinations}/></section>
        <section className="content-section">İçerik Alanı</section>
    </main>
    </div>
  )
}

export default Layout;