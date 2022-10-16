import Menu from 'components/menu';
import Cardapio from 'pages/cardapio/Index';
import Inicio from 'pages/inicio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRoutes(){
    return(
        <Router>
            <Menu />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/cardapio' element={<Cardapio />} />
            </Routes>
        </Router>
    );
}