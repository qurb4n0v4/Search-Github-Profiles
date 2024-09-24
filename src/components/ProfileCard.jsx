import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="card shadow-sm p-4 mb-4" style={{ maxWidth: '800px', margin: 'auto', backgroundColor: '#ebd4fe' }}>
      <div className="d-flex align-items-center">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="rounded-circle"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <div className="ms-4">
          <h4 className="fw-bold">{profile.name}</h4>
          <p className="text-muted">{profile.bio ? profile.bio : "No bio available"}</p>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <div>
          <strong>Followers</strong>
          <p>{profile.followers}</p>
        </div>
        <div>
          <strong>Following</strong>
          <p>{profile.following}</p>
        </div>
        <div>
          <strong>Repositories</strong>
          <p>{profile.public_repos}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="row">
          {profile.repos?.slice(0, 6).map((repo) => (
            <div key={repo.id} className="col-md-4 col-sm-6 mb-3">
              <div
                className="repo-card p-2 shadow-sm rounded"
                style={{
                  backgroundColor: '#dcd7fe',
                  borderRadius: '10px',
                  fontSize: '14px',
                  color: '#4c1d95'
                }}
              >
                {repo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
