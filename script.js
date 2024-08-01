//i know my code ain't that goog
document.getElementById('generate').addEventListener("click", get_fact);
console.log("hello world!")
function get_fact(){
  fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary")
    .then(response => {
      if (!response.ok) {
        document.getElementById('title').innerHTML = "something went wrong here :( <br> try again later";
        throw new Error(`HTTP error! status: ${response.status}`);
        
      }
      return response.json();
    })
    .then(data => {
      let title = `${data.title}`;
      let content = `${data.extract}`;
      let more = `Learn more about this @wikipedia.org`;
      let url = data.content_urls.desktop.page;
      
      document.getElementById('title').innerHTML = title;
      document.getElementById('content').innerHTML = content;
      document.getElementById('more').innerHTML = more;
      document.getElementById('more').href = url;
    })
    .catch(error => {
      console.error("Fehler beim Abrufen des Artikels:", error);
    });
}