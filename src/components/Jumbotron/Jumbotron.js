import React from 'react';
import "./Jumbotron.css";


const Jumbotron = () =>{
    return(
        <div className="jumbotron jumbotron-fluid backgroundForJum">
            <div className="container text text-center">
                <h1 className="display-3">Clicky Game!!</h1>
                <p className="lead">Click on an images to earn points, but don't click on any more than once!!</p>
            </div>
        </div>
    )
}

export default Jumbotron;

