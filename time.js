function dateAndTime()
{
    var t=new Date();
    
    var date = t.getFullYear()+'/'+(t.getMonth()+1)+'/'+t.getDate();
    var time = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
    var dateTime = date+'  '+time;
    return {dateTime};
}
//console.log(dateAndTime());
module.exports=dateAndTime();


