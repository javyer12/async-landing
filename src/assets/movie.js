let htmlField = null || document.getElementById("movieCard");


const movie = [
  {
    id: 1,
    title: "Doctor Strange en el Multiverso de la Locura",
    image:
      "https://i.blogs.es/1ae92a/doctor-strange-en-el-multiverso-de-la-locura-poster/1366_2000.jpeg",
    description:
      "El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora, su equipo debe enfrentarse a una amenaza que podría destruirlo todo.",
    year: 2022,
    whereWatch: ["Disney Plus", "Cuevana"],
    category: "Acción/Aventura ",
    duration: "2h 6m",
    watchIcon: {
      appleTv: "../rec/appletv.png",
      googleplay: "../rec/googleplay.jpg",
      disneyplus: "../rec/disneyplus.jpg",
    },
  },
  {
    id: 2,
    title: "Oldboy: días de venganza",
    image: "https://images.justwatch.com/backdrop/247211624/s640/old-boy",
    description:
      "Joe Doucett, un ejecutivo publicitario en horas bajas, más entregado al alcohol que a su familia, es secuestrado y retenido en una especie de hotel-cárcel sin conocer la identidad o los motivos del secuestrador.",
    year: 2013,
    whereWatch: ["Apple TV"],
    category: "Suspenso/Misterio  ",
    duration: "1h 44m",
    watchIcon: {
      appleTv: "../rec/appletv.png",
      googleplay: "../rec/googleplay.jpg",
      disneyplus: "../rec/disneyplus.jpg",
    },
  },
  {
    id: 3,
    title: "Viento salvaje",
    image:
      "https://occ-0-37-987.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc4WxJQXt8vEoYbFpawCkRKeFaegQLMGi6NxtxemOgVd_64gT9A0b4ymVqYKm07SE7pr3g6Umaa8LGFc84h6Tr-RMxGGr3HLeHc_.jpg?r=cad",
    description:
      "Comienza cuando un guardabosques descubre el cuerpo congelado de una chica que parece haber sido asesinada. Una agente del FBI recibe el encargo de investigar el crimen y encontrar al culpable de la muerte de la chica.",
    year: 2017,
    whereWatch: ["Apple TV", "Google Play Peliculas"],
    category: "Misterio/Suspenso ",
    duration: "1h 47m",
    watchIcon: {
      appleTv: "../rec/appletv.png",
      googleplay: "../rec/googleplay.jpg",
      disneyplus: "../rec/disneyplus.jpg",
    },
  },
  {
    id: 4,
    title: "Godzilla",
    image: "http://sergimgrau.files.wordpress.com/2014/05/godzilla.jpg",
    description:
      "Ford Brody es un experto de los marines que tiene que ir a Japón para rescatar a su padre. Pronto, los dos hombres se encuentran atrapados en el caos cuando Godzilla, el Rey de los Monstruos, aparece después de pasar décadas debajo del agua.",
    year: 2014,
    whereWatch: ["Apple TV", "Google Play Peliculas", "Cuevana"],
    category: "Ciencia ficción/Ciencia ficción",
    duration: "2h 03m",
    watchIcon: {
      appleTv: "../rec/appletv.png",
      googleplay: "../rec/googleplay.jpg",
      disneyplus: "../rec/disneyplus.jpg",
    },
  },
  {
    id: 5,
    title: "Avengers: Infinity War",
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B07FABAA52E9F1962D1A3EE997F99564D8F77C567258EA93C17485A646776504/scale?width=1200&aspectRatio=1.78&format=jpeg",
    description:
      "Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.",
    year: 2018,
    whereWatch: ["Disney Plus"],
    category: "Acción/Ciencia ficción",
    duration: "2h 29m",
    watchIcon: {
      appleTv: "../rec/appletv.png",
      googleplay: "../rec/googleplay.jpg",
      disneyplus: "../rec/disneyplus.jpg",
    },
  },
  {
    id: 6,
    title: "I Saw the Light",
    image:
      "https://metadata-static.plex.tv/b/gracenote/b976fe616c4a11fa0619fcc9b7c104f1.jpg",
    description:
      "Biografía del músico y leyenda del country, Hank Williams. Desde sus humildes orígenes hasta su ascenso al estrellato, conoceremos cómo todo esto repercutió de forma directa en su salud y vida privada.",
    year: 2015,
    whereWatch: ["Apple TV", "Google Play Peliculas"],
    category: "Drama/Música ",
    duration: "2h 03m",
    watchIcon: {
      appleTv: "../rec/appletv.png",
      googleplay: "../rec/googleplay.jpg",
      disneyplus: "../rec/disneyplus.jpg",
    },
  },
  {
    id: 7,
    title: "Ingrid cambia de rumbo",
    image:
      "https://www.dosismedia.com/wp-content/uploads/2017/08/ingrid-goes-west-soundtrack-trai.jpg",
    description:
      "Comedia negra que se burla del mundo que rodea a las redes sociales y demuestra que ser perfecto no es tan bonito como parece. Ingrid es una acosadora que confunde los likes con las amistades y Taylor, una influencer con una vida perfecta que se convierte en la nueva obsesión de Ingrid.",
    year: 2017,
    whereWatch: ["Apple TV", "Google Play Peliculas"],
    category: "Drama/Comedia ",
    duration: "1h 38m",
    watchIcon: {
      appleTv: "../rec/appletv.png",
      googleplay: "../rec/googleplay.jpg",
      disneyplus: "../rec/disneyplus.jpg",
    },
  },
];

const showMovie = () => {
  let movieCard = `
        ${movie.map(
          (card) => `
        <div class="col mt-3">
        <div class="card rounded-3">
          <img src=${card.image} class="card-img-top class="img-fluid" " alt=${card.title}>
          <div class="card-body">
          <strong><h1 class="card-title">${card.title}</h1></strong>
            <div class="container  text-center m-auto">
                <div class="row m-3">
                    <div class="col border border-info m-1 rounded-pill">
                        ${card.duration}
                     </div>
                    <div class="col border border-info m-1 rounded-pill">
                        ${card.year}
                    </div>
                    <div class="col border border-info m-1 rounded-pill">
                        ${card.category}
                    </div>
                </div>
            </div>
            <p class="card-text">${card.description}</p>
            <div class="container mt-3 text-center m-auto">
            <nav aria-label="...">
            <ul class="pagination">
              <li class=" page-item disabled">
                <a class="page-link">Donde ver:</a>
              </li>
              <div class="container   ">
              <div class="row m-3">
                <div class="col  ">
                    <img class="rounded-pill" width="35px" height="35px" src=${card.watchIcon.appleTv}
                </div>
                <div class="col mt-2 ">
                     <img class="rounded-pill" width="35px" height="35px" src=${card.watchIcon.disneyplus}
                </div>
                <div class="col  mt-2 ">
                    <img class="rounded-pill"  width="35px" height="35px" src=${card.watchIcon.googleplay}
                </div>
          </div>
          </div>
            </ul>
          </nav>
             </div>
          </div>
        </div>
      </div>
        `
        )}
    `;
  htmlField.innerHTML = movieCard;
};

showMovie();
