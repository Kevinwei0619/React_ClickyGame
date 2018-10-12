import React from 'react';
import './ClickyCard.css'

const style = {
    width: "100%",
    height: "100%",
    backgroundColor: 'blue'
};


export default class ClickyCard extends React.Component{
    constructor(props) {
        super(props);
        this.state =({
            test:1
        });
    
    };

    render(){


    // console.log(this.props.id);
    
        return (
            <div className="card text-center mag"  key={this.props.id}>
                <div className="card-body" style={style} >
                    <img
                        className="clickImage"
                        alt={this.props.name}
                        src={this.props.image}
                        key={this.props.id}
                        onClick={() => this.props.handleClickevent(this.props.id)}/>
                </div>
            </div>
        )

    }


    // Home.propTypes ={
    //     name:this.propTypes.string,
    //     handleClickevent:this.propTypes.func
    // }

}




// export default ClickyCard;
