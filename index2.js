//Simple solution

function exponention (argument, degree) {
    return argument ** degree;
}

let test = exponention(3, 2);
//  console.log(test);

//Recursive solution

function exponention(argument, degree) {
    if (degree == 1) {
      return argument;
    } else {
      return argument * exponention(argument, degree - 1);
    }
  }
  
  console.log(exponention(3, 2));





