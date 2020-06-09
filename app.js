
let keys=[65,83,68,70,71,72,74,75,76,186]
let notes=[0,2,3,4,5,6,7,8,9]
$("#piano .octane").on("keypress",function(event){
  keys.forEach(function(keys){
    console.log(event)
  })
})
  