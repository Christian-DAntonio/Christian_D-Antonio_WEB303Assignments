/* function forJson(){$.getJSON("team.json").done( function(data){
    msg =""
    $.each(data, function(key, val){

        $('#team').append('<h2> ' + val.name +'</h2>',
        '<h5> '+ val.position +' </h5>', '<p> '+val.bio, '</p>')

    })
})} */

function loadJson()
{
    $.ajax({
        type: "GET",
        url: "team.json",
        dataType: "json",
        success: function(data)
        {
            let msg ="";
            $.each(data.team, function(key, val){
                msg = '<h1>' + val.name `</h1>`;
                msg = '<h1>' + val.position `</h1>`;
                msg = '<h1>' + val.bio `</h1>`;
            });
            $(`#team`).html(msg);
        },
        error: function() {
            console.log("Error occurred")
        }
    });
}

$(document).ready(function (){
    $(`#team`).html(`<p>Loading</p>`);
    
    loadJson();
});



