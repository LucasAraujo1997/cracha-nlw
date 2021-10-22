const linksSocialMedia = {
  github: 'LucasAraujo1997',
  youtube: 'channel/UChoYsehoW_8C6bOKXYfPm5g',
  facebook: 'lucas.silvaaraujo.16',
  instagram: 'lucas.silvaaraujo.16',
  twitter: 'LucasAr96210375'
};
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      gitHubUserBio.textContent = data.bio;
      gitIcon.href = data.html_url;
      userLogin.textContent = data.login;
      userPhoto.src = data.avatar_url;
    })
}
getGitHubProfileInfos();
