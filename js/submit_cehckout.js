const scriptUrl = 'https://script.google.com/macros/s/AKfycbwe4yHgDk909-Ki-uvU6e826bdfofSaoh61CnL9RgIWaOFGkrE3_AYxncTvpcc86BGlOA/exec'
let form  = document.getElementById('form_contact');

form.addEventListener('submit', (e) => {
    e.preventDefault();
fetch(scriptUrl,{
    method: 'POST',

    body: new FormData(form)
}).catch((error)=>console.error('Error',error.message))
})