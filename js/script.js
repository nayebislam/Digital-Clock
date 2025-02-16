let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let day = document.getElementById("day")
let AmPm = document.getElementById("AmPm")


var monthname = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]


setInterval(()=>{
    let currentTime = new Date()
    let h = currentTime.getHours()
    let min = currentTime.getMinutes()
    let sec = currentTime.getSeconds()
    let d = currentTime.getDate()
    let m = currentTime.getMonth()
    let y = currentTime.getFullYear()
    let ampm = hours >=12 ? "PM" : "AM"
    h = h % 12
    h = h? h : 12
    day.innerHTML = `${d} ${monthname[m]} ${y}`
    hours.innerHTML = h.toString().padStart(2, "0")
    minutes.innerHTML = min.toString().padStart(2, "0")
    seconds.innerHTML = sec.toString().padStart(2, "0")
    AmPm.innerHTML = ampm
},1000)
