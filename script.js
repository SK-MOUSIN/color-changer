function colorChanger() {
var buttons = document.querySelectorAll(".button")
var body = document.querySelector("body")

buttons.forEach(function(ele) {
    ele.addEventListener("click", function(dets) {
        if(dets.target.id === "grey") {
            body.style.background = dets.target.id
            body.style.transition = "all ease 0.8s"
        }
        if(dets.target.id === "red") {
            body.style.background = dets.target.id
            body.style.transition = "all ease 0.8s"
        }
        if(dets.target.id === "blue") {
            body.style.background = dets.target.id
            body.style.transition = "all ease 0.8s"
        }
        if(dets.target.id === "yellow") {
            body.style.background = dets.target.id
            body.style.transition = "all ease 0.8s"
        }
    })
})
}
colorChanger()