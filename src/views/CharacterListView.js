import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    const { error, loading, characters } = this.props;
    if (loading) {
      return <div>Loading characters...</div>;
    }

    if (error) {
      console.log(`The error is: ${error}`);
      return <div>Sorry, but there was an error. Please try again.</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={characters} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.charsReducer.error,
  loading: state.charsReducer.loading,
  characters: state.charsReducer.characters
});

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
