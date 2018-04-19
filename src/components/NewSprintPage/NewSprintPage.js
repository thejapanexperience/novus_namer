import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/newSprintActions';

export class NewSprintPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nominations: {
        'Richard Mands': 0,
        'Neil Armstrong': 0,
        'Shaun Cox': 0
      }
    };
  }

  saveFuelSavings = () => {
    this.props.actions.saveFuelSavings(this.props.fuelSavings);
  };

  calculateFuelSavings = e => {
    this.props.actions.calculateFuelSavings(this.props.fuelSavings, e.target.name, e.target.value);
  };

  render() {
    let { nominations } = this.state;
    let arr = Object.keys(nominations);

    return (
      <div className="newSprintContainer">
        <div className="text">New Sprint</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewSprintPage);
