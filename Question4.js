// Write a function "getCountryData" that fetches data from the public
// API " https://restcountries.com/v3.1/all ".
// Parse the JSON response and log the data to the console. Additionally,
// use DOM manipulation to display the data on the web page.
// Make sure to handle any errors that might occur during the fetch operation and
// display an appropriate error message in the div if the fetch fails.
// (deploy the webpage on github)

function getCountryies() {
  fetch("https://restcountries.com/v3.1/all")
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((country) => {
        const cntyDataBox = document.createElement("div");
        cntyDataBox.className = "container";

        const heading = document.createElement("h3");
        heading.innerText = country.name.common;

        const imgCont = document.createElement("img");
        imgCont.className = "imgTag";
        imgCont.src = country.flags.png;

        cntyDataBox.appendChild(heading);
        cntyDataBox.appendChild(imgCont);

        document.getElementById("getCountryData").appendChild(cntyDataBox);
      });
    })
    .catch((error) => {
      console.log(error);
      const failedMsg = document.createElement("h1");
      failedMsg.innerHTML = "Something Wrong";
      document.getElementById("getCountryData").appendChild(failedMsg);
    });
}
getCountryies();
