import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

function UserList() {
  // initialize state with useState
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  );
  const [isLoading, setIsLoading] = useState(false);

  // data fetching is a side effect, so apply useEffect()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]); //  useEffect triggers when url changes. That's only going to happen on button click.
  return (
    <Fragment>
      <input
        type='text'
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type='button'
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ListGroup>
          {data.hits.map(item => (
            <ListGroup.Item key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Fragment>
  );
}

export default UserList;
