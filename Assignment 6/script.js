console.log("script.js")

const fetchPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => (res.json()))
        .then(data => (display(data)))

}

function display(data) {
    console.log(data)
    const container = document.getElementById('container')
    data.forEach(element => {
        const div = document.createElement('div');
        div.innerText = element.url;
        // container.appendChild(div)
    });

}
fetchPhotos()