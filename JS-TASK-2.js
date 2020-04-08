//data - An Array with various objects...
const data = [
    {Principal : 2500, time : 1.8},
    {Principal : 1000, time : 5},
    {Principal : 3000, time : 1},
    {Principal : 2000, time : 3},
];

//A function to loop through the objects 
//to calculate the simple interest for each objects in the array
function interestCalculator(param){
    let interestData = [];
    let rate ;
    let interest; 
    for(let i = 0; i < param.length;i++){
        if((param[i].Principal > 2500 || param[i].Principal == 2500) && (param[i].time > 1 && param[i].time < 3 )){
                param[i].rate = 3;
                interestData.push(rate);
            } 
        else if((param[i].Principal > 2500 || param[i].Principal == 2500) && (param[i].time > 3 || param[i].time == 3 )){
            param[i].rate = 4;
            interestData.push(rate);
                    }
        else if((param[i].Principal < 2500 ) || (param[i].time <1  || param[i].time == 1 )){
            param[i].rate = 2;
            interestData.push(rate);
        }
        else{
            param[i].rate = 1;
            interestData.push(rate);
            }
    
        let holder = {};
        holder.Principal = param[i].Principal;
        holder.rate = param[i].rate;
        holder.time = param[i].time;
        holder.interest = param[i].Principal * param[i].time * param[i].rate / 100;
        interestData.push(holder);
    
        }
        
    console.log(interestData);
    return interestData;
    
}


interestCalculator(data);
