const form = document.querySelector('.myBlog')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submitBtn = document.querySelector('#btnSubmit')
const confirmpassword = document.querySelector('#confirmPassword')
const IsAdmin = document.querySelector('#myCheckbox')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        name: username.value,
        email: email.value,
        password: password.value,
        confirmpassword: confirmpassword.value
    }
   if (password.value !== confirmpassword.value){
        alert('Confirm Password is not mAtch Password')
        return
    } else if (IsAdmin.checked){
        window.location.href = './index1.html';
    } else if (IsAdmin.checked === false){
        alert('Salam Ay Brat Necesen ?')}
    console.log('user', user);
})


function removeDisabled(anyInput) {
    anyInput.addEventListener('change', () => {
        if (username.value && email.value && password.value && confirmpassword.value) {
            submitBtn.removeAttribute('disabled')
            console.log('removed disabled');
        } else {
            submitBtn.setAttribute('disabled', true)
        }
    })
}

removeDisabled(username)
removeDisabled(email)
removeDisabled(password)
removeDisabled(confirmpassword)
