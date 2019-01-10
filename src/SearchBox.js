import React from 'react';

const SearchBox = ({earchfield, searchChange}) => {

// s

  return (
    <div className="pa2">
      <input
			className="pa3 ba b--green bg-lightest-blue" 
			type="text" 
			placeholder="search robots"
			onChange={searchChange}
			/>
    </div>
  );
};

export default SearchBox;
