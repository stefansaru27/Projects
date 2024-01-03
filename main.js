//A generic function that uses fetch to GET a URL and return the responses
function fetchData(url, id) {
  fetch(`https://rickandmortyapi.com/api/${url}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((jsonResponse) => console.log(jsonResponse));
}

//A function that can GET all locations or a single location
function getLocation(id) {
  url = "location";
  fetchData(url, id);
}

//A function that can GET all characters or a single character
function getCharacter(id) {
  url = "character";
  this.id = id;
  fetchData(url, id);
}

//A function that can GET all episodes or a single episode
function getEpisode(id) {
  url = "episode";
  fetchData(url, id);
}

//get all locations
getLocation("");

//get location by id
getLocation("1");
getLocation("2");
getLocation("3");

//get all characters
getCharacter("");

//get character by id
getCharacter("1");
getCharacter("2");
getCharacter("3");

//get all episodes
getEpisode("");

//get episode by id
getEpisode("1");
getEpisode("2");
getEpisode("3");
