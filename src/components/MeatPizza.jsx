
import React, { useContext } from "react"
import Context from "../Context";
import pizzass from "../pizzas.json"
import "../assets/css/catalogoPizza.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const MeatPizza = () => {

    const {  agregarPizzas } = useContext(Context);

    const Meatpp = pizzass.filter(pizza => pizza.category === 'Meat');
  return (


<div className='container m-3'>
    {Meatpp.map((elemento) => (
        <div key={elemento.id}
            className="container d-flex"
        >
            <h2>Meat Pizzas</h2>
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





//     <div>

// <h2>Carnes Pizzas</h2>
//       {Meatpp.map(pizza => (
//         <div key={pizza.id}>
//           <h3>{pizza.name}</h3>
//           <p>{pizza.desc}</p>
//           <p>Price: ${pizza.price}</p>
//         </div>
//       ))}

//  </div>
  )
}

export default MeatPizza