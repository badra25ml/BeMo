window.onload = function(){
  document.getElementById('change').onclick = function test(e){
    console.log(e)
    var pict = new XMLHttpRequest();
    console.log(pict)
    pict.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById('featureImg').innerHTML = this.responseText;
      }
    };
    pict.open("GET", "ajax_info.txt", true);
    pict.send();

    // Change images
    function changeImage(){
      document.getElementById('featureImg').src = pict;
    };
  }
};
