$(document).ready(function () {

    $.getJSON("http://localhost/news-website/backend/new.php", function(data) {
      console.log(data);
    });
});