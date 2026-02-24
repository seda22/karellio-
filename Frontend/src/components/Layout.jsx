import Header from "./Header";

const Layout = () => {

  return(
    <div className="layout-div">
    <Header/>
    <main className="main">
        <section className="destination-section">Destinasyon Seçim Alanı</section>
        <section className="content-section">İçerik Alanı</section>
    </main>
    </div>
  )

}

export default Layout;