import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import OrderModal from '../../components/modal/OrderModal';
import Card from '../../components/card/Card';
import * as actions from '../../actions';
import './styles.scss';

function PizzaPage(props) {
    let { id } = useParams();
    const { pizzas, pizza } = props;
    const currentPizza = pizzas.pizzas.filter((p) => p.id === id)

    const [pizzaQuantity, setPizzaQuantity] = useState(currentPizza[0].quantity)
    const [totalPrice, setTotalPrice] = useState(currentPizza[0].price)
    const [totalWeight, setTotalWeight] = useState(currentPizza[0].weight)
    const [ingredient, setIngredient] = useState({ weight: 0, price: 0 })

    useEffect(() => {
        props.setPizzaDetails(currentPizza[0])
    }, []);

    pizza.price = totalPrice * pizzaQuantity;
    pizza.weight = totalWeight;
    pizza.quantity = pizzaQuantity;

    const goBack = () => {
        props.history.goBack()
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    return (
        <section className="pizza-page">
            <div>
                <a href="#" className="go-back" onClick={goBack}>Go Back</a>
                <div className="pizza-page-image">
                    {
                        pizza && <Card
                            id='pizza'
                            onDrop={e => {
                                drop(e);
                                setTotalPrice(prevPrice => prevPrice + ingredient.price);
                                setTotalWeight(prevWeight => prevWeight + ingredient.weight)
                            }}
                            draggable="true"
                            onDragOver={allowDrop}
                            src={pizza.src}
                            imgStyle={{ height: '300px', width: '300px' }}
                            name={pizza.name}
                            weight={pizza.weight}
                            price={pizza.price}
                            type={pizza.type}
                            quantity={pizza.quantity}
                            actions="true"
                            onAdd={() => setPizzaQuantity(currentQuantity => currentQuantity + 1)}
                            onRemove={() => setPizzaQuantity(prevQuantity => prevQuantity <= 1 ? 1 : prevQuantity - 1)}
                            style={{ width: '400px' }}
                        />
                    }
                </div>
                <div className="pizza-page-ingredients">
                    <h3>ingredients</h3>

                    <div className="ingredients">
                        {
                            pizzas.ingredients.map(ing => {
                                return <React.Fragment key={ing.id}>
                                    <img
                                        onDragStart={e => {
                                            drag(e);
                                            setIngredient({ weight: ing.weight, price: ing.price })
                                        }}
                                        draggable="true"
                                        id={`ing${ing.id}`}
                                        src={ing.src} alt={ing.name}
                                        className="handle"
                                    />
                                </React.Fragment>
                            })
                        }
                    </div>
                </div>
            </div>
            <OrderModal
                message="Order completed!"
                name={pizza.name}
                price={pizza.price}
                onClose={() => props.closeModal()}
                isOpen={props.isModalOpen}
            />
            <div className="order-button">
                <button onClick={() => {
                    props.openModal();
                    props.setPizzaDetails(pizza)
                }}>Order</button>
            </div>
        </section>
    )
}

const mapStateToProps = (store) => {
    return {
        pizzas: store.pizzaList,
        pizza: store.pizza.pizza,
        isModalOpen: store.modal.isModalOpen
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setPizzaDetails: actions.setPizzaDetails,
        openModal: actions.openModal,
        closeModal: actions.closeModal,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage)