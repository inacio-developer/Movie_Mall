const attImg = () => {
  const img = document.querySelector(".about-img img");
  const arrayImg = [
    "http://www.petprod.ufc.br/images/blog/oz1.jpg",
    "https://assimerahollywood.wordpress.com/wp-content/uploads/2012/06/gonewiththewind25.jpg",
    "https://amandices.com.br/wp-content/uploads/2010/04/1647463313_godfather0422.jpg",
    "https://d13jj08vfqimqg.cloudfront.net/uploads/film/photo_5/6226/full_TaxiDriver5-1920x1080.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/81abe415856701.56297b79c5ce6.jpg",
    "https://i.pinimg.com/originals/c3/48/ee/c348ee7505c51d2d32ca11725e83292e.jpg",
  ];
  let index = 0;

  setInterval(() => {
    index >= arrayImg.length - 1 ? (index = 0) : index++;
    img.src = arrayImg[index];
    console.log(index);
  }, 1500);
};

attImg();
