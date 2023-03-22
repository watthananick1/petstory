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
            try {
                const response = await fetch('http://192.168.1.4:4000/posts', {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
                const data = await response.json();
                setPosts(data);
              } catch (error) {
                console.error('Error fetching posts:', error);
              }
            console.log("1")
        };

        fetchPosts();
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            {posts.map((post) => (
                <Post post={post} Access to fetch at 'http://192.168.1.4:4000/posts' from origin 'http://192.168.1.4:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled./>
            ))}
        </div>
    );
};
