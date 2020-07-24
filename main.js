



function formListening () {
  $('form').submit(event => {
    event.preventDefault();
        console.log('submit captured');
    const userHandle= $('input').val();
        console.log(userHandle);
    getRepos(userHandle);

  });
}

function getRepos(userHandle) {
  const endpointUrl= `https://api.github.com/users/${userHandle}/repos`;
      console.log(endpointUrl);
  fetch(endpointUrl)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}





$(formListening);