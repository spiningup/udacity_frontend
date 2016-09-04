$(function(){

  var model = {
    currentCat: null,
    cats: [{'name': 'cat1',
            'imgsrc': 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
            'clickcount': 0},
           {'name': 'cat2',
            'imgsrc': 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
            'clickcount': 0}],
    adminInfo: {'name': null,
                'imgsrc': null,
                'clickcount': null}
  };

  var octopus = {
    init: function() {
      model.currentCat = model.cats[0];
      viewList.init();
      viewCat.init();
      viewAdmin.init();
    },

    getCurrentCat: function() {
      return model.currentCat;
    },

    getCats: function() {
      return model.cats;
    },

    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },

    addCounter: function() {
      model.currentCat.clickcount++;
      viewCat.render();
    },

    setCurrentCatAdmin: function() {
      model.adminInfo.name = model.currentCat.name;
      model.adminInfo.imgsrc = model.currentCat.imgsrc;
      model.adminInfo.clickcount = model.currentCat.clickcount;
      viewAdmin.render();
    },

    saveCurrentCatAdmin: function() {
      model.currentCat.name = $("#input-name").val();
      model.currentCat.imgsrc = $("#input-url").val();
      model.currentCat.clickcount = parseInt($('#input-clicks').val());
      viewList.render();
      viewCat.render();
      this.setCurrentCatAdmin();
    }
  };

  var viewList = {
    init: function() {
      this.render();
    },

    render: function() {
      $("#cat-list").empty();
      var cats = octopus.getCats();
      cats.forEach(function(cat, i) {
        $("#cat-list").append('<li id="cat' + i + '">' + cat.name + '</li>');
        $("#cat"+i).click((function(cat) {
          return function() {
            octopus.setCurrentCat(cat);
            octopus.setCurrentCatAdmin();
            viewCat.render();
          };
        })(cat));
      });
    }
  };

  var viewCat = {
    init: function() {
      $('#cat-img').click(function(e) {
        octopus.addCounter();
      })
      this.render();
    },

    render: function() {
      var currentCat = octopus.getCurrentCat();
      $("#cat-name").text(currentCat.name);
      $("#cat-count").text(currentCat.clickcount);
      $("#cat-img").attr('src', currentCat.imgsrc);
    }
  };

  var viewAdmin = {
    init: function() {
      $("#btn-admin").click(function(e) {
        octopus.setCurrentCatAdmin();
      });

      $("#btn-save").click(function(e) {
        octopus.saveCurrentCatAdmin();
        e.preventDefault();
      });

      $("#btn-cancel").click(function(e) {
        $("#admin-form").hide();
        e.preventDefault();
      });
    },

    render: function() {
      $("#input-name").val(model.adminInfo.name);
      $("#input-url").val(model.adminInfo.imgsrc);
      $("#input-clicks").val(model.adminInfo.clickcount);
      $("#admin-form").show();
    }

  };
  
  octopus.init();

});
