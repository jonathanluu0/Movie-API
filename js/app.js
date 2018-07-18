$(document).ready(function() {

  function onSuccess(response){
    console.log(response)

  }
  // function getNowPlaying(){
  //   $.ajax({
  //     method: 'GET'
  //     url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed'
  //     success: onSuccess
  //   });
  // };

  $(".now-playing").on("click", function(event){
    event.preventDefault();
    console.log("hit");
    window.open("now-playing.html");

  });
  // function getTrailers(movieId){
  //   $.ajax({
  //     type: 'GET',
  //     url: 'https://api.themoviedb.org/3/movie/' + movieId + '/trailers?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
  //     success: onSuccess
  //   });
  // }



  // $.ajax({
  //   type: 'GET',
  //   url: 'https://api.themoviedb.org/3/search/movie/?api_key=68a406cb55230475845b91eb462bdcff&query=batman',
  //   success: onSuccess
  // });
  // $.ajax({
  //   type: 'GET',
  //   url: 'https://api.themoviedb.org/3/movie/' + movieId + '/?api_key=68a406cb55230475845b91eb462bdcff',
  //   success: onSuccess
  // });
  // $.ajax({
  //   type: 'GET',
  //   url: 'https://api.themoviedb.org/3/movie/209112/videos?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
  //   success: onSuccess
  // });
  // function onSuccess(response){
  //   // console.log(response.youtube[0].source)
  //   getTrailers(response.id)
  //
  // }
});
