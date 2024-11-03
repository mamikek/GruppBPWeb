//For JSON server we choose Tartu University Adalberg file server.
fetch('.\Test.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            
            const pName = document.createElement("p");
            const pEmail = document.createElement("p");
            pName.innerHTML = `Username: ${json.name}`;
            pEmail.innerHTML = `Email: ${json.email}`;
            
            const addToDrop = document.getElementById("dropdownMenu")

            addToDrop.appendChild(pName);
            addToDrop.appendChild(pEmail);
        }
    );
