//get html element
const btnSubmitForm = document.getElementById('submitForm')
const formRatings = document.getElementById('ratingForm')
const sectionRatings = document.getElementById('sectionRatings')
const inputRatings = document.querySelectorAll('input[name="rating"]')
const divForm = document.getElementById('divForm')
const validation = document.getElementById('validation')
const displayRating = document.getElementById('finalRating')
// function and eventListener

formRatings.addEventListener('submit',function(event){
    event.preventDefault()
    let selectRating = null
    inputRatings.forEach(function(input){
        if(input.checked) {
            selectRating = input.value
        }
    })

    if(selectRating){
        divForm.classList.add('hidden')
        validation.classList.remove('hidden')
        displayRating.textContent = selectRating

    }else{
        alert(`please select a rating`)
    }
})