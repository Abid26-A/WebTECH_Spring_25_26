console.log("JS Connected With HTML");
var a = ["ABC", "DEF"];

let clickcount = 0;


a.forEach((item, index)=>{
    console.log("Index:", index, "Item: ", item);
})

a.map((item, index)=>{
    console.log("Index:", index, "Item: ", item);
})

function collect_data()
{
    let pname = document.getElementById("FirstName").value;
    document.getElementById("FirstName").style.color="black";
    console.log(fname);
    return false;    
}
{
    let pname = document.getElementById("LastName").value;
    document.getElementById("LastName").style.color="black";
    console.log(fname);
    return false;    
}
{
    let pname = document.getElementById("Email").value;
    document.getElementById("Email").style.color="black";
    console.log(fname);
    return false;    
}
{
    let pname = document.getElementById("Phone Number").value;
    document.getElementById("Phone Number").style.color="black";
    console.log(fname);
    return false;    
}
function collect_name()
{
    let pname = document.getElementById("what do you have in mind").value;
    console.log(havmind);
    return false;    
}
function collect_age()
{
    let page = document.getElementById("Lastname").value;
    console.log(page);
    return false;    
}
function get_textarea()
{
    let paddress = document.getElementById("Address").value;
    console.log(paddress);
    return false;
}

function submit_data()
{
    clickcount++;
    let submit= document.getElementById("submitdata").value;
    document.getElementById("submitdata").style.color="green";
    document.getElementById("submitdata").innerHTML="Clicked Button: "+clickcount;
    return false;
}
