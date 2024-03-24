const products = [
    {
        id: 1,
        name: "Ab Wheel",
        price: 700,
        stock: "Instock",
        rating: "Rating: " + 4.3,
        description: " The Ab Wheel strengthens core muscles, enhances stability, and improves posture. Incorporate it into your workouts for effective abdominal training and full-body strengthening. Experience the benefits with Fitness First today.",
        img: "./images/AbWheel.jpeg"
    },

    {
        id: 2,
        name: "Adjustable Dumblles",
        price: 250,
        stock: "Instock",
        rating: "Rating: " + 3.8,
        description: " Adjustable dumbbells are versatile gym equipment allowing for various exercises targeting different muscle groups. With customizable weight settings, they accommodate users of all fitness levels. From strength training to toning, these dumbbells offer a comprehensive workout experience. Explore their versatility and elevate your fitness journey with Fitness First.",
        img: "./images/AdjustableDumblles.jpeg"         
    },
    {
        id: 3,
        name: "Battle Rope",
        price: 999,
        stock: "Instock",
        rating: "Rating: " + 4.2,
        description: " Battle ropes are dynamic workout tools that engage multiple muscle groups simultaneously. Incorporate them into your routine for a high-intensity cardio workout, enhancing strength, endurance, and coordination. Ideal for full-body conditioning, battle ropes offer endless exercise variations to challenge and elevate your fitness levels. Discover their benefits with Fitness First.",
        img: "./images/BattleRope.jpg"
    },
    {
        id: 4,
        name: "Bumper Plates",
        price: 8999,
        stock: "Instock",
        rating: "Rating: " + 4.1,
        description: " Bumper plates are essential for weightlifting, providing a safer and more versatile option for strength training. Designed to withstand impact, they protect floors and equipment when dropped. Ideal for Olympic lifts, powerlifting, and CrossFit, bumper plates allow for progressive overload and efficient muscle development. Explore their utility and durability with Fitness First for a superior workout experience.",
        img: "./images/BumperPlates.png"
    }, 
    
    {
        id: 5,
        name: "ChestPress",
        price: 9,
        stock: "Instock",
        rating: "Rating: " + 4.6,
        description: " The chest press is a fundamental strength exercise targeting the chest, shoulders, and triceps. Executed using free weights or machines, it involves pushing movements against resistance, promoting muscle growth and upper body strength. Incorporate chest presses into your routine for a sculpted chest, improved posture, and enhanced functional strength. Elevate your workout regimen with Addict Fitness today.",
        img: "./images/ChestPress.jpg"
    },

    {
        id: 6,
        name: "Chest Press",
        price: 999,
        stock: "Instock",
        rating: "Rating: " + 4.7,
        description: " The chest press machine is a popular strength training equipment found in gyms. It targets the muscles in the chest, shoulders, and triceps. Users sit on the machine, push the handles forward, and contract their chest muscles. It provides a controlled and isolated movement for building upper body strength and developing the pectoral muscles. The machine typically allows for adjustable resistance and is suitable for individuals of varying fitness levels.",
        img: "./images/ChestPress.jpg"
    },
    {
        id: 7,
        name: "Cycling Bike",
        price: 2599,
        stock: "Instock",
        rating: "Rating: " + 4.2,
        description: " The cycling bike is a versatile piece of equipment for cardiovascular workouts. It provides low-impact yet highly effective exercise, engaging various muscle groups including the legs, core, and cardiovascular system. With adjustable resistance levels and customizable settings, cycling bikes cater to users of all fitness levels, offering an efficient way to burn calories and improve overall fitness. Discover the benefits at Fitness First today.",
        img: "./images/CyclingBike.jpg"
    },
    {
        id: 8,
        name: "Kettelbell",
        price: 9,
        stock: "Instock",
        rating: "Rating: " + 4.4,
        description: " Kettlebells are dynamic fitness tools that offer a wide range of exercises targeting strength, endurance, and flexibility. With their unique shape and handle design, kettlebells allow for fluid movements and functional training. Incorporate kettlebell swings, squats, and presses into your workout routine to build muscle, improve cardiovascular health, and enhance overall athleticism. Explore the versatility of kettlebells at Fitness First today. ",
        img: "./images/Kettelbell.jpeg"
    },

    {
        id: 9,
        name: "Roto Cycle",
        price: 7999,
        stock: "Instock",
        rating: "Rating: " + 4.6,
        description: " The roto cycle is an innovative piece of gym equipment that combines the benefits of cycling and rowing. Offering a full-body workout, it engages major muscle groups while providing cardiovascular benefits. With adjustable resistance levels and ergonomic design, the roto cycle ensures a challenging yet comfortable exercise experience. Experience the versatility of the roto cycle at Fitness First and elevate your fitness routine.",
        img: "./images/RotoCycle.jpeg"      
    },
    {
        id: 10,
        name: "TreadMills",
        price: 9999,
        stock: "Instock",
        rating: "Rating: " + 5.0,
        description: " Treadmills are versatile fitness machines for cardio workouts, offering options for walking, jogging, and running. With adjustable speed and incline settings, they provide tailored workouts to suit various fitness levels and goals. Treadmills help improve cardiovascular health, burn calories, and strengthen leg muscles. Experience the benefits of treadmills at Fitness First and enhance your fitness journey.",
        img: "./images/TreadMills.png"      
    },
    {
        id: 11,
        name: "Weightlifting",
        price: 6499,
        stock: "Instock",
        rating: "Rating: " + 4.0,
        description: " Weightlifting machines are essential for targeted strength training, offering a safe and controlled environment to perform various exercises. With adjustable resistance levels and ergonomic designs, they cater to individuals of all fitness levels and goals. From chest presses to leg extensions, weightlifting machines target specific muscle groups, promoting muscle growth, strength gains, and overall fitness. Discover the versatility of weightlifting machines at Fitness First for a comprehensive workout experience.",
        img: "./images/Weightlifting.jpeg"      
    },

]


