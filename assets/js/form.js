const signUpButton = document.querySelector('#sign-up');
const nameUser = document.querySelector('#nameUser');
const title = document.querySelector('#title');
const content = document.querySelector('#content');

let registers = [];
let isForm = false;

signUpButton.addEventListener('click', function (event) {
    event.preventDefault();

    const register = {
        nameUser: nameUser.value,
        title: title.value,
        content: content.value
    };

    const alert = validation(register);

    if (alert) {
        registers.push(register);
        console.log("registers",registers);
        
        localStorage.setItem("users", JSON.stringify(registers));
        document.location.replace("blog.html");

        // window.location.href = "blog.html";
        // document.location.replace("blog.html");
    }
});

function validation(register) {

    if (register.nameUser === "") {
        alert("Hello!, you gotta write a Name");

    } else if (register.title === "") {
        alert("Hello!, you gotta write a Title");

    } else if (register.content === "") {
        alert("Hello!, you gotta write a Content");

    } else {
        isForm = true;
    }

    return isForm;
}