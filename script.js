
let buttons = document.querySelectorAll(".one-button");
let areals = document.querySelectorAll(".areal");

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active'); 

      // function to activate relative content
    equalizer(index);
  });
});


function equalizer(activeButtonIndex){
    areals.forEach((item, itemIndex) => {
        if (itemIndex === activeButtonIndex) {
            areals.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        }
    })
};

let visible = document.querySelectorAll(".matryoshka");
let downs = document.querySelectorAll(".hidden-reich");


visible.forEach((clicked, index) => {
    clicked.addEventListener('click', function (e) {
        if (this.classList.contains("on")) {
            this.classList.remove('on'); 
        } else {
            visible.forEach(one => one.classList.remove('on'));
            this.classList.add('on'); 
        }
  });
});




const title = document.querySelectorAll("#t-main");
const t_des_manxt = document.querySelectorAll("#t-des-main");

let maxHeight = 0;

// Calculate the maximum height


changeHeight(title);



function changeHeight(elements) {
    elements.forEach(value => {
        const height = value.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    
    elements.forEach((value)=>{
        let n = maxHeight;
        n=maxHeight+'px';     
        console.log(value) ;  
        value.style.height = n;
    })
}
























/* html deleted tiles
<div class="tiles">
        <div class="ONE-clickables">
            <button id="tiles-z">ONE Team</button>
            <button id="tiles-z">ONE Karriere</button><!-- the default one-->
            <button id="tiles-z">ONE Arbeitgeber</button>
        </div>
        <div class="ONE-content">
            <img id="ONE-image">
            <div class="ONE-text-placeholder">
                <p></p>
            </div>

        </div>
    </div>


CSS deleted styles

.tiles{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid blue;
}

.ONE-content{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid blue;
}

.ONE-content img{
    width: 50%;
    margin-top: 50px;
}

.ONE-image-placeholder{
    width: 50%;
}

.ONE-text-placeholder{
    display: flex;
    align-items: center;
    width: 50%;
}

.ONE-text-placeholder p{
    padding: 0 20% 0 10%;
    line-height: 24px;
}

button{
    cursor: pointer;
}



 */

/* the underline, when active
.ONE-clickables button:focus{
    color: black;
    font-weight: 900;
}

.ONE-clickables button:after{
    content: "";
    display: block;
    width: 100%;
    height: 3px;  Adjust the height of the line as needed 
    background-color: red;  Change the color of the line 
    margin-top: 5px; /* Adjust the distance between the button and the line 
}*/

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
  });
  