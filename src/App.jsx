import "./assets/bootstrap.min.css"
import "./assets/stony_island_nf.ttf"
import "./assets/style.css"
import Header from './components/Header'
import Footer from './components/Footer'
import PageContent from './components/PageContent'

function App() {
  return <div className="App">
    <Header />
    <PageContent />
    <Footer />
  </div>;
}

export default App;
