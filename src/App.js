import Header from './components/header'
import "./styles.css"
import CardsContainer from './components/cardsContainer'
import { UserProvider } from './context/userContext'

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <CardsContainer />
      </UserProvider>
    </div>
  );
}

export default App;
