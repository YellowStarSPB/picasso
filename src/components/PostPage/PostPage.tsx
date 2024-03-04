import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectPosts } from '../../redux/selectors/postSelector';

import styles from './PostPage.module.scss';

function PostPage() {
    const { id } = useParams();
    const posts = useAppSelector(selectPosts);
    const currentPost = posts.find((post) => post.id === Number(id));
    const navigate = useNavigate();
    const back = () => navigate(-1);
    return (
        <div className={styles.postPage}>
            <button onClick={back} className={styles.back}>
                Назад
            </button>
            <h1 className={styles.postTitle}>{currentPost?.title}</h1>
            <p className={styles.id}>ID: {currentPost?.id}</p>
            <p className={styles.user}>UserID: {currentPost?.userId}</p>
            <p className={styles.text}>{currentPost?.body}</p>
        </div>
    );
}

export default PostPage;
