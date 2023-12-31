import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react"
import Context from "./Context";
import Navbar from './components/Navbar';
import Home from './components/Home';
import DatosPizza from './components/ItemPizzaContainer'
import Carrito from './components/Carrito';
import Categoria from './components/ItemPizza';
import MeatPizza from './components/MeatPizza';
import VegetarianaPizza from './components/VegetarianaPizza';
import pizzas from '../src/pizzas.json'




function App() {
  
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)



    const sumaTotal = () => {
        const newCarrito = carrito;
        let newTotal = 0
        newCarrito.map((elemento) => (newTotal += elemento.cantidad * elemento.price))
        setTotal(newTotal)
    }

    useEffect(() => {
        sumaTotal()
    }, [carrito])

    const agregarPizzas = (id) => {
        const newCarrito = [...carrito]
        const posicionCarrito = newCarrito.findIndex(elemento => elemento.id === id)

        if (posicionCarrito >= 0) {
            newCarrito[posicionCarrito].cantidad += 1
            setCarrito(newCarrito)
        } else {
            const buscaPizzas = [...pizzas]
            const indexPizza = buscaPizzas.findIndex(elemento => elemento.id === id)
            const nuevoItem = {
                id: id,
                img: buscaPizzas[indexPizza].img,
                name: buscaPizzas[indexPizza].name,
                price: buscaPizzas[indexPizza].price,
                cantidad: 1
            }
            setCarrito([...carrito, nuevoItem])
        }
    }

    const eliminarPizzas = (id) => {
        const newCarrito = [...carrito]
        const posicionCarrito = newCarrito.findIndex(elemento => elemento.id === id)

        if (posicionCarrito >= 0) {
            if (newCarrito[posicionCarrito].cantidad > 1) {
                newCarrito[posicionCarrito].cantidad -= 1
                setCarrito(newCarrito)
            }
            else {
                const quitarDelcarrito = newCarrito.filter((elemento) => elemento.id !== id)
                setCarrito(quitarDelcarrito)
            }
        }
    }

    const globalState = { pizzas, agregarPizzas, eliminarPizzas, carrito, total };
    return (
        <div className="container">
            <Context.Provider value={globalState}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pizzas/:id" element={<DatosPizza />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path='/categoria' element={<Categoria />} />
                        <Route path='/meatpizza' element={<MeatPizza />} />
                        <Route path='/vegetarianapizza' element={<VegetarianaPizza />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
}

export default App;