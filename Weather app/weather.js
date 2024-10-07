const input = document.getElementById("input");
const Btn = document.getElementById("btn");



const Api_Key = "151399c043ae46f1b47122010240610";


const getData = async(searchValue) => {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=${searchValue}&aqi=1`);
    const jsonData = await data.json(data);
    // console.log(jsonData.current.condition.icon);

    // location.reload();
    const Temp = jsonData.current.temp_c;
    const result = Math.round(Temp); // 13.2 ----> convert 13


    document.querySelector(".temprature2").innerHTML = result + "&deg;";
    document.querySelector(".City_name").innerHTML = jsonData.location.name;
    document.querySelector(".Country").innerHTML = jsonData.location.country;



    const image = document.createElement("img");
    image.src = `${jsonData.current.condition.icon}`;

    const a = document.querySelector(".icon");
    a.append(image);
    console.log(a);







    document.querySelector(".mousam").innerHTML = jsonData.current.condition.text;
    document.querySelector(".feels_Like").innerHTML = `Feels Like : ${jsonData.current.feelslike_c}` + " &deg;C ";
    document.querySelector(".Humidity").innerHTML = `Humidity : ${jsonData.current.humidity}` + "%";
    document.querySelector(".speed").innerHTML = `Wind Speed : ${jsonData.current.wind_kph}` + "kph";

    input.value = "";
};




// document.querySelector(".speed").innerHTML = `Wind Speed : ${jsonData.current.wind_kph} kph`;


// console.log(getData())
Btn.addEventListener("click", function() {
    const searchValue = input.value;
    getData(searchValue);
});