/* JS File */

let links = document.getElementById('links');

for(i = 1; i <= 20  ; i++){

  let link = document.createElement('a');
  link.id = 'btn-'+i;
  link.innerHTML = 'Button '+i;
  link.addEventListener('click', toggleButton);

  links.appendChild(link);
}

function toggleButton() {
  this.classList.toggle('active');
}
