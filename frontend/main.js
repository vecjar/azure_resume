window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter88.azurewebsites.net/api/GetResumeCounter?code=w_9I2qAZIYCzb7QHYFGw4x8F6l18R_xjsxc0-a46StDvAzFuqzzBSQ=='
const localfuctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count =30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}