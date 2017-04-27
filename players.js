/**
 * Created by gadyezra on 4/27/17.
 */
'use strict';

var events = require('events');

class Player extends events.EventEmitter{

    constructor(name,sport) {
        super();
        this.sport = sport;
        this.name = name;
        this.points = 0;
        this.on('newRequest',this.printStatus);
    }
    increase(amount) {
        this.emit('newRequest');
        if (this.zeroCheck('inc',amount)) {
            console.log('Error: Goes below Zero');
        } else {
            this.points += amount;
            console.log(`Increasing Points By: ${amount}`);
        }
    }

    decrease(amount) {
        this.emit('newRequest');
        if (this.zeroCheck('dec',amount)) {
            console.log('Error: Goes below Zero');
        } else {
            this.points -= amount;
            console.log(`Decreasing Points by: ${amount}`)
        }
    }

    zeroCheck(action,amount) {
        if (action=='inc'){
            if (this.points + amount < 0) {
                return true;
            }
        } else {
            if (this.points - amount < 0) {
                return true;
            }
        }
        return false;
    }

    printStatus() {
        console.log(`Player Name: ${this.name} | Sport: ${this.sport} | Current Points ${this.points}`);
    }

}

module.exports = function (name,sport) {
    var newPlayer = new Player(name,sport);
    return newPlayer;
};