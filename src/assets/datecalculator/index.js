export default function dateDiffCalculator(postDate_){
    const atualDate = new Date();
    const postDate = new Date(postDate_);

    const YearAtual = atualDate.getFullYear();
    const YearPost = postDate.getFullYear();
    const MothAtual = atualDate.getMonth();
    const MothPost = postDate.getMonth();
    const DayAtual = atualDate.getDate();
    const DayPost = postDate.getDate();
    const HourAtual = atualDate.getHours();
    const HourPost = postDate.getHours();
    const MinutesAtual = atualDate.getMinutes();
    const MinutesPost = postDate.getMinutes();
    const SecondsAtual = atualDate.getSeconds();
    const SecondsPost = postDate.getSeconds();

    if(isNotEquals(YearAtual,YearPost)){
         return `${YearAtual-YearPost} year(s) ago.`;
    } else if(isNotEquals(MothAtual,MinutesPost) && DayAtual >= DayPost){
          return `${MothAtual-MothPost} monht(s) ago.`;
    } else if(isNotEquals(DayAtual, DayPost)){
          
               if(MothPost+1 ===2)
                    return diffofpost(28,DayPost,DayAtual);
               else if(isEvenMoth(MothPost+1))
                    return diffofpost(30,DayPost,DayAtual);
               else 
                    return diffofpost(31,DayPost,DayAtual);

    } else if(isNotEquals(HourAtual, HourPost)){
     return `${HourAtual-HourPost} hour(s) ago.`;
    }  else if(isNotEquals(MinutesAtual,MinutesPost)){
     return `${MinutesAtual-MinutesPost} minute(s) ago.`; 
    } else {
        return `${SecondsPost} second(s) ago.`;
    }   
}

const isEvenMoth=(month)=>{
     return month % 2===0
}
const diffofpost = (date, daypost, dayatual)=>{
     return `${(date-daypost)+dayatual} day(s) ago.`;
}
const isNotEquals=(atual, daypost)=>{
     return !(atual === daypost);
}