// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
//( function(){
  // Select the first element from the array
//  let first = formData[ 0 ];
  // Log the first object
//  console.log( first );
  // Log the string "First Name"
//  console.log( first.label );
//} )();


// -------- Your Code Goes Below this Line --------

let form = document.getElementById("fields")

formData.forEach(function(dataItem) {

  let input = document.createElement("input");

  if(dataItem.type === "textarea") {
    input = document.createElement("textarea");

  } else if(dataItem.type === "select") {
    input = document.createElement("select");

    let disabledText = document.createTextNode(dataItem.label);
    let disabledButton = document.createElement("option");

    disabledButton.appendChild(disabledText);

    disabledButton.setAttribute("disabled", "");
    disabledButton.setAttribute("selected", "");

    input.appendChild(disabledButton);

    let  optionsObject = dataItem.options;
    optionsObject.forEach(function(optionsItem) {
      let optionsText = document.createTextNode(optionsItem.label);
      let optionsButton = document.createElement("option");

      optionsButton.appendChild(optionsText);

      input.appendChild(optionsButton);
    });

  } else {
    input = document.createElement("input");

  }

  input.setAttribute("type", dataItem.type);
  input.setAttribute("placeholder", dataItem.label);
  input.setAttribute("id", dataItem.id);
  input.setAttribute("icon", dataItem.icon);
  input.setAttribute("options", dataItem.options);

  form.appendChild(input);
});
