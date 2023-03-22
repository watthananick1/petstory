import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { Post } from '../post/post';

export const Posts = ({ className }: PostsProps) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    // Get reference to the posts collection in the database
    const dbRef = firebase.database().ref('posts');

    // Add listener to the posts collection
    dbRef.on('value', (snapshot) => {
      const newPosts: PostData[] = [];

      // Iterate over each post in the snapshot and add it to newPosts array
      snapshot.forEach((postSnapshot) => {
        const postData = postSnapshot.val();
        newPosts.push(postData);
      });

      // Update state with newPosts array
      setPosts(newPosts);
    });

    // Cleanup function to remove listener when component unmounts
    return () => {
      dbRef.off();
    };
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
