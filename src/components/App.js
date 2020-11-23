import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="card text-white bg-primary border-primary mb-2 mt-2">
        <div className="card-body">
          <h4 className="card-title">Some of my Favorites 90's Songs</h4>
          <p className="card-text">
            Powered by Alvison Hunter Arnuero using React & Redux.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
          <SongDetail />
        </div>
        <div className="col-12 col-md-12 col-lg-4 col-xl-4">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
