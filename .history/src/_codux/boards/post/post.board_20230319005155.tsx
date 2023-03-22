import { createBoard } from '@wixc3/react-board';
import { Post } from '../../../components/post/post';

export default createBoard({
    name: 'Post',
    Board: ({ post }) => <Post post={post} />
});
