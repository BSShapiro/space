function mars(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=YRPNlNOzaKni4rfYvQeTEx6gnAPvl2bHhKK9oOYA')
    .then(response => response.json())
    .then(handleData)
}

mars();

const pictures = document.getElementById('thisone');


function handleData(data){
    window.imgArr = [];
    var nameArr = [];
    var dateArr = [];
    for(var i = 0; i < data.latest_photos.length; i++){
      const dataArr = data.latest_photos
      imgArr.push(dataArr[i].img_src);
      nameArr.push(dataArr[i].rover.name);
      dateArr.push(dataArr[i].earth_date);

      const imgDiv = document.createElement("div");
      const pic = document.createElement("img");
      pic.src = imgArr[i];
      
      if(i === 0){
          imgDiv.className = "carousel-item active"
      } else{
          imgDiv.className = 'carousel-item';
      }
      imgDiv.id = 'pic' + i
      pic.className = 'd-block w-50';
      
      imgDiv.append(pic);
      pictures.append(imgDiv);
    }
}

var num = 0;

const next = document.getElementById('next');
const last = document.getElementById("last");


//for(var i = 0; i < next.length; i++) {
    next.addEventListener("click", function(){
      current = document.getElementById('pic' + num);
      current.className = 'carousel-item';

      num++;

      if (num > imgArr.length - 1){
          num = 0;
      }

      a = document.getElementsByClassName('carousel-control-next');
      a.href = imgArr[num];
      
      currentPic = document.getElementById('pic' + num);
      currentPic.className = 'carousel-item active';
    })

    last.addEventListener("click", function(){
        current = document.getElementById('pic' + num);
        current.className = 'carousel-item';

        num--;
        if (num < 0){
            num = imgArr.length - 1;
        }
  
        a = document.getElementsByClassName('carousel-control-next');
        a.href = imgArr[num];
        
        currentPic = document.getElementById('pic' + num);
        currentPic.className = 'carousel-item active';
      })

