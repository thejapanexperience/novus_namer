import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/newSprintActions';

export class PreviousSprintsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="previousSprintsContainer">
        <div className="text">Previous Sprints</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { fuelSavings: state.fuelSavings };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousSprintsPage);
