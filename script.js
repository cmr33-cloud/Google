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
    })};

// buttongs.addEventListener('click',searchgs)

const buttonfl = document.getElementById('buttonfl')

buttonfl.addEventListener('click',searchfl)

function searchgs(e) {
    e.preventDefault()
    fetch('http://localhost:3000/results')
    .then(resp => resp.json())
    .then(resp = createList)
} 

function searchfl(e) {
    e.preventDefault()
    fetch('http://localhost:3000/results/random')
    .then(resp => resp.json())
    .then(resp = openWebpage)
}


const openWebpage = resp => {    
    let randLink = resp.hlink
    window.location.assign(randLink)

}

const createList = resp => {
    let list = document.createElement('ul')
    document.getElementById('googlesearches').appendChild(list)
    list.setAttribute("class","list-group")
    for(let i=0; i< resp.length; i++) {
        
        let listItem = document.createElement("li");            
        let text = resp[i].headline
        console.log(text)
        let link = document.createElement("a") 
        
        list.appendChild(listItem)
        listItem.append(link)
        listItem.setAttribute("class","list-group-item text-center bg-dark")
        link.id = `link${i}`
        link.setAttribute("href",`${resp[i].hlink}`)
        link.setAttribute("class","text-light")
        link.setAttribute("style","text-decoration:none")

        document.getElementById(`link${i}`).innerText = text   
    }
                              
 }

// const createList = (resp) => {
//     for(let i=0; i< resp.length; i++) {
//         let listItem = document.createElement("li");            
//         let text = document.createTextNode(resp[i]);         
//         listItem.appendChild(text);                           
//         document.getElementById("newList").appendChild(listItem);   
//     }
                              
//  }





// const googlesearch = document.getElementById('googlesearch')

// googlesearch.addEventListener('click',search)

// function search(e) {
//   e.preventDefault()
//   fetch('http://localhost:3000/results')
//     .then(resp => resp.text())
//     .then(resp => document.getElementById('googlesearch').innerHTML = resp)

// }
