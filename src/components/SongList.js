import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song, index) => {
      return (
        <>
          <li key={index} className="list-group-item">
            {" "}
            <button
              key={song.title}
              className="btn btn-outline-danger btn-block text-uppercase text-left"
              onClick={() => this.props.selectSong(song)}
            >
              <i className="fa fa-play" aria-hidden="true"></i> &nbsp;{" "}
              {song.title}
            </button>
          </li>
        </>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 mb-2">
          {" "}
          <ul className="list-group bg-transparent song-list">
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
