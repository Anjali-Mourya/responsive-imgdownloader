
let searchDiv = document.querySelector(".search-div");
let searchBar = document.querySelector(".form-control ");

searchBar.addEventListener("keyup",()=>{
  searchDiv.style.display = "block";
  setTimeout(() => {
  searchDiv.style.display = "none";
  }, 5000); 
});

const  myFunction = ()=>{
  let filter = document.querySelector(".form-control").value.toUpperCase();
  let ul = document.querySelector(".myul");
  let li = ul.getElementsByTagName("li");
  for(let i=0; i<li.length; i++){
   const a =  li[i].getElementsByTagName("a")[0];
   const txtvalue = a.textContent || a.innerText;
   if(txtvalue.toUpperCase().indexOf(filter)> -1){
    li[i].style.display = "";
   }else{
    li[i].style.display = "none";
   }
  }
}

searchBar.addEventListener("keyup",myFunction);



  
// download 

const myDownload = (URL,filename)=>{
  const link = document.createElement("a");
  link.setAttribute("download",filename);
  link.href = URL;

  document.body.appendChild(link);
  link.click();
  link.remove();
}