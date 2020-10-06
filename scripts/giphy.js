// BASE URL and KEY
 const baseURL='https://api.giphy.com/v1/gifs/search?api_key=c3Es5E8bUpVzY5c51JxFzbJ8iYfP3Kka&q=pokemon&limit=25&offset=0&rating=g&lang=en';
 apiKey = 'c3Es5E8bUpVzY5c51JxFzbJ8iYfP3Kka' 

//FETCH STATEMENT / GET REQUEST 
  fetch(baseURL)
  .then(function(data){
    return data.json();
  }).then(function(json){
    displayResults(json)
  })

document.getElementsByClassName('cirlce');
  function displayResults(json){
    for(let i = 0; i <json.data.length; i++){
      let image = json.data[i].embed_url
      document.getElementById('gifholder').innerHTML += 
      `<iframe
      class="card text-white bg-dark mb-3" 
      alt="gifImage"
      border='solid black'
      src='${image}'></iframe>`;
      
    }
}
  
  // Is there a way to dynamically (changing with the given input) add HTML to the index.html for EACH item?
  // Meaning, if the JSON has 3 items, you get 3 gifs. IF the JSON has 17 items, you get 17 gifs.
    
