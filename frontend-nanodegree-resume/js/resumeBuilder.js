
var bio = {
  "name": "Jun Yan",
  "role": "Data Scientist",
  "contacts": {
    "mobile": "650-704-1227",
    "email": "mouseyan@gmail.com",
    "githup": "spiningup",
    "twitter": "JunYan22",
    "location": "Palo Alto"
  },
  "welcomeMsg": "Welcome to my site !",
  "skills": ["python", "html"],
  "pic": "images/me.jpeg",
};

var work = {};
work.position = "Data Scientist";
work.employer = "AT&T";
work.years = 2;
work.city = "Palo Alto";

var education = {};
education["name"] = "Stanford";
education["years"] = "2011-2014";
education["city"] = "Stanford";
education["degree"] = "Postdoc";

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
