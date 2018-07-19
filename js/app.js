$(document).ready(function() {
  var apiKey = "a07e22bc18f5cb106bfe4cc1f83ad8ed";
  var url = 'https://api.themoviedb.org/3/movie/now_playing'

  function movieCards(){
    $.get(url, {api_key: apiKey}).done(function(data){
      console.log(data.results.length);
      for(var x=0; x<data.results.length; x++){
        var img_url = "https://image.tmdb.org/t/p/w300" + data.results[x].poster_path
        $(".container").append(`
          <div class='Now_Playing_Card'>
            <div class="card">
              <img class="card-img" src="` + img_url + `"  alt="Movie Image">
              <div class="card-body">
                <h5 class="card-title">Movie Name</h5>
                <p class="card-text">Summary of Movie ...</p>

                <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#" class="card-link">More Info</a></li>
                </ul>
            </div>
          </div>`);
        }
    });
  }

  function onSuccess(response){
    console.log(response.results[0].id)
  }

  // function getNowPlaying(){
  //   $.ajax({
  //     method: 'GET'
  //     url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed'
  //     success: onSuccess
  //   });
  // };

  movieCards();
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



});
