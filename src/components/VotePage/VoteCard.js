import React from 'react';
import PropTypes from 'prop-types';

const VoteCard = ({nomination, vote}) => {

  return (
    <div onClick={() => vote(nomination.name)}>
      {`${nomination.name} has scored ${nomination.score} votes.`}
    </div>
  );
};

VoteCard.propTypes = {
  // savings: PropTypes.object.isRequired
};

export default VoteCard;
