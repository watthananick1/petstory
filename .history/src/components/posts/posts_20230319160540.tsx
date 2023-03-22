import styles from './posts.module.scss';
import classNames from 'classnames';
import firebase from 'firebase/app';
import 'firebase/database';
import { Post} from '../post/post';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface PostsProps {
    className?: string;
}
export interface PostData {
    id: string;
    firstName: string;
    lastName: string;
    Comment: object;
    like: any[];
    description: string;
    tagpet: string[];
}



export const Posts = ({ className }: PostsProps) => {
    const [posts, setPosts] = useState<PostData[]>([]);
    
    // Initialize Firebase
    const config = {
    apiKey: 'https://console.firebase.google.com/u/0/project/pet-story-f51e3/settings/general/web:OGI4ZmZhMzEtNDYzOC00NTA4LWI4OTQtNTM4ODYzYmE4NzNk',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    };
    firebase.initializeApp(config);
  

    useEffect(() => {
        const dbRef = firebase.database().ref('posts');
        const fetchPosts = async () => {
            try {
              const response = await axios.get<PostData[]>(
                'http://10.34.40.58:4000/posts',
                {
                  withCredentials: true,
                }
              );
              console.log(response.data);
              setPosts(response.data);
            } catch (error) {
                console.log(error);
              if (axios.isAxiosError(error)) {
                console.error('Error fetching posts:', error.message);
              } else {
                console.error('Unknown error:', error);
              }
            }
          };
      
          fetchPosts();
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            {posts.map((post) => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    );
};
