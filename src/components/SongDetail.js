import React from "react";
import { connect } from "react-redux";


const SongDetail = ({clickedSong})=>{
  if (!clickedSong) return <div className="display-4 text-center alert alert-dismissible alert-success"><strong className="display-4 text-info text-center">"Please Select a Song"</strong></div>;

  return (
    <div className="card">
    <img className="card-img-top fade-in" src={clickedSong.url} alt={clickedSong.url} />
    <div className="card-body mb-2">
          <ul class="list-group">
          <li class="list-group-item bg-info text-white">
            <h3>{clickedSong.title}</h3>
            </li>
            <li class="list-group-item">
            <h4><b className="text-uppercase text-primary">ARTIST: </b>
              {clickedSong.artist}</h4>
            </li>
            <li class="list-group-item">
            <h4><b className="text-uppercase text-primary">Album: </b>
              {clickedSong.album}</h4>
            </li>
            <li class="list-group-item">
            <h4><b className="text-uppercase text-primary">Duration: </b>
              {clickedSong.duration}</h4>
            </li>
    </ul>
    </div>
    </div>

);





};
const mapStateToProps = state => {
  return { clickedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
