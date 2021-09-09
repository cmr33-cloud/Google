let buttongs = document.getElementById("buttongs"),
  searchBar = document.querySelector("input");

buttongs.addEventListener("click", search);
document.querySelector('body').addEventListener("keydown", (e) => {if(e.key=="Enter"){search()}});

function search() {
  console.log("Beginning search...");
  let url = "http://localhost:3000/results/search";
  for (let a of searchBar.value.split(" ")) {
    if (searchBar.value.split(" ").indexOf(a) == 0) {
      query = "?query";
    } else {
      query = "&query";
    }
    url += query + String(searchBar.value.split(" ").indexOf(a) + 1) + "=" + a;
  }
  fetch(url).then(res=>res.json())
    .then(def => 
      {console.log(def);
      results.hidden = false;
      for (let a in results.children) {
        results.children[a].children[0].textContent = def[a].h;
        results.children[a].children[0].href = def[a].a;
      }
    });
}

// const googlesearch = document.getElementById('googlesearch')

// googlesearch.addEventListener('click',search)

// function search(e) {
//   e.preventDefault()
//   fetch('http://localhost:3000/results')
//     .then(resp => resp.text())
//     .then(resp => document.getElementById('googlesearch').innerHTML = resp)

// }
