import styles from './posts.module.scss';
import classNames from 'classnames';
import { Post, PostData } from '../post/post';
import { useEffect, useState } from 'react';

export interface PostsProps {
    className?: string;
}

export const Posts = ({ className }: PostsProps) => {
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            console.log("1")
            const response = await fetch('http://localhost:4000/posts');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    );
};
