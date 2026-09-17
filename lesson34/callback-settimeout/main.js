function printName() {
    document.write("jhon");
    document.write('<br>');

    setTimeout(function () {
        document.write("Ana");
        document.write('<br>');
    }, 3000)

    document.write("bob");
    document.write('<br>');
}

printName();