import { createBoard } from '@wixc3/react-board';
importSignUpfrom '../../../components/sign-up/sign-up';

export default createBoard({
    name: 'SignUp',
    Board: () => <SignUp />
});
