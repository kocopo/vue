const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            specialCooldown: 3,
            logMessages: []
        };
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                // draw
                this.winner = 'draw';
            }else if(value <= 0){
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                // draw
                this.winner = 'draw';
            }else if(value <= 0){
                // Monster lost
                this.winner = 'player';
            }
        }
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return {width: '0%'};
            }
            return{
                width: this.monsterHealth + '%'
            };
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return {width: '0%'};
            }
            return{
                width: this.playerHealth + '%'
            };
        },
        specialDisabled(){
            return this.specialCooldown < 2;
        }
    },
    methods:{
        attackMonster(){
            this.increaseRound();
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('Player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('Monster', 'attack', attackValue);
        },
        specialAttackMonster(){
            this.increaseRound();
            this.specialCooldown = 0;
            const attackValue = getRandomValue(10,20);
            this.monsterHealth -= attackValue    
            this.addLogMessage('Player', 'special', attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.increaseRound();
            const healValue = getRandomValue(10,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
            this.addLogMessage('Player', 'heal', healValue);
            this.attackPlayer();
        },
        newGame(){
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.specialCooldown = 3;
            this.logMessages = [];
        },
        surrender(){
            this.winner = 'monster';
        },
        increaseRound(){
            this.currentRound++;
            this.specialCooldown++;
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');

function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}