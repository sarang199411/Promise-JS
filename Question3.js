// Convert the fetchData function from Question  1 to use async and await instead of
//.then(). Ensure to handle errors using try and catch...
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}
async function newFetch() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
newFetch();
