document.getElementById('generate').addEventListener("click", get_fact);

function get_fact(){
  fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      let title = `Title: ${data.title}`;
      let content = `Summary: ${data.extract}`;
      let more = `learn more at wikipedia.org`;
      let url = '${data.content_urls.desktop.page}';
      
      document.getElementById('title').innerHTML = title;
      document.getElementById('content').innerHTML = content;
      document.getElementById('more').innerHTML = more;
      document.getElementById('more').href = url;
    })
    .catch(error => {
      // Fehlerbehandlung
      console.error("Fehler beim Abrufen des Artikels:", error);
    });
}