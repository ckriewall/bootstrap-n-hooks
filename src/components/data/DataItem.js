import React from 'react';
import PropTypes from 'prop-types';

import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

const DataItem = ({ user: { login, avatar_url, html_url, type, score } }) => {
  return (
    <div className='card border-dark mb-3'>
      <div className='card-header'>{type}</div>
      <div className='card-body text-dark'>
        <h5 className='card-title'>
          <Image src={avatar_url} roundedCircle style={{ width: '60px' }} />{' '}
          {login}
        </h5>
        <i className='fab fa-github'></i>{' '}
        <a href={html_url} target='_blank' rel='noopener noreferrer'>
          Profile{' '}
        </a>{' '}
        / Score: <Badge variant='primary'> {score}</Badge>
      </div>
    </div>
  );
};

DataItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default DataItem;
