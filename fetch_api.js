// AJAX
// It is Asynchronous JS and XML
// Before JSON we received data in the XML format

// JSON also AJAJ -- Asynchronous JS and JSON
// is JavaScript Object Notation
// json() method : returns a second promise that
// resolves with the result of parsing response
// body text as JSON
// meaning i/p is JSON, o/p is JS object

const para = document.querySelector("#facts");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/");
  const data = await response.json();
  //console.log(data[0].text);
  para.innerText = data[1].text;
};

btn.addEventListener("click", getFacts);
