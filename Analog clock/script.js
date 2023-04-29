setInterval(() => {
    d = new Date();
    hour_time = d.getHours();
    min_time = d.getMinutes();
    sec_time = d.getSeconds();

    hrotation = 30*hour_time + min_time/2;
    mrotation = 6*min_time;
    srotation = 6*sec_time;


    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;



}, 1000);