import { signInWithGooglePopup } from 'utils/firebase'

const SignIn = () => {
    const logInWithGoogle = async () => {
        const resp = await signInWithGooglePopup();
        console.log(resp);
    }

    return (
        <div>
            <h1> Sign In Page1 </h1>
            <button onClick={logInWithGoogle}>
                Sign In With Google Popup
            </button>
        </div>
    )
}

export default SignIn;