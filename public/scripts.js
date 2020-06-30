const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

for(let card of cards) {
  card.addEventListener('click', () => {
    const idCurso = card.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${idCurso}`;
  })
}



document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  document.querySelector('iframe').src = '';
  modal.classList.remove('maximize');
  modalContent.classList.remove('maximize');
})

document.querySelector(".maximize-modal").addEventListener("click",() => {
  
  if(modal.classList.contains('maximize') || (modalContent.classList.contains('maximize'))){
    modal.classList.remove('maximize');
    modalContent.classList.remove('maximize');
  } else {
    modal.classList.add('maximize');
    modalContent.classList.add('maximize');
  }
})
