import { FC } from 'react';
import styles from './FakePost.module.scss';

const FakePost: FC = () => {
    return <div className={styles.FakePost}>
        <span className={styles.loader}></span>
    </div>;
};

export default FakePost;
