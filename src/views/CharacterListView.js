import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.dispatch(getCharacters());
  }

  render() {
    console.log(this.props);
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

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.characters,
  loading: state.loading,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
