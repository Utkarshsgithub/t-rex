let winWidth = window.innerWidth;

if (winWidth<1060) {
    let stageTwo = document.getElementById('stage-2');
    stageTwo.style.flexDirection = 'column';
}

let registerText = document.getElementById('register-text');

if (winWidth<550) {
    registerText.innerHTML = 'Register To Get Rewards'
}