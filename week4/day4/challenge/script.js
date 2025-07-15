
const form=document.querySelector('form');




addEventListener('submit', function(event) {
  event.preventDefault(); 
  const fname=document.getElementById('fname').value;
  const lname=document.getElementById('lname').value;
  const obj={"name":fname,"lastname":lname};
  div=document.createElement('div');
  div.textContent=JSON.stringify(obj);
  form.appendChild(div);
});