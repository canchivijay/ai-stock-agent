async function getStock(symbol){

try{

let url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=demo`;

let response = await fetch(url);

let data = await response.json();

if(!data.length){
alert("Invalid stock symbol");
return null;
}

return data[0].price;

}catch(error){

console.log(error);
alert("Stock API failed");

}

}

function randomRSI(){
return Math.floor(Math.random()*100);
}

function signal(rsi){

if(rsi < 30) return ["BUY","High"];

if(rsi > 70) return ["SELL","High"];

return ["HOLD","Medium"];

}

async function analyzeStock(){

let symbol = document.getElementById("symbolInput").value.trim();

if(!symbol){
alert("Enter stock symbol");
return;
}

let price = await getStock(symbol);

if(price === null) return;

let rsi = randomRSI();

let result = signal(rsi);

document.getElementById("price").innerText = price;

document.getElementById("rsi").innerText = rsi;

document.getElementById("signal").innerText = result[0];

document.getElementById("confidence").innerText = result[1];

}

function marketPrediction(){

let bullish = Math.random()>0.5;

if(bullish){

document.getElementById("niftyTrend").innerText="Bullish market bias";

document.getElementById("prediction").innerText="Market may open higher tomorrow";

}else{

document.getElementById("niftyTrend").innerText="Bearish market bias";

document.getElementById("prediction").innerText="Market may open lower tomorrow";

}

}

marketPrediction();
