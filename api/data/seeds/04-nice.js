exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("nice")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("nice").insert([
        {
          nice_id: 1,
          img_url:
            "https://media.makeameme.org/created/its-so-nice-89zq6x.jpg",
        },
        {
          nice_id: 2,
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLe0OW_ifPC7ZwiFFrgjKRMl2nhEbrebzG3A&usqp=CAU",
        },
        {
          nice_id: 3,
          img_url:
            "https://sayingimages.com/wp-content/uploads/hot-weather-im-so-happy-meme.jpg",
        },
        {
          nice_id: 4,
          img_url:
            "https://sayingimages.com/wp-content/uploads/not-sure-hot-weather-meme.jpg",
        },
        {
          nice_id: 5,
          img_url:
            "https://sayingimages.com/wp-content/uploads/hot-weather-dog-starts-melting-meme.jpg",
        },
        {
          nice_id: 6,
          img_url:
            "https://sayingimages.com/wp-content/uploads/hot-weather-im-so-happy-meme.jpg",
        },
        {
          nice_id: 7,
          img_url:
            "https://sayingimages.com/wp-content/uploads/hot-weather-memes.jpg",
        },
        {
          nice_id: 8,
          img_url:
            "https://sayingimages.com/wp-content/uploads/hot-weather-car-meme.jpg",
        },
      ]);
    });
};
