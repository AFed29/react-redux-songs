import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render(){
    console.log(this.props);
    return <div>SongList</div>
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

// connect returns a function, which in turn is called with the SongList arg
export default connect(mapStateToProps)(SongList);