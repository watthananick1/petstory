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
            const response = await fetch('https://chat.openai.com/chat/8742fe4a-bb12-4c2f-ad33-99c8190d6955');
            const data = await response.json();
            setPosts(data);
            console.log("1")
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
