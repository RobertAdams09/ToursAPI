import React, { useState } from "react";

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [read, setRead] = useState(false);
    return (
        <div className="single-tour-container">
            <img src={image} alt={name}/>
            <div className="single-tour-section">
                <div className="tour-info">
                    <h3>{name} <hr /></h3>
                    <h3 className="tour-price">
                        ${price}
                    </h3>
                </div>
                {/*Description Section with button */}
                <p>
                    {read ? info : `${info.substring(0,300)}...`}
                    <button onClick={() =>setRead(!read)}>
                        {read ? "Show Less": "Read More"}
                    </button>
                </p>
                <button className="delete-button" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    ); 
};

export default Tour;