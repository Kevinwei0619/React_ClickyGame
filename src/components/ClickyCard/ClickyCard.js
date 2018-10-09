import React from 'react';
import './ClickyCard.css'

const style = {
    width: "100%",
    height: "100%",
    backgroundColor: 'blue'
};

const ClickyCard = props => {
    return (
        <div className="card text-center mag"  >
            <div className="card-body" style={style} >
                <img
                    className="clickImage"
                    alt={props.name}
                    src={props.image}
                    key={props.id}
                    onClick={() => props.handleClickevent(props.id)}/>
            </div>
        </div>
    )
}

export default ClickyCard;
