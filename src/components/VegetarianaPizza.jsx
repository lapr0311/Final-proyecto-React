
import Context from "../Context";
import React, { useContext } from "react"
import pizzas from "../pizzas.json"
import "../assets/css/catalogoPizza.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'







const VegetarianaPizza = () => {

    const {  agregarPizzas } = useContext(Context);

    const vegetapp = pizzas.filter(pizza => pizza.category === 'Vegetariana');


  return (






    <div className='container m-3'>
    {vegetapp.map((elemento) => (
        <div key={elemento.id}
            className="container d-flex"
        >
            <img className="ms-auto img-fluid" src={elemento.img} alt="foto pizza" style={{ width: '25rem', height: 'auto' }} />
            <div className="mx-auto p-3 border">
                <h3>{elemento.name}</h3>
                <hr style={{ margin: '0', color: 'black', height: '2px', width: '100%', opacity: '10%' }} />
                <Card.Text>
                    {elemento.desc}
                    <h4 className="mt-4 ">Ingredientes:</h4>
                    <div className="m-3">
                        {elemento.ingredients.map((e) => (<p className="m-0" key={Math.random()}>*{e}</p>))}
                    </div>
                    <div className="d-flex">
                        <h3>Precio: ${elemento.price}</h3>
                        <Button variant="danger" className="ms-auto "
                            onClick={() => (agregarPizzas(elemento.id))}
                        >Añadir Pizza 🛒</Button>{' '}
                    </div>
                </Card.Text>
            </div>
        </div>
    ))
    }
</div>

  )
}

export default VegetarianaPizza