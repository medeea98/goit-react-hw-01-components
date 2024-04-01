import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendsList.module.css';

export const FriendsList = (props) => {
    return (
        <ul className={css['friend-list']}>
            {props.friends.map((friend) => (
                <FriendListItem key={friend.id} friends={friend} />
            ))}
        </ul>
    )
}