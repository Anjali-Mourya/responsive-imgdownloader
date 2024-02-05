const form = document.querySelector(".signupform");

form.addEventListener("submit",(event)=>{
  event.preventDefault();

  const formData = new FormData(form);
  
  const data = new URLSearchParams(formData);

  fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: data
  }).then(res => res.json())
  .then(data =>  console.log(data),alert("login successfull"))
  .catch(error => alert(error));
});