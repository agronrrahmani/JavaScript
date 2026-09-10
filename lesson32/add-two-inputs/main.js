var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var ans = document.querySelector('#ans');
var button = document.querySelector('#btn');

button.addEventListener('click', function() {
    ans.innerHTML = Number(input1.value) + Number(input2.value);
});
