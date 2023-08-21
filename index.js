let selectTeamOption = document.querySelector("#selectTeamOption");

let selectTeamDiv = document.querySelector(".selectTeamDiv")

selectTeamOption.addEventListener('change', async () => {
    selectTeamDiv.innerHTML= "";

  let teamSelected = selectTeamOption.value
    const options = {
        
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '49f3b6cdd8mshcfd9967eb9271bfp1bc270jsn99b0802dbe36',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(`https://api-basketball.p.rapidapi.com/statistics?season=2022-2023&league=12&team=${teamSelected}`, options);
        const results = await response.json();
        

        let teamNameDiv = document.createElement('div')
        teamNameDiv.innerHTML = `Team: ${results.response.team.name}`
        selectTeamDiv.appendChild(teamNameDiv)

        let gamesPlayedDiv = document.createElement('div')
        gamesPlayedDiv.innerHTML = `Games: ${results.response.games.played.all}`
        selectTeamDiv.appendChild(gamesPlayedDiv)

        let gameWinsDiv = document.createElement('div')
        gameWinsDiv.innerHTML = `Wins: ${results.response.games.wins.all.total}`
        selectTeamDiv.appendChild(gameWinsDiv)

        let gameLosesDiv = document.createElement('div')
        gameLosesDiv.innerHTML = `Loses: ${results.response.games.loses.all.total}`
        selectTeamDiv.appendChild(gameLosesDiv)

        /*let teamLogoDiv = document.createElement('div')
        teamLogoDiv.innerHTML = `Team Logo:
        <img id ="teamImage" src = ${results.response.team.logo}>`
        selectTeamDiv.appendChild(teamLogoDiv)*/

        
        let teamLogoDiv = document.createElement('img')
        teamLogoDiv.setAttribute('src',results.response.team.logo) 
        teamLogoDiv.setAttribute('id','teamImage') 
        selectTeamDiv.appendChild(teamLogoDiv)
        
    } catch (error) {
        console.log(error);
    }

})
