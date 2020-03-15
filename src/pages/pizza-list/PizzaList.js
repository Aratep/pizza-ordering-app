import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

import Card from '../../components/card/Card';
import './styles.scss'

function PizzaListPage(props) {
    const {pizzas} = props;

    return (
        <section className="pizza-list-page">
            <h2>Which pizza do you want?</h2>
            <div className="card-group">
                {
                    pizzas.pizzas.map(pizza => {
                        return <Link to={`/pizza/${pizza.id}`} key={pizza.id}>
                            <Card
                                src={pizza.src}
                                alt={pizza.name}
                                name={pizza.name}
                                weight={pizza.weight}
                                price={pizza.price}
                                type={pizza.type}
                                quantity={pizza.quantity}
                            />
                        </Link>
                    })
                }
            </div>
        </section>
    )
}

const mapStateToProps = (store) => {
    return {
        pizzas: store.pizzaList,
    }
};

export default connect(mapStateToProps, null)(PizzaListPage)