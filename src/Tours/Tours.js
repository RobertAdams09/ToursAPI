import React, { useState } from "react";
import Tour from "../Tour/Tour";

const Tours = ({tours, removeTour}) => {
    return (
        <div className="main-container">
            <div className="tours-title">
                <h1>Our Tours</h1>
                <hr />
            </div>
                <div className="tours-container">
                    {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                    })}
                </div>
        </div>
    );
};
export default Tours;