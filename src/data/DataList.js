import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import DataItem from './DataItem';

function DataList() {
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
  return (
    <Fragment>
      <h1>Search an API</h1>
      <p>
        Use <code>axios</code> to search users in the{' '}
        <a href='https://developer.github.com/v3/users/'>Gitub API.</a>
      </p>
      <input
        type='text'
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type='button'
        onClick={() => setUrl(`https://api.github.com/search/users?q=${query}`)}
      >
        Search
      </button>{' '}
      URL: <code>{url}</code>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {/* render Github user list */}
          {data.map(item => (
            <DataItem user={item} key={item.id} />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default DataList;
