$(document).ready(function() {
  $("#play").submit(function(event) {
    event.preventDefault();
    // $("#play").toggle();
    // $(".results").toggle();
    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);

      console.log('The original string is: "' + stringToSplit + '"');
      console.log('The separator is: "' + separator + '"');
      console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
    };

    var inputString = $("input#sentence").val();;

    var space = ' ';


    splitString(inputString, space);

 });
});
