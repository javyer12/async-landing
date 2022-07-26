const API =
  "https://youtube138.p.rapidapi.com/video/related-contents/?id=TMdCwy2VrjU&hl=en&gl=US";
const videoUrl = "https://www.youtube.com/watch?v=";

const content = null || document.getElementById("content");

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7d61809129mshcdf74c467f48605p19fe8djsnb953bc808c56",
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7d61809129mshcdf74c467f48605p19fe8djsnb953bc808c56",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.contents
      .map(
        (vide) => ` 
        <div class="group relative">
            <div
             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${vide.video.thumbnails[0].url}" alt="you" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-white">
                     <span aria-hidden="true" class="absolute inset-0"></span>
                     ${vide.video.title}
                </h3>
            </div> 
         </div>
    `
      )
      .slice(0, 8)
      .join("")} `;
    content.innerHTML = view;
  } catch (err) {
    console.log(err);
    alert("we're sorry, we have technical issues");
  }
})();

//install github-pages
//npm install gh-pages --save-dev
