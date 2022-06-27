import user from 'json/user';
import data from 'json/data';
import friends from 'json/friends';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { styled } from '@emotion/styled';
const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <Friends friends={friends} />
    </div>
  );
};
