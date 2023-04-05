$(document).ready(function (){
    var $results = [];
    let $a_m = 0;
    let $n_z = 0;

    var charValue = $.getJSON("characters.json").done(function(data) {
        $.each(data.cast, function(index, value) {
            $('tbody').append(`
            <tr>
                <td class='name'>${value.fname}</td>
                <td>${value.lname}</td>
                <td>${value.age}</td>
                <td>${value.job}</td>
                <td>${value.role}</td>
            </tr>
            `)
        });
        if(value.lname[0].toLowerCase().match(/[a-mA-M]/)) {
            $a_m++;
        } else {
            $n_z++;
            console.log($n_z);
        }
        $("#a-m").text("A-M(").append($a_m).append(")");
        $("#n-z").text("N-Z(").append($n_z).append(")");

        $("#a-m").click(function (){
            $("tbody").find("tr").show();
            $("tbody tr").each(function (){
                let value = $(this).childern().first().text();
                console.log(value);
                console.log(value[0]);
                if(!value[0].match(/[a-mA-M]/)) {
                    $(this).hide();
                }
            });
        });
        $("#n-z").click(function (){

            $("tbody").find("tr").show();
            $("tbody tr").each(function (){
                let value = $(this).children().first().text();
                console.log(value);
                console.log(value[0]);
                if(!value[0].match(/[n-zN-Z]/)) {
                    $(this).hide();
                }
            });
        });
    });
    console.log($results);
});
$("input").keyup(function (key) {
    $("tbody").find("tr").show();
    $("tbody tr").each(function (){
        let value = $(this).children().first().text().toLowerCase();
        console.log(value);
        if(key.target.value === "") {
            $(this).css({"background-color": "", "color": "black"});
        }
        else if(value.includes(key.target.value.toLowerCase())) {
            $(this).css({"background-color": "darkgreen", "color": "white"});
        } else {
            $(this).css({"background-color": "", "color": "black"});
        }
    });
});