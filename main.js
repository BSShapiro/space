var mainDiv = document.getElementsByClassName('main');

var cardBody = document.getElementsByClassName('card-body');

var pic = document.getElementById('APODpic');

var APODtext = document.getElementById('APODtext');

var APODurl = document.getElementById('APODurl');

var title = document.getElementById('title');

function getPic(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=YRPNlNOzaKni4rfYvQeTEx6gnAPvl2bHhKK9oOYA')
    .then(response => response.json())
    .then(handleData)
}

getPic()

function handleData(data) {
    console.log(data)
    
    APODtext.textContent = data.explanation;

    title.textContent = data.title;
    
    pic.src = data.url;

    APODurl.href = data.hdurl;
}

const searchbtn = document.getElementById('searchbtn');
const searchbar = document.getElementById('searchbar');

function search(){
    searchbtn.addEventListener('click', () => {
      let searchStr = searchbar.value;
      var picDivInner = document.getElementById('delete');

      picDivInner.remove();
      console.log(searchStr);
      fetch(`https://images-api.nasa.gov/search?q=${searchStr}`)
        .then(response => response.json())
        .then(handleSearch);
    })
}

search();

function handleSearch(data){
    var picArr = [];
    console.log(data.collection.items);
    var getData = data.collection.items;
    //[i].links[0].href
    const picDivInner = document.createElement('div');
    picDivInner.id = 'searchpictures'
    for(var i=0; i<getData.length; i++){
        const index = getData[i].links[0].href;
        picArr.push(index);
        console.log(picArr);
        const picDiv = document.getElementById('searchpictures');
        
        picDivInner.id = 'delete';
        picDiv.append(picDivInner);
        console.log(picDiv);
        
        const pic = document.createElement('img');
        pic.src = picArr[i];
        pic.style.width = '33.33%';
        pic.style.height = '30vh';
        pic.classList.add('rounded-circle');
        picDivInner.append(pic);
    }
    search();
}