import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import Section from "./Pages/Section/Section"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bebidas" element={<Section text={'o tipo de bebida:'} section={'Bebidas'} button1={'Quentes'} button2={'Geladas'} />} />
                <Route path="/padaria" element={<Section text={'o seu pedido:'} section={'Padaria'} button1={'Pães'} button2={'Sem glúten'} />} />
                <Route path="/doces" element={<Section text={'o tipo de doce:'} section={'Doces'} button1={'Doces'} button2={'Sem lactose'} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App