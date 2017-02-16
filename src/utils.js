import User from './models/user'

export default {
  createUserFromGoogleData(data) {
    User.id = data.uid;
    User.name = data.displayName;
    User.email = data.email;
    User.photoUrl = data.photoURL;

    return User;
  },

  downloadFile(sUrl, fileName) {
    //iOS devices do not support downloading. We have to inform user about this.
    if (/(iP)/g.test(navigator.userAgent)) {
      alert('Your device does not support files downloading. Please try again in desktop browser.');
      return false;
    }

    //If in Chrome or Safari - download via virtual link click
    if (window.directDownloadFile.isChrome || window.directDownloadFile.isSafari) {
      //Creating new link node.
      var link = document.createElement('a');
      link.href = sUrl;

      if (link.download !== undefined) {

          if (fileName === undefined) {
            //Set HTML5 download attribute. This will prevent file from opening if supported.
            fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
        }

        link.download = fileName;
      }

      //Dispatching click event.
      if (document.createEvent) {
        var e = document.createEvent('MouseEvents');
        e.initEvent('click', true, true);
        link.dispatchEvent(e);
        return true;
      }
    }

    // Force file download (whether supported by server).
    if (sUrl.indexOf('?') === -1) {
      sUrl += '?download';
    }

    window.open(sUrl, '_self');
    return true;
  }

}
