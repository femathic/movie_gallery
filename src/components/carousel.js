import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import StarRatings from 'react-star-ratings';



const data = {
  id: 1,
  url: "http://www.tvmaze.com/shows/1/under-the-dome",
  name: "Under the Dome",
  type: "Scripted",
  language: "English",
  genres: ["Drama", "Science-Fiction", "Thriller"],
  status: "Ended",
  runtime: 60,
  premiered: "2013-06-24",
  officialSite: "http://www.cbs.com/shows/under-the-dome/",
  schedule: { time: "22:00"},
  rating: { average: 6.5 },
  weight: 88,
  externals: { tvrage: 25988, thetvdb: 264492, imdb: "tt1553656" },
  image: {
    medium: "http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg"
  },
  summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    updated: 1573667713
}

const Carousel = () => (
  <div className="relative bg-black mb-5" >
    <img src={data.image.original} alt={data.name} className="w-full" style={{ objectFit: "cover", objectPosition: "100% 20%", height: "30rem" }} />
    <div className="absolute top-0 flex justify-between items-end text-white w-full h-full"
      style={{ background: "rgba(0, 0, 0, 0.5)", height: "30rem" }}>
      <div className="pl-1 md:pl-3 mb-6">
        <h4 className="font-semibold text-md">Showing in cinemas</h4>
        <hr className="theme-background gradientify border-0 h-1 w-20" />
        <h1 className="font-extrabold whitespace-normal text-3xl mt-2 shadow-2xl">{data.name}</h1>
        <div className="pb-5 font-semibold text-sm">
          {data.genres.map((genre, id) => (
            <span key={id} className="inline-block mr-3">#{genre}</span>
          ))}
          <b>| </b><span className="px-1">Premiere date:&nbsp; {moment(data.premiered).format('YYYY')}</span>
          <b> | </b><span className="px-1">Duration:&nbsp; {data.runtime} mins</span>
          <div className="block md:hidden pt-1">
            Rating:&nbsp; {data.rating.average}
            <span className="text-gray-400 pl-1">(based on {numeral(data.externals.thetvdb).format('0,a')} reviews)</span>
            <span className="inline-block pl-2 card-star-rating">
              <StarRatings
                rating={data.rating.average / 10 * 6}
                starRatedColor="orange"
                numberOfStars={5}
                name='rating'
                clasname="font-sm"
              />
            </span>
          </div>
        </div>
        <a href={data.officialSite} className="theme-background gradientify hover:shadow-lg whitespace-no-wrap font-medium text-sm py-2 px-4 my-2 w-36">
          Visit Official Site
        </a>
        <a href={`/shows/${data.id}`} className="theme-border hover:shadow-lg whitespace-no-wrap font-medium text-sm py-1 px-4 m-2 w-36">
          View Details
        </a>
      </div>
      <div className="pb-3 hidden md:block">
        <div className="theme-border hover:shadow-lg whitespace-no-wrap font-medium text-md py-1 px-4 m-2 w-36">
          <p className="px-1">Rating &nbsp;
            <small className="text-gray-400">based on <b>{numeral(data.externals.thetvdb).format('0,a')}</b> reviews</small>
          </p>
          <div className="flex justify-between carousel-star-rating">
            <StarRatings
              rating={data.rating.average / 10 * 6}
              starRatedColor="orange"
              numberOfStars={5}
              name='rating'
              clasname="font-sm"
            />
            <p className="theme-border px-1">{data.rating.average}</p>
          </div>
        </div>
      </div>
    </div>
</div>
);


export default Carousel;


// style = {{ backgroundImage: `url(${data.image.original})`, backgroundSize: "cover" }}


{/* <div class="carousel-inner relative overflow-hidden w-full">
  <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
  <div class="carousel-item absolute opacity-0" style={{ height: "50vh" }}>
    <div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
  </div>
  <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
  <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

  <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
  <div class="carousel-item absolute opacity-0" style={{ height: "50vh" }}>
    <div class="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
  </div>
  <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
  <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

  <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
  <div class="carousel-item absolute opacity-0" style={{ height: "50vh" }}>
    <div class="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
  </div>
  <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
  <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
  <ol class="carousel-indicators">
    <li class="inline-block mr-3">
      <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
    </li>
    <li class="inline-block mr-3">
      <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
    </li>
    <li class="inline-block mr-3">
      <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
    </li>
  </ol>
</div> */}