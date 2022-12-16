

// Exercise 1: Get the array of all directors.

function getAllDirectors(array) {
  let result=array.map(directors=>directors.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

//getAllDirectors(movies)

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result=array.filter(dirigides=> director===dirigides.director);
  
 console.log("EXERCICE 2 ->", result)
 return result}
;


//getMoviesFromDirector(movies, "Francis Ford Coppola")

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result=array.filter(dirigides=> {if (director===dirigides.director){
   return dirigides.title
   }
   })
   let solucio= result.reduce((counter,item)=>counter+item.score,0)/result.length
  console.log("EXERCICE 3 ->", solucio)
  return solucio;
}

//moviesAverageOfDirector(movies,"Francis Ford Coppola")

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
let result = array.map(titol=>titol.title);
console.log("E4", result.sort());
let solucio=result.sort()
let definitiu=solucio.splice(0,20)

console.log ("E4", definitiu)
return definitiu;

}


//orderAlphabetically(movies)

// Exercise 5: Order by year, ascending
function orderByYear(array) {
 
  const result = array.sort((anterior, actual) => {

    const ordre = anterior.year - actual.year;
    if (ordre == 0) {

      if (anterior.title < actual.title) return -1;
      else return 1;
    }  
    else return ordre;
  })

  console.log("EXERCISE 5 ->", result);
  return result; }
 
  ;
  
  //orderByYear(movies)





// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genere) {
  let result=array.filter(categoria=>{if (genere==categoria.genre){
    return categoria.genre
    }
    })
    let solucio= (result.reduce((counter,item)=>counter+item.score,0)/result.length).toFixed(0)
   console.log("EXERCICE 6 ->",solucio)
   return solucio;

}

moviesAverageByCategory(movies, "Drama")

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  




  
}





// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let result= array.filter(best=> {if (year==best.year) {
    return best.year
  }})

    
let solucio=result.reduce((anterior, actual)=>(anterior.score > actual.score) ? anterior : actual)
  
    console.log("EXERCISE 8 ->", solucio);
    return solucio
  
}

//bestFilmOfYear(movies,1990)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
