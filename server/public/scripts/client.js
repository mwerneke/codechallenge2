console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', handleSubmit);
    getAllJokes();
}

function renderJokes(jokesArray){
    $('#outputDiv').empty();

for(let joke of jokesArray){
    $('#outputDiv').append(`
            <li>Who's Joke: ${joke.whoseJoke} Question? ${joke.jokeQuestion} Punchline ${joke.punchLine} </li>
            `)
    }
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

function handleSubmit(){
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
}).then(function(response) {
    console.log(response);
    
    getAllJokes();
})

}


//end submit