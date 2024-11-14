// API -> tusgai beldsen data holboh
// fentch(link/url)-> api holboh func
// then()-> promise
// status => 200 approved
// 500,400,300,404
// ,json() =>  Zambraagui datag boginsgoh
fetch('https://fakestoreapi.com/products').then(
    response => response.json()
).then(
    data => {
        console.log(data)
        console.log(data[data.length - 1].rating.count);
    }
);
fetch('https://fakestoreapi.com/users').then(
    response => response.json()
).then(
    data => {
        console.log(data)
        console.log(data[0]);
    }
)
let search = document.getElementsByTagName('input')[0];
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let temp = document.querySelector('.temp');
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=>{
    let city = search.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
        response => response.json()
    ).then(
        data => {
            name.innerText=data.name;
            temp.innerText=data.main.temp;
            wind.innerText=data.wind.speed;
            desc.innerText=data.weather[0].description
            
            console.log(data);
            console.log(data.name);
            console.log(data.main.temp);
            console.log(data.weather[0].description);
            console.log(data.wind.speed);
            if(data.weather[0].main=="Rain"){
                document.getElementsByTagName('img')[0].src="https://cdn3.vectorstock.com/i/1000x1000/88/52/rain-snow-flat-icon-symbol-premium-quality-vector-14808852.jpg"
            }else if (data.weather[0].main=="Clouds"){
                document.getElementsByTagName('img')[0].src="data:image/png;base64,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"
            }else if (data.weather[0].main=="Snow"){
                document.getElementsByTagName('img')[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMr3r8VS8ykeSnRd5LgLiyvftVYVWCGA-shw0EPLYliqGtnE4ygsaH1E1wXeZRGxtnB08&usqp=CAU"
            }else if (data.weather[0].main=="Sunny") 
                  document.getElementsByTagName('img')[0].src=" document.getElementsByTagName('img')[0].src="
            }       
    )
});
