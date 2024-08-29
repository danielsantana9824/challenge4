const section = document.querySelector("section");
const bottomEl = document.getElementById("back");
const saveButton = document.getElementById('save');

const array = JSON.parse(localStorage.getItem("users"));

function loadBlogs() {
  section.textContent = "";

  // const register = {
  //   nameUser: "a",
  //   title: "b",
  //   content: "c"
  // };

  // array[1] = register;

for (let i = 0; i < array.length; i++) {

  console.log("a");
  
  section.innerHTML=`<article>
  <h3>${array[i].title}</h3>
  <hr>
  <p class="sentence">${array[i].content}</p>

  <p>Posted By: <span>${array[i].nameUser}</span></p>
</article>`
  
}

}

function goBack() {
  window.history.back()
}

loadBlogs();