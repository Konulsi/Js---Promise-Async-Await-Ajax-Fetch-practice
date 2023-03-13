"use strict";

// let users = [
//     {
//         name: "Mubariz",
//         surname: "Agayev",
//         age: 18
//     },

//     {
//         name: "Aqshin",
//         surname: "Hummetov",
//         age: 27
//     },

//     {
//         name: "Pervin",
//         surname: "Rehimli",
//         age: 27
//     },

//     {
//         name: "Mirze",
//         surname: "Bashirzade",
//         age: 27
//     },

//     {
//         name: "Hacker",
//         surname: "Akberov",
//         age: 20
//     },
// ]


// //function getUsersByName(str) {
// //     setTimeout(() => {
// //         let result = users.filter(m => m.name.includes(str))

// //         console.log(result);
// //     }, 3000);
// // }

// // getUsersByName("r");




// //settimeout saytlarda datalarin backendden gelene qeder olan muddetdir. saytda loading animationu ile gozletmek olar


// let ul = document.querySelector("ul")


// function getUsers(datas) {     //arrayda olan userleri gostermek  uchun

//     setTimeout(() => {   //datalarin mueyyen intervalla gelmesi uhun

//     let str = "";        //bosh str ye elave edeceyimiz lileri artirib, sonra hemin strni ul nin htmlsine append edirik

//     datas.forEach(user => {
//         str += `<li class="list-group-item"><b>${user.name}-</b><b>${user.surname}-</b><b>${user.age}</b></li>`

//     });  
//     }, 2000);

// }



// function createUsers(user){

//    // Promise bir nov sene gelen requestin cavabini gozleyirsen. reguest succesde, fielde ola biler.
// // resolved ishin hell olmasi, rejected errorun olmasi demekdir
//    return new Promise((resolved, rejected) => {
//     setTimeout(() => {
//         users.push(user);
//         let err = false; //error ilk olaraq false olduqda ifde !err yaziriq. yeni error yoxdur truedi
//         let err = true; //error ilk olaraq true olduqda else e duwur. yeni error olduqda truedi

//         if(!err){
//             resolved(users);   //add olan yeni useri yeni buraya gonderdiyimiz useri then olduqda response kimi qebul edirsen.yeni promisin neticesini gonderirsen then e.
//                                 //yeni resolved oldu iw bitti bura gonderdiyimiz useri response weklinde qebul edirsen
//         }
//         else{
//             rejected("something is wropng"); //error olduqda rejecten iwleyir
//         }
//     }, 3000);
//    })


// }

//promise datani goturub gelsin yeni hazirlansin. hemin proses pending adlanir yeni pending bitsin
//sonra then gelsin
// createUsers({ name: "Elcan", surname: "Qurbanov" , age: 20},getUsers).then(response => {
//     getUsers(response);
// }).catch(err=>{    //error olduqda else girir ve catch vasitesile erroru tuturuq.
//     console.log(err)
// })



//resolve response nan tuturuq
//rejected i ise catch vasitesile.








// function getAllPost() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(datas => {
//             let str = "";
//             datas.forEach(data => {
//                 str += `<li data-id="${data.id}" class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userid}</b></li>`

//             });
//             ul.innerHTML = str;
//         })

// }

// getAllPost();  //butun datalari gostermek uchun


// function getAllPostById(id){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json())
//     .then(res => {

//        // ul.innerHTML = `<li class="list-group-item"><b>${res.id}-</b><b>${res.body}-</b><b>${res.userid}</b></li>`

//        alert(res.id + " " + res.body)
//     })
// }

//bir datani gostermek uchun


// setTimeout(() => {
//     let elems = document.querySelectorAll("li")

//     elems.forEach(elem => {
//         elem.addEventListener("click", function () {
//             let id = parseInt(this.getAttribute("data-id"));

//             getAllPostById();
//         })
//     });
// }, 2000);





// setTimeout(() => {
//     let elems = document.querySelectorAll("li")

//     elems.forEach(elem => {
//         elem.addEventListener("click", function () {
//             let id = parseInt(this.getAttribute("data-id"));

//             getPostById();
//         })
//     });
// }, 2000);


// async function getPostById(id) {
//     let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     let result = data.json();

//     alert(result.id + " " + result.body)
// }


// fetchnen, ajaxnan request atib datani goturmek uchun ist edilir
// fetch js nen yazilir
//ajax jquery ile yazilir
//bunlarla yazildiqda sehife refresh olmadan ishleyir. mvs de ise refresh olur.



// $(function () {

//     $("button").click(function () {
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/posts", success: function (datas) {
//                 let str = "";
//                 datas.forEach(data => {
//                     str += `<li data-id="${data.id}" class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userid}</b></li>`

//                 });

//                 $("ul").html("str"); 
//             }
//         });
//     });



// })