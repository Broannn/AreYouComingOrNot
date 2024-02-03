class User {
    #present
    static countUser = 0; //Static car lié à la classe car général à tous les utilisateurs
    constructor(title, first, last, city, country, age, email, picture) {
        this.title = title;
        this.first = first;
        this.last = last;
        this.city = city;
        this.country = country;
        this.age = age;
        this.email = email;
        this.picture = picture;
        this.present = false;
        this.element = this.GenerateElementHTML();
        this.element.addEventListener('click', () => {
            this.togglepresent(this.element);
        });

    }

    GenerateElementHTML() {
        const containerElement = document.createElement('div');
        containerElement.classList.add('user');
        const childHTML = `
        <img src="${this.picture}">
        <div class="user--info">
        <h1>${this.title} ${this.first} ${this.last}</h1>
        <p>${this.age} years old</p>
        <p>${this.city}, ${this.country}</p>
        </div>
        <a href="mailto:${this.email}">
        <span class = "mail">✉️</span>
        </a>
        </div>
        `
        containerElement.insertAdjacentHTML('afterbegin', childHTML);
        return containerElement;
    }

    render() {
        document.querySelector('main').append(this.element);
    }

    togglepresent(element){
        
        if (this.present === true) {
            element.dataset.present = false;
            this.present = false
            User.countUser--;
            document.querySelector('.counter').textContent = User.countUser + "/20 people are here";

        }
        else if (this.present === false)
        {
            element.dataset.present = true
            this.present = true;
            User.countUser++;
            document.querySelector('.counter').textContent = User.countUser + "/20 people are here";
        }

    }



}


export default User;