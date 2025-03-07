import random from "random"



class Сasino{

    _spin(bid){
        let number = random.integer(bid-Math.floor(bid/100*25),bid + Math.floor(bid/100*25));
        return number;
    }

    roulette(bid,player){ 
        if (player.moneyPlayer < bid) return console.log("ТЫ ЕБУЧИЙ БОМЖ");
        player.moneyPlayer -= bid;

        let number = this._spin(bid);
        console.log(player1.namePlayer + " ты получил:" + number);
        player.moneyPlayer += number;
        console.log("Баланс:" + player.moneyPlayer);
        
    }

    headsOrTails(bid,choice,player){
        if (player.moneyPlayer < bid) return console.log("ТЫ ЕБУЧИЙ БОМЖ");
        let number = random.integer(0,1);
        if (number == 0)
        {
            console.log("Выпал орёл");
            if (choice == "решка")
            {
                player.moneyPlayer -= bid;
                console.log("ТЫ проБАЛ\n"+"твой балик:" + player.moneyPlayer);
            } 
            else
            {
                player.moneyPlayer += bid;
                console.log("ТЫ ВЫйграл\n"+"твой балик:" + player.moneyPlayer);
            }
        }
        else if (number == 1){
            if (choice == "орёл")
            {
                player.moneyPlayer -= bid;
                console.log("ТЫ проБАЛ\n"+"твой балик:" + player.moneyPlayer);
            } 
            else
            {
                player.moneyPlayer += bid;
                console.log("ТЫ ВЫйграл\n"+"твой балик:" + player.moneyPlayer);
            }

        }
    }
}

class Player{
    constructor(namePlayer, money) { 
        this.namePlayer = namePlayer;
        this.money = money;
    }

    get moneyPlayer() {
        return this.money; 
    }

    set moneyPlayer(value) {
        this.money = value; 
    }
}

const player1 = new Player("хуесос",100);
const kazic = new Сasino();

for (let i = 0;i<5;i++)
{
    kazic.headsOrTails(50,"орёл",player1);
}



  



