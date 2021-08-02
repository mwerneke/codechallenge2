console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', Submit);


}
function renderJokes(jokesArray)

for(let joke of jokesArray){
    $('#outputDiv').append(`
            <li>${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine} </li>
            `)
}



function getAllJokes(){
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function(response) {
        //for sure server has responded,
        console.log(response);
        renderJokes(response);
    })



}

function submit(){
    console.log('clicked');

const jokeToSend = {
    whoseJoke:$('#whoseJokeIn').val(),
    jokeQuestion:$('#questionIn').val(),
    punchLine:$('#punchlineIn').val(),
}



$.ajax({
    method: 'POST',
    url: '/jokes',
    data: jokeToSend
}).then(function(response)

getAllJokes();

}//end submit