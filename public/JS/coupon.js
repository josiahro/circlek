const item_image = document.getElementById("product-image");
if(item_image) {
    let product = location.search.split("?")[1];
    item_image.src = `../Assets/product_images/${product.toLowerCase()}.png`;
    document.getElementById("item").innerText = `${product.replaceAll("-", " ")}`
}

const redeemed_by = document.getElementById("redeemed-by");
if(redeemed_by) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    date.setDate(date.getDate() + 10);
    redeemed_by.innerText = `MUST BE REDEEMED BY ${monthNames[date.getMonth()].toUpperCase()} ${date.getDate()}, ${date.getFullYear()} AT MIDNIGHT EASTERN TIME`
}

window.addEventListener('load', function () {
  let product = location.search.split("?")[1];
  document.getElementById(`${product}-Code`).style.display = "block";
});

const free = document.getElementById("free");
if(free) {
    if(location.search.split("?")[1].includes("DLR")) {
        const pDiscount = location.search.split("?")[1].split("DLR")[0];
        if(location.search.split("?")[1].includes("PER-L")) {
            free.innerText = "";
        } else {
            free.innerText = `${pDiscount.split("-")[0]}$ OFF`;
        }

        const item = document.getElementById("item");
        if(item) {
            if(location.search.split("?")[1].includes("PER-L")) {
                item.innerText = item.innerText.replace("DLR ", "$")
                item.innerText = item.innerText.replace(" PER L", "/PER L");
            } else {
                item.innerText = item.innerText.split("DLR")[1];
            }
        }
    }
}

function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
}

const redeemed_time = document.getElementById("redeemed-time");
if(redeemed_time) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    redeemed_time.innerText = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${tConvert(date.toTimeString().slice(0, 8))}`
}

document.getElementById('timer').innerHTML =
  5 + ":" + 00;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

