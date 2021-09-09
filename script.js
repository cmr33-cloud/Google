const buttongs = document.getElementById('buttongs')

buttongs.addEventListener('click',search)

function search(e) {
    e.preventDefault()
    fetch('http://localhost:3000/results')
    .then(resp => resp.json())
    .then(resp = createList)
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