// Kullanıcıdan isim alma
let userName = prompt("Adınız Nedir?")

let nameInfo = document.querySelector("#myName")

nameInfo.innerHTML = `${userName}`
nameInfo.innerHTML = userName.toUpperCase();
nameInfo.innerHTML = `${userName.length > 0 ? userName.toUpperCase() : alert("Bilgi Girilmedi!")}`


   function showTime() {
       let d = new Date();
       let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
       let time = document.querySelector("#myClock")

time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay() ]}`  
setTimeout(showTime, 1000);
}
showTime();