const section = document.querySelector("section");
const blogs = JSON.parse(localStorage.getItem("users")) || [];

function loadBlogs() {
  section.textContent = "";

console.log("blogs",blogs);



  //  first iteration
  section.innerHTML = `<article>
                 <h3>${blogs[0].title}</h3>
                 <hr>
                 <p class="sentence">${blogs[0].content}</p>

                 <p>Posted By: <span>${blogs[0].username}</span></p>
            </article>`

  // section.innerHTML += `<article>
  //                <h3>${blogs[1].title}</h3>
  //                <hr>
  //                <p class="sentence">${blogs[1].content}</p>

  //                <p>Posted By: <span>${blogs[1].username}</span></p>
  //           </article>`

}

loadBlogs();