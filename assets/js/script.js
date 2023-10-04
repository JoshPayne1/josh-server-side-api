var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
var apikey = "834179377a87e3497eb8a305fec44886";
var cityname = ("Dallas")
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?weather?q=' + cityName + '&appid' + apikey;


fetch(requestUrl)
    .then(function(response) {
    return response.json();
})
    .then(function (data){
        console.log(data)
    });
}

fetchButton.addEventListener('click', getApi);

