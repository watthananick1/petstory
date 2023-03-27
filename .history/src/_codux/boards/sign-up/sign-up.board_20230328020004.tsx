import { createBoard } from '@wixc3/react-board';
import SignUp from '../../../components/sign-up/signup';

export default createBoard({
    name: 'SignUp',
    Board: () => <SignUp />
});
