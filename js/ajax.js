console.log("Ajax");


let fetchBtn = document.getElementById("fetchBtn")
fetchBtn.addEventListener('click', buttonClickHandler)


function buttonClickHandler() {
    console.log("Click the fetch btn")


    let xhr = new XMLHttpRequest();


    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
    // xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/create', true)
    


    xhr.onload = function () {
        console.log("getting response");

        if (this.status === 200) {

            console.log(this.responseText);
        } else {
            console.log("L ")
        }
    }

    xhr.send()
}

