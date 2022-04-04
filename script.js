const searchField = document.getElementById("search")
const searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener("click", function () {
 // console.log(searchField.value)
 //pass the searchfield from value to the function
 searchQuery(searchField.value)
})

async function searchQuery(query) {
  const url = `http://api.tvmaze.com/search/shows?q=${query}`
  const jsonProm = await fetch(`https://api.github.com/users/${query}`)

  
  const jsonData = await jsonProm.json()
   console.log(jsonData)
  
          const img = document.createElement('img')
          img.src = jsonData.avatar_url
          document.getElementById("profile").appendChild(img)
          //name
          document.getElementById("name").innerText = jsonData.name
           //user-name
           document.getElementById("user_name").innerText = jsonData.login
          //bio
          document.getElementById("bio").innerText = jsonData.bio
          //public_repos: 
          document.getElementById("public_repos").innerText = `${jsonData.public_repos} Repos`
           //year created_at: 
           document.getElementById("year").innerText = `User since ${jsonData.created_at.slice(0, 4)}`

           //location
          document.getElementById("location").innerText = jsonData.location

          //websites
          const btnWeb = document.createElement("button")
          btnWeb.innerText = 'Portfolio'
          document.getElementById("btnWeb").appendChild(btnWeb)
          btnWeb.addEventListener("click", function() {
            window.location.href = jsonData.blog
          })

           //twitter
           const twitterButton = document.createElement("button")
           twitterButton.innerText = 'Twitter url'
          document.getElementById("btnTwitter").appendChild(twitterButton)
          btnTwitter.addEventListener("click", function() {
            window.location.href = ` https://twitter.com/${jsonData.twitter_username}`
          })

      
}
