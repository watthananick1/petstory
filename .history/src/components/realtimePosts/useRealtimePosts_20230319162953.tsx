import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/cdatabase';// assuming you have already set up your firebase config

const firebaseConfig = {
    apiKey: "AIzaSyCFUBWxesLk-BX8KwwQfaI8Gs3cUCcBVWA",
    authDomain: "pet-story-f51e3.firebaseapp.com",
    databaseURL: "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pet-story-f51e3",
    storageBucket: "pet-story-f51e3.appspot.com",
    messagingSenderId: "576128138584",
    appId: "1:576128138584:web:c52f7384461830b1eeb92d"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

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
