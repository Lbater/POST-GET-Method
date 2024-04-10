/* Author: Logan Bateman, 000918989 */

let url = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php";

let first = document.getElementById('first');
first.onclick = function(e){
    fetch (url)
    .then (response => response.text())
    .then (text => {
        let output = "";
        output += "<h1>" + text + " 000918989 </h1>";
        document.getElementById('textOut').innerHTML = output;
    });
}

let second = document.getElementById('second');
second.onclick = function(e){
    let url = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php";
    let choice = document.getElementById('choice').value;
    url += "?choice=" + choice;
    fetch (url)
    .then (response => response.json())
    .then (jsonobject => {
        console.log(JSON.stringify(jsonobject));
        let outputS = "";
        let outputP = "";
        let outputN = "";
        choice.toLowerCase();
        for (let i = 0; i < jsonobject.length; i++){
            outputS += jsonobject[i].series + " ";
            if(jsonobject.length==1){
                outputP += "<img src='" + jsonobject[i].url + "' class='border border-white img-fluid' width='100%' height='100%'>" + "</img>";
            }else if(jsonobject.length==2){
                outputP += "<img src='" + jsonobject[i].url + "' class='border border-white img-fluid' width='50%' height='50%'>" + "</img>";
            }else{
                outputP += "<img src='" + jsonobject[i].url + "' class='border border-white img-fluid' width='33%' height='33%'>" + "</img>";
            }
            outputN += jsonobject[i].name + " ";
        }
        switch(choice){
            case "mario":
                document.getElementById('copyright').innerHTML = "<p> Game trademarks and copyrights are properties of their respective owners. Nintendo properties are trademarks of Nintendo. &#169; 2019 Nintendo. </p>";
                break;
            case "starwars":
                document.getElementById('copyright').innerHTML = "<p> Star Wars &#169; & TM 2022 Lucasfilm Ltd. All rights reserved. Visual material &#169 2022 Electronic Arts Inc. </p>";
                break;
        }

        //This adds the output then styles them appropriately 
        document.getElementById('series').innerHTML = outputS;
        document.getElementById('series').classList.add = ('border', 'border-white');
        document.getElementById('series').classList.add = ('container', 'text-center');

        document.getElementById('images').innerHTML = outputP;
        document.getElementById('images').classList.add = ('container', 'text-center');
        
        document.getElementById('name').innerHTML = outputN;
        document.getElementById('name').classList.add = ('border', 'border-white');
        document.getElementById('name').classList.add = ('container', 'text-center');
    });
}

let third = document.getElementById('third');
third.onclick = function(e){
    let url = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php";
    let choice = document.getElementById('choice').value;
    fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
        },
        body: "choice=" + choice,
    })
    .then (response => response.json())
    .then (jsonobject => {
        console.log(JSON.stringify(jsonobject))
        let tablecontent = "<tr><th> Series </th><th> Name </th><th> URL </th></tr>";
        for (let i = 0; i < jsonobject.length; i++){
            tablecontent += "<tr><td>" + jsonobject[i].series + "</td><td>" + jsonobject[i].name + "</td><td><a href='" + jsonobject[i].url + "' target='_blank'>" + jsonobject[i].url + "</a></td></tr>";
        }
        switch(choice){
            case "mario":
                document.getElementById('copyright2').innerHTML = "Game trademarks and copyrights are properties of their respective owners. Nintendo properties are trademarks of Nintendo. &#169; 2019 Nintendo.";
                break;
            case "starwars":
                document.getElementById('copyright2').innerHTML = "Star Wars &#169; & TM 2022 Lucasfilm Ltd. All rights reserved. Visual material © 2022 Electronic Arts Inc.";
                break;
        }
        document.getElementById("characters").innerHTML = tablecontent;

    });
}