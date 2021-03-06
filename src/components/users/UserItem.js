import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = props => {
  const { avatar_url, login } = props.user;

  return (
    <div>
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='avatar'
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className='btn btn-success btn-sm my-1'>
          more
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
