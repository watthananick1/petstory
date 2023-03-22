import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';// assuming you have already set up your firebase config

https://console.firebase.google.com/u/0/project/pet-story-f51e3/settings/general/web:OGI4ZmZhMzEtNDYzOC00NTA4LWI4OTQtNTM4ODYzYmE4NzNk

export interface PostData {
  id: string;
  firstName: string;
  lastName: string;
  comments: CommentData[];
  likes: string[];
  description: string;
  tagpet: string[];
}

export interface CommentData {
  id: string;
  text: string;
}

export const useRealtimePosts = (): [PostData[], boolean] => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const postsRef = database.ref('posts');
    postsRef.on('value', (snapshot) => {
      const postsData: { [key: string]: PostData } = snapshot.val() || {};
      const newPosts = Object.keys(postsData).map((key) => ({
        id: key,
        ...postsData[key],
      }));
      setPosts(newPosts);
      setIsLoading(false);
    });

    return () => {
      postsRef.off();
    };
  }, []);

  return [posts, isLoading];
};
