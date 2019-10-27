import React from "react";
import { connect } from "react-redux";


const SongDetail = ({clickedSong})=>{
  if (!clickedSong) return <div className="display-4 text-center alert alert-dismissible alert-danger"><strong className="display-4 text-primary text-center">Please Select a Song</strong></div>;

  return (
    <div className="card">
         <div class="card-header text-danger">
              <div className="d-flex align-items-center mt-2">
                  <h4 className="text-info text-uppercase">Currently playing {clickedSong.title} </h4>
                  <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
              </div>
        </div>

    
 
    <div className="card-body mb-2">
    <div className="row">
      <div className="col-xl-6"><img className="card-img-top fade-in" src={clickedSong.url} alt={clickedSong.url} /></div>
      <div className="col-xl-6">          <ul class="list-group">
      <li class="list-group-item text-white bg-success">
          <h1><b className="text-uppercase text-primary">TRACK INFORMATION</b></h1>
            </li>

          <li class="list-group-item text-white">
          <h2><b className="text-uppercase text-primary">ARTIST</b></h2>
            </li>
            <li class="list-group-item text-white"><h4 className="text-uppercase text-muted">{clickedSong.artist}</h4></li>

            <li class="list-group-item">
            <h2><b className="text-uppercase text-primary">Album</b></h2>
            </li>

            <li class="list-group-item text-white"><h4 className="text-uppercase text-muted">{clickedSong.album}</h4></li>


            <li class="list-group-item">
            <h2><b className="text-uppercase text-primary">Track Duration</b>
              </h2>
            </li>

            <li class="list-group-item text-white"><h4 className="text-uppercase text-muted">{clickedSong.duration} Minutes</h4></li>

            <li class="list-group-item">
            <audio src={clickedSong.audio} preload controls autoplay="autoplay" />
            </li>      
    </ul>
    </div>
    </div>
    

    </div>
    </div>

);





};
const mapStateToProps = state => {
  return { clickedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
