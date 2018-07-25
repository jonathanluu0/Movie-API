console.log("code works")
var apiKey = "a07e22bc18f5cb106bfe4cc1f83ad8ed";
var url = 'https://api.themoviedb.org/3/movie/now_playing'

function goTo(event){
  var trailer_url = 'https://api.themoviedb.org/3/movie/' + event.dataset.videoid + '/videos?'
  $.get(trailer_url, {api_key: apiKey}).done(function(data){
    window.open("https://www.youtube.com/watch?v=" + data.results[0].key)
  }); //$.get ending bracket
} // goTo ending bracket
$(document).ready(function() {
  function movieCards(){
    $.get(url, {api_key: apiKey}).done(function(data){
        for(var x=0; x<data.results.length; x++){
          var img_url = "https://image.tmdb.org/t/p/w300" + data.results[x].poster_path;
          var movie_text = data.results[x].overview;
          var title = data.results[x].original_title;
          var release_date = data.results[x].release_date;
          var voteAverage = ((data.results[x].vote_average) * 10);
          var progress_rotate = (voteAverage/100)*360;
          var youtube_trailer =  data.results[x].key;
          var movie_id = data.results[x].id;
          // .css("transform", "rotate(progress_rotate + deg)");
          $("#container").append(`
            <div class='Now_Playing_Card' id="Cards">
              <img class="card-img" src="` + img_url + `"  alt="Movie Image">

              <table>
                <tr>
                  <td>
                    <div class="col-md-3 col-sm-6" id="progress_bar">
                      <div class="progress blue">
                        <span class="progress-left">
                          <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">` + voteAverage + "%" + `</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5 class="card-title">` + title + `</h5>
                  </td>
                </tr>
              </table>

                <div class="card-body">
                <h6 class="release-date">` + release_date + `</h6>
                  <p class="card-text">` + movie_text + `</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><a data-videoid="` + movie_id + `" onclick="goTo(this)" href="#" class="link card-link">Watch the Trailer</a></li>
                </ul>
              </div>
            </div>`
          ); // append ending brace
        } // end of for loop
    }); //movieCards $.get ending bracket
  } //movieCards ending bracket


  function onSuccess(response){
    console.log(response.results[0].id)
  }

  movieCards();
  if($('.card-text').height() > 150){
    $('.card-text').css("white-space", "wrap");
    $('.card-text').css("overflow", "hidden");
    $('.card-text').css("text-overflow", "ellipsis");
  }

  $(".now-playing").on("click", function(event){
    event.preventDefault();
    console.log("hit");
    window.open("now-playing.html");
  }); //now-playing ending bracket


//while in the first api call, store the videoid in the data attribute (store it on the link)
//add a .link on click listener, from there, you're gonna make an api call getting the attribute from that link
//redirect to youtube



// function getTrailerAPI(){
//   $.ajax({
//     method: 'GET'
//     url: 'https://api.themoviedb.org/3/movie/' + data.results[x].id + '/videos?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed'
//     success: onSuccess
//   });
// };









}); // document.ready ending bracket
