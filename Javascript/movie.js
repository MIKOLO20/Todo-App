const fetchMovie = async () => {

    document.getElementById("btn").innerHTML =`<button class="btn btn-primary">
  <span class="spinner-border spinner-border-sm"></span>
  Loading
</button>`
  
    try {
        // Set your API key here
const apiKey = 'bP3sQm0MdA4r7f3Uu6M3ztvqctUQWz4EDTPcKClF';
const searchValue = '' + document.getElementById("search").value;
const searchType = 1; // 1 = include titles and people in results
const url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${apiKey}&search_value=${encodeURIComponent(searchValue)}&search_type=${searchType}`;

const response = await fetch(url);
const json = await response.json();
if(json){
    document.getElementById("btn").innerHTML = `<button id="normal" onclick="fetchMovie()" class="btn btn-primary mx-auto">search</button>`
}
 show = "";
json.results.forEach(item => {
    show += `
    <div class="child">
    <img src=${item.image_url} alt=""/>
    <p>Title: ${item.name} </p>
    <p>Type: ${item.type} </p>
    <p>Year: ${item.year} </p>
    </div>`;
});
document.getElementById("display").innerHTML = show;
console.log(json);
    } catch (error) {
        alert("try again")
        console.log(error)
    }
}
    