function getRandomValue(max, min){
    return Math.floor(Math.random() * (max-min))+min;
}

const app = Vue.createApp({
    data() {
        return { 
            playerHealth: 100,
            monsterHealth: 100,
            attackCounter: 0,
            specialAttackDisabled: true,
            winner: null
        };
    },
    computed:{
        specialAttackVisible() {
        return this.specialAttackDisabled
        }
    },
    watch:{
        playerHealth(value){
            if(value<=0 && this.monsterHealth<=0){
                //Draw
                this.winner = 'draw';
                this.resetGame();
            }else if(value<=0){
                //Player lost
                this.winner = 'monster'
                this.resetGame();
            }
        },
        monsterHealth(value){
            if(value<=0 && this.playerHealth<=0){
                this.winner = 'draw';
                this.resetGame();
            }else if(value<=0){
                this.winner = 'player';
                this.resetGame();
            }
        }
    },
    methods:{
        attackMonster(){
            console.log(this.attackCounter);
            const attackValue = getRandomValue(12,5);
            this.writeLog('Player',attackValue);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.attackCounter++;
            if(this.attackCounter===3){
                this.attackCounter=0;
                this.specialAttackDisabled = false;
            }
        },
        attackPlayer(){
            const attackValue = getRandomValue(15,8);
            this.writeLog('Monster',attackValue);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            const attackValue = getRandomValue(10,25);
            this.writeLog('Player',attackValue);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.specialAttackDisabled = true;
        },
        healPlayer(){
            //this.attackCounter++;
            const healValue = getRandomValue(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
                this.writeHealLog(healValue)
            }
            this.attackPlayer();
            this.attackCounter++;
            if(this.attackCounter===3){
                this.attackCounter=0;
                this.specialAttackDisabled = false;
            }
        },
        resetGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackCounter = 0;
        },
        writeLog(caller,hitpoints){
            console.log(caller+' hits with '+hitpoints+ ' hitpoints');
        },
        writeHealLog(healValue){
            console.log('Player heals with '+healValue+ ' healpoints');
        }
    }
});

app.mount('#game');