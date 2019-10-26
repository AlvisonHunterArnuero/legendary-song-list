import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
  return (
    <div className="container bg-primary">
    <div className="card text-white bg-primary border-bottom mb-2 mt-2">
  <div className="card-body">
    <h4 className="card-title">My 90's Favorite Songs List</h4>
    <p className="card-text">Powered with React & Redux by Alvison Hunter</p>
  </div>
</div>



  <div className="row">
  <div className="col-xm-3 col-sm-3 col-lg-4 col-xl-4 mb-1">
 <SongList />
    </div>
    <div className="col-xm-9 col-sm-9 col-lg-8 col-xl-8 mb-1">
 <SongDetail />
    </div>
    </div>
    </div>
  );
}

export default App;
