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
            const response = await fetch('http://192.168.1.4:4000/posts',https://stackoverflow.com/questions/42754388/uncaught-in-promise-typeerror-failed-to-fetch-and-cors-error
            // const data = await response.json();
            // setPosts(data);
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
