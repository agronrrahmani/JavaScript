function search() {
    var input, filter, ul, li, a, i, textValue;

    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();

    ul = document.getElementById('myList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i];
        textValue = a.textContent;

        if(textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = 'block';
        } else {
            li[i].style.display = 'none'
        }
    }
}