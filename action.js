function pokedex(){

  var id = "";
  var name = "";
  var photo = "";
  var type = "";
  var content = "";

  for (var i = 0; i < pokemones.length; i++) {
    id = pokemones[i].id;
    name = pokemones[i].name;
    photo = pokemones[i].photo;
    type = pokemones[i].type;
    content += "<div class='pokemon'>\
      <div class='photo'>\
        <img src='img/fotos/" + photo + "' alt='" + name + "'>\
      </div>\
      <div class='info'>\
        <h2>" + name + "</h2>\
        <div class='d-flex justify-content-between'>\
          <span>" + id + "</span>\
          <img src='img/tipos/" + type + "' alt=''>\
        </div>\
      </div>\
    </div>";

  }
  console.log(content);
  document.getElementById('container').innerHTML = content;

}
