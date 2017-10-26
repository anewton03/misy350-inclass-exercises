console.log("hello");

//arrays

let bucket_list = ["learn to fly", "go to Hawaii", "go to Japan"];
console.log(bucket_list[2]);

let imdb_movie_list = ["Shawshank", "Godfather", "Godfather pt II", "Dark Knight", "12 Angry Men"];
let ranker_movie_list = ["Godfather", "Shawshank", "Pulp Fiction", "Star Wars", "Forrest Gump", "Dark Knight"];

let balance = 1000;
let years = 0;

//for loop

for (let i = 0; i < bucket_list.length; i++) {
  console.log(bucket_list[i]);
}

for (let i = 0; i < imdb_movie_list.length; i++) {
  for (let j = 0; j < ranker_movie_list.length; j++) {
    if (imdb_movie_list[i] == ranker_movie_list[j]) {
      console.log(imdb_movie_list[i]);
    }
  }
}

//while loop

while (balance <1000000) {
  balance += balance*0.07;
  years ++;
}
console.log("It will take you " + years + " to become a millionaire!");

//iterators

imdb_movie_list.forEach(movie => console.log(" - " + movie));

let new_list = imdb_movie_list.filter(movie => movie.slice(0,1) == "G");
new_list.forEach(movie => console.log(" - " + movie));
