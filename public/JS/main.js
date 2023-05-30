const reedemed_by = document.getElementsByClassName("redeemed-by");
if(reedemed_by) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    date.setDate(date.getDate() + 10);
    for (let index = 0; index < reedemed_by.length; index++) {
        const element = reedemed_by[index];
        
        element.innerHTML = `Must be redeemed by <span style="color: #fff;" class="font-black text-xs">${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</span> at Midnight Eastern time`;
    }
}

const viewcoupon = document.getElementsByClassName("coupon-view");
if(viewcoupon) {
    for (let index = 0; index < viewcoupon.length; index++) {
        const element = viewcoupon[index];
        
        element.addEventListener("click", (e) => {
            window.location.href = `/redeem?${e.target.id}`;
        })
    }
}

/*const video = document.getElementById("video");
if(video) {
    try {
        video.play()
    } catch (error) {
        
    }
}

setInterval(() => {
    if(video) {
        try {
            video.play()
        } catch (error) {
            
        }
    }
}, 50);*/