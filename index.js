function clickAlert () {
    alert("I was Clicked!");
} 

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', clickAlert);
};

addingEventListener();
