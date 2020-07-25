function formListening () {
  $('form').submit(event => {
    event.preventDefault();
    $('.results').empty();
    const userHandle= $('input').val();
    getRepos(userHandle);

  });
}

function getRepos(userHandle) {
  console.log('getRepos ran');
  const endpointUrl= `https://api.github.com/users/${userHandle}/repos`;
  fetch(endpointUrl)
    .then(response => {
      if (!response.ok) {
        console.log('username was not found');
        } else {
        return response.json();
        }
    })
    .then(responseJson => displayRepos(responseJson))
    .catch(error => alert('Something went wrong. Make sure you entered a valid GitHub user handle.'));
}

function displayRepos(responseJson) {
  console.log('displayRepos ran')
  for (let i = 0; i < responseJson.length ; i++) {
    const repoUrl= responseJson[i].html_url;
    const repoName= responseJson[i].name;
    $('.results').append(
    `<li><a href="${repoUrl}" target="blank">${repoName}</a></li>`
  )};
}

$(formListening);