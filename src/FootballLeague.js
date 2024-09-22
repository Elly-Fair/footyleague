import React from 'react';
import results from './match.json';

const generateLeagueTable = () => {
    function reqListener(e) {
        results = JSON.parse(this.responseText);
    }
  
    function getRankings(games){
        let leaguePosition ={};
        games.results.forEach(game =>{
            let [homeScore, awayScore] = game.score.split('-');
            if(!leaguePosition[game.homeTeamId]) leaguePosition[game.homeTeamId] ={id:game.homeTeamId, points:0};
            if(!leaguePosition[game.awayTeamId]) leaguePosition[game.awayTeamId] ={id:game.awayTeamId, points:0};
            if(homeScore > awayScore){
                leaguePosition[game.homeTeamId].points +=3;
            } else if(awayScore > homeScore){
                leaguePosition[game.awayTeamId].points +=3;
            }else {
                leaguePosition[game.homeTeamId].points ++;
                leaguePosition[game.awayTeamId].points ++;
            }
        });
    
  
    }

    let footballRankings = getRankings();
    return(
        {footballRankings}
    );
  
}

export default generateLeagueTable;
