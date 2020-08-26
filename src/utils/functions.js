function getDate() {
    const today = new Date();

    // Date Format
    let date = "";
    date = today.getFullYear() + '-'
    if (today.getMonth() + 1 < 10) {
        date += '0';
    }
    date += (today.getMonth() + 1) + '-';
    if (today.getDate() < 10) {
        date += '0';
    }
    date += today.getDate();
    return date;
}

function toggleLinks() {
    document.getElementById("dropdown-menu3").classList.add("is-active");
}

function refreshPage() {
    document.location.reload(true);
}

function getTime() {
    const today = new Date();
    time = "";
    if (today.getHours() < 10) {
        time += "0";
    }
    time += today.getHours() + ":";
    if (today.getMinutes() < 10) {
        time += "0";
    }
    time += today.getMinutes();
    return time; //error here :3
}

function getHour(time) {
    return time.split(":")[0];
}



