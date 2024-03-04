import { FC } from 'react';
import Post from '../Post/Post';
import { useAppSelector } from '../../redux/hooks';

import styles from './PostsList.module.scss';
import { selectPosts, selectStatus } from '../../redux/selectors/postSelector';
import FakePost from '../FakePost/FakePost';
const fakeData = Array(20).fill('loading');
const PostList: FC = () => {
    const posts = useAppSelector(selectPosts);
    const status = useAppSelector(selectStatus);
    return (
        <div className={styles.postsList}>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            {status === 'loading' ? fakeData.map((_,index) => <FakePost key={index} />) : ''}
        </div>
    );
};

export default PostList;
