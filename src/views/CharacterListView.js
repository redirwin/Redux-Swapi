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
      return <div>Sorry, but something went wrong. {error.message}</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={characters} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  loading: state.loading,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
