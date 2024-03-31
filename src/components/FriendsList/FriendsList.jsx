import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendsList.module.css';

export const FriendsList = (props) => {
    return (
        <ul class={css['friend-list']}>
            <FriendListItem friends={props.friends[0]} />
            <FriendListItem friends={props.friends[1]} />
            <FriendListItem friends={props.friends[2]} />
            <FriendListItem friends={props.friends[3]} />
            <FriendListItem friends={props.friends[4]} />
        </ul>
    )
}