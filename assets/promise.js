
let firstPromise= new Promise((resolve,reject)=>{
    const info=[

        { img_url:"neftci.png",
            team:"Neftçi",
            information:"1937 -ci ildə təsis edilib"
         },
         { img_url:"qrb.png",
         team:"Qarabağ",
         information:"1989 -cu ildə təsis edilib"
      },
      { img_url:"kapaz.png",
      team:"Kəpəz",
      information:"1958 -ci ildə təsis edilib"
    },
    { img_url:"qab.png",
    team:"Qəbələ",
    information:"2005 -ci ildə təsis edilib"
    },
    { img_url:"seb.png",
    team:"Səbail",
    information:"2016 -cı ildə təsis edilib"
    },
    ];
    setTimeout(()=>{
if (info.length>0) {
    resolve(info)
} else {
    reject("Error")
}
    },2000);
// if (info.length>0) {
//     resolve(info)
    
// } else {
//     reject("Error")
    
// }

 
})
let card=document.querySelector("#card1")
firstPromise.then(data =>{
    
    card.innerHTML = data.map( item => {
        return ` 
        
        <div class="card" style="width: 18rem;">
        <img src="./assets//image/${item.img_url}" class="card-img-top p-5" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${item.team}</h5>
          <p class="card-text text-center">${item.information}
        </p>
        
        </div>
      </div>
        `
    
        
    }).join("")
    // console.log(data);
  
}).catch(data=>{
    alert("Error")
}).finally(data=>alert("Bitdi"))