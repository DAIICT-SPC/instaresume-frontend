import User from './models/user'

export default {
    createUserFromGoogleData (data) {
        User.id = data.uid;
        User.name = data.displayName;
        User.email = data.email;
        User.photoUrl = data.photoURL;

        return User;
    }
}
