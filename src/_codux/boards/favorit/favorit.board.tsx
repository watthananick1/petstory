import { createBoard } from '@wixc3/react-board';
import { Favorit } from '../../../components/favorit/favorit';

export default createBoard({
    name: 'Favorit',
    Board: () => <Favorit />
});
