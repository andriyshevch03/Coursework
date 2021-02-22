//banner

let logo = document.querySelector('.name')
let p_logo = document.createElement('P')
logo.insertAdjacentElement('afterbegin',p_logo)
p_logo.innerHTML = `Holidays in the Philippines.<br>
Make dreams come true ...`


//info

//min

//------h2------
let overmin = document.getElementById('overlay_min')
let cls_min = document.querySelector('.closebtn_min')
let min = document.querySelector('.min')
let h_min = document.createElement('H2')
min.insertAdjacentElement('afterbegin',h_min)
h_min.textContent = `MIN`
//------p-------
let p_min = document.createElement('P')
cls_min.insertAdjacentElement('afterend',p_min)
p_min.innerHTML = `<strong>This offer includes:</strong><br>
-accommodation in a three star hotel,<br>
-nice room with beautiful mountain views,<br>
-breakfast in the hotel complex,<br>
-opportunity to take a diving instructor for 3 hours <br>
`
min.addEventListener('click',()=>{
    overmin.style.height='100vh'
})
cls_min.addEventListener('click',()=>{
    overmin.style.height= '0'
})


//middle

//------h2------
let overmiddle = document.getElementById('overlay_middle')
let cls_middle = document.querySelector('.closebtn_middle')
let middle = document.querySelector('.middle')
let h_middle = document.createElement('H2')
middle.insertAdjacentElement('afterbegin',h_middle)
h_middle.textContent = `MIDDLE`
//------p-------
let p_middle = document.createElement('P')
cls_middle.insertAdjacentElement('afterend',p_middle)
p_middle.innerHTML = `<strong>This offer includes:</strong><br>
accommodation in a four star hotel,<br>
nice room with beautiful mountain views,<br>
breakfast and lunch in the hotel complex,<br>
opportunity to take a diving instructor for 6 hours,<br>
massage,<br>
access to the luxury section,<br>
access to the jacuzzi and indoor terrace,<br>
`
middle.addEventListener('click',()=>{
    overmiddle.style.height='100vh'
})
cls_middle.addEventListener('click',()=>{
    overmiddle.style.height= '0'
})


//max

//------h2------
let overmax = document.getElementById('overlay_max')
let cls_max = document.querySelector('.closebtn_max')
let max = document.querySelector('.max')
let h_max = document.createElement('H2')
max.insertAdjacentElement('afterbegin',h_max)
h_max.textContent = `MAX`
//------p-------
let p_max = document.createElement('P')
cls_max.insertAdjacentElement('afterend',p_max)
p_max.innerHTML = `<strong>This offer includes:</strong><br>
accommodation in a five star hotel,<br>
the best room with a beautiful ocean view,<br>
breakfast, lunch and dinner in the hotel complex,<br>
opportunity to take a diving instructor for 12 hours,<br>
massage,<br>
access to the super deluxe section,<br>
access to Jacuzzi, private beach and covered terrace,<br>
motorcycle or scooter,<br>
excursion to interesting places,<br>
a separate evening restaurant with traditional dishes<br>
`
max.addEventListener('click',()=>{
    overmax.style.height='100vh'
})
cls_max.addEventListener('click',()=>{
    overmax.style.height= '0'
})


//gallery


function loadImages(parameter){
    let get_image = new XMLHttpRequest()
    let url = `https://pixabay.com/api/?key=17057678-b4c4954d8c62e2cb084b2680c&q=${parameter}&image_type=photo&pretty=true`
    get_image.open('GET',url)
    get_image.send()
    get_image.onloadend = ()=>{
        if(get_image.status !==200){
            console.log(get_image.status,get_image.statusText)
        } else {
            let result = JSON.parse(get_image.response).hits
            console.log(result)
            showImages(result)
        }
    }
}
let BTN = document.querySelector('.gallery')
let list = document.querySelector('.gallery .list')
let ekran = document.querySelector('.gallery .ekran')
console.log(list)


let leftBigArrow =  document.createElement('SPAN')
leftBigArrow.innerHTML = '&#10148'
leftBigArrow.classList.add('left-big-arrow')
ekran.insertAdjacentElement("afterbegin",leftBigArrow)

let RightBigArrow =  document.createElement('SPAN')
RightBigArrow.innerHTML = '&#10148'
RightBigArrow.classList.add('right-big-arrow')
ekran.insertAdjacentElement("afterbegin",RightBigArrow)


