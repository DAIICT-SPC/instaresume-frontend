const firebaseDB = firebase.database();

export default {

  users: {
    create(user, fn) {
      return firebaseDB.ref('users/' + user.id).set(user).then(fn(user));
    }
  },

  resumes: {
    get(user_id, fn) {
      return firebaseDB.ref('resumes/' + user_id).once('value').then(function(snapshot) {
        let resume = JSON.parse(snapshot.val());
        fn(resume);
      });
    },
    create(user_id, resume, fn) {
      let resumeString = JSON.stringify(resume);
      return firebaseDB.ref('resumes/' + user_id).set(resumeString).then(fn(resume));
    }
  }

};
