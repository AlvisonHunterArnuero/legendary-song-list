import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ clickedSong }) => {
  console.log(clickedSong);
  if (!clickedSong)
    return (
      <div className="p-4 text-center bg-dark">
        <h1 className="lead display-4 text-uppercase text-white">
          Please Select a Song to start
        </h1>
      </div>
    );
  return (
    <div className="card">
      <div className="card-header text-danger">
        <div className="d-flex align-items-center mt-2">
          <h4 className="text-info text-uppercase">
            Currently playing {clickedSong.title}{" "}
          </h4>
          <div
            className="spinner-grow ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      </div>

      <div className="card-body mb-2">
        <div className="row">
          <div className="col-xl-6">
            <img
              className="card-img-top fade-in"
              src={clickedSong.url}
              alt={clickedSong.url}
            />
          </div>
          <div className="col-xl-6">
            {" "}
            <ul className="list-group">
              <li className="list-group-item text-white bg-success">
                <h1 className="text-uppercase text-primary">
                  TRACK INFORMATION
                </h1>
              </li>

              <li className="list-group-item">
                <h2 className="text-uppercase text-primary">ARTIST</h2>
              </li>
              <li className="list-group-item">
                <h4 className="text-uppercase text-muted">
                  {clickedSong.artist}
                </h4>
              </li>

              <li className="list-group-item">
                <h2 className="text-uppercase text-primary">Album</h2>
              </li>

              <li className="list-group-item">
                <h4 className="text-uppercase text-muted">
                  {clickedSong.album}
                </h4>
              </li>

              <li className="list-group-item">
                <h2 className="text-uppercase text-primary">Rating</h2>
              </li>

              <li className="list-group-item">
                <h4 className="text-uppercase text-muted">
                  {clickedSong.rating}
                </h4>
              </li>

              <li className="list-group-item">
                <h2 className="text-uppercase text-primary">Track Duration</h2>{" "}
              </li>

              <li className="list-group-item">
                <h4 className="text-uppercase text-muted">
                  {clickedSong.duration}
                </h4>
              </li>

              <li className="list-group-item">
                <audio
                  src={clickedSong.audio}
                  preload="true"
                  autoPlay={true}
                  controls={true}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { clickedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
