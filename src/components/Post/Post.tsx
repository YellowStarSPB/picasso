import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PostType } from '../../redux/slices/postSlice';

import styles from './Post.module.scss';

type PostProps = {
    post: Pick<PostType, 'id' | 'title' | 'body'>;
    longText: boolean;
};

const Post: FC<PostProps> = ({ post, longText }) => {
    return (
        <div className={styles.post}>
            <div className={styles.postTop}>
                <span className={styles.mark}>{post.id}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
            </div>

            <p className={`${styles.postText} ${longText ? styles.longText : ''}`}>
                {post.body}
            </p>
            {longText && <Link className={styles.button} to={`/post/${post.id}`}>Подробнее</Link>}
        </div>
    );
};

export default Post;
