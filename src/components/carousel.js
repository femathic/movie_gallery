import React from 'react';



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
      medium: "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      original: "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
  },
  summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    updated: 1573667713
}

const Carousel = () => (
  <div className="relative bg-black mb-5" >
    <img src={data.image.original} alt={data.name} className="w-full" style={{ objectFit: "cover", objectPosition: "100% 0", height: "28rem" }} />
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