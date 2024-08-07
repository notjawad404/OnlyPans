
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./components/Home";
import AddRecipe from './components/AddRecipe';


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/add' element={<AddRecipe/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
