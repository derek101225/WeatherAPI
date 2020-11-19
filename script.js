document.getElementById("Btn").addEventListener("click", function() {
    event.preventDefault()
    let zip = document.getElementById('input').value
    
    let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=4dedb8cc8c2383f6b531b4848e6b12f0&units=imperial`
    

    fetch(baseURL)
        .then(response => response.json())
        .then(json => display(json))

    function display(json){
        const temp = json.main.temp
        const loc = json.name
        const main = json.weather[0].description
        const low = json.main.temp_min
        const high = json.main.temp_max
        const icon = json.weather[0].icon
        const imgURL = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png'
        document.getElementById('temp').innerHTML = 'Temperature:    '  + Math.ceil(temp) + '&#8457'
        document.getElementById('loc').innerHTML = "Loction: " + loc
        document.getElementById('lowhigh').innerHTML = "Low: " + Math.ceil(low)+'&#8457' + " " + "High: " + Math.ceil(high)+'&#8457'
        document.getElementById('main').innerHTML = main + ' today'
        document.getElementById('icon').src = imgURL;
    }
});

document.getElementById("test").style.display ="none";

function openTest() {
    document.getElementById("test").style.display = "block";
}

document.getElementById('Btn').addEventListener('click', openTest);





  




    