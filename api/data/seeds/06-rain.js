exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("rain")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("rain").insert([
        {
          rain_id: 1,
          img_url:
            "https://images7.memedroid.com/images/UPLOADED857/5f38ed7e5bbfb.jpeg",
        },
        {
          rain_id: 2,
          img_url:
            "https://images3.memedroid.com/images/UPLOADED498/5def9cd0b279e.jpeg",
        },
        {
          rain_id: 3,
          img_url:
            "https://images7.memedroid.com/images/UPLOADED905/5d46836e78d4f.jpeg",
        },
        {
          rain_id: 4,
          img_url:
            "https://images3.memedroid.com/images/UPLOADED354/599675638a4cc.jpeg",
        },
        {
          rain_id: 5,
          img_url:
            "https://www.memesmonkey.com/images/memesmonkey/62/629f514a372ab760896df3b71ab3458e.jpeg",
        },
        {
          rain_id: 6,
          img_url:
            "https://www.memesmonkey.com/images/memesmonkey/62/62cee65e9323997fdc243e420c2ddf2e.jpeg",
        },
        {
          rain_id: 7,
          img_url:
            "https://www.memesmonkey.com/images/memesmonkey/c0/c0f7607487b7e68b59b205d25910fdcd.jpeg",
        },
        {
          rain_id: 8,
          img_url:
            "https://www.memesmonkey.com/images/memesmonkey/77/77ee8e25bd105721ef7bd3825846e165.jpeg",
        },
        {
          rain_id: 9,
          img_url:
            "https://www.memesmonkey.com/images/memesmonkey/34/34000ccd3c8d4a339f653edad203bf86.jpeg",
        },
      ]);
    });
};
