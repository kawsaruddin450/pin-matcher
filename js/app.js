function getPin() {
    let pin = generatePin();
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    return randomPin;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinElement = document.getElementById('display-pin');
    displayPinElement.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const pinEntry = document.getElementById('pin-input');
    const input = event.target.innerText;
    if (!isNaN(input)) {
        if (pinEntry.value.length < 4) {
            pinEntry.value = pinEntry.value + input;
        }
    }
    else {
        if (input === 'C') {
            pinEntry.value = '';
        }
        else if (input === '<') {
            pinEntry.value = pinEntry.value.slice(0, -1);
        }
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const correctPin = document.getElementById('display-pin').value;
    const inputPin = document.getElementById('pin-input').value;


    if (correctPin == inputPin) {
        document.getElementById('correct-notify').style.display = 'block';
        document.getElementById('wrong-notify').style.display = 'none';
    }
    else {
        document.getElementById('wrong-notify').style.display = 'block';
        document.getElementById('correct-notify').style.display = 'none';
    }
    document.getElementById('display-pin').value = '';
    document.getElementById('pin-input').value = '';
})