require('events').EventEmitter.defaultMaxListeners = 50;

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = config.token;
const general = config.general;
const test = config.test;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const baseMod = 150;
const base1 = 6;
const base2 = 12;
const base3 = 18;
const base4 = 24;
const base5 = 30;
const adv1 = 4;
const adv2 = 8;
const adv3 = 12;
const adv4 = 16;
const adv5 = 20;
const exp1 = 1;
const exp2 = 2;
const exp3 = 3;
const exp4 = 4;
const exp5 = 5;

const prefix = '!';
const Ships  = require('./shipBase.js');
const { get } = require('http');
const allShips = Ships.allShipsLower;
const possibleSkills = Ships.possibleSkills;

function skillNum(base, adv, exp) {
  return base + adv + exp;
};

client.on('message', (message) => {
  if (message.content.startsWith(prefix)) {
    let skills = message.content.slice(message.content.length - 3);
    let ship = message.content.slice(1, message.content.length - 4).toLowerCase();
    if (!allShips.includes(ship) && possibleSkills.includes(skills)) {
      message.reply('Invalid ship name')
    } if (ship === 'griffin') {
      let modifier;
      let shipArr  = Ships.griffin;
      switch (skills) {
        case '000':
        modifier = baseMod / baseMod;
        break;  
        case '100':
        modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
        break;
        case '200':
        modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
        break;
        case '300':
        modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
        break;
        case '400':
        modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
        break;
        case '500':
        modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
        break;
        case '410':
        modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
        break;
        case '420':
        modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
        break;
        case '430':
        modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
        break;
        case '440':
        modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
        break;
        case '450':
        modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
        break;
        case '451':
        modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
        break;
        case '452':
        modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
        break;
        case '453':
        modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
        break;
        case '454':
        modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
        break;
        case '455':
        modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
        break;
        case '510':
        modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
        break;
        case '520':
        modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
        break;
        case '530':
        modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
        break;
        case '540':
        modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
        break;
        case '550':
        modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
        break;
        case '551':
        modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
        break;
        case '552':
        modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
        break;
        case '553':
        modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
        break;
        case '554':
        modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
        break;
        case '555':
        modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
        break;
      }
      let numArray = [];
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      }      
} else if (ship === 'condor ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.condorII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.condorII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.condorII[0].name} | ${Ships.condorII[0].type} | Tech Level: ${Ships.condorII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'vigil') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.vigil[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.vigil[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.vigil[0].name} | ${Ships.vigil[0].type} | Tech Level: ${Ships.vigil[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'slasher ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.slasherII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.slasherII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.slasherII[0].name} | ${Ships.slasherII[0].type} | Tech Level: ${Ships.slasherII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'crucifier') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.crucifier[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.crucifier[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.crucifier[0].name} | ${Ships.crucifier[0].type} | Tech Level: ${Ships.crucifier[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'executioner ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.executionerII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.executionerII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.executionerII[0].name} | ${Ships.executionerII[0].type} | Tech Level: ${Ships.executionerII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'maulus') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.maulus[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.maulus[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.maulus[0].name} | ${Ships.maulus[0].type} | Tech Level: ${Ships.maulus[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'atron ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.atronII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.atronII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.atronII[0].name} | ${Ships.atronII[0].type} | Tech Level: ${Ships.atronII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'bantam') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.bantam[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.bantam[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.bantam[0].name} | ${Ships.bantam[0].type} | Tech Level: ${Ships.bantam[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'heron covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.heronCovertOps[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.heronCovertOps[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.heronCovertOps[0].name} | ${Ships.heronCovertOps[0].type} | Tech Level: ${Ships.heronCovertOps[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'burst') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.burst[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.burst[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.burst[0].name} | ${Ships.burst[0].type} | Tech Level: ${Ships.burst[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'probe covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.probeCovertOps[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.probeCovertOps[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.probeCovertOps[0].name} | ${Ships.probeCovertOps[0].type} | Tech Level: ${Ships.probeCovertOps[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'inquisitor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.inquisitor[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.inquisitor[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.inquisitor[0].name} | ${Ships.inquisitor[0].type} | Tech Level: ${Ships.inquisitor[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'magnate covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.magnateCovertOps[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.magnateCovertOps[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.magnateCovertOps[0].name} | ${Ships.magnateCovertOps[0].type} | Tech Level: ${Ships.magnateCovertOps[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'navitas') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.navitas[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.navitas[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.navitas[0].name} | ${Ships.navitas[0].type} | Tech Level: ${Ships.navitas[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'imicus covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.imicusCovertOps[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.imicusCovertOps[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.imicusCovertOps[0].name} | ${Ships.imicusCovertOps[0].type} | Tech Level: ${Ships.imicusCovertOps[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'bantam ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.bantamII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.bantamII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.bantamII[0].name} | ${Ships.bantamII[0].type} | Tech Level: ${Ships.bantamII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'manticore') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.manticore[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.manticore[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.manticore[0].name} | ${Ships.manticore[0].type} | Tech Level: ${Ships.manticore[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'burst ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.burstII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.burstII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.burstII[0].name} | ${Ships.burstII[0].type} | Tech Level: ${Ships.burstII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'hound') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.hound[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.hound[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.hound[0].name} | ${Ships.hound[0].type} | Tech Level: ${Ships.hound[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'inquisitor ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.inquisitorII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.inquisitorII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.inquisitorII[0].name} | ${Ships.inquisitorII[0].type} | Tech Level: ${Ships.inquisitorII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'purifier') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.purifier[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.purifier[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.purifier[0].name} | ${Ships.purifier[0].type} | Tech Level: ${Ships.purifier[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'navitas ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.navitasII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.navitasII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.navitasII[0].name} | ${Ships.navitasII[0].type} | Tech Level: ${Ships.navitasII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nemesis') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.nemesis[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.nemesis[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.nemesis[0].name} | ${Ships.nemesis[0].type} | Tech Level: ${Ships.nemesis[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'worm') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.worm[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.worm[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.worm[0].name} | ${Ships.worm[0].type} | Tech Level: ${Ships.worm[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'dramiel') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.dramiel[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.dramiel[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.dramiel[0].name} | ${Ships.dramiel[0].type} | Tech Level: ${Ships.dramiel[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cruor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.cruor[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.cruor[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.cruor[0].name} | ${Ships.cruor[0].type} | Tech Level: ${Ships.cruor[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'astero') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.astero[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.astero[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.astero[0].name} | ${Ships.astero[0].type} | Tech Level: ${Ships.astero[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'garmur') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.garmur[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.garmur[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.garmur[0].name} | ${Ships.garmur[0].type} | Tech Level: ${Ships.garmur[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'succubus') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.succubus[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.succubus[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.succubus[0].name} | ${Ships.succubus[0].type} | Tech Level: ${Ships.succubus[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'daredevil') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.daredevil[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.daredevil[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.daredevil[0].name} | ${Ships.daredevil[0].type} | Tech Level: ${Ships.daredevil[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'merlin assault') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.merlinAssault[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.merlinAssault[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.merlinAssault[0].name} | ${Ships.merlinAssault[0].type} | Tech Level: ${Ships.merlinAssault[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'breacher assault') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.breacherAssault[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.breacherAssault[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.breacherAssault[0].name} | ${Ships.breacherAssault[0].type} | Tech Level: ${Ships.breacherAssault[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'punisher assault') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.punisherAssault[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.punisherAssault[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.punisherAssault[0].name} | ${Ships.punisherAssault[0].type} | Tech Level: ${Ships.punisherAssault[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'incursus assault') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.incursusAssault[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.incursusAssault[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.incursusAssault[0].name} | ${Ships.incursusAssault[0].type} | Tech Level: ${Ships.incursusAssault[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'condor interceptor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.condorInterceptor[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.condorInterceptor[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.condorInterceptor[0].name} | ${Ships.condorInterceptor[0].type} | Tech Level: ${Ships.condorInterceptor[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'slasher interceptor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.slasherInterceptor[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.slasherInterceptor[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.slasherInterceptor[0].name} | ${Ships.slasherInterceptor[0].type} | Tech Level: ${Ships.slasherInterceptor[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'executioner interceptor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.executionerInterceptor[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.executionerInterceptor[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.executionerInterceptor[0].name} | ${Ships.executionerInterceptor[0].type} | Tech Level: ${Ships.executionerInterceptor[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'atron interceptor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.atronInterceptor[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.atronInterceptor[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.atronInterceptor[0].name} | ${Ships.atronInterceptor[0].type} | Tech Level: ${Ships.atronInterceptor[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'manticore ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      Ships.manticoreII[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      Ships.manticoreII[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${Ships.manticoreII[0].name} | ${Ships.manticoreII[0].type} | Tech Level: ${Ships.manticoreII[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'hound ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.houndII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'purifier ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.purifierII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nemesis ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nemesisII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'condor ii interceptor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.condorIIinterceptor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'slasher ii interceptor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.slasherIIinterceptor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'executioner ii interceptor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.executionerIIinterceptor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'atron ii interceptor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.atronIIinterceptor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'corax') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.corax;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cormorant ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cormorantII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'talwar') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.talwar;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thrasher ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thrasherII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'dragoon') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.dragoon;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'coercer ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.coercerII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'algos') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.algos;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'catalyst ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.catalystII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cormorant guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cormorantGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cormorant navy issue') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cormorantNavyIssue;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thrasher guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thrasherGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thrasher fleet issue') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thrasherFleetIssue;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'coercer guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.coercerGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'coercer navy issue') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.coercerNavyIssue;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'catalyst guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.catalystGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'catalyst navy issue') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.catalystNavyIssue;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'corax sniper') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.coraxSniper;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'talwar sniper') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.talwarSniper;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'dragoon sniper') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.dragoonSniper;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'algos sniper') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.algosSniper;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'corax assault') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.coraxAssault;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'talwar assault') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.talwarAssault;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'dragoon assault') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.dragoonAssault;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'algos assault') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.algosAssault;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cormorant covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cormorantCovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thrasher covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thrasherCovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'coercer covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.coercerCovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'catalyst covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.catalystCovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'caracal') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.caracal;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'stabber') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.stabber;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'omen') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.omen;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'vexor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.vexor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thorax prototype') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thoraxPrototype;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'blackbird') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.blackbird;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'moa') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.moa;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'caracal navy issue') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.caracalNavyIssue;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'bellicose') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.bellicose;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'stabber fleet issue') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.stabberFleetIssue;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'rupture') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.rupture;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'arbitrator') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.arbitrator;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'maller') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.maller;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'omen navy issue') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.omenNavyIssue;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'celestis') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.celestis;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'vexor navy issue') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.vexorNavyIssue;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thorax') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thorax;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'moa guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.moaGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'osprey') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.osprey;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'blackbird covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.blackbirdCovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'rupture guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.ruptureGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'scythe') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.scythe;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'bellicose covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.bellicoseCovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'maller guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.mallerGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'augoror') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.augoror;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'arbitrator covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.arbitratorCovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thorax guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thoraxGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'exequror') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.exequror;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'celestis covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.celestisCovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'gila') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.gila;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cynabal') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cynabal;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'ashimmu') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.ashimmu;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'stratios') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.stratios;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'orthrus') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.orthrus;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'phantasm') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.phantasm;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'vigilant') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.vigilant;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'moa ii guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.moaIIGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'caracal sniper') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.caracalSniper;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'rupture ii guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.ruptureIIGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'stabber sniper') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.stabberSniper;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'maller ii guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.mallerIIGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'omen sniper') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.omenSniper;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thorax ii guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thoraxIIGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'vexor sniper') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.vexorSniper;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'blackbird ii covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.blackbirdIICovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'bellicose ii covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.bellicoseIICovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'arbitrator ii covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.arbitratorIICovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'celestis ii covert ops') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.celestisIICovertOps;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'ferox') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.ferox;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cyclone') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cyclone;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'hurricane prototype') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.hurricanePrototype;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'prophecy') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.prophecy;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'harbinger prototype') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.harbingerPrototype;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'myrmidon') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.myrmidon;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'naga') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.naga;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'drake') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.drake;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'tornado') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.tornado;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'hurricane') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.hurricane;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'oracle') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.oracle;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'harbinger') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.harbinger;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'talos') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.talos;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'brutix') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.brutix;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'ferox guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.feroxGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'naga ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nagaII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'drake logistics') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.drakeLogistics;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cyclone guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cycloneGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'tornado ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.tornadoII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'hurricane logistics') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.hurricaneLogistics;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'prophecy guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.prophecyGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'oracle ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.oracleII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'harbinger logistics') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.harbingerLogistics;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'myrmidon guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.myrmidonGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'talos ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.talosII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'brutix logistics') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.brutixLogistics;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'ferox ii guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.feroxIIGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cyclone ii guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cycloneIIGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'prophecy ii guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.prophecyIIGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'myrmidon ii guardian') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.myrmidonIIGuardian;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'rattlesnake') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.rattlesnake;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'machariel') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.machariel;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'bhaalgorn') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.bhaalgorn;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nestor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nestor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'barghest') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.barghest;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nightmare') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nightmare;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'vindicator') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.vindictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'scorpion') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.scorpion;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'rokh') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.rokh;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'maelstrom') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.maelstrom;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'typhoon') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.typhoon;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'armageddon') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.armageddon;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'apocalypse') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.apocalypse;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'dominix') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.dominix;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'megathron') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.megathron;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'raven striker') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.ravenStriker;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'raven') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.raven;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'maelstrom striker') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.maelstromStriker;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'tempest') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.tempest;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'apocalypse striker') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.apocalypseStriker;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'abaddon') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.abaddon;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'megathron striker') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.megathronStriker;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'hyperion') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.hyperion;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'imicus high mobility') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.imicusHighMobility;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'venture') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.venture;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'venture ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.ventureII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'tayra') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.tayra;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'mammoth') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.mammoth;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'bestower') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.bestower;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'kryos') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.kryos;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nereus high mobility') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nereusHighNobility;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'venture iii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.ventureIII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nereus combat') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nereusCombat;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'retreiver') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.retreiver;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'badger') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.badger;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'wreathe') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.wreathe;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'sigil') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.sigil;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nereus') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nereus;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nereus hauling') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nereusHauling;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'humpback high mobility') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.humpbackHighMobility;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'procurer') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.procurer;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'badger ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.badgerII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'wreathe ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.wreatheII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'sigil ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.sigilII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'nereus ii') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.nereusII;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'humpback hauling') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.humpbackHauling;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'humpback combat') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.humpbackCombat;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'covetor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.covetor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'cormorant interdictor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.cormorantInterdictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'thrasher interdictor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.thrasherInterdictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'coercer interdictor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.coercerInterdictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'catalyst interdictor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.catalystInterdictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'blackbird interdictor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.blackbirdInterdictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'bellicose interdictor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.bellicoseInterdictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'arbitrator interdictor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.arbitratorInterdictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
} else if (ship === 'celestis interdictor') {
  let modifier;
  switch (skills) {
    case '000':
    modifier = baseMod / baseMod;
    break;  
    case '100':
    modifier = (baseMod - skillNum(base1, 0, 0)) / baseMod;
    break;
    case '200':
    modifier = (baseMod - skillNum(base2, 0, 0)) / baseMod;
    break;
    case '300':
    modifier = (baseMod - skillNum(base3, 0, 0)) / baseMod;
    break;
    case '400':
    modifier = (baseMod - skillNum(base4, 0, 0)) / baseMod;
    break;
    case '500':
    modifier = (baseMod - skillNum(base5, 0, 0)) / baseMod;
    break;
    case '410':
    modifier = (baseMod - skillNum(base4, adv1, 0)) / baseMod;
    break;
    case '420':
    modifier = (baseMod - skillNum(base4, adv2, 0)) / baseMod;
    break;
    case '430':
    modifier = (baseMod - skillNum(base4, adv3, 0)) / baseMod;
    break;
    case '440':
    modifier = (baseMod - skillNum(base4, adv4, 0)) / baseMod;
    break;
    case '450':
    modifier = (baseMod - skillNum(base4, adv5, 0)) / baseMod;
    break;
    case '451':
    modifier = (baseMod - skillNum(base4, adv5, exp1)) / baseMod;
    break;
    case '452':
    modifier = (baseMod - skillNum(base4, adv5, exp2)) / baseMod;
    break;
    case '453':
    modifier = (baseMod - skillNum(base4, adv5, exp3)) / baseMod;
    break;
    case '454':
    modifier = (baseMod - skillNum(base4, adv5, exp4)) / baseMod;
    break;
    case '455':
    modifier = (baseMod - skillNum(base4, adv5, exp5)) / baseMod;
    break;
    case '510':
    modifier = (baseMod - skillNum(base5, adv1, 0)) / baseMod;
    break;
    case '520':
    modifier = (baseMod - skillNum(base5, adv2, 0)) / baseMod;
    break;
    case '530':
    modifier = (baseMod - skillNum(base5, adv3, 0)) / baseMod;
    break;
    case '540':
    modifier = (baseMod - skillNum(base5, adv4, 0)) / baseMod;
    break;
    case '550':
    modifier = (baseMod - skillNum(base5, adv5, 0)) / baseMod;
    break;
    case '551':
    modifier = (baseMod - skillNum(base5, adv5, exp1)) / baseMod;
    break;
    case '552':
    modifier = (baseMod - skillNum(base5, adv5, exp2)) / baseMod;
    break;
    case '553':
    modifier = (baseMod - skillNum(base5, adv5, exp3)) / baseMod;
    break;
    case '554':
    modifier = (baseMod - skillNum(base5, adv5, exp4)) / baseMod;
    break;
    case '555':
    modifier = (baseMod - skillNum(base5, adv5, exp5)) / baseMod;
    break;
  }
      let numArray = [];
      let shipArr = Ships.celestisInterdictor;
      shipArr[0].materials.forEach(e => {
        numArray.push(e[1])
      })
      let modNums = numArray.map(e => {
        return Math.round(e * modifier);
      })
      let matsArray = [];
      shipArr[0].materials.forEach(e => {
        matsArray.push(e[0])
      })
      client.channels.cache.get(test).send(`${shipArr[0].name} | ${shipArr[0].type} | Tech Level: ${shipArr[0].techLevel}`)
      for (i = 0; i < matsArray.length; i++) {
        client.channels.cache.get(test).send(`${matsArray[i]} - ${modNums[i]}`)
      } 
}
}});

client.on('message', (message) => {
  if (message.content === 'shipHelp') {
    client.channels.cache.get(test).send(botGreet());
  }
})

function botGreet() {
  return 'Hello I am shipWizard!\n\nPlease type in your command in the following fashion:\n\n[!][Ship Name] [Skill Levels]\n\nExamples: "!dragoon 430" "!atron II 530" !venture III 540"'
};
client.on('ready', () =>{
  console.log('shipWizard is online');
});



client.login(token);