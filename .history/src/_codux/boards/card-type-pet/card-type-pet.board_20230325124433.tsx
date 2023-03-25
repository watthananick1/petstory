import { createBoard } from '@wixc3/react-board';
import { CardTypePet from '../../../components/card-type-pet/card-type-pet';

export default createBoard({
    name: 'CardTypePet',
    Board: () => <CardTypePet />
});
