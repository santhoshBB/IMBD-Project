let form = document.getElementById("form");

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  let search = document.getElementById("search").value;
  getData(search);
});

let getData = async (search) => {
  let url = `http://www.omdbapi.com/?s=${search}&apikey=5c79de32`;
  let data = await window.fetch(url);
  let json = await data.json();
  let allData = json.Search;
  console.log(allData);

  document.getElementById(
    "results"
  ).innerHTML = `<h5 class="text text-light">${allData.length} Results found for ${search}: </h5>`;
  let output = "";
  for (let loop of allData) {
    // or output=output + template;
    output += ` <div class="card m-4" style="width: 16rem;">
                  <img src=${loop.Poster} class="card-img-top" alt="img">
                      <div class="card-body">
                             <h5 class="card-title">${loop.Title}</h5>
                            <span class="badge badge-success">${loop.Year}</span>
                            <span class="badge badge-primary">${loop.Type}</span>
                     </div>
                 </div>`;
    document.getElementById("movies").innerHTML = output;
  }
};
