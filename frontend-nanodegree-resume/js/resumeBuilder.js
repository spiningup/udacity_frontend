
var bio = {
  "name": "Jun Yan",
  "role": "Data Scientist",
  "contacts": {
    "mobile": "650-704-1227",
    "email": "mouseyan@gmail.com",
    "githup": "spiningup",
    "twitter": "@JunYan22",
    "location": "Palo Alto, CA"
  },
  "welcomeMessage": "Welcome to my site !",
  "skills": ["python", "html"],
  "biopic": "images/me.jpeg"
};

var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Data Scientist",
      "location": "Palo Alto, CA",
      "dates": "2014-now",
      "description": "Utilize and understand big data in AT&T to drive business decisions."
    },
    {
      "employer": "Colorado School of Mines",
      "title": "Research Assistant Professor",
      "location": "Golden, CO",
      "dates": "2014",
      "description": "Research on machine learning methods for material science applications."
    }
  ]
};

var projets = {
  "projects": [
    {
      "title": "Onion",
      "dates": "2015-2016",
      "descripton": "Connect people and projects by mining internal organizational data.",
      "images": [
        "images/fry.jpg"
      ]
    },
    {
      "title": "Social Graph Analysis",
      "dates": "2015",
      "descripton": "Detect influencers and communities from customer social graph.",
      "images": [
        "images/fry.jpg"
      ]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Stanford",
      "location": "Stanford, CA",
      "degree": "Postdoc",
      "major": ["Chemical Engineering"],
      "dates": "2014",
      "url": "www.stanford.edu"
    },
    {
      "name": "DTU",
      "location": "Lyngby, Denmark",
      "degree": "Postdoc",
      "major": ["Physics"],
      "dates": "2011",
      "url": "www.dtu.dk"
    }
  ],
  "onlineCourses": [
    {
      "title": "Udacity web developer nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "www.udacity.com"
    }
  ]
};
// $("#header").prepend(HTMLbioPic.replace("%data%", bio.picurl));
// $("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
// $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
// $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
//
// $("#topContacts").append(HTMLmobile.replace("%data%", bio.mobile));
// $("#topContacts").append(HTMLemail.replace("%data%", bio.email));

// $("#workExperience").append(HTMLworkStart);
// $("#workExperience").append(HTMLworkEmployer.replace("%data%", work["employer"]));
// $("#workExperience").append(HTMLworkTitle.replace("%data%", work["position"]));
// $("#education").append(HTMLschoolStart);
// $("#education").append(HTMLschoolName.replace("%data%", education.name))
// $("#education").append(HTMLschoolDegree.replace("%data%", education.degree))
