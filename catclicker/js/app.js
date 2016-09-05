var initialCats = [{'name': 'cat1',
        'imgSrc': 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
        'clickCount': 0,
        'nicknames': ['peter', 'julie']},
       {'name': 'cat2',
        'imgSrc': 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        'clickCount': 0,
        'nicknames': ['robert', 'june']}
      ];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'Newborn';
    } else if (clicks < 50) {
      title = 'Infant';
    } else if (clicks < 100) {
      title = 'Child';
    } else if (clicks < 200) {
      title = 'Teen';
    } else if (clicks < 500) {
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  }, this);

};

var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat)
  }

};

ko.applyBindings(new ViewModel);
