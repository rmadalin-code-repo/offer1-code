import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/layout/navBar/navBar'
import Footer from './components/layout/footer'
//import Houses from './components/house/houseList'
import Wrapper from './components/Wrapper'
import HouseList from './components/house/houseList'
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          {/*<Houses/>*/}
          <HouseList/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
