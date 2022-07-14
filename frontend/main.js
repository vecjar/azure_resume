window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterjv.azurewebsites.net/api/GetResumeCounter?code=5lks3d_j7oRVbRRG7Xwrnx7HCuRBbXiDPdHvK8EbJawWAzFuqRpdZg=='
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