import React from 'react';

const Jobs = () => {
  const [str, setStr] = React.useState('');

  const handleChange = (event) => {
    return setStr(event.target.value);
  };

  return (
    <>
      <form className='job-form'>
        <input
          type='text'
          placeholder='search location'
          value={str}
          onChange={handleChange}
        />
        <button>search</button>
      </form>
    </>
  );
};

export default Jobs;
