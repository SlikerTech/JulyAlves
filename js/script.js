

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
  nextImage();
}, 442000)

function nextImage(){
  count++;
  if(count>3){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;

}