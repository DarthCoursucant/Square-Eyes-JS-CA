fetch('https://v2.api.noroff.dev/square-eyes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Use the data from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors from the API request
    console.error('There was a problem with the API request:', error);
  });