let right = document.createElement('SPAN')
right.innerHTML = '&#10148'
right.classList.add('right')
BTN.insertAdjacentElement("afterbegin",right)
let left = document.createElement('SPAN')
left.innerHTML = '&#10148'
left.classList.add('left')
BTN.insertAdjacentElement("afterbegin",left)
const a = +150
right.addEventListener('click',()=>{
    list.style.right = (parseInt(list.style.right || getComputedStyle(list)['right'], 10) + 150) + 'px'
})

left.addEventListener('click',()=>{
    list.style.right = (parseInt(list.style.right || getComputedStyle(list)['right'], 10) - 150) + 'px'
})

function showImages(obj){
    list.innerHTML=''
    ekran.style.backgroundImage=`url(${obj[0].webformatURL})`
    for(let i=obj.length-1; i>=0; i--){
        let srcImg = obj[i].webformatURL
        let li = document.createElement('LI')
        li.style.backgroundImage = `url(${srcImg})`
        list.insertAdjacentElement('afterbegin',li)
    }
    list.style.width = 150 * obj.length + 'px'

    
    let imageList = document.querySelectorAll('.gallery .list li')
imageList[0].classList.add('active')
console.log(imageList)
let activeIndex = 0


for(let i=0; i<imageList.length; i++){
    imageList[i].addEventListener('click',function(event){
     changeImage(i)
    })



}
RightBigArrow.addEventListener('click',(event)=>{
   
 
changeImage(activeIndex+1)

})
leftBigArrow.addEventListener('click',(event)=>{
    changeImage(activeIndex-1)
    
    })



function changeImage(index){
    ekran.style.backgroundImage = imageList[index].style.backgroundImage
        if(index!=activeIndex){
            imageList[index].classList.add('active')
            imageList[activeIndex].classList.remove('active')
            activeIndex=index
}
    
}}
loadImages('maldives')


let li_img = document.querySelectorAll('ul li')
console.log(li_img)



//title

let title = document.querySelector('.title')
let p_title = document.createElement('P')
title.insertAdjacentElement('afterbegin',p_title)
p_title.innerHTML = `<strong>Hotel room categories:</strong> <br>

<strong> Deluxe Room </strong> - rooms in the North Wing of the main building, most with one King-size bed, with a sofa for relaxation, a writing desk and loungers for relaxing on the balcony overlooking the garden; <br>
  
<strong> Deluxe Seaview Room </strong> - ocean view rooms located on the last floors of the North Wing of the main building and on the last two floors of the South Wing, <br>
  
<strong> Premier Beachfront Room </strong> - more spacious rooms with 2 large queen-size beds, with frontal ocean views (max 4 adults), <br>
  
<strong> Seaview Suite </strong> - located on the 1st floor of the South Wing, with a bedroom area and a living area, with a spacious balcony a few steps from the beach, with a jacuzzi and a sofa for relaxation; <br>
  
<strong> Tree House </strong> - duplex villas with panoramic ocean views, located on the hillside. On the 1st floor there is a bedroom with a large king-size bed and a panoramic window on the entire wall, on the 2nd floor there is a spacious open living room with sofas, a table, a private jacuzzi and sun loungers for sunbathing or massage. Villas are the perfect place for honeymooners! <br>
  
<strong> Pool villa </strong> - villas with a private pool, a bedroom with a large king-size bed and a separate living room, with an outdoor shower and loungers for relaxation or massage, with an outdoor gazebo; <br>

<strong> Loft Villa </strong> - duplex villas with a private pool, with a bedroom with a large king-size bed on the upper level of the villa and a living room on the lower level, which opens onto an open gazebo with a table and sofas, with an outdoor shower , loungers for relaxation and massage; <br>
  
<strong> Villa Balani </strong> and <strong> Specialty Villas </strong> - 2-bedroom villa with private pool, 1st bedroom with one King-size bed, 2nd bedroom with 2 twin beds, both bedrooms with their own bathroom and direct access to the garden and pool. The spacious living area opens onto an open area with a veranda, a landscaped garden, a gazebo with table and sofas, an outdoor shower and a swimming pool. The villas are ideal for families! <br>
  
<strong> Villa Likha </strong> is a luxurious 2 bedroom villa, consisting of 3 separate villas. The detached villa has a huge living room with dining area, kitchen and butler room. The 2nd villa has a 1st bedroom with an en-suite bathroom, and the 3rd villa has a 2nd bedroom with a king-size bed with an en suite bathroom. The villa has its own outdoor pool, gazebo with breathtaking ocean views, loungers and an outdoor shower. <br>

In the room: air conditioning, cable TV, telephone, Internet access (free of charge), DVD player, desk, minibar, safe, kettle and tea and coffee making facilities, marble bathroom with bath and shower, bathrobe, slippers, balcony or terrace, 24-hour room service, butler service (in villas), pillow menu (in villas and suites). <br>

<strong> Non-smoking rooms available. </strong> <br>

<strong> Restaurants and Bars: </strong> <br>

<strong> Vintana </strong> is a restaurant offering the richest buffet breakfast, lunch and dinner, where the most delicious dishes from international cuisine are presented. <br>

<strong> Sirena </strong> is a seafood restaurant located on a rocky peninsula overlooking two beach bays. <br>

<strong> Rima </strong> is an Italian restaurant, the most romantic place for an evening sunset. <br>

<strong> Cielo </strong> - restaurant by the main pool, international cuisine, pasta, pizza, cocktails. <br>

<strong> Lobby Lounge </strong> - Lobby bar, snacks and drinks. <br>

<strong> Solana Bar </strong> - a bar on the top of a hill overlooking the ocean, after sunset turns from a quiet secluded corner to the center of nightlife, music, energy. <br>

<strong> Alon Bar </strong> - beach and pool bar, snacks and drinks. <br>

<strong> Entertainment Center </strong> - Snacks and drinks. <br>

<strong> At guests' disposal: </strong> <br> business center (translation services, fax, printer, courier services, video conferences, meeting rooms), banquet and conference rooms, meeting and drop-off center Mabuhay Center in Caticlan, own pier, currency exchange, parking, safe, laundry, shop, hairdresser, medical clinic. <br>

Entertainment and sports: 2 outdoor swimming pools, a health club, an entertainment and game center (Sony Playstation, basketball hoops, football, etc.), tennis courts, a water sports center and a dive shop, diving, snorkelling, a golf club (nearby with the hotel). <br>

SPA: Spa center “Chi-spa” - located on the territory of 5714 sq. m with pool, spa suites and villas, based on the concept of Chinese and Himalayan treatments. <br>

Additional information: the hotel organizes weddings, romantic dinners on the beach, various celebrations! <br>`


