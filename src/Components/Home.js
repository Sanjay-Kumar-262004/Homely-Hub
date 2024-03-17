import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <div className="card m-4" style={{ width: '25rem' }}>
        <img className="card-img-top" src="..." alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      <div className="card m-4" style={{ width: '25rem' }}>
        <img className="card-img-top" src="..." alt="Carda cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      
     

    </div>
  );
};

export default Home;