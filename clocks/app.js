const clock = document.querySelectorAll('.show-time-el');

const clockSetting = function() {

    const time = new Date();
            let h = time.getHours();
            let m = time.getMinutes();
            let s = time.getSeconds();
            if(h>12) {
                h = h - 12 ;
                clock[3].innerHTML = "PM"
            } 
            else {
                clock[3].innerHTML = "AM"
            }
            h = h<10 ? `0${h}` : h ;
            m = m<10 ? `0${m}` : m ;
            s = s<10 ? `0${s}` : s ;
            clock[0].textContent = h ;
            clock[1].textContent = m ;
            clock[2].textContent = s ;
};
setInterval(clockSetting,1000);