const search = document.querySelector('input');
const button = document.querySelector('button');
const results = document.getElementById('results');


button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(search.value);
    fetch(`/weather?address=${search.value}`)
        .then(res => {
            res.json().then(data => {
                if (data.error) {
                    results.innerHTML = data.error;
                } else {

                    results.innerHTML = data.forecastData;
                }
            })
        })
        .catch(error => console.log(error));

})


