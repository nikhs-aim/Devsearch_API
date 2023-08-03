let form=document.getElementById('login-form')

form.addEventListener('submit',(e) => {
    e.preventDefault()  //To prevent refreshing the page
    
    // console.log('Form was submitted!')

    let formData = {
        'username':form.username.value,
        'password':form.password.value
    }

    // console.log('FORM DATA:',formData)

    fetch('http://127.0.0.1:8000/api/users/token/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
    })
    .then(Response => Response.json())
    .then(data => {
        console.log('DATA:',data.access)
        if(data.access){
            localStorage.setItem('token',data.access)
            window.location = 'http://127.0.0.1:5500/projects-list.html'
        }else{
            alert('Username OR Password did not work')
        }
    })
})