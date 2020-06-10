
document.addEventListener('DOMContentLoaded', () => {
  let keys=  [65,83,68,70,71,72,74,75,76,186,222]
  let blacks2=[81,87,89,85,219,221]
  let blacks3=[69,82,84,73,79,80]
  let notes=[0,2,3,4,5,6,7,8,9]
  document.addEventListener('keydown', keyToNote)
  document.addEventListener('keyup',pressed)
  var key = document.querySelectorAll("#container .keys")
  var black2s = document.querySelectorAll("#container .black2s")
  var black3s = document.querySelectorAll("#container .black3s")
  
  function keyToNote(e){
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i+7].classList.add("pressed")
      }else if(e.keyCode === blacks2[i]){
        black2s[i+2].style.backgroundColor="grey";
      }else if(e.keyCode === blacks3[i]){
        black3s[i+3].style.backgroundColor="grey";
        
      }
    }
  }
  function pressed(e){
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i+7].classList.remove("pressed")
      }else if(e.keyCode === blacks2[i]){
        black2s[i+2].style.backgroundColor="black";
      }else if(e.keyCode === blacks3[i]){
        black3s[i+3].style.backgroundColor="black";
      }
    }
  }
  
  
})