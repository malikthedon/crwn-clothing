import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utility/config"

export const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        //call the method using the user object from the popup above
        //so that you can get it as userAuth inside of config.js
        const userDocRef = await createUserDocumentFromAuth(user);

    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
        </div>
    )
}