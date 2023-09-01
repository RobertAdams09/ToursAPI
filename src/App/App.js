import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Tours from "../Tours/Tours";
const Url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const remainingTours = tours.filter((tour) => tour.id !== id);
    setTours(remainingTours);
    };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const fetchData = await fetch(Url);
      const tours = await fetchData.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log('Somehow you fucked this up!');
    }

  };
  useEffect(() =>{
    fetchTours();
  }, []);

  if(loading == true){
    return (
      <section>
        <Loading />
      </section>
    );
  }

  if(tours.length === 0) {
    return (
      <section>
        <div className="tours-title">
          <h1>No Tours Left</h1>
          <hr />
          <button className="refresh-button" onClick={fetchTours}>Refresh</button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <Tours tours={tours} removeTour={removeTour}/>
    </section>
  );
}

export default App;