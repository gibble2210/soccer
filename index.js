$(function() {
    $.ajax({
url:"http://football-api.com/api/?Action=fixtures&APIKey=b77353a5-3a63-a07b-11f69c0c2054&comp_id=1204&&match_date=01.11.2014",
        dataType: 'json',
        type: 'GET',
        success: function (team) {
            console.log(team);
            getTeamName(team);

        }
    });
    $('.submit').on('click', function() {

    });

    function getTeamName(team) {
        for(var i=0; i<team.matches.length; i++) {
        var matches = '<div class="matches">';
        var match = team.matches[i];

        matches += ('<div class="teama">' + match.match_localteam_name + ' at' + '</div>');
        matches += ('<div class="teamb">' + match.match_visitorteam_name + '</div>');
        matches += ('<div class="time">' + match.match_time + '</div>');

          matches += '</div>';
          $('#return').append(matches);
          }

    }
});
