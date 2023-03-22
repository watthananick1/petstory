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
            const response = await fetch('http://192.168.1.4:4000/posts', {
                method: "GET",
                headers: {
                    "Content-Type": "text/plain"
                },
            }).then(function(response) {
                return response.json();
            })
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
