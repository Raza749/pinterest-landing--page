
let search = document.querySelector("#search");
let searchBtn = document.querySelector(".searchBtn");
let dropBtn = document.querySelector(".dropBtn");

search.addEventListener("focus",function(e){
    dropBtn.style.display = "none";
});


// let imgurl = "./images/Alisa.jpg";
// let box = document.querySelector(".box");




// Making the DATA 

// let data = [
//     {name:"Alica with dark portrait",image:"./images2/Alisa.jpg"},
//     {name:"Sandralla in green lighthouse",image:"./images2/Sandralla.jpg"},
//     {name:"Joully in hoddy",image:"./image2/Joully.jpg"}
// ];

let data = [
    {name:"Petals of roses",image:"https://images.unsplash.com/photo-1536266694648-914d29a935f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvc2VzfGVufDB8fDB8fHww"},
    {name:"Juicy orange",image:"https://images.unsplash.com/photo-1560607162-26b0344e6943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXN8ZW58MHx8MHx8fDA%3D"},
    {name:"Apple juice",image:"https://images.unsplash.com/photo-1628268909461-ec1eec52a74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFwcGxlcyUyMGp1aWNlfGVufDB8fDB8fHww"},
    {name:"Russian model",iamge:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name:"Sparrow on the tree",image:"https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"},
    {name:"Panda eating food",image:"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Fajita pizza",iamge:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZhc3QlMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Fries and catchup",image:"https://images.unsplash.com/photo-1550259114-ad7188f0a967?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZhc3QlMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Google PC",image:"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvb2dsZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Team meeting",image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvb2dsZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Faisal masjid",image:"https://images.unsplash.com/photo-1605795733251-a0b6c96d9dea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBha2lzdGFufGVufDB8fDB8fHww"},
    {name:"Karachi view",image:"https://images.unsplash.com/photo-1602740337312-e28c0b7d27f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBha2lzdGFufGVufDB8fDB8fHww"},
    {name:"Software Tester",image:"https://images.unsplash.com/photo-1570215171424-f74325192b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHNvZnR3YXJlfGVufDB8fDB8fHww"},
    {name:"Buraj khalifa Dubai",image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHViYWl8ZW58MHx8MHx8fDA%3D"},
    {name:"AI the end game of human",image:"https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBjb21wYW5pZXN8ZW58MHx8MHx8fDA%3D"},
    {name:"Cute Girl in lightroom",image:"https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFuaSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name:"Cute baby playing",image:"https://plus.unsplash.com/premium_photo-1664204234222-3d77d5fb2b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
    {name:"Natural Beaty",image:"https://plus.unsplash.com/premium_photo-1681256187605-2d66160926a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Cat in the jar",image:"https://images.unsplash.com/photo-1713397201035-cf8117f138eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Sun set in the west",image:"https://images.unsplash.com/photo-1713528198111-bacd5af88da4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"Apples",image:"https://images.unsplash.com/photo-1586640167802-8af12bf651fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnaXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Vegs and beans",image:"https://images.unsplash.com/photo-1631880383152-f29099b0fd16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D"},
    {name:"Coliflower field",image:"https://images.unsplash.com/photo-1415695989345-dcf757ebb173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D"},
    {name:"Luxery Bedroom",image:"https://images.unsplash.com/photo-1713098094227-9fdedb93276f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name:"Buisness desk",image:"https://images.unsplash.com/photo-1537716701272-81ff68782528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D"},
    {name:"Drawing something",image:"https://images.unsplash.com/photo-1541598599844-19a0319b8846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D"},
    {name:"Creativity is the key of workhard",image:"https://images.unsplash.com/photo-1532072983668-720aad098512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D"},
    {name:"Envelop",image:"https://images.unsplash.com/photo-1561015315-795020fb7d49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D"},
    {name:"Healthy fruits",image:"https://images.unsplash.com/photo-1577234192428-7d62bcc3dc7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D"},
    {name:"Best Bycycle",image:"https://images.unsplash.com/photo-1503914068268-5413b35b45ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D"},
    {name:"Summer season's fruit",image:"https://images.unsplash.com/photo-1603408209093-cd3c9af497d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D"},
    {name:"Drinking the water",image:"https://plus.unsplash.com/premium_photo-1711051512561-d628cca6733c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMnxfaGItZGw0US00VXx8ZW58MHx8fHx8"},
    {name:"Happy Poses",image:"https://images.unsplash.com/photo-1573580711445-fb48e7af4528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXxfaGItZGw0US00VXx8ZW58MHx8fHx8"},
    {name:"Hearts bloon",image:"https://images.unsplash.com/photo-1707808512103-23f911fab68a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzM3xfaGItZGw0US00VXx8ZW58MHx8fHx8"},
    {name:"Be Happy",image:"https://images.unsplash.com/photo-1579600161224-cac5a2971069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NXxfaGItZGw0US00VXx8ZW58MHx8fHx8"},
    {name:"Healthy food",image:"https://images.unsplash.com/photo-1675266439041-15d522c4dcb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2M3xfaGItZGw0US00VXx8ZW58MHx8fHx8"},
    {name:"Study at night",image:"https://images.unsplash.com/photo-1654124803544-f6c16b80e010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D"},
    {name:"Villegers are here",image:"https://images.unsplash.com/photo-1712901965138-9d62a8cc9e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:"White color watch",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Pinapple products",image:"https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Air Birds",image:"https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Lip Stick",image:"https://images.unsplash.com/photo-1587303876752-91efb6315dcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"dark Products",image:"https://images.unsplash.com/photo-1612188842101-f976582906fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Laddy Perfume",image:"https://images.unsplash.com/photo-1612188842101-f976582906fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Asthetic String",image:"https://images.unsplash.com/photo-1634283715079-d91bbed0ece0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"San Frankline usa",image:"https://images.unsplash.com/photo-1585386931415-464367473a01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Best Gaming Consle",image:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Coca Kola regular",image:"https://images.unsplash.com/photo-1591254674198-a316f1aa8301?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Apple Accessries",image:"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHByb2R1Y3RzfGVufDB8fDB8fHww"},
    {name:"Apple airbirds",image:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Headphone",image:"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Meditation",image:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGV4ZXJjaXNlJTIwYW5kJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Stay Fit",image:"https://images.unsplash.com/photo-1606889463862-a8fc57a706ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGV4ZXJjaXNlJTIwYW5kJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Gym always the best ",image:"https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGV4ZXJjaXNlJTIwYW5kJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Morning meditation",image:"https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxleGVyY2lzZSUyMGFuZCUyMHlvZ2F8ZW58MHx8MHx8fDA%3D"},
    {name:"stay Healthy",image:"https://images.unsplash.com/photo-1603792582751-c73976204e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGV4ZXJjaXNlJTIwYW5kJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"best morning med",image:"https://images.unsplash.com/photo-1603792582751-c73976204e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGV4ZXJjaXNlJTIwYW5kJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"workout",image:"https://images.unsplash.com/photo-1604480133435-25b86862d276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGV4ZXJjaXNlJTIwYW5kJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"men workout",image:"https://images.unsplash.com/photo-1606889462784-c033891d5a3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGV4ZXJjaXNlJTIwYW5kJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Weight Gain inspiration",image:"https://images.unsplash.com/photo-1604480133054-2597dad6f610?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGV4ZXJjaXNlJTIwYW5kJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Dumble for loosing weight",image:"https://images.unsplash.com/photo-1566568531155-07244e00963d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxleGVyY2lzZSUyMGFuZCUyMHlvZ2F8ZW58MHx8MHx8fDA%3D"},
    {name:"Mental Health",image:"https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxleGVyY2lzZSUyMGFuZCUyMHlvZ2F8ZW58MHx8MHx8fDA%3D"},
    {name:"Stretching",image:"https://images.unsplash.com/photo-1585154536515-c766bd2a6cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxleGVyY2lzZSUyMGFuZCUyMHlvZ2F8ZW58MHx8MHx8fDA%3D"},
    {name:"Weighting Dumble and weight lifting",image:"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhlcmNpc2UlMjBhbmQlMjB5b2dhfGVufDB8fDB8fHww"},
    {name:"Running",image:"https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0fGVufDB8fDB8fHww"},
    {name:"Boise",image:"https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0fGVufDB8fDB8fHww"},
    {name:"Cycling ",image:"https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];


// Show data on the web page
function showTheCarts(){
    let empty = "";
    data.forEach((obj)=>{
     empty += `<div class="box">
     <img src="${obj.image}" alt="">
     <div class="caption"></div>
 </div> 
`;
    });
    let container = document.querySelector(".container");
    container.innerHTML = empty;
}

// Overlay cover on the screen
function showCoverOnthePage(){
    let search = document.querySelector("#search");
    let overlay = document.querySelector(".overlay");    
    search.addEventListener("focus",(e)=>{
        overlay.style.display = "block";
    });
    search.addEventListener("blur",(e)=>{
        overlay.style.display = "none";
    });

    search.addEventListener("input",(e)=>{
        const filterArray = data.filter(obj => obj.name.toLocaleLowerCase().startsWith(search.value));
        let empty = "";
        filterArray.forEach((obj)=>{
            empty = empty + ` <div class="res">
            <i class="fa-solid fa-magnifying-glass"></i>
            <h3>${obj.name}</h3>
        </div>`;
        });
        let searchData = document.querySelector(".searchData");
        searchData.style.display = "block";
        searchData.innerHTML = empty;
    })
};




showCoverOnthePage();
showTheCarts();






