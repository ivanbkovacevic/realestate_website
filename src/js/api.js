const api_key='YMCmTVyivBUINPG9FGFHDqjF8T530tFO';
let json=null;
let gifSource=null;
let word='cat ';

async function callApi(){
    let response= await fetch( `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${api_key}&limit=20`);
    json= await response.json();
    console.log(json);
    let rSource= Math.floor(Math.random()*(19-1)+1);
    console.log(rSource);
    gifSource= json.data[rSource].images.fixed_height.url;
    $('#testGif').attr('src',gifSource);
}

//////////////////////////
$('#changeGif').on({
'click': function(){
     word+= $('#wordSearch').val();
     console.log(word)
    callApi();
     word='cat ';
  
}
});