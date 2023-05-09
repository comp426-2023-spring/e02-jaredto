function toggleShots() {
    const checkbox = document.getElementById('opponent');
    const radios = document.getElementById('rps');

    if (checkbox.checked) {
        $('.shots').show();
        if (radios.checked) {
            $('.rpsls').hide();
        }
    } else {
        $('.shots').hide();
    }
}

async function play() {
    const checkbox = document.getElementById('opponent');
    const game = $('input[type=radio][name=game]:checked').val();
    let shot = '';
    if (checkbox.checked) {
        shot = $('input[type=radio][name=shot]:checked').val() + '/';
    }
    const base = window.location.href + 'app/';
    const url = base + game + '/play/' + shot;
    const response = await fetch(url);
    const results = await response.json();
    const resultElement = document.getElementById('result');
    if (!checkbox.checked) {
        resultElement.innerHTML = results.player;
    } else {
        resultElement.innerHTML = 'You: ' + results.player + '. Your opponent: ' + results.opponent + '. Result: You ' + results.result + "!";
    }
}

function reset() {
    location.reload();
}




