exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("snow")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("snow").insert([
        {
          snow_id: 1,
          img_url:
            "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:442/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-snowman-yes.jpg",
        },
        {
          snow_id: 2,
          img_url:
            "https://sayingimages.com/wp-content/uploads/cold-weather-wipers-up-meme.jpg",
        },
        {
          snow_id: 3,
          img_url:
            "https://memecentral.org/wp-content/uploads/2019/09/when-your-to-lazy-to-get-rid-of-snow...-snow-meme.jpg",
        },
        {
          snow_id: 4,
          img_url:
            'https://memecentral.org/wp-content/uploads/2019/09/tired-of-snow-meme.jpg"',
        },
        {
          snow_id: 5,
          img_url:
            "https://memecentral.org/wp-content/uploads/2019/09/snow-panic-meme.jpg",
        },
        {
          snow_id: 6,
          img_url:
            'https://memecentral.org/wp-content/uploads/2019/09/snow-dog-meme.jpg"',
        },
        {
          snow_id: 7,
          img_url:
            "https://memecentral.org/wp-content/uploads/2019/09/oh-dont-worry-itS-just-a-dusting-snow-meme.jpg",
        },
      ]);
    });
};
