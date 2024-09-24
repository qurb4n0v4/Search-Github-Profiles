import React, { useState } from 'react';
import useGithubProfiles from './hooks/hooks';
import Search from './components/Search';
import ProfileCard from './components/ProfileCard';

function App() {
  const [user, setUser] = useState('');
  const { profile } = useGithubProfiles(user);

  const handleSearch = (user) => {
    setUser(user);
  }

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <h1 className="text-center my-4">Github Profile Search</h1>
        <Search onSearch={handleSearch} />
        {profile && <ProfileCard profile={profile} />}
      </div>
    </>
  )
}

export default App
