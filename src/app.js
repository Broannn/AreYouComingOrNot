import User from './User.js';
const tabuser = [];

async function GetUsers() {
    try {
        const UsersQuery = await fetch('https://randomuser.me/api/?results=20');
        const Userdata = await UsersQuery.json();

        // Trier les utilisateurs par ordre alphabétique de leur nom de famille
        const sortedResults = Userdata.results.sort((a, b) => a.name.last.localeCompare(b.name.last));

        sortedResults.forEach(user => {
            const newUser = new User(user.name.title, user.name.first, user.name.last, user.location.city, user.location.country, user.dob.age, user.email, user.picture.large);
            tabuser.push(newUser);
            newUser.render(); // Assurez-vous que cette méthode existe et est correctement définie dans la classe User
        });
    } catch (error) {
        console.error("Erreur lors de la récupération ou du traitement des utilisateurs :", error);
    }
}

const buttonsortbyname = document.querySelector('#sort--name');
const buttonsortbyage = document.querySelector('#sort--age');

buttonsortbyname.addEventListener("click", (e) => {
    if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        buttonsortbyage.classList.remove("selected");

        tabuser.sort((a, b) => {
            return a.last.localeCompare(b.last);
        });

        tabuser.forEach((user) => {
            user.render();
        });

    } else {
        console.log("Le bouton est déjà selected");
    }
});    

buttonsortbyage.addEventListener("click", (e) => {
    if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        buttonsortbyname.classList.remove("selected");

        tabuser.sort((a, b) => {
            return a.age - b.age;
        });

        tabuser.forEach((user) => {
            user.render();
        });
    } else {
        console.log("Le bouton est déjà selected");
    }
});



GetUsers();