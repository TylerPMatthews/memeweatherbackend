exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable().unique();
      users.string("password", 400).notNullable();
      users.string("account_type", 128).notNullable()
      users.timestamps(false, true);
    })
    .createTable("cold", (cold) => {
      cold.increments("cold_id");
      cold.string("img_url", 500);
    })
    .createTable("nice", (nice) => {
      nice.increments("nice_id");
      nice.string("img_url", 500);
    })
    .createTable("snow", (snow) => {
      snow.increments("snow_id");
      snow.string("img_url", 500);
    })
    .createTable("rain", (rain) => {
      rain.increments("rain_id");
      rain.string("img_url", 500);
    })
    .createTable("cover", (cover) => {
      cover.increments("cover_id");
      cover.string("img_url", 500);
    })
    .createTable("weather_gather", (weather) => {
      weather.increments("weather_gather_id");
      weather
        .integer("cold_id")
        .unsigned()
        .notNullable()
        .references("cold_id")
        .inTable("cold")
        .onDelete("cascade");

      weather
        .integer("nice_id")
        .unsigned()
        .notNullable()
        .references("nice_id")
        .inTable("nice")
        .onDelete("cascade");

      weather
        .integer("snow_id")
        .unsigned()
        .notNullable()
        .references("snow_id")
        .inTable("snow")
        .onDelete("cascade");

      weather
        .integer("rain_id")
        .unsigned()
        .notNullable()
        .references("rain_id")
        .inTable("rain")
        .onDelete("cascade");

      weather
        .integer("cover_id")
        .unsigned()
        .notNullable()
        .references("cover_id")
        .inTable("cover")
        .onDelete("cascade");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("cold")
    .dropTableIfExists("nice")
    .dropTableIfExists("snow")
    .dropTableIfExists("rain")
    .dropTableIfExists("cover")
    .dropTableIfExists("weather_gather");
};
