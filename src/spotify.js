//this is not a component
//Akshay sinha 07-01-2021

//some imp url to visit
//https://developer.spotify.com
//documentation/web-playback-sdk/quick-start///#endregion

//we are using all the API available

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

//step1 click login
//step2 redirect spotify login page
//step3 redirect to home page once logged in

const clientId = "d2476bb380014b74bd61c0fda85c2c3f";
//these are the current states or scopes in which the user possibly can be

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl=()=>{
    //the access token will be pulled from the address bar
    //reduce() basically pulls out and returns the selective part of the
    //url specified in the arrow function and takes the second
    //parameter as an empty object 
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{

        let parts=item.split('=')
        initial[parts[0]]=decodeURIComponent(parts[1]);

        return initial;
    },{})
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
