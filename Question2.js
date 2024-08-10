// Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data".
// Modify your test to handle this rejection using .catch().

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      message = "Data fetched Failed";
      reject(message);
    }, 2000);
  });
}
fetchData().catch((errData) => {
  console.log(errData);
});
