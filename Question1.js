//Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after
//a delay of 2 seconds. Use setTimeout to simulate the delay.
//Test your function by calling it and using .then() to log the resolved value to the console.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}
fetchData().then((returning) => {
  console.log(returning);
});
