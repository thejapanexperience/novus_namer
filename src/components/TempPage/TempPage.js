import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../actions/tempActions"


export class VotePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nominations: {
        'Richard Mands': 0,
        'Neil Armstrong': 0,
        'Shaun Cox': 0,
      },
    };
  }



  saveFuelSavings = () => {
    this.props.actions.saveFuelSavings(this.props.fuelSavings)
  }

  calculateFuelSavings = e => {
    this.props.actions.calculateFuelSavings(
      this.props.fuelSavings,
      e.target.name,
      e.target.value
    )
  }

  render() {

    let { nominations } = this.state
    let arr = Object.keys(nominations)
    let votecards = arr.map(nom => {
      return(
        <VoteCard key={nom} nomination={{name: nom, score: nominations[nom]}} vote={this.vote}></VoteCard>
      )
    })
    return (
      <div>
        Vote!!
        {votecards}
      </div>
    )
  }
}

VotePage.propTypes = {
  // actions: PropTypes.object.isRequired,
  // fuelSavings: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return { fuelSavings: state.fuelSavings }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage)
