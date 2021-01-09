console.log("Loaded JS!")

function clock() {
    const fullDate = new Date();
    //var hours = 0
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    //console.log(fullDate)

    if (mins < 10) {
        mins = "0" + mins
    }
    if (secs < 10) {
        secs = "0" + secs
    }

    if (hours > 11) {
        AmOrPm = "PM"
    } else {
        AmOrPm = "AM"
    }

    if (hours == 0) { 
        hours = 12}

    if (hours > 12) {
        hours = hours - 12  
    }

    document.getElementById('time').innerHTML = `${hours}:${mins}:${secs} ${AmOrPm}`
    console.log(`Time: ${hours}:${mins}:${secs} ${AmOrPm}`)
}

setInterval(clock,1000);