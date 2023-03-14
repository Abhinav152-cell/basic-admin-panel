var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';


let totalTData = new XMLHttpRequest();
totalTData.open("GET", url, true);
totalTData.send();

let tableData;
totalTData.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log("API Genration Successful..");
        tableData = JSON.parse(this.responseText);
        console.log("This is :" + tableData.length);
        for (let i = 0; i < tableData.length; i++) {
            fetchData(tableData[i].id,
                tableData[i].firstName,
                tableData[i].lastName,
                tableData[i].email,
                tableData[i].phone,
                tableData[i].address.streetAddress,
                tableData[i].address.city,
                tableData[i].address.state,
                tableData[i].address.zip,
                tableData[i].description,

                i+1);
            }
            
        } else {
            console.log("API Genration Failed..")
        }
    }

const tBody = document.getElementById("table-body");
// let tableRow; 

function fetchData(id, firstName, lastName, email, phone, streetAddress,city,state,zip, description, idCounter) {
    let tableRow = document.createElement("tr");
    
    tableRow.id = idCounter;
    tableRow.className = "table-rows";
    // console.log("this is id : "+ tableRow.id)
    tBody.appendChild(tableRow);
    
    let rowData1 = document.createElement("td");
    rowData1.innerHTML = id;
    let rowData2 = document.createElement("td");
    rowData2.innerHTML = firstName;
    rowData2.id = "name"+idCounter;
    let rowData3 = document.createElement("td");
    rowData3.innerHTML = lastName;
    rowData3.id = "lastname"+idCounter;
    let rowData4 = document.createElement("td");
    rowData4.innerHTML = email;
    let rowData5 = document.createElement("td");
    rowData5.innerHTML = phone;
    
    tableRow.appendChild(rowData1);
    tableRow.appendChild(rowData2);
    tableRow.appendChild(rowData3);
    tableRow.appendChild(rowData4);
    tableRow.appendChild(rowData5);
    
    tableRow.addEventListener("click", function(){
        let userNameSirname = document.getElementById("userNameSirname");
        userNameSirname.innerHTML = "<b>User selected:</b>"+" "+firstName +" " +lastName;
        let discription = document.getElementById("discription");
        discription.innerHTML = description;
        let address = document.getElementById("add");
        address.innerHTML = "<b>Address:</b>"+" "+streetAddress;
        let dist = document.getElementById("city");
        dist.innerHTML = "<b>City:</b>"+" "+city;
        let states = document.getElementById("state");
        states.innerHTML = "<b>State:</b>"+" "+state;
        let zipCode = document.getElementById("zip");
        zipCode.innerHTML = "<b>Zip:</b>"+" "+zip;
    })
    
    searchData = ()=>{
        // console.log("This is it..");
        let searchBox = document.getElementById("search-box");
        let searchText = searchBox.value.toUpperCase();
        // console.log(searchText);
        let tr = tBody.getElementsByTagName("tr");
        // console.log(tr);

        for(let j = 0; j<tr.length; j++){
            // console.log(j);
            let td1 = tr[j].getElementsByTagName("td")[1];
            let td2 = tr[j].getElementsByTagName("td")[2];
            // console.log(td1);
            searchValue1 = td1.innerText.toUpperCase();
            searchValue2 = td2.innerText.toUpperCase();
            if(searchValue1.indexOf(searchText)  > -1 || searchValue2.indexOf(searchText) > -1){
                // tr[j].style.backgroundColor = "yellow";
                tr[j].style.display = "";
                // td1.style.color = "yellow";
                td1.style.color = "yellow";
                td2.style.color = "yellow";
                td1.style.textShadow = "1px 1px 3px black";
                td2.style.textShadow = "1px 1px 3px black";
            }else{
                tr[j].style.display = "none";
            }
            if(!searchText){
                td1.style.color = "gray";
                td1.style.textShadow = "none";
                td2.style.color = "gray";
                td2.style.textShadow = "none";
            }
        }
    }
    
};

/*{
    // console.log("this is searchValues :" + searchValue);
    let tr = document.getElementById("name"+counter);
    // console.log("this is table row :" + tr);
    let td = document.getElementById("lastname"+counter);
    // console.log("this is row data :" + td);
    
    if(searchValue.toUpperCase().indexOf(searchText) > -1){
        // tr.style.backgroundColor = "red";
        console.log(" geting data");
    }else{
        // tr.style.backgroundColor = "black";
        console.log(" not getting data");
    }

    ------------------------

    let tr = tBody.getElementsByTagName("tr");
    for(let i = 0; i<tr.length; i++){
        let td = tr.getElementsByTagName("td")[1];
        let searchValue = td.innerHTML || td.innerText;
        if(searchValue.toUpperCase().indexOf(searchText) > -1){
            tr[i].style.backgroundColor = "red";
        }else{
            tr[i].style.backgroundColor = "yellow";
        }
    }

    -------------------
    let tr = tBody.querySelectorAll("tr");
    for(let i = 0; i<tr.length; i++){
        let td = tr[i].querySelectorAll("td");
        let machValue = td[i].innerText;
        if(machValue.toUpperCase().indexOf(searchText) > -1){
            tr[i].style.display = "";
            // tr[i].style.backgroundColor = "red";
        }else{
            tr[i].style.display = "none";
            tr[i].style.backgroundColor = "yellow";

        }
    }
} */

// searchData = ()=>{
//     let searchBox = document.getElementById("search-box");
//     let searchText = searchBox.value.toUpperCase();
//     console.log("This is my input : "+searchText);
    
//     for(let j = 0; j<32; j++){

//         let tr = document.getElementById("name"+j);
//         console.log(tr.innerHTML + "tr")
         
//     }
// }


 
