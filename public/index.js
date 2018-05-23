/* global Vue, VueRouter, axios */

var DriversPage = {
  template: "#drivers-page",
  data: function() {
    // console.log("hello");
    return {
      message: "My Golf Club App!",
      drivers: [],
      currentDriver: {},
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
  },

  methods: {
    setCurrentDriver: function(inputDriver) {
      this.currentDriver = inputDriver;
    },
    isValidDriver: function(inputDriver) {
      return (
        inputDriver.description
          .toLowerCase()
          .includes(this.titleFilter.toLowerCase()) ||
        inputDriver.model.toLowerCase().includes(this.titleFilter.toLowerCase())
      );
    }
  },
  computed: {}
};

var FairwayWoodsPage = {
  template: "#fairways-page",
  data: function() {
    // console.log("hello");
    return {
      message: "My Golf Club App!",
      fairwaywoods: [],
      currentFairwayWood: {},
      titleFilter: ""
    };
  },

  created: function() {
    axios.get("/fairways").then(
      function(response) {
        this.fairwaywoods = response.data;
        console.log(this.fairwaywoods);
      }.bind(this)
    );
  },

  methods: {
    setCurrentFairwayWood: function(inputFairwayWood) {
      this.currentFairwayWood = inputFairwayWood;
    },
    isValidFairwayWood: function(inputFairwayWood) {
      return (
        inputFairwayWood.description
          .toLowerCase()
          .includes(this.titleFilter.toLowerCase()) ||
        inputFairwayWood.model
          .toLowerCase()
          .includes(this.titleFilter.toLowerCase())
      );
    }
  },
  computed: {}
};

var HybridsPage = {
  template: "#hybrids-page",
  data: function() {
    return {
      hybrids: [],
      currentHybrid: {},
      titleFilter: ""
    };
  },

  created: function() {
    axios.get("/hybrids").then(
      function(response) {
        this.hybrids = response.data;
        console.log(this.hybrids);
      }.bind(this)
    );
  },

  methods: {
    setCurrentHybrid: function(inputHybrid) {
      this.currentHybrid = inputHybrid;
    },
    isValidHybrid: function(inputHybrid) {
      return (
        inputHybrid.description
          .toLowerCase()
          .includes(this.titleFilter.toLowerCase()) ||
        inputHybrid.model.toLowerCase().includes(this.titleFilter.toLowerCase())
      );
    }
  },
  computed: {}
};

var PuttersPage = {
  template: "#putters-page",
  data: function() {
    return {
      putters: [],
      currentPutter: {},
      titleFilter: ""
    };
  },

  created: function() {
    axios.get("/putters").then(
      function(response) {
        this.putters = response.data;
        console.log(this.putters);
      }.bind(this)
    );
  },

  methods: {
    setCurrentPutter: function(inputPutter) {
      this.currentPutter = inputPutter;
    },
    isValidPutter: function(inputPutter) {
      return (
        inputPutter.description
          .toLowerCase()
          .includes(this.titleFilter.toLowerCase()) ||
        inputPutter.model.toLowerCase().includes(this.titleFilter.toLowerCase())
      );
    }
  },
  computed: {}
};

var WedgesPage = {
  template: "#wedges-page",
  data: function() {
    // console.log("hello");
    return {
      message: "My Golf Club App!",
      wedges: [],
      currentWedge: {},
      titleFilter: ""
    };
  },

  created: function() {
    axios.get("/wedges").then(
      function(response) {
        this.wedges = response.data;
        console.log(this.wedges);
      }.bind(this)
    );
  },

  methods: {
    setCurrentWedge: function(inputWedge) {
      this.currentWedge = inputWedge;
    },
    isValidWedge: function(inputWedge) {
      return (
        inputWedge.description
          .toLowerCase()
          .includes(this.titleFilter.toLowerCase()) ||
        inputWedge.model.toLowerCase().includes(this.titleFilter.toLowerCase())
      );
    }
  },
  computed: {}
};

var IronsPage = {
  template: "#irons-page",
  data: function() {
    // console.log("hello");
    return {
      message: "My Golf Club App!",
      irons: [],
      currentIron: {},
      titleFilter: ""
    };
  },

  created: function() {
    axios.get("/irons").then(
      function(response) {
        this.irons = response.data;
        console.log(this.irons);
      }.bind(this)
    );
  },

  methods: {
    setCurrentIron: function(inputIron) {
      this.currentIron = inputIron;
    },
    isValidIron: function(inputIron) {
      return (
        inputIron.description
          .toLowerCase()
          .includes(this.titleFilter.toLowerCase()) ||
        inputIron.model.toLowerCase().includes(this.titleFilter.toLowerCase())
      );
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/drivers", component: DriversPage },
    { path: "/carbon-hybrids", component: HybridsPage },
    { path: "/putters", component: PuttersPage },
    { path: "/wedges", component: WedgesPage },
    { path: "/irons", component: IronsPage },
    { path: "/fairways", component: FairwayWoodsPage }
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