//weather


let $time = document.getElementById('time'),
    $dots = document.getElementById('dots'),
    $hours = document.getElementById('hours'),
    $day = document.getElementById('day'),
    $minutes = document.getElementById('minute'),
    $month = document.getElementById('month'),
    $date = document.getElementById('data'),
    $sity = document.getElementById('city'),
    $temperature = document.getElementById('temperature'),
    $sky = document.getElementById('forcast'),
    $weather_icon = document.getElementById('weather_icon'),
    $weather_app = document.getElementById('weather-app'),
    $high = document.getElementById('high'),
    $min = document.getElementById('low')







let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday',"Friday",'Saturday',]
let months = ['Jan','Feb','March','Apr','May','June','July','August','Sept','Oct','Now','Dec',] 


 class Time{
     constructor(today){
         this.day = today.getDay()
         this.month = today.getMonth()
         this.date = today.getDate()
         this.hours = today.getHours()
         this.minutes = today.getMinutes()
         this.sec = today.getSeconds()
     }
     show(){
         $dots.classList.toggle('dots')
         $hours.textContent = this.hours
         $day.textContent = days[this.day]
         $month.textContent = months[this.month]
         $date.textContent = this.date
         $minutes.textContent = this.minutes
         return this.sec

     }
 }


async function load_weather(city_name = 'Philippines'){
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=47065cb9ab1a711c668427875a0d6e0e`
     try{
         const response = await fetch(url)
         const data = await response.json()
         console.log(data)
         $temperature.textContent = Math.round(data.main.temp - 273)
         $high.textContent = Math.round(data.main.temp_max - 273)
         $min.textContent = Math.round(data.main.temp_min - 273)
         $sity.textContent = data.name
         $sky.textContent = data.weather[0].main
         $weather_icon.style.backgroundImage = `url(http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
     }
     catch(err){
         console.log(err)
     }
 }




function load_time(){
    setInterval(() => {
    let time = new Time(new Date())
    time.show()
    }, 1000);
}


load_time()
load_weather()




//orde




