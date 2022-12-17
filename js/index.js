window.onload = main()

function main(){
  let app = _("#App")
  let subH = _("#subHeader")
  _("#btn").css({
    top: "75%"
  })
  
  app.on("touchstart",function (e) {
    e.preventDefault()
  })
  _("#btn").on("touchstart",function (e) {
    _("#btn").css({
      background: "green",
      top : "76%",
    
    })
  })
  _("#btn").on("touchend",function (e) {
    _("#btn").css({
      background: "black",
      top: "75%"
    })
  
  })
  //subH.text("Hey Welcome")
  console.log("Debug")
}

function function_name(argument) {
  // body...
}
