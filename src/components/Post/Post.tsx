import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PostType } from '../../redux/slices/postSlice';

import styles from './Post.module.scss';

type PostProps = {
    post: Pick<PostType, 'id' | 'title' | 'body'>;
};

const Post: FC<PostProps> = ({ post }) => {
    return (
        <Link to={`/post/${post.id}`} className={styles.post}>
            <div className={styles.postTop}>
                <span className={styles.mark}>{post.id}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
            </div>

            <p className={styles.postText}>{post.body}</p>
        </Link>
    );
};

export default Post;
