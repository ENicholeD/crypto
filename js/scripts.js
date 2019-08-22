$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
    var userI = $(".sentence").val();
    var lowerCase = userI.toLowerCase();
    var array = [];

    // array = lowerCase.split("").SomethingThatFiltersLetters()
    var first = lowerCase.split(' ');
    var joining = first.join('');
    var second = joining.split("'");
    var rejoin = second.join('');
    var third = rejoin.split('');

    var leng = third.length;
    var root = Math.sqrt(leng);
    var round = Math.ceil(root);

    for(o = 0; o < round; o++){
      console.log(o);
      for (i = o; i < leng; i += round){
        if (array.length%5 === 4){
          array.push(third[i] + " ");
        } else {
          array.push(third[i]);
        }
      }
      $('#result').text(array.join(""));
    }
  });
});
