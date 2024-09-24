import React, { useState } from 'react'

const Search = ({ onSearch }) => {
    const [user, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(user);
    };

  return (
    <>
        <form onSubmit={handleSubmit} className='d-flex mb-4'>
            <input type="text" className='form-control' placeholder='Enter Github Profile...'
            value={user} onChange={(e) => setUser(e.target.value)} />
            <button type='submit' className='btn btn-primary ms-2'>Search</button>
        </form>
    </>

)
}

export default Search