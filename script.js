var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var res = JSON.parse(request.response);
    console.log(res);

    //Get all the countries from Asia continent /region using Filter method
    var det_asia = res.filter((ele) => ele.region == "Asia");
    //console.log(det_asia);
    var name = det_asia.map((ele) => ele.name.common);
    console.log(name);


    //Get all the countries with a population of less than 2 lakhs using Filter method
    var popu = res.filter((ele) => ele.population < 200000)
    //console.log(popu);
    for(var i = 0;i<popu.length;i++)
    {
      console.log(`country name:${popu[i].name.common}`);
    }


    //Print the following details name, capital, flag, using forEach method
    res.forEach((element) => {
        console.log(`country name:${element.name.common} 
        capital:${element.capital} 
        flag: ${element.flags.png}`);
        
    });


    //Print the total population of countries using reduce method
    var popula = res.map((ele) => ele.population); 
    //console.log(popula);
    var total = popula.reduce((acc,cv) => acc+cv, 0)
    console.log(total)


    //Print the country that uses US dollars as currency.
    var currency = res.filter(element => element.currencies && element.currencies.USD);
    for(var i =0 ; i< currency.length;i++){
    console.log(currency[i].name.common)
    }
    
}