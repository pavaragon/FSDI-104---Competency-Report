class Character{
    constructor(image,name,health,damage,id){
        this.name=name;
        this.health=health;
        this.damage=damage;
        this.id=id;
        this.image=image;
    }

    display = function () {
        document.getElementById("img"+this.id).innerHTML=`<img class="character" src="${this.image}" alt="">`;
        document.getElementById(this.id).innerHTML=`<p> Name: ${this.name} <br> Health:  ${this.health} <br> Damage: ${this.damage} </p>`;
    }

    attack = function(opponent,item){
        var newHealth = opponent.health - item.idamage;
        opponent.health = newHealth;
        opponent.display();
        document.getElementById('console').innerHTML=`${this.name} attacks with ... ${item.iname} <br> <img src="${item.img}">`;
        
       if (newHealth <= 0){
            document.getElementById('console').innerHTML=`GAME OVER - - - - - ${this.name} WINS`;

       }    
    }
}

const c1=new Character('img/scorpion.png','Scorpion',100,9,"c1");
const c2=new Character('img/subzero.png','Sub Zero',100,8,"c2");
//const c3=new Character('img/liukang.png','Liu Kang',100,9,"c3");
//const c4=new Character('img/ermac.png','Ermac',100,7,"c4");

c1.display();
c2.display();

class Item{
    constructor(iname,idamage,img){
        this.iname=iname;
        this.idamage=idamage;
        this.img=img;
    }
}

const item1 = new Item('Sword',20,'img/sword.png');
const item2 = new Item("Flail",10,'img/flail.png');
const item3 = new Item("Dagger",5,'img/dagger.png');

var items = [item1,item2,item3];

function select(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
}



