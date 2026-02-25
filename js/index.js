fetch("https://v3.football.api-sports.io/")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));