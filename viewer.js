function search(){
    $(".listItem").remove();
    let searchInput = document.getElementById("input");
    let searchTerm = searchInput.value;
    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=10&format=json&origin=*";
    runSearch(url);
    
    function runSearch(url){
      $.get(url, function(data){
        for(let i = 0; i < data[1].length; i++){
            $("#listResults").append("<a target=\"_blank\" href=\"" +data[3][i]+"\"><li class=\"listItem\"><div><h3>"+ data[1][i] +"</h3><p>"+ data[2][i] +"</p></div></li></a>");
        }
      });
    }
  }