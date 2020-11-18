function speedcal(){
    let speed = document.getElementById("speedinput").value
    let size = document.getElementById("sizeinput").value
    let answer = size / (speed / 8)
    alert(answer + " secounds or " + answer / 60 + " minutes")
}