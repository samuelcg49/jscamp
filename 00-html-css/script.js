// const element = document.querySelectorAll('.button-apply-job')  

// element.forEach(boton => {
//     element.addEventListener('click', () => {
//         // alert("Gracias por tu interés. Pronto nos pondremos en contacto contigo. ")
//         element.textContent = "¡Aplicado!"¡
//         element.disabled = true
//         element.classList.add('is-applied')
//     })
// })

const jobListingSection = document.querySelector(".jobs-listings")
    
jobListingSection.addEventListener("click", (e) => {
  const element = e.target
  if(element.classList.contains("button-apply-job")){
    element.textContent = "¡Aplicado!"
    element.classList.add('is-applied')
    element.disabled = true
  }

})