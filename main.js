
let janmon = Number(document.getElementById('janmoney').innerHTML);
let febmon = Number(document.getElementById('febmoney').innerHTML);
let marmon = Number(document.getElementById('marmoney').innerHTML);
let aprmon = Number(document.getElementById('aprmoney').innerHTML);
let maymon = Number(document.getElementById('maymoney').innerHTML);
let junmon = Number(document.getElementById('junmoney').innerHTML);
let julmon = Number(document.getElementById('julmoney').innerHTML);
let augmon = Number(document.getElementById('augmoney').innerHTML);
let sepmon = Number(document.getElementById('sepmoney').innerHTML);
let octmon = Number(document.getElementById('octmoney').innerHTML);
let novmon = Number(document.getElementById('novmoney').innerHTML);
let decmon = Number(document.getElementById('decmoney').innerHTML);
let totmon = Number(document.getElementById('totmoney').innerHTML);

function btnclick(){
  let mone = Number(document.getElementById('money').value);
  var mont = document.getElementById('month').value;  
  var dat = document.getElementById('date').value;
  
if(mont == '2021-01'){
  janmon = janmon + mone;
  document.getElementById('janmoney').innerHTML = janmon;
}
else if(mont == '2021-02'){
  febmon = febmon + mone;
  document.getElementById('febmoney').innerHTML = febmon;
}
else if(mont == '2021-03'){
  marmon = marmon + mone;
  document.getElementById('marmoney').innerHTML = marmon;
}
else if(mont == '2021-04'){
  aprmon = aprmon + mone;
  document.getElementById('aprmoney').innerHTML = aprmon;
}
else if(mont == '2021-05'){
  maymon = maymon + mone;
  document.getElementById('maymoney').innerHTML = maymon;
}
else if(mont == '2021-06'){
  junmon = junmon + mone;
  document.getElementById('junmoney').innerHTML = junmon;
}
else if(mont == '2021-07'){
  julmon = julmon + mone;
  document.getElementById('julmoney').innerHTML = julmon;
}
else if(mont == '2021-08'){
  augmon = augmon + mone;
  document.getElementById('augmoney').innerHTML = augmon;
}
else if(mont == '2021-09'){
  sepmon = sepmon + mone;
  document.getElementById('sepmoney').innerHTML = sepmon;
}
else if(mont == '2021-10'){
  octmon = octmon + mone;
  document.getElementById('octmoney').innerHTML = octmon;
}
else if(mont == '2021-11'){
  novmon = novmon + mone;
  document.getElementById('novmoney').innerHTML = novmon;
}
else if(mont == '2021-12'){
  decmon = decmon + mone;
  document.getElementById('decmoney').innerHTML = decmon;
}

totmon = janmon+febmon+marmon+aprmon+maymon+junmon+julmon+sepmon+octmon+novmon+decmon;
document.getElementById('totmoney').innerHTML = totmon;   

}

document.getElementById('subbtn').addEventListener('click',function(){
  let mone = Number(document.getElementById('money').value);
  var mont = document.getElementById('month').value;  
  var dat = document.getElementById('date').value;
  let daat = new Date(dat);
  datMonth = daat.getMonth() + 1
  console.log(mone , mont , dat);

  

  
  if(datMonth == 1){
    let tab = document.getElementById('jantabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  else if(datMonth == 2){
    let tab = document.getElementById('febtabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 3){
    let tab = document.getElementById('martabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 4){
    let tab = document.getElementById('aprtabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 5){
    let tab = document.getElementById('maytabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 6){
    let tab = document.getElementById('juntabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 7){
    let tab = document.getElementById('jultabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 8){
    let tab = document.getElementById('augtabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 9){
    let tab = document.getElementById('septabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 10){
    let tab = document.getElementById('octtabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 11){
    let tab = document.getElementById('novtabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  if(datMonth == 12){
    let tab = document.getElementById('dectabdat');
    let row = tab.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = mone;
    cell2.innerHTML = dat;
  }
  else{
      console.log('in else');
  }
  });





document.querySelector('.jan').addEventListener("click",function(){
  document.getElementById('janshowings').style.display="block";
});
document.querySelector('.feb').addEventListener("click",function(){
  document.getElementById('febshowings').style.display="block";
});
document.querySelector('.mar').addEventListener("click",function(){
  document.getElementById('marshowings').style.display="block";
});
document.querySelector('.apr').addEventListener("click",function(){
  document.getElementById('aprshowings').style.display="block";
});
document.querySelector('.may').addEventListener("click",function(){
  document.getElementById('mayshowings').style.display="block";
});
document.querySelector('.jun').addEventListener("click",function(){
  document.getElementById('junshowings').style.display="block";
});
document.querySelector('.jul').addEventListener("click",function(){
  document.getElementById('julshowings').style.display="block";
});
document.querySelector('.aug').addEventListener("click",function(){
  document.getElementById('augshowings').style.display="block";
});
document.querySelector('.sep').addEventListener("click",function(){
  document.getElementById('sepshowings').style.display="block";
});
document.querySelector('.oct').addEventListener("click",function(){
  document.getElementById('octshowings').style.display="block";
});
document.querySelector('.nov').addEventListener("click",function(){
  document.getElementById('novshowings').style.display="block";
});
document.querySelector('.dec').addEventListener("click",function(){
  document.getElementById('decshowings').style.display="block";
});




function closeShow(){
  document.getElementById('janshowings').style.display="none";
  document.getElementById('febshowings').style.display="none";
  document.getElementById('marshowings').style.display="none";
  document.getElementById('aprshowings').style.display="none";
  document.getElementById('mayshowings').style.display="none";
  document.getElementById('junshowings').style.display="none";
  document.getElementById('julshowings').style.display="none";
  document.getElementById('augshowings').style.display="none";
  document.getElementById('sepshowings').style.display="none";
  document.getElementById('octshowings').style.display="none";
  document.getElementById('novshowings').style.display="none";
  document.getElementById('decshowings').style.display="none";
}

