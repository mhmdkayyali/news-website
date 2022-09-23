$(document).ready(function () {

    $.getJSON("http://localhost/news-website/backend/new.php", function(data) {
        const news = document.getElementById("news");
        for(i=0; i<data.length;i++) {
            news.innerHTML+=`<div class="card my-3 mx-3" style="width: 22rem">
                            <h6 class="card-title m-3">${data[i].news_source}</h6>
                            <div class="card-body">
                            <h4 class="card-title">${data[i].news_heading}</h4>
                            <p class="card-text">${data[i].news_content}
                            </p>
                            <p class="">${data[i].news_date}</p>
                            </div>
                            </div>`
        }
    });
});