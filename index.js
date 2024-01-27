let a;
let date;
let time;
const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
};

setInterval(() => {
    a = new Date();
    let date = a.toLocaleDateString(undefined, options);
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>on" + date;
}, 1000);

function countries() {
     tz = africa;
     str=new Date().toLocaleDateString("en-NZ",
     {timeZone:tz,timeZoneName:"short"})
     document.getElementById("browse").innerHTML=str + " ," + tz
}