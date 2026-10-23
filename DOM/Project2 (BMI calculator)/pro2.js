const form = document.querySelector('form')

// this give empty value becuase right now user has noit guven any value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(event){
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid Height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid Weight ${weight}`
    }else{
        const bmi = (weight/ ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }
})