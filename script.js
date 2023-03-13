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
    console.log("this is id : "+ tableRow.id)
    tBody.appendChild(tableRow);

    let rowData1 = document.createElement("td");
    rowData1.innerHTML = id;
    let rowData2 = document.createElement("td");
    rowData2.innerHTML = firstName;
    let rowData3 = document.createElement("td");
    rowData3.innerHTML = lastName;
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
    
};

// function searchData(firstName, lastName){
//     let textSearch = document.getElementById("search-box").value.toUpperCase();
//     let nameSearch = firstName.toUpperCase();
//     if(textSearch.indexOf(nameSearch) > -1){
//         tableRow.style.Color = "red";
//     }else{
//         // tableRow.style.display = "none";
//     }  
// }
