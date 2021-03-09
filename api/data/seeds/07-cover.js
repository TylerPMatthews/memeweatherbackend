exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cover")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cover").insert([
        {
          cover_id: 1,
          img_url: "https://memegenerator.net/img/instances/48553741.jpg",
        },
        {
          cover_id: 2,
          img_url:
            "https://64.media.tumblr.com/tumblr_m1gz5730b41rohs3fo1_400.jpg",
        },
        {
          cover_id: 3,
          img_url:
            "https://cdn.guff.com/site_0/media/33000/32179/items/072619be3f312eda10254537.jpg",
        },
        {
          cover_id: 4,
          img_url: "https://img.memecdn.com/weather-stone_o_2629693.jpg",
        },
        {
          cover_id: 5,
          img_url:
            "https://img.memecdn.com/a-rainbow-holds-back-the-bad-weather_o_1391083.jpg",
        },
      ]);
    });
};
