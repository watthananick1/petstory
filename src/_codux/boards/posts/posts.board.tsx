import { createBoard } from '@wixc3/react-board';
import { Posts } from '../../../components/posts/posts';

export default createBoard({
    name: 'Posts',
    Board: () => <Posts />
});
