const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/authorizeDexcomUser', (req, res) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    
    urlencoded.append("client_id", process.env.DEXCOM_CLIENT_ID);
    urlencoded.append("client_secret", process.env.DEXCOM_CLIENT_SECRET);
    urlencoded.append("code", req.query.code);
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("redirect_uri", process.env.HOST);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    console.log(process.env.DEXCOM_API_ENVIRONMENT);
    fetch(`https://`+process.env.DEXCOM_API_ENVIRONMENT+`/v2/oauth2/token`, requestOptions) //Fetch sandbox dev token
        .then(response => response.json())
        .then((response) => {
            getBloodSugars(response.access_token).then(values => {
                res.json(values);
            });
        })
        .catch(error => console.log('error', error));
});


//get current time to fetch up-to-date blood sugars
getTime = () => {
    function addZero(n) {
        if (n < 10) {
            return "0" + n;
        }
        return n.toString();
    }

    let time = new Date();
    let hours = addZero(time.getHours());
    let minutes = addZero(time.getMinutes());
    let seconds = addZero(time.getSeconds());

    return hours + ":" + minutes + ":" + seconds;
}

//Step 2: Get current blood sugars with bearer token
let getBloodSugars = (token) => {
    // return {bearerToken: token};
    let currentTime = getTime();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`https://`+process.env.DEXCOM_API_ENVIRONMENT+`/v2/users/self/egvs?startDate=2020-05-25T`+currentTime+`&endDate=2020-05-26T`+currentTime, requestOptions) //Fetch sandbox dev data
        .then(response => response.json())
        .then((data => {
            return data;
        }))
        .catch(error => console.log('error', error));
}


app.listen(8000, () => {console.log("Server started on port 8000")});