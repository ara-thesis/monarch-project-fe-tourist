import './App.css';
import { Container,} from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import NavigationB from './components/Navbar';
import NewsLH from './components/NewsListHeader';
import NewsLB from './components/NewsListBody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container>        
      <NavigationB />        
      </Container>
      <header className="App-header">
          <Router>
            <Routes>
            <Route path="/" element={<Body />} />                                 
              <Route path="news" element={<NewsLH />} />
              <Route path="news" element={<NewsLB />}/>
            </Routes>
          </Router>
        <br />        
      </header>   
    </div>
  );
}

// https://youtu.be/8pKjULHzs0s -> 09:32

export default App;