function viewProduct() {
    var elofcard = $('div.img-grid');  //$ is used to fetch an element from html//
    products.forEach((x) => {           //forEach for iterating throught the products array//
        var elToAdd =
             '<div class="card">'+
             '<img src="'+x.img+'">'+ 
             '<h3>'+x.name+'</h3>'+
             '<p>'+x.price+'</p>'+
             '<p>'+x.stock+'</p>'+
             '<p>'+x.rating+'</p>'+
             /* '<p>'+x.description+'</p>'+ */
             '<button onclick="viewdetails2('+x.id+')">View Details</button>'+
             '</div>';

    elofcard.append(elToAdd);

    })

  }
  viewProduct(); // calling the above function defined//

  


function viewdetails2(id) {
    window.location.href = './product-details.html?id=' + id;
  }

function ProductDetails(){

var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('id');
console.log(urlParams)
console.log(productId)

var elofcardLeft = $('div.contianer-left');
var elofcardRIght = $('div.contianer-right');

products.forEach((x) => {
    console.log(x);
    if(x.id==productId){
        
        var elToAdd2 = '<img src="'+x.img+'" alt=""></img>'
        var elToAdd3 =  '<h2>'+x.name+'</h2>'+
        '<p class="product-price">Price: $'+ x.price+'</p>'+ 
        '<p class="product-rating">'+x.rating+'</p>'+
        '<p class="product-description">Description:'+x.description+' </p>'+
        '<button id="reserve" onclick="reserve()">Reserve</button>' + 
        '<div id="reservationFormContainer"></div>';
        
        elofcardLeft.append(elToAdd2);
        elofcardRIght.append(elToAdd3);
        } 
        
        
    }    );
    
}
ProductDetails();

const search = () => {
    const searchbox = document.getElementById("search-input").value.toUpperCase();
    const storeitems = document.getElementById("img-grid")
    const product = document.querySelectorAll(".card")
    const pname = document.getElementsByTagName("h3")

    for (var i=0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h3')[0];
        if(match){
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }

}

function reserve() {
    var form = document.createElement('form');
    form.id = 'reserve-button';

    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.className = 'label-form';

    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Type here';
    nameInput.className = 'form-input';

    var emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    emailLabel.className = 'label-form';
    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Type here';
    emailInput.className = 'form-input';

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'submit';
    submitButton.className = 'form-submit-button';

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(submitButton);

    var formContainer = document.getElementById('reservationFormContainer');
    formContainer.innerHTML = ''; // to clear existing content
    formContainer.appendChild(form);

    var popupContainer = document.createElement('div');
    popupContainer.id = 'popupContainer';
    popupContainer.classList.add('popup-container'); 

  // Appending the popup container to the body
    document.body.appendChild(popupContainer);
    popupContainer.appendChild(form);

  // Created the close button
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function () {
        // to hide the popup container
        popupContainer.style.display = 'none';
    });

    // Append the close button to the popup container
    popupContainer.appendChild(closeButton);
    
}

