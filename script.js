
async function getStock(symbol){

let url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;

let response = await fetch(url);
let data = await response.json();

return data.quoteResponse.result[0].regularMarketPrice;

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

let symbol = document.getElementById("symbolInput").value;

if(!symbol){
alert("Enter a stock symbol");
return;
}

let price = await getStock(symbol);

let rsi = randomRSI();

let sig = signal(rsi);

document.getElementById("price").innerText = price;

document.getElementById("rsi").innerText = rsi;

document.getElementById("signal").innerText = sig[0];

document.getElementById("confidence").innerText = sig[1];

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
