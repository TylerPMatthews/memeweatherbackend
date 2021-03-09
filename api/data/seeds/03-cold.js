exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cold")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cold").insert([
        {
          cold_id: 1,
          img_url:
            "https://sayingimages.com/wp-content/uploads/walked-outside-cold-weather-meme.png",
        },
        {
          cold_id: 2,
          img_url:
            "https://sayingimages.com/wp-content/uploads/cold-weather-im-gonna-need-a-bigger-coat-meme.jpg",
        },
        {
          cold_id: 3,
          img_url:
            "https://static.vibe.com/uploads/2014/01/VIBE-Vixen-Cold-Weather-Meme6-600x632.png",
        },
        {
          cold_id: 4,
          img_url:
            "https://sayingimages.com/wp-content/uploads/cold-weather-winter-meme.jpg",
        },
        {
          cold_id: 5,
          img_url:
            "https://sayingimages.com/wp-content/uploads/cold-weather-wake-up-meme.jpg",
        },
        {
          cold_id: 6,
          img_url:
            "https://sayingimages.com/wp-content/uploads/cold-weather-got-me-like-meme.jpg",
        },
        {
          cold_id: 7,
          img_url:
            "https://sayingimages.com/wp-content/uploads/frost-bite-cold-weather-meme.png",
        },
        {
          cold_id: 8,
          img_url:
            "https://sayingimages.com/wp-content/uploads/cold-weather-i-walk-outside-meme.jpg",
        },
        {
          cold_id: 9,
          img_url:
            "https://sayingimages.com/wp-content/uploads/cold-weather-cant-wait-for-winter-meme.jpg",
        },
        {
          cold_id: 10,
          img_url:
            "https://sayingimages.com/wp-content/uploads/really-likes-the-cold-weather-meme.jpg",
        },
      ]);
    });
};
