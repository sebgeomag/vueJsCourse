function getRandomValue(max, min){
    return Math.floor(Math.random() * (max-min))+min;
}

const app = Vue.createApp({
    data() {
        return { 
            playerHealth: 100,
            monsterHealth: 100,
            attackCounter: 0,
            specialAttackDisabled: true
        };
    },
    computed:{
        specialAttackVisible() {
        return this.specialAttackDisabled
        }
    },
    methods:{
        attackMonster(){
            console.log(this.attackCounter);
            const attackValue = getRandomValue(12,5);
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
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.specialAttackDisabled = true;
        },
        healPlayer(){
            this.attackCounter++;
            const healValue = getRandomValue(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
            this.attackPlayer();
                        this.attackCounter++;
            if(this.attackCounter===3){
                this.attackCounter=0;
                this.specialAttackDisabled = false;
            }
        }
    }
});

app.mount('#game');