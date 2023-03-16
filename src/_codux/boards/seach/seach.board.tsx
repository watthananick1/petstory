import { createBoard } from '@wixc3/react-board';
import { Seach } from '../../../components/seach/seach';

export default createBoard({
    name: 'Search',
    Board: () => <Seach />,
});
