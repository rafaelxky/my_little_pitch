  function getUsers(){
const url = 'http://localhost:8080/api/user';
// Make a GET request
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let parsedResponse = response.json();
    console.log(response);
    return parsedResponse  // Parse the JSON from the response
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was an error fetching the data:', error);
  });

  }

  getUsers();