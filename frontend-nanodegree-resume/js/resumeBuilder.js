
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
  "biopic": "images/me.jpeg",
};

var work = {
  "jobs": [
    {
      "employer": "AT&T",

    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Stanford",
      "location": "Stanford, CA",
      "degree": "Postdoc",
      "major": "Chemical Engineering",
      "years": "2011-2014"
    },
    {
      "name": "DTU",
      "location": "Lyngby, Denmark",
      "degree": "Postdoc",
      "major": "Physics",
      "years": "2009-2011"
    }
  ],
  "onlineCourses": [
    {
      "title": "Udacity web developer nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "https:www.udacity.com"
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

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work["employer"]));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work["position"]));
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education.name))
$("#education").append(HTMLschoolDegree.replace("%data%", education.degree))
