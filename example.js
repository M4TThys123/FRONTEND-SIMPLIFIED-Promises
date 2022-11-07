// variablen
const url = "https://jsonplaceholder.typicode.com/users/1";
const emailRef = document.querySelector(".email");

console.log(fetch(url))
//Promise { <state>: "fulfilled", <value>: Response }

// 1. Then
// BEST PRACTICE
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// Opbouwen van de functie
fetch(url).then((response) => {
  console.log(response.json())
});
//Promise { <state>: "pending" }

fetch(url).then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
// Object { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, phone: "1-770-736-8031 x56442", website: "hildegard.org", company: {…} }

// 2. Async/Await
// BEST PRACTICE
async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}
getData()

// Maken van een promise
const subRef = document.querySelector(".status");

function getSubStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP")
        }, 2000)
    })
}

// 1. Then
getSubStatus().then(response => console.log(response))
// VIP

// 2. Async/Await
async function getSubPromise() {
    const status = (await getSubStatus())
    subRef.innerHTML = status
    // VIP
}
getSubPromise()