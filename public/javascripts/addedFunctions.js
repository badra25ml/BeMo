window.onload = function(){
  // change picture

document.getElementById('change').onclick = function() {

  const xhr = new XMLHttpRequest(),
      method = "GET",
      url = "/";

  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      var status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        document.getElementById("featureImg").src = "images/contact-us.png"
      } else {
        // Oh no! There has been an error with the request!
      }
    }
  };
  xhr.send();
 }
 // Setting meta to noindex

document.getElementById("switcher").onclick = function(){
var x = document.getElementsByTagName("META");
var txt = "";
var i;
for (i = 0; i < x.length; i++) {
  if( x[i].name === 'robots' && x[i].content !== 'noindex'){
    x[i].content = 'noindex';
  }else{

   }
  }
 }
};
