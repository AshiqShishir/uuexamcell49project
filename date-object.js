var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('date');
// el.innerHTML = '<p>Copyright &copy;' + year + '</p>';
el.innerHTML = '<p>Date: ' + today.toDateString() + '</p>';