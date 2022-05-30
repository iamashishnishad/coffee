// Add the coffee to local storage with key "coffee"



async function getData(){

    let url =`https://masai-mock-api.herokuapp.com/coffee/menu`

    // console.log(url);
    let res = await fetch(url);
    let data = await res.json();
    append(data);

    console.log(data);
}

function append(data){



    let menu = document.getElementById("menu");

        let img = document.createElement("img");
        img.src=`${data.image}`;
    
        let price=document.createElement("price");
        price.innerText=`${data.price}`

        let btn = document.createElement("button");
        btn.innerText="add to bucket";
        btn.addEventListener('click', function(){
            addToBucket
        })
    
    
        menu.append(img,price, btn);
    
}

function addToBucket(){
    console.log(data);
    bucketData.push(data);
    localStorage.setItem("cart", JSON.stringify(bucketData))
    
}
getData();