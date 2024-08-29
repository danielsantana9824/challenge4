const signUpButton = document.querySelector('#sign-up');
const nameUser = document.querySelector('#nameUser');
const title = document.querySelector('#title');
const content = document.querySelector('#content');

const registers = [];
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

        window.location.href = "blog.html";
        // document.location.replace("blog.html");
    }
    // document.location.replace("blog.html");
    cleanForm();
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

function cleanForm(){
    document.getElementById("myForm").reset();

}