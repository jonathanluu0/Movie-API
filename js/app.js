$(document).ready(function() {

  function onSuccess(response){
    console.log(response)
  }


  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/movie/550?api_key=68a406cb55230475845b91eb462bdcff',
    success: onSuccess
  });

  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/movie/209112/trailers?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
    success: onSuccess
  });

  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/movie/209112/videos?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
    success: onSuccess
  });

  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
    success: onSuccess
  });
  https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed
});

function onSuccess(response){
  console.log(response.youtube[0].source)
}

function mySuperSweetFunctionWithALongName(){

}
