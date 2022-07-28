
const photos = [
  {
    id: 1,
    title: "",
    image:
      "https://www.mymypic.net/data/attachment/forum/202106/10/11264299uirddta5stssaa.jpg",
  },
  {
    id: 2,
    title: "",
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/05/elizabeth-olsen-2321227.jpg?itok=Otq-COYq",
  },
  {
    id: 3,
    title: "",
    image:
      "https://img.wattpad.com/31c4cdcf985912f0dcdc31f5ebd209ad99f51a10/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f525031356e664e4b7452533243413d3d2d3636353830333239312e313536666330323834646333626365363438353337303730383234382e676966",
  },
  {
    id: 4,
    title: "",
    image:
      "https://64.media.tumblr.com/42742ed2506cdbb2c0a8ba9cde7e4263/tumblr_nornf8vgaP1qk1mjco2_500.png",
  },
  {
    id: 5,
    title: "",
    image:
      "https://www.fropky.com/uploads/2016/may/02/Elizabeth%20Olsen/Elizabeth-Olsen-002.jpg",
  },
  {
    id: 6,
    title: "",
    image:
      "https://news.cinecitta.com/photo.aspx?s=1&w=850&path=%2Fpublic%2Fnews%2F0086%2F86675%2FElizabeth-Olsen.jpg",
  },
  {
    id: 7,
    title: "",
    image:
      "https://www.cinemascomics.com/wp-content/uploads/2022/05/elizabeth-olsen-contrato-marvel.jpg",
  },
  {
    id: 8,
    title: "",
    image: "https://c.tenor.com/Huab3-Q1m7oAAAAC/scarlet-witch-smile.gif",
  },
  {
    id: 9,
    title: "",
    image:
      "https://imgix.bustle.com/wmag/2017/08/08/598a093d5c840d78c9257b68_FINALS721.jpg?w=414&h=620&fit=crop&crop=faces&auto=format%2Ccompress",
  },
  {
    id: 10,
    title: "",
    image:
      "https://i.pinimg.com/originals/b0/ce/20/b0ce20a014aeee949e237b91c41ecd64.gif",
  },
  {
    id: 11,
    title: "",
    image: "https://www.icegif.com/wp-content/uploads/2022/05/icegif-844.gif",
  },
  {
    id: 12,
    title: "",
    image: "https://cdn.acidcow.com/pics/20190503/elizabeth_olsen_02.gif",
  },
  {
    id: 13,
    title: "",
    image:
      "https://i.pinimg.com/originals/f1/c7/77/f1c777c6d2b02d2956aa9f1b7c8a7d43.gif",
  },
  {
    id: 14,
    title: "",
    image:
      "https://www.rpnation.com/gallery/elizabeth-olsen.22707/full?d=1485993373",
  },
  {
    id: 15,
    title: "",
    image: "https://data.whicdn.com/images/337374684/original.gif",
  },
  {
    id: 16,
    title: "",
    image: "https://scontent.fsap2-1.fna.fbcdn.net/v/t39.30808-6/295296879_577661063841250_7916231439580779521_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=XNwwQhO9SWgAX-rSqzs&_nc_ht=scontent.fsap2-1.fna&oh=00_AT9xZ0p3bjYB59snYt0lDrxH7Td50DU6IYtgZ6AZH6UyDg&oe=62E79D80",
  },
];
const htmlField = document.getElementById("gallery");

const Gallery = () => {
  let photo = `
    ${photos.map(
      (pic) => `
    <div class="container">
    <div class="row">
      <div class=" col card h-50 w-25 p-4 m-4 rounded-4 ">
        <img src=${pic.image} width="300px" height="450px" class="card-img-top rounded-4 " alt="elizabeth gallery">
        <div class="card-body">
          <h5 class="card-title">${pic.title}</h5>
        </div>
        <div class="card-footer">
          <small class="text-muted">${pic.id}. Elizabeth Olsen</small>
        </div>
      </div>
      </div>
      </div>
    `
    )}
    `;
  htmlField.innerHTML = photo;
};
Gallery();
