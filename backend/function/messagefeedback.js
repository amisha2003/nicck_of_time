var axios = require('axios');

const messagefeedback=async(link)=>{
   
    return new Promise(
        (resolve, reject)=>{

    var config = {
    method: 'get',
    url: link,
    headers: { 
        'Authorization': 'Basic QUNlZjUzMzU2MGU3ZTk3YWIyNDVhMzY0YmY4YWM3NThlNjpjNGM4OTMyMTMwOGIyZjZiNjk2ZDY3MjM4ZjM4NTIzOQ=='
    }
    };

    axios(config)
    .then(function (response) {
       
        console.log(response.data);
        
    resolve(response.data)
    })
    .catch(function (error) {
       
    console.log(error);
    
    resolve('err')
    });
})
}
module.exports = messagefeedback;