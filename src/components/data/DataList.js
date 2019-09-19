import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const DataList = () => {
  // initialize state with useState
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('ckriewall');
  const [url, setUrl] = useState(
    'https://api.github.com/search/users?q=ckriewall'
  );
  const [isLoading, setIsLoading] = useState(false);

  // data fetching is a side effect, so apply useEffect()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data.items);
      setIsLoading(false);
    };
    fetchData();
  }, [url]); //  useEffect triggers when url changes. That's only going to happen on button click.

  const onClick = html_url => {
    window.open(html_url);
  };

  return (
    <Fragment>
      <h1>
        <i className='fab fa-github'></i> Search GitHub
      </h1>
      <p>
        Use <code>axios</code> to search users in the{' '}
        <a href='https://developer.github.com/v3/users/'>Gitub API.</a>
      </p>

      <InputGroup className='mb-3'>
        <FormControl
          placeholder='GitHub username'
          aria-label='GitHub username'
          aria-describedby='basic-addon2'
          onChange={event => setQuery(event.target.value)}
        />
        <InputGroup.Append>
          <Button
            disabled={isLoading ? true : false}
            variant='secondary'
            onClick={() =>
              setUrl(`https://api.github.com/search/users?q=${query}`)
            }
          >
            {!isLoading ? 'Search' : 'Loading...'}
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <br />
      {!isLoading && (
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th scope='col'>User</th>
              <th scope='col'>Score</th>
              <th scope='col'>Profile</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <Image
                    src={item.avatar_url}
                    roundedCircle
                    style={{ width: '40px' }}
                  />{' '}
                  <a
                    href={item.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.login}{' '}
                  </a>
                </td>
                <td>
                  <Badge variant='info'> {item.score}</Badge>
                </td>
                <td>
                  <Button
                    variant='primary'
                    size='sm'
                    onClick={() => onClick(item.html_url)}
                  >
                    Go
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Fragment>
  );
};

export default DataList;
