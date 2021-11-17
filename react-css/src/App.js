
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import RoutesPage from './pages/routePages/routesPage';
import GhumoPage from './pages/ghumo/ghumo';
import Trillo from './pages/trilloPages/trillo';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/react-css' element={<RoutesPage/>}/>
              <Route path='/ghumo' element={<GhumoPage/>}/>
              <Route path='trillo' element={<Trillo/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
