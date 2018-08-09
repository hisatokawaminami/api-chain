export class Dino{
  getDino() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getGiphy(dinoName) {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.giphy.com/v1/gifs/search?api_key=SMknCGb2tVCdu4L6cV5BF1TZb7FMk7M0&q=${dinoName}&limit=100&offset=0&rating=G&lang=en`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

}
