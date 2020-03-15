import React from 'react'

import './styles.scss'

const Card = ({draggable, src, id, name, weight, price, type, quantity, style, imgStyle, actions, onAdd, onRemove, onDrop, onDragOver }) => {
    return (
        <div className="card" style={style}>
            <div style={{
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                ...imgStyle
            }}
                className="card-image-container"
                id={id}
                onDrop={e => draggable ? onDrop(e) : console.log('not draggable')}
                onDragOver={e => draggable ? onDragOver(e) : console.log('not draggable')}
            />
            <div className="card-body">
                <label><b>Name</b> <span>{name}</span></label>
                <label><b>weight (per pizza)</b> <span>{`${weight} G`}</span></label>
                <label><b>price</b> <span>{`${price} AMD`}</span></label>
                <label><b>type</b> <span>{type}</span></label>
                <label><b>quantity</b> <span>{quantity}</span></label>
            </div>
            {
                actions && <div className="card-actions">
                    <span onClick={onAdd}>+</span>
                    <span onClick={onRemove}>-</span>
                </div>
            }
        </div>
    )
}

export default Card