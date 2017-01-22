let url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
$(document).ready(function(){

  function getData() {
    $.getJSON(url, function(data) {
      $(".quoteText").text(data.quoteText);
      $(".author").text(data.quoteAuthor);
    });
  }

  $(".quote").click(getData);

  $(".tweet").click(function () {
    window.open('https://twitter.com/intent/tweet?text=' + $(".quoteText").text() + " ------ " + $(".author").text());
  });

  getData();
});