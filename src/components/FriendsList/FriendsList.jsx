import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendsList.module.css';

export const FriendsList = (props) => {
    return (
        <ul class={css['friend-list']}>
            {props.friends.map((friend) => (
                <FriendListItem friends={friend} />
            ))}
        </ul>
    )
}