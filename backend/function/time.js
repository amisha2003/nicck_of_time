const comparetime = (starttime, endtime, examdate,shatime, shadate)=>{
    // console.log(examdate,shadate)
    return new Promise((resolve,reject)=>{
         console.log(examdate, shadate )
         if(shatime>=starttime && shatime<=endtime)
         {
             console.log("yes bro")
         }
         else
         {
            console.log("no bro")
         }

        if(examdate==shadate && shatime>=starttime && shatime<=endtime)
        {
            // console.log(starttime,endtime,shatime)
            // console.log(true)
            resolve(true)
        }
        else
        {
            resolve(false)
            // console.log(false)
        }
    })
  
}
module.exports = comparetime