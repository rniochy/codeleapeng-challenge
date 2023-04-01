export default function dataDiffCalculator(postData_){
    const atualData = new Date();
    const postData = new Date(postData_)

    const dataDiff = atualData - postData;

    const timeInOneSecond = 1000; 
    const timeInOneMinutes = 1000 * 60; 
    const timeInOneHour = 1000 * 60* 60; 
    const timeInOneDay = 1000 * 60* 60*  24; 
    const timeInOneWeek = 1000 * 60* 60*  24*7; 
    const timeInOneYear = (1000 * 60* 60* 24*365); 

    const dataDiffSecond = Math.floor(dataDiff/timeInOneSecond);
    const dataDiffMinutes = Math.floor(dataDiff/timeInOneMinutes);
    const dataDiffHour = Math.floor(dataDiff/timeInOneHour);
    const dataDiffDay = Math.ceil(dataDiff/timeInOneDay);
    const dataDiffWeek = Math.floor(dataDiff/timeInOneWeek);
    const dataDiffYear = Math.floor(dataDiff/(timeInOneYear));

    console.log(dataDiff)

    if(dataDiffYear > 0)
        return `${dataDiffYear} Year(s) ago`;
    else if(dataDiffWeek > 0 )
         return `${dataDiffWeek} Week(s) ago`;
    else if(dataDiffDay > 0 )
         return `${dataDiffDay} Day(s) ago`;
    else if(dataDiffHour > 0 )
         return `${dataDiffHour} Hour(s) ago`;
    else if(dataDiffMinutes > 0 )
         return `${dataDiffMinutes} Hour(s) ago`;
    else if(dataDiffSecond > 0 )
         return `${dataDiffSecond} Hour(s) ago`;
         else 
            return "Posted just now";    
}