import PropTypes from 'prop-types';
import { FriendsList } from './Friend.styled';
import { FriendsListElements } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      <FriendsListElements friends={friends} />
    </FriendsList>
  );
};
