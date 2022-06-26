import PropTypes from 'prop-types';
import { ProfileWraper, Img, Name, Text } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar }) => {
  return (
    <ProfileWraper>
      <Img src={avatar} alt={username} />
      <Name>{username}</Name>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </ProfileWraper>
  );
};

Event.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
