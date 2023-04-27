
    const inputs = document.querySelectorAll('input');

    function focusNext() {
      let found = false;
      inputs.forEach((input) => {
        if (found) {
          input.focus();
          found = false;
        } else if (input === document.activeElement) {
          found = true;
        }
      });
    }

    inputs.forEach((input) => {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          focusNext();
        }
      });
    });



var d= new Date()
var yr = d.getFullYear();
var month=d.getMonth()+1;
if(month<10){
month='0'+month;
}

var date=d.getDate();

if(date<10){

date='e'+date
}

var c_date=yr+"-"+month+"-"+date;
document.getElementById('d1').value=c_date;





            const scriptURL = 'https://script.google.com/macros/s/AKfycbzdxkrKqJlpO4SaAfHzwA7Ufc27H4EM04-QzAxtmTUv5rUBGTU6U9rUYbxEzUCJJY1G3g/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then()
                .catch(error => console.error('Error!', error.message))
            })

