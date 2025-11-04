const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

window.onload = function () {
  const btnFetch = document.querySelector("#btnFetch");
  const listContainer = document.querySelector("#listContainer");

  btnFetch.addEventListener("click", async function (event) {
    event.preventDefault();
    try {
      const response = await fetch(API_ENDPOINT);
      const posts = await response.json();
      posts.forEach((post) => {
        const lieElement = document.createElement("li");
        lieElement.innerHTML = post.title.toUpperCase();
        listContainer.appendChild(lieElement);
      });
    } catch (err) {
      console.error(err);
    }
  });
};
