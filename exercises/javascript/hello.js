var shoppingList = ["apples", "oranges", "carrots"];
//
var shoppingList = ["apples", "oranges", "carrots"];
  for (i =0; i < shoppingList.length; i++){
  console.log(shoppingList[i]);
  }
//
var myFavorites = [
              ["back that ass up", "scrubs", "fire and desire"],
              ["sushi","honey smacks", "white chocolate"],
              ["the alchemist", "color purple","kama sutra"]
        ];
for (var i =0; i < myFavorites.length; i++) {
          for (var j=0; j < myFavorites[i].length; j++){
            console.log(myFavorites[i][j]);
          }
        }

var shakespeare = "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt."
//
var temp = shakespeare.split(" ")
temp
["Our", "doubts", "are", "traitors,", "and", "make", "us", "lose", "the", "good", "we", "oft", "might", "win,", "by", "fearing", "to", "attempt."]
//
var i=" the is so much fun";

var cnt = 0;
//var pos = i.indexOf(" ");
//var lastChar = i.substr(i.length - 1);
//console.log(pos,i.substr(pos,1));
console.log(i.length);
  for (var j=0; j< i.length;j++){
if ((i.substr(j,1)) == " "){
        cnt+=1;}
}

var wcnt = 0;
//final check if first char is a blank, if so, wcnt =
if(i.substr(0,1) != " ")
  wcnt = cnt;
else
  wcnt = cnt + 1;
console.log(cnt);
//

//Capitalize the first letter in the words in the string
    "hello world" => "Hello World"
    var helloworld = "hello world"
    var helloworld(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//




    //Find the largest number and the smallest number
        var numbers = [56, 74, 31, 89, 8,
                    22, 5, 19, 28, 100,
                    82, 72, 39, 25, 90,
                    1, 97, 83, 58, 38,
                    57, 71, 70, 7, 3,
                    12, 48, 45, 43, 84,
                    68, 49, 37, 41, 92,
                    96, 6, 66, 95, 15,
                    67, 2, 59, 4, 91,
                    44, 50, 17, 30, 88,
                    34, 55, 64, 9, 27,
                    73, 60, 32, 81, 10,
                    53, 61, 63, 51, 65,
                    36, 26, 99, 76, 47,
                    21, 14, 16, 40, 79,
                    75, 85, 42, 86, 18,
                    23, 24, 46, 69, 29,
                    77, 20, 54, 80, 87,
                    13, 94, 98, 93, 62,
                    35, 33, 11, 52];
//You have a list of numbers in the numbers array above somehow got shuffled and one is missing. Luckily you know that the numbers were from 1 to 100. Find the missing number.

//Find the sum of the values in an array and the average in the numbers array above

//Find the average of only the odd numbers the numbers array above.

//Write a loop that creates an array of 100 random integers (not decimal numbers).

//Find the numbers in common in two different lists of numbers.
