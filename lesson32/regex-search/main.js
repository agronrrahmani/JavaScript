var text = "the best school in th world is digitalschool!";

var result = text.search("digitalschool");
document.getElementById('result1').innerHTML = result;

var result2 = text.search(/digitalschool/);
document.getElementById('result2').innerHTML = result2;