
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Сasino{

    _spin(bid){
        let number = getRandomInt(
            min=Math.floor(bid - bid/100*25),
            max=Math.floor(bid + bid/100*25)
        );
        return number;
    }

    roulette(bid,player){ 
        if (player.moneyPlayer < bid) 
            return console.log("ТЫ ЕБУЧИЙ БОМЖ");
        player.moneyPlayer -= bid;

        let number = this._spin(bid);
        player.moneyPlayer += number;
        console.log(player1.namePlayer + " ты получил:" + number);
        console.log("Баланс:" + player.moneyPlayer);
        
    }

    headsOrTails(bid,choice,player){
        if (player.moneyPlayer < bid) 
            return console.log("ТЫ ЕБУЧИЙ БОМЖ");

        let Array = ["орёл", "решка"];
        let randomIndex = Math.floor(Math.random() * Array.length);
        let randomElement = Array[randomIndex];
        console.log(randomElement)

        if (choice == randomElement)
        {
            player.money += bid
            console.log("Ты выйграл!\nТвой баланс:"+player.money)
        }
        else
        {
            player.money -= bid
            console.log("Ты проебал!\nТвой баланс:"+player.money)
        }

        }
    }


class Player{
    constructor(namePlayer, money) { 
        this.namePlayer = namePlayer;
        this._money = money;
    }

    get money() {
        return this._money; 
    }

    set money(value) {
        this._money = value; 
    }
}

const player1 = new Player(
    namePlayer="хуесос",
    money=100
);
const casino = new Сasino();

for (let i = 0;i<5;i++)
{
    casino.headsOrTails(
        bid=50,
        choice="орёл",
        player=player1  
    );
}



  



