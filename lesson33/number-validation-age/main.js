function validation() {
    var name = document.getElementById("name").value;

    var age = document.getElementById("age").value;
    var valid_age_regex = /^[0-9]+$/;

    if (!(name.match(valid_name_regex))) {
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor = 'red';
    } if else {
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = 'black';
    }
    if(!(name.match(valid_name_regex))) {
        document.getElementById("age").style.visibility = "visible";
        document.getElementById("age").style.borderColor = 'red';
    } if else {
        document.getElementById("age").style.visibility = "hidden";
        document.getElementById("age").style.borderColor = 'black';
}
if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex))) {
    return false;
}else {
    return true;
}
}