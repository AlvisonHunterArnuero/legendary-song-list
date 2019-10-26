import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <>
          <li class="list-group-item bg-primary text-white" key={song.title}>
            <button
              className="btn btn-outline-danger btn-block text-uppercase"
              onClick={() => this.props.selectSong(song)}
            >
              {song.title}
            </button>
          </li>
        </>
      );
    });
  }

  render() {
    return (
      <div className="card">
          <ul class="list-group text-center">{this.renderList()}</ul>
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
