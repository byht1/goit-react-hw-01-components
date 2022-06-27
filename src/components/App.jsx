import user from 'json/user';
import data from 'json/data';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
