$(document).ready(function() {

  function onSuccess(response){
    console.log(response)
  }


  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/movie/550?api_key=68a406cb55230475845b91eb462bdcff',
    success: onSuccess
  })
}
