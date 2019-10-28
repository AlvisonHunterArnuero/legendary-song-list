import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';



const App = () => {
  return (
  <div className="container">
            <div className="card text-white bg-primary border-primary mb-2 mt-2">
                  <div className="card-body">
                    <h4 className="card-title">My 15 favorites 90's Songs</h4>
                    <p className="card-text">Powered with React & Redux by Alvison Hunter</p>
                  </div>
            </div>



          <div className="row">
                  <div className="col-12 col-lg-12 col-xl-12 mb-1">
                    <SongList />
                  </div>
          </div>
          <div className="row">
              <div className="col-12 col-lg-12 col-xl-12 mb-1">
              <SongDetail />
              </div>
          </div>
    </div>
  );
}

export default App;
