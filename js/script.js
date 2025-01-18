let chaveApi = '';
let paisApiUrl = 'https://flagcdn.com/w320/';

let cidadeInput = document.querySelector('#city-input');
let botaoPesquisar = document.querySelector('#search');

let cidade = document.querySelector('#city');
let temperatura = document.querySelector('#temperature span');
let descElemento = document.querySelector('#description');
let climaIcone = document.querySelector('#weather-icon');
let paisElemento = document.querySelector('#country');
let umidadeElemento = document.querySelector('#umidity span');
let ventoElemento = document.querySelector('#wind span');

const getDadosClima = async(city)   =>{
    const apiclimaurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${chaveApi}&lang=pt_br`;
    const resposta = await fetch(apiclimaurl);
    const data = await resposta.json();
    console.log(city);
    cidade.innerText = data.name;
    temperatura.innerText = parseInt(data.main.temp - 273.15);
    descElemento.innerText = data.weather[0].description;
    climaIcone.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
    paisElemento.setAttribute(
        'src',
        paisApiUrl + data.sys.country.toLowerCase()+ '.png'
    );
    umidadeElemento.innerText = `${data.main.humidity}%`;
    ventoElemento.innerText = data.wind.speed

    console.log(data)
}

const mostreDadosClima = (city) =>{
  
    getDadosClima(city);



};

botaoPesquisar.addEventListener( "click",(e) =>{
        e.preventDefault();
        const city = cidadeInput.value; 

        mostreDadosClima(city);
});

