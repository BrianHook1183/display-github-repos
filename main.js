



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
    .then(responseJson => displayRepos(responseJson))
    // .catch
    ;
}

function displayRepos(responseJson) {
  $('.results').empty();
  for (let i = 0; i < responseJson.length ; i++) {
    const repoUrl= responseJson[i].html_url;
    const repoName= responseJson[i].name;
    $('.results').append(
    `<li><a href="${repoUrl}" target="blank">${repoName}</a></li>`
  )};
}



$(formListening);