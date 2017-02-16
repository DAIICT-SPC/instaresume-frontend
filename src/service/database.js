const firebaseDB = firebase.database();

export default {

  users: {
    create(user, fn) {
      return firebaseDB.ref('users/' + user.id).set(user).then(fn(user));
    }
  },

  resumes: {
    create(user_id, resume) {
      return firebaseDB.ref('resumes/' + user_id).set(resume);
    }
  }

};
