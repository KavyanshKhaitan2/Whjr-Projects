menu_list_array = [
  "The Unthinkable Pizza",
  "Margherita",
  "Double Cheese Margherita",
  "Farmhouse",
  "Mexican Green Wave",
  "Deluxe Veggie",
  "Veg Extravaganza",
  "Veggie Paradise",
  "Cheese n Corn",
  "Fresh Veggie",
  "Paneer Makhani",
  "Indi Tandoori Paneer",
  "Cheese n Tomato",
  "Achari Do Pyaza",
  "Kadhai Paneer",
  "Creamy Tomato Pasta Pizza - Veg",
];

function getmenu() {
  var htmldata;
  htmldata = "<ol class='menulist'>"
  menu_list_array.sort();
  for (var i=0; i < menu_list_array.length; i++) {
    htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
  }

  htmldata = htmldata + '</ol>'

  document.getElementById("display_menu").innerHTML = htmldata;

  htmldata = '<section class="cards">'
  for (let i = 0; i < menu_list_array.length; i++) {
    htmldata = htmldata + "<div class='card'><img src='images/pizzaImg.png'>" + menu_list_array[i] + "</div>"
  }
  htmldata = htmldata + "</section>"
  document.getElementById("display_addedmenu").innerHTML = htmldata;
}


function add_item() {
  var htmldata;
  var item = document.getElementById("add_item").value;
  menu_list_array.push(item);
  menu_list_array.sort();

  htmldata = '<section class="cards">'
  for (let i = 0; i < menu_list_array.length; i++) {
    htmldata = htmldata + "<div class='card'><img src='images/pizzaImg.png'>" + menu_list_array[i] + "</div>"
  }
  htmldata = htmldata + "</section>"
  document.getElementById("display_addedmenu").innerHTML = htmldata;
  getmenu();
}