// const sponsorship_routes = require("./sponsorships");
const user_routes = require("./users");
// const category_routes = require("./categories");
// const card_routes = require("./cards")
// const usercard_routes =require("./usercards")
// const hubspots_routes = require("./hubspots")
// //const admin_routes = require("./admin");

const set_routes = (app) => {
  
   // app.use("/admin", admin_routes);
    app.use("/api/users", user_routes);
    // app.use("/api/categories", category_routes);
    // app.use("/api/cards", card_routes);
    // app.use("/api/sporsorships", sponsorship_routes);
    // app.use("/api/usercards", usercard_routes)
    // app.use("/web/ebusinesscards", hubspots_routes)
  };
  
export const set = set_routes;
