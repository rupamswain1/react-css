
import {BrowserRouter,Route,Routes,HashRouter} from 'react-router-dom';
import './App.css';
import RoutesPage from './pages/routePages/routesPage';
import GhumoPage from './pages/ghumo/ghumo';
import Trillo from './pages/trilloPages/trillo';
import Nexter from './pages/nexterPage/nexter';
function App() {
  return (
    <div className="App">
        {/* Hashrouter is used in place of browser router as github pades does not support routing, when we use the hashRouter # added to url like 
        http://abc/#/path/ */}
        <BrowserRouter> 
            <Routes>
              <Route path='/react-css' element={<RoutesPage/>}/>
              <Route path='/ghumo' element={<GhumoPage/>}/>
              <Route path='trillo' element={<Trillo/>}/>
              <Route path='/nexter' element={<Nexter/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
