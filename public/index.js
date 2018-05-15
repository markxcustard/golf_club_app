/* global Vue, VueRouter, axios */
console.log("goodbye");
var HomePage = {
  template: "#home-page",
  data: function() {
    console.log("hello");
    return {
      message: "My Golf Club App!",
      drivers: [],
      fairway_woods: [],
      hybrids: [],
      irons: [],
      wedges: [],
      putters: [],
      currentDriver: {},
      currentFairway_Wood: {},
      currentHybrid: {},
      currentIron: {},
      currentWedge: {},
      currentPutter: {},
      titleFilter: ""
    };
  },

  created: function() {
    axios.get("/drivers").then(
      function(response) {
        this.drivers = response.data;
        console.log(this.drivers);
      }.bind(this)
    );
    axios.get("/fairway_woods").then(
      function(response) {
        this.fairway_woods = response.data;
        console.log(this.fairway_woods);
      }.bind(this)
    );
  },

  // created: function() {
  //   axios.get("/hybrids").then(
  //     function(response) {
  //       this.hybrids = response.data;
  //       console.log(this.hybrids);
  //     }.bind(this)
  //   );
  // },

  // created: function() {
  //   axios.get("/irons").then(
  //     function(response) {
  //       this.irons = response.data;
  //       console.log(this.irons);
  //     }.bind(this)
  //   );
  // },

  // created: function() {
  //   axios.get("/wedges").then(
  //     function(response) {
  //       this.wedges = response.data;
  //       console.log(this.wedges);
  //     }.bind(this)
  //   );
  // },

  methods: {
    setCurrentDriver: function(inputDriver) {
      this.currentDriver = inputDriver;
    },
    isValidDriver: function(inputDriver) {
      // return inputRecipe.title.indexOf(this.titleFilter) !== -1;
      return inputDriver.manufacturer.toLowerCase().includes(this.titleFilter);
    }
  },
  computed: {}
};

// var SignupPage = {
//   template: "#signup-page",
//   data: function() {
//     return {
//       name: "",
//       email: "",
//       password: "",
//       passwordConfirmation: "",
//       errors: []
//     };
//   },
//   methods: {
//     submit: function() {
//       var params = {
//         name: this.name,
//         email: this.email,
//         password: this.password,
//         password_confirmation: this.passwordConfirmation
//       };
//       axios
//         .post("/users", params)
//         .then(function(response) {
//           router.push("/login");
//         })
//         .catch(
//           function(error) {
//             this.errors = error.response.data.errors;
//           }.bind(this)
//         );
//     }
//   }
// };

// var LoginPage = {
//   template: "#login-page",
//   data: function() {
//     return {
//       email: "",
//       password: "",
//       errors: []
//     };
//   },
//   methods: {
//     submit: function() {
//       var params = {
//         auth: { email: this.email, password: this.password }
//       };
//       axios
//         .post("/user_token", params)
//         .then(function(response) {
//           axios.defaults.headers.common["Authorization"] =
//             "Bearer " + response.data.jwt;
//           localStorage.setItem("jwt", response.data.jwt);
//           router.push("/");
//         })
//         .catch(
//           function(error) {
//             this.errors = ["Invalid email or password."];
//             this.email = "";
//             this.password = "";
//           }.bind(this)
//         );
//     }
//   }
// };

// var LogoutPage = {
//   created: function() {
//     axios.defaults.headers.common["Authorization"] = undefined;
//     localStorage.removeItem("jwt");
//     router.push("/");
//   }
// };

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage }
    //     // { path: "/recipes/new", component: RecipesNewPage },
    //     // { path: "/recipes/:id", component: RecipesShowPage },
    //     // { path: "/recipes/:id/edit", component: RecipesEditPage },
    //     // { path: "/sample", component: SamplePage },
    //     { path: "/signup", component: SignupPage },
    //     { path: "/login", component: LoginPage },
    //     { path: "/logout", component: LogoutPage }
  ]
});

var app = new Vue({
  el: "#app",
  router: router,
  created: function() {
    // var jwt = localStorage.getItem("jwt");
    // if (jwt) {
    //   axios.defaults.headers.common["Authorization"] = jwt;
    // }
  }
});
