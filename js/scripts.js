$(document).ready(function() {
  $("button#dog-button").click(function() {
    $("ul#dog-list").prepend("<li>RUFF RUFF RUFF!</li>");
    $("ul#cat-list").prepend("<li>MRAAWAWRR</li>");
  });

  $("button#cat-button").click(function() {
    $("ul#cat-list").prepend("<li>Hello Puppy</li>");
    $("ul#dog-list").prepend("<li>GRRRRRRRR!!!</li>");
  });






});
