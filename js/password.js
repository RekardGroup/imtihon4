const elForm = document.querySelector(".forma");
const elUserNameInput = document.querySelector(".username-input");
const elPasswordInput = document.querySelector(".password-input");




elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const userNameInputValue = elUserNameInput.value;
    const passwordInputValue = elPasswordInput.value;

    console.log(userNameInputValue, passwordInputValue);

    // eve.holt@reqres.in
    // cityslicka
    fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userNameInputValue,
                password: passwordInputValue,
            }),
        }).then((res) => res.json())
        .then((data) => {
            if (data.token) {
                window.localStorage.setItem("token", data.token);

                window.location.replace("./index.html");
            } else {
                alert("login yoki parol notog'ri");
            }
        })
});