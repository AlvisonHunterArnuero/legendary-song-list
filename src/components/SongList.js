import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <>
        <div className="col-xl-4 col-lg-6 col-sm-6 col-12 mb-2">

            <button key={song.title}
              className="btn btn-danger btn-block text-uppercase text-left"
              onClick={() => this.props.selectSong(song)}
            >
              <i className="fa fa-play" aria-hidden="true"></i> &nbsp; {song.title}
            </button>
          </div>
          
        </>
      );
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
