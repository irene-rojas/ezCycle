import React from 'react';

// Add the Hits component to our import
import { Hits } from 'react-instantsearch-dom';

// [...]

function Search() {
  return (
    <div className="container">
      <Hits  />
      {/* <Hits hitComponent={Product} /> */}
    </div>
  );
}
export default Search;