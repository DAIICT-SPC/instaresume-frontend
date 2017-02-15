export default {
    id: 0,
    name: "",
    email: "",
    photoUrl: "",

    fromGoogleData (data) {
        this.id = data.uid;
        this.name = data.displayName;
        this.email = data.email;
        this.photoUrl = data.photoURL;

        return this;
    }
};
