var before = 0;

function start()
{
  before = 0;
  search();
}

function search()
{
    var xhr = new XMLHttpRequest();
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
    var key = "Phw6ddCE0xv0shwjM6hi49MkdhpVUyreWm25w1px"
    console.log(url  + '?sol=' + document.getElementById("sol").value + '&camera=' + document.getElementById("camera").value + '&page=' + document.getElementById("page").value + "&api_key=" + key);
    xhr.open('GET', url  + '?sol=' + document.getElementById("sol").value + '&camera=' + document.getElementById("camera").value + '&page=' + document.getElementById("page").value + "&api_key=" + key);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function (){
        var response = xhr.response;
        console.log(response);

        var images = document.getElementById("images");
        images.innerHTML = "";
        for(var i = 0; i <= document.getElementById("page").value*25; i++)
        {
          var img = document.createElement("img");
          img.style.margin = "10px 0 0 55px";
          img.src = response.photos[i].img_src;
          images.appendChild(img);
          //document.getElementById("img" + i).src=ts.data[i-1].images.downsized.url
        }
        /*var hero = response.filter(item=>item.localized_name==document.getElementById("Searched_name").value);
        console.log(hero);*/
        document.getElementById("btnnext").style.display = "inline";
        before += parseInt(document.getElementById("page").value);
        console.log(before);
    }
    
}