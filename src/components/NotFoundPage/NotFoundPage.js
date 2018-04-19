import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="notFoundPageContainer">
      <div className="header">
        404 Page Not Found
        <br />
        <div className="text">
          <Link to="/"> Go back to homepage </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
