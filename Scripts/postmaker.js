//For JSON server we choose Tartu University Adalberg file server.
//works on local files.

//PLEASE USE THE LOCAL INSTEAD OF LINK BECAUSE OF DAILY REQUESTS (./Test.json or other)
//LINK: https://jsonhost.com/json/e61f2b6a8d00a02fdb3a4d181ba10b0d

window.onload = function() {
    fetch("")
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                
                //Needs for
                for (const singleInfo of json) {
                    //Give constant and create text
                    const pName = document.createElement("p");
                    const pEmail = document.createElement("p");

                    //Put the json to places
                    pName.innerHTML = `Username: ${singleInfo.name}`;
                    pEmail.innerHTML = `Email: ${singleInfo.email}`;
                    
                    //Get the html where you want to place the text
                    const addToDrop = document.getElementById("dropdownMenu")
                    
                    //Add info to the id parent and its done
                    addToDrop.appendChild(pName);
                    addToDrop.appendChild(pEmail);
                }
            }
        );
}