import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import PostList from './components/PostsList/PostsList';
import PostPage from './components/PostPage/PostPage';
import { fetchPosts } from './redux/slices/postSlice';
import { useAppDispatch } from './redux/hooks';

function App() {
    const [startPosts, setStartsPosts] = useState(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(startPosts > 80) return
        dispatch(fetchPosts(startPosts));
    }, [startPosts, dispatch]);

    function checkPosition() {
        const documentHeight = document.documentElement.scrollHeight;
        const screenHeight = window.innerHeight;
        const scrolled = window.scrollY;

        const threshold = documentHeight - screenHeight / 4;

        const position = scrolled + screenHeight;
        if (position >= threshold) {
            
            setStartsPosts((prev) => (prev += 20));
        }
    }

    function throttle(callee: () => void, timeout: number) {
        let timer: number = 0;

        return function perform(...args: []): void {
            if (timer) return;

            timer = setTimeout(() => {
                callee(...args);
                clearTimeout(timer);
                timer = 0;
            }, timeout);
        };
    }

    useEffect(() => {
        const optimize = throttle(checkPosition, 250);
        window.addEventListener('scroll', optimize);
        
        return () => window.removeEventListener('scroll',optimize)
    }, []);

    return (
        <div className="container">
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/post/:id" element={<PostPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
