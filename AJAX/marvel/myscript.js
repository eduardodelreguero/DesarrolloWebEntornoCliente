// find elements
const banner = $("#banner-message");
const button = $("button");
const out = $("#result");
const spinner = $("img").first();
spinner.hide();
// handle click, ajax and add class
button.on("click", function() {
  banner.addClass("alt");
  output = "";
  $.ajax({
    url:
      "https://gateway.marvel.com:443/v1/public/characters?apikey=3ab1a7ad6985002c87082ccfee891dd9",
    type: "GET",
    beforeStart: () => {
      spinner.show();
    },
    complete: () => {
      spinner.hide();
    },
    success: response => {
      $.each(response.data.results, (key, value) => {
        output += "<p>" + value.name + "</p>";
      });
      output ? out.html(output) : out.hmtl("No results");
    }
  });
});
