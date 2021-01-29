import Header from './components/header'
import "./styles.css"
import CardsContainer from './components/cardsContainer'
import ProductsHistory from './components/productsHistory'
import { UserProvider } from './context/userContext'

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <CardsContainer />
        <ProductsHistory />
      </UserProvider>
    </div>
  );
}

export default App;
