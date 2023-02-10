console.log("FetchA[i")

//div with fetch wala btn
let myBtn = document.getElementById("myBtn")

//div with content wala div
let content = document.getElementById("content")


// function getData() {
//     url = "Nish.txt";
//     fetch(url).then((response) => {
//         return response.text();
//     }).then((data) => {
//         console.log(data);
//     })
// }


function getData() {
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}


function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = {
        "name":"haryy","salary":"777","age":"23"
    }
    params = {
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }
    fetch(url,params).then(response=>response.json())
    .then(data => console.log(data))
}

// getData()
postData()