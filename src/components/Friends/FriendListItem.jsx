import PropTypes from 'prop-types';
import { FriendsElements, Online, Offline, Name, Img } from './Friend.styled';

export const FriendsListElements = friends => {
  return friends.friends.map(x => {
    return (
      <FriendsElements key={x.id}>
        {x.isOnline ? <Online /> : <Offline />}
        <Img src={x.avatar} alt={x.name} width="48" />
        <Name>{x.name}</Name>
      </FriendsElements>
    );
  });
};
