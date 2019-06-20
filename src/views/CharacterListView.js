import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacter } from "../actions";
import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacter();
  }

  render() {
    console.log(this.props);
    if (this.props.isLoading) {
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
