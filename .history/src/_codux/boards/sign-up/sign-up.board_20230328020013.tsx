import { createBoard } from '@wixc3/react-board';
import SignUp from '../../../components/signup/signup';

export default createBoard({
    name: 'SignUp',
    Board: () => <SignUp />
});
