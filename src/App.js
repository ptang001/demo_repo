import './App.css';
import React, { useState } from 'react';

function App() {
  const [meter, setMeter] = useState(0);
  const [price, setPrice] = useState(0);

  const surface = () => {
    setPrice(15.90 * meter);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">EstimationChauffageM2</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Calcul</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="banner">
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Estimation coût chauffage</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="email">Mètre carré</label>
                  <input type='number' className="form-control" id="number" onChange={e => setMeter(e.target.value)} aria-describedby="numberHelp" value={meter} />
                  <small id="numberHelp" className="form-text text-muted">Le mètre carré doit être supérieur à 0.</small>
                </div>
                <div id="prix">{price} €</div>
                <button onClick={surface} className="btn btn-primary">Calculer</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid text-center mt-5 py-4 bg-light">
        <p>&copy; 2024 Company Name</p>
      </footer>
    </div>
  );
}

export default App;
