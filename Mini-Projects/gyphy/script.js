var host = 'http://api.giphy.com';
var path = '/v1/gifs/search?';
var apiKey = '&api_key=E2al1ELsgPz3UxvXlJ3mdMsBVcFRezZm';
var searchTerm = '';
var completeSearchTerm = '';
var myGifs = new Array();

var counter = Math.sign(-1);

function getUserInput() {
    var userInput = document.getElementById("userInput").value;
    searchTerm = userInput;
    completeSearchTerm = '&q=' + searchTerm;
}

function getData(btn) {

    if (localStorage.getItem(searchTerm) === null) {

        var url = host + path + apiKey + completeSearchTerm;
        var gifList = [];
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', url);

        xhttp.onload = function () {

            var ourData = "";
            if (xhttp.status == 200 && xhttp.readyState == 4) {
                ourData = JSON.parse(xhttp.responseText);
            }

            gifList = buildArrayOfGifs(ourData.data);

            myGifs[0] = gifList;
            localStorage.setItem(searchTerm, myGifs)

            console.log('new api call' + ' search term: ' + searchTerm);
            channelChanger(myGifs, btn);
        };
        xhttp.send();
    } else {


        if (searchTerm) {
            var localGifs = localStorage.getItem(searchTerm);
            var res = localGifs.split(",");
            console.log('from local storage');

            channelChanger(res, btn);
        }
    }
}

function channelChanger(list, btn) {

    if (btn === 'up') {
        counter++;
        if (counter > (list.length - 1)) {
            counter = Math.sign(-1);
            document.getElementById("gif").src = "img/rb.jpeg";
        } else {
            document.getElementById("gif").src = list[counter];
            console.log(counter + '\n' + '\n');
        }
    }
    if (btn === 'down') {
        counter--;
        if (counter <= Math.sign(-1)) {
            document.getElementById("gif").src = "img/rb.jpeg";
            counter = 25;
            console.log(counter + '\n' + '\n');
        } else {
            document.getElementById("gif").src = list[counter];
            console.log(counter + '\n' + '\n');
        }
    }
}

function buildArrayOfGifs(data) {
    var endPath = '/giphy.gif';
    var gifStrings = [];

    for (i = 0; i < data.length; i++) {
        gifStrings[i] = data[i].images.original.url;
        console.log(i + ' ' + gifStrings[i] + '\n' + '\n');
    }

    return gifStrings;
}
