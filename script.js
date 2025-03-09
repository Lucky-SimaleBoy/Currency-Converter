let btn = document.querySelector(".btn");
let input = document.querySelector("#input");
let select = document.querySelector("#select");
let tableData = document.querySelector("tbody");
let table=document.querySelector(".output");
console.log(table)

let calling_api=async(value, currency)=>{
  let str="";
 
 url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_T3edAhou6U6ZzN5FXYme5X6D5KJy4v2yWcndvVkE&base_currency=";
let url_data=await fetch(url);
let rjason=await url_data.json();
table.style.display="block";
for(let key of Object.keys(rjason["data"])){
console.log(key)
str+=`<tr>
    <td>${key}</td>
    <td>${rjason["data"][key]["code"]}</td>
    <td>${rjason["data"][key]["value"]*value}</td>
    </tr>`
}
tableData.innerHTML=str;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value=parseInt(input.value);
  const currency=select.value;
  calling_api(value,currency);
});


                      
                      
                      
                      
                          