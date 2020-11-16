require('events').EventEmitter.defaultMaxListeners = 50;
const ships = require('./shipBase');

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = config.token;
const testChannel =config.testChannel;


const {google} = require('googleapis');
const keys = require('./keys.json');
const sheetID = keys.sheet_id;
// Google client login in creds

const googleClient = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

// Google client authorize

googleClient.authorize(function(err, tokens){
  if(err) {
    console.log(err);
    return;
  } else {
    console.log('Google Connected!');
    gsRun(googleClient)
  }
});

// Google activate function
async function gsRun(cl, item) {
  const gsApi = google.sheets({version:'v4', auth: cl});
  const baseMetalsSheet = mats.baseMetals;
  const baseMetalsData = await gsApi.spreadsheets.values.get(baseMetalsSheet);
  const baseMetals = baseMetalsData.data.values;
};

//console.log(ships.griffin[0])

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
const { get } = require('http');
const allShips = Ships.allShipsLower;
const possibleSkills = Ships.possibleSkills;

function skillNum(base, adv, exp) {
  return base + adv + exp;
};

function getBuild(shipArr, skills) {
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

  shipArr[0].materials.forEach(e => {
    numArray.push(e[1])
  });

  let modNums = numArray.map(e => {
    return Math.round(e * modifier);
  });

  let matsArray = [];

  shipArr[0].materials.forEach(e => {
    matsArray.push(e[0])
  });

  let embedArr = [];

  for (let i = 0; i < matsArray.length; i++) {
    embedArr.push(`${matsArray[i]} - ${modNums[i]}`);
  }

  let embed = new Discord.MessageEmbed()
  .addField(`${shipArr[0].name} | ${shipArr[0].type} Tech Level: ${shipArr[0].techLevel}`, embedArr)

  return embed
};



client.on('ready', () => {
  console.log('market_bot online');
});

client.on('message', (message) => {
  if (message.content.startsWith(prefix)) {
    let skills = message.content.slice(message.content.length - 3);
    let ship = message.content.slice(1, message.content.length - 4).toLowerCase();
    if (!allShips.includes(ship) && possibleSkills.includes(skills)) {
      message.reply('Invalid ship name')
    } if (ship === 'griffin') {
      client.channels.cache.get(testChannel).send(getBuild(ships.griffin, skills))
    } else if (ship === 'condor ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.condorII, skills))
    } else if (ship === 'vigil') {
      client.channels.cache.get(testChannel).send(getBuild(ships.vigil, skills))
    } else if (ship === 'slasher ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.slasherII, skills))
    } else if (ship === 'crucifier') {
      client.channels.cache.get(testChannel).send(getBuild(ships.crucifier, skills))
    } else if (ship === 'executioner ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.executionerII, skills))
    } else if (ship === 'maulus') {
      client.channels.cache.get(testChannel).send(getBuild(ships.maulus, skills))
    } else if (ship === 'atron ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.atronII, skills))
    } else if (ship === 'bantam') {
      client.channels.cache.get(testChannel).send(getBuild(ships.bantam, skills))
    } else if (ship === 'heron covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.heronCovertOps, skills))
    } else if (ship === 'burst') {
      client.channels.cache.get(testChannel).send(getBuild(ships.burst, skills))
    } else if (ship === 'probe covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.probeCovertOps, skills))
    } else if (ship === 'inquisitor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.inquisitor, skills))
    } else if (ship === 'magnate covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.magnateCovertOps, skills))
    } else if (ship === 'navitas') {
      client.channels.cache.get(testChannel).send(getBuild(ships.navitas, skills))
    } else if (ship === 'imicus covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.imicusCovertOps, skills))
    } else if (ship === 'bantam ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.bantamII, skills))
    } else if (ship === 'manticore') {
      client.channels.cache.get(testChannel).send(getBuild(ships.manticore, skills))
    } else if (ship === 'burst ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.burstII, skills))
    } else if (ship === 'hound') {
      client.channels.cache.get(testChannel).send(getBuild(ships.hound, skills))
    } else if (ship === 'inquisitor ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.inquisitorII, skills))
    } else if (ship === 'purifier') {
      client.channels.cache.get(testChannel).send(getBuild(ships.purifier, skills))
    } else if (ship === 'navitas ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.navitasII, skills))
    } else if (ship === 'nemesis') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nemesis, skills))
    } else if (ship === 'worm') {
      client.channels.cache.get(testChannel).send(getBuild(ships.worm, skills))
    } else if (ship === 'dramiel') {
      client.channels.cache.get(testChannel).send(getBuild(ships.dramiel, skills))
    } else if (ship === 'cruor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cruor, skills))
    } else if (ship === 'astero') {
      client.channels.cache.get(testChannel).send(getBuild(ships.astero, skills))
    } else if (ship === 'garmur') {
      client.channels.cache.get(testChannel).send(getBuild(ships.garmur, skills))
    } else if (ship === 'succubus') {
      client.channels.cache.get(testChannel).send(getBuild(ships.succubus, skills))
    } else if (ship === 'daredevil') {
      client.channels.cache.get(testChannel).send(getBuild(ships.daredevil, skills))
    } else if (ship === 'merlin assault') {
      client.channels.cache.get(testChannel).send(getBuild(ships.merlinAssault, skills))
    } else if (ship === 'breacher assault') {
      client.channels.cache.get(testChannel).send(getBuild(ships.breacherAssault, skills))
    } else if (ship === 'punisher assault') {
      client.channels.cache.get(testChannel).send(getBuild(ships.punisherAssault, skills))
    } else if (ship === 'incursus assault') {
      client.channels.cache.get(testChannel).send(getBuild(ships.incursusAssault, skills))
    } else if (ship === 'condor interceptor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.condorInterceptor, skills))
    } else if (ship === 'slasher interceptor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.slasherInterceptor, skills))
    } else if (ship === 'executioner interceptor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.executionerInterceptor, skills))
    } else if (ship === 'atron interceptor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.atronInterceptor, skills))
    } else if (ship === 'manticore ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.manticoreII, skills))
    } else if (ship === 'hound ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.houndII, skills))
    } else if (ship === 'purifier ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.purifierII, skills))
    } else if (ship === 'nemesis ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nemesisII, skills))
    } else if (ship === 'condor ii interceptor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.condorIIinterceptor, skills))
    } else if (ship === 'slasher ii interceptor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.slasherIIinterceptor, skills))
    } else if (ship === 'executioner ii interceptor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.executionerIIinterceptor, skills))
    } else if (ship === 'atron ii interceptor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.atronIIinterceptor, skills))
    } else if (ship === 'corax') {
      client.channels.cache.get(testChannel).send(getBuild(ships.corax, skills))
    } else if (ship === 'cormorant ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cormorantII, skills))
    } else if (ship === 'talwar') {
      client.channels.cache.get(testChannel).send(getBuild(ships.talwar, skills))
    } else if (ship === 'thrasher ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thrasherII, skills))
    } else if (ship === 'dragoon') {
      client.channels.cache.get(testChannel).send(getBuild(ships.dragoon, skills))
    } else if (ship === 'coercer ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.coercerII, skills))
    } else if (ship === 'algos') {
      client.channels.cache.get(testChannel).send(getBuild(ships.algos, skills))
    } else if (ship === 'catalyst ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.catalystII, skills))
    } else if (ship === 'cormorant guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cormorantGuardian, skills))
    } else if (ship === 'cormorant navy issue') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cormorantNavyIssue, skills))
    } else if (ship === 'thrasher guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thrasherGuardian, skills))
    } else if (ship === 'thrasher fleet issue') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thrasherFleetIssue, skills))
    } else if (ship === 'coercer guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.coercerGuardian, skills))
    } else if (ship === 'coercer navy issue') {
      client.channels.cache.get(testChannel).send(getBuild(ships.coercerNavyIssue, skills))
    } else if (ship === 'catalyst guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.catalystGuardian, skills))
    } else if (ship === 'catalyst navy issue') {
      client.channels.cache.get(testChannel).send(getBuild(ships.catalystNavyIssue, skills))
    } else if (ship === 'corax sniper') {
      client.channels.cache.get(testChannel).send(getBuild(ships.coraxSniper, skills))
    } else if (ship === 'talwar sniper') {
      client.channels.cache.get(testChannel).send(getBuild(ships.talwarSniper, skills))
    } else if (ship === 'dragoon sniper') {
      client.channels.cache.get(testChannel).send(getBuild(ships.dragoonSniper, skills))
    } else if (ship === 'algos sniper') {
      client.channels.cache.get(testChannel).send(getBuild(ships.algosSniper, skills))
    } else if (ship === 'corax assault') {
      client.channels.cache.get(testChannel).send(getBuild(ships.coraxAssault, skills))
    } else if (ship === 'talwar assault') {
      client.channels.cache.get(testChannel).send(getBuild(ships.talwarAssault, skills))
    } else if (ship === 'dragoon assault') {
      client.channels.cache.get(testChannel).send(getBuild(ships.dragoonAssault, skills))
    } else if (ship === 'algos assault') {
      client.channels.cache.get(testChannel).send(getBuild(ships.algosAssault, skills))
    } else if (ship === 'cormorant covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cormorantCovertOps, skills))
    } else if (ship === 'thrasher covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thrasherCovertOps, skills))
    } else if (ship === 'coercer covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.coercerCovertOps, skills))
    } else if (ship === 'catalyst covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.catalystCovertOps, skills))
    } else if (ship === 'caracal') {
      client.channels.cache.get(testChannel).send(getBuild(ships.caracal, skills))
    } else if (ship === 'stabber') {
      client.channels.cache.get(testChannel).send(getBuild(ships.stabber, skills))
    } else if (ship === 'omen') {
      client.channels.cache.get(testChannel).send(getBuild(ships.omen, skills))
    } else if (ship === 'vexor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.vexor, skills))
    } else if (ship === 'thorax prototype') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thoraxPrototype, skills))
    } else if (ship === 'blackbird') {
      client.channels.cache.get(testChannel).send(getBuild(ships.blackbird, skills))
    } else if (ship === 'moa') {
      client.channels.cache.get(testChannel).send(getBuild(ships.moa, skills))
    } else if (ship === 'caracal navy issue') {
      client.channels.cache.get(testChannel).send(getBuild(ships.caracalNavyIssue, skills))
    } else if (ship === 'bellicose') {
      client.channels.cache.get(testChannel).send(getBuild(ships.bellicose, skills))
    } else if (ship === 'stabber fleet issue') {
      client.channels.cache.get(testChannel).send(getBuild(ships.stabberFleetIssue, skills))
    } else if (ship === 'rupture') {
      client.channels.cache.get(testChannel).send(getBuild(ships.rupture, skills))
    } else if (ship === 'arbitrator') {
      client.channels.cache.get(testChannel).send(getBuild(ships.arbitrator, skills))
    } else if (ship === 'maller') {
      client.channels.cache.get(testChannel).send(getBuild(ships.maller, skills))
    } else if (ship === 'omen navy issue') {
      client.channels.cache.get(testChannel).send(getBuild(ships.omenNavyIssue, skills))
    } else if (ship === 'celestis') {
      client.channels.cache.get(testChannel).send(getBuild(ships.celestis, skills))
    } else if (ship === 'vexor navy issue') {
      client.channels.cache.get(testChannel).send(getBuild(ships.vexorNavyIssue, skills))
    } else if (ship === 'thorax') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thorax, skills))
    } else if (ship === 'moa guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.moaGuardian, skills))
    } else if (ship === 'osprey') {
      client.channels.cache.get(testChannel).send(getBuild(ships.osprey, skills))
    } else if (ship === 'blackbird covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.blackbirdCovertOps, skills))
    } else if (ship === 'rupture guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.ruptureGuardian, skills))
    } else if (ship === 'scythe') {
      client.channels.cache.get(testChannel).send(getBuild(ships.scythe, skills))
    } else if (ship === 'bellicose covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.bellicoseCovertOps, skills))
    } else if (ship === 'maller guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.mallerGuardian, skills))
    } else if (ship === 'augoror') {
      client.channels.cache.get(testChannel).send(getBuild(ships.augoror, skills))
    } else if (ship === 'arbitrator covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.arbitratorCovertOps, skills))
    } else if (ship === 'thorax guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thoraxGuardian, skills))
    } else if (ship === 'exequror') {
      client.channels.cache.get(testChannel).send(getBuild(ships.exequror, skills))
    } else if (ship === 'celestis covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.celestisCovertOps, skills))
    } else if (ship === 'gila') {
      client.channels.cache.get(testChannel).send(getBuild(ships.gila, skills))
    } else if (ship === 'cynabal') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cynabal, skills))
    } else if (ship === 'ashimmu') {
      client.channels.cache.get(testChannel).send(getBuild(ships.ashimmu, skills))
    } else if (ship === 'stratios') {
      client.channels.cache.get(testChannel).send(getBuild(ships.stratios, skills))
    } else if (ship === 'orthrus') {
      client.channels.cache.get(testChannel).send(getBuild(ships.orthrus, skills))
    } else if (ship === 'phantasm') {
      client.channels.cache.get(testChannel).send(getBuild(ships.phantasm, skills))
    } else if (ship === 'vigilant') {
      client.channels.cache.get(testChannel).send(getBuild(ships.vigilant, skills))
    } else if (ship === 'moa ii guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.moaIIGuardian, skills))
    } else if (ship === 'caracal sniper') {
      client.channels.cache.get(testChannel).send(getBuild(ships.caracalSniper, skills))
    } else if (ship === 'rupture ii guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.ruptureIIGuardian, skills))
    } else if (ship === 'stabber sniper') {
      client.channels.cache.get(testChannel).send(getBuild(ships.stabberSniper, skills))
    } else if (ship === 'maller ii guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.mallerIIGuardian, skills))
    } else if (ship === 'omen sniper') {
      client.channels.cache.get(testChannel).send(getBuild(ships.omenSniper, skills))
    } else if (ship === 'thorax ii guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thoraxIIGuardian, skills))
    } else if (ship === 'vexor sniper') {
      client.channels.cache.get(testChannel).send(getBuild(ships.vexorSniper, skills))
    } else if (ship === 'blackbird ii covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.blackbirdIICovertOps, skills))
    } else if (ship === 'bellicose ii covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.bellicoseIICovertOps, skills))
    } else if (ship === 'arbitrator ii covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.arbitratorIICovertOps, skills))
    } else if (ship === 'celestis ii covert ops') {
      client.channels.cache.get(testChannel).send(getBuild(ships.celestisIICovertOps, skills))
    } else if (ship === 'ferox') {
      client.channels.cache.get(testChannel).send(getBuild(ships.ferox, skills))
    } else if (ship === 'cyclone') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cyclone, skills))
    } else if (ship === 'hurricane prototype') {
      client.channels.cache.get(testChannel).send(getBuild(ships.hurricanePrototype, skills))
    } else if (ship === 'prophecy') {
      client.channels.cache.get(testChannel).send(getBuild(ships.prophecy, skills))
    } else if (ship === 'harbinger prototype') {
      client.channels.cache.get(testChannel).send(getBuild(ships.harbingerPrototype, skills))
    } else if (ship === 'myrmidon') {
      client.channels.cache.get(testChannel).send(getBuild(ships.myrmidon, skills))
    } else if (ship === 'naga') {
      client.channels.cache.get(testChannel).send(getBuild(ships.naga, skills))
    } else if (ship === 'drake') {
      client.channels.cache.get(testChannel).send(getBuild(ships.drake, skills))
    } else if (ship === 'tornado') {
      client.channels.cache.get(testChannel).send(getBuild(ships.tornado, skills))
    } else if (ship === 'hurricane') {
      client.channels.cache.get(testChannel).send(getBuild(ships.hurricane, skills))
    } else if (ship === 'oracle') {
      client.channels.cache.get(testChannel).send(getBuild(ships.oracle, skills))
    } else if (ship === 'harbinger') {
      client.channels.cache.get(testChannel).send(getBuild(ships.harbinger, skills))
    } else if (ship === 'talos') {
      client.channels.cache.get(testChannel).send(getBuild(ships.talos, skills))
    } else if (ship === 'brutix') {
      client.channels.cache.get(testChannel).send(getBuild(ships.brutix, skills))
    } else if (ship === 'ferox guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.feroxGuardian, skills))
    } else if (ship === 'naga ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nagaII, skills))
    } else if (ship === 'drake logistics') {
      client.channels.cache.get(testChannel).send(getBuild(ships.drakeLogistics, skills))
    } else if (ship === 'cyclone guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cycloneGuardian, skills))
    } else if (ship === 'tornado ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.tornadoII, skills))
    } else if (ship === 'hurricane logistics') {
      client.channels.cache.get(testChannel).send(getBuild(ships.hurricaneLogistics, skills))
    } else if (ship === 'prophecy guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.prophecyGuardian, skills))
    } else if (ship === 'oracle ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.oracleII, skills))
    } else if (ship === 'harbinger logistics') {
      client.channels.cache.get(testChannel).send(getBuild(ships.harbingerLogistics, skills))
    } else if (ship === 'myrmidon guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.myrmidonGuardian, skills))
    } else if (ship === 'talos ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.talosII, skills))
    } else if (ship === 'brutix logistics') {
      client.channels.cache.get(testChannel).send(getBuild(ships.brutixLogistics, skills))
    } else if (ship === 'ferox ii guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.feroxIIGuardian, skills))
    } else if (ship === 'cyclone ii guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cycloneIIGuardian, skills))
    } else if (ship === 'prophecy ii guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.prophecyIIGuardian, skills))
    } else if (ship === 'myrmidon ii guardian') {
      client.channels.cache.get(testChannel).send(getBuild(ships.myrmidonIIGuardian, skills))
    } else if (ship === 'rattlesnake') {
      client.channels.cache.get(testChannel).send(getBuild(ships.rattlesnake, skills))
    } else if (ship === 'machariel') {
      client.channels.cache.get(testChannel).send(getBuild(ships.machariel, skills))
    } else if (ship === 'bhaalgorn') {
      client.channels.cache.get(testChannel).send(getBuild(ships.bhaalgorn, skills))
    } else if (ship === 'nestor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nestor, skills))
    } else if (ship === 'barghest') {
      client.channels.cache.get(testChannel).send(getBuild(ships.barghest, skills))
    } else if (ship === 'nightmare') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nightmare, skills))
    } else if (ship === 'vindictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.vindictor, skills))
    } else if (ship === 'scorpion') {
      client.channels.cache.get(testChannel).send(getBuild(ships.scorpion, skills))
    } else if (ship === 'rokh') {
      client.channels.cache.get(testChannel).send(getBuild(ships.rokh, skills))
    } else if (ship === 'maelstrom') {
      client.channels.cache.get(testChannel).send(getBuild(ships.maelstrom, skills))
    } else if (ship === 'typhoon') {
      client.channels.cache.get(testChannel).send(getBuild(ships.typhoon, skills))
    } else if (ship === 'armageddon') {
      client.channels.cache.get(testChannel).send(getBuild(ships.armageddon, skills))
    } else if (ship === 'apocalypse') {
      client.channels.cache.get(testChannel).send(getBuild(ships.apocalypse, skills))
    } else if (ship === 'dominix') {
      client.channels.cache.get(testChannel).send(getBuild(ships.dominix, skills))
    } else if (ship === 'megathron') {
      client.channels.cache.get(testChannel).send(getBuild(ships.megathron, skills))
    } else if (ship === 'raven striker') {
      client.channels.cache.get(testChannel).send(getBuild(ships.ravenStriker, skills))
    } else if (ship === 'raven') {
      client.channels.cache.get(testChannel).send(getBuild(ships.raven, skills))
    } else if (ship === 'maelstrom striker') {
      client.channels.cache.get(testChannel).send(getBuild(ships.maelstromStriker, skills))
    } else if (ship === 'apocalypse striker') {
      client.channels.cache.get(testChannel).send(getBuild(ships.apocalypseStriker, skills))
    } else if (ship === 'abaddon') {
      client.channels.cache.get(testChannel).send(getBuild(ships.abaddon, skills))
    } else if (ship === 'megathron striker') {
      client.channels.cache.get(testChannel).send(getBuild(ships.megathronStriker, skills))
    } else if (ship === 'hyperion') {
      client.channels.cache.get(testChannel).send(getBuild(ships.hyperion, skills))
    } else if (ship === 'imicus high mobility') {
      client.channels.cache.get(testChannel).send(getBuild(ships.imicusHighMobility, skills))
    } else if (ship === 'venture') {
      client.channels.cache.get(testChannel).send(getBuild(ships.venture, skills))
    } else if (ship === 'venture ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.ventureII, skills))
    } else if (ship === 'tayra') {
      client.channels.cache.get(testChannel).send(getBuild(ships.tayra, skills))
    } else if (ship === 'mammoth') {
      client.channels.cache.get(testChannel).send(getBuild(ships.mammoth, skills))
    } else if (ship === 'bestower') {
      client.channels.cache.get(testChannel).send(getBuild(ships.bestower, skills))
    } else if (ship === 'kryos') {
      client.channels.cache.get(testChannel).send(getBuild(ships.kryos, skills))
    } else if (ship === 'nereus high nobility') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nereusHighNobility, skills))
    } else if (ship === 'venture iii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.ventureIII, skills))
    } else if (ship === 'retreiver') {
      client.channels.cache.get(testChannel).send(getBuild(ships.retreiver, skills))
    } else if (ship === 'nereus combat') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nereusCombat, skills))
    } else if (ship === 'badger') {
      client.channels.cache.get(testChannel).send(getBuild(ships.badger, skills))
    } else if (ship === 'wreathe') {
      client.channels.cache.get(testChannel).send(getBuild(ships.wreathe, skills))
    } else if (ship === 'sigil') {
      client.channels.cache.get(testChannel).send(getBuild(ships.sigil, skills))
    } else if (ship === 'nereus') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nereus, skills))
    } else if (ship === 'nereus hauling') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nereusHauling, skills))
    } else if (ship === 'humpback high mobility') {
      client.channels.cache.get(testChannel).send(getBuild(ships.humpbackHighMobility, skills))
    } else if (ship === 'procurer') {
      client.channels.cache.get(testChannel).send(getBuild(ships.procurer, skills))
    } else if (ship === 'badger ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.badgerII, skills))
    } else if (ship === 'wreathe ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.wreatheII, skills))
    } else if (ship === 'sigil ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.sigilII, skills))
    } else if (ship === 'nereus ii') {
      client.channels.cache.get(testChannel).send(getBuild(ships.nereusII, skills))
    } else if (ship === 'humpback hauling') {
      client.channels.cache.get(testChannel).send(getBuild(ships.humpbackHauling, skills))
    } else if (ship === 'humpback combat') {
      client.channels.cache.get(testChannel).send(getBuild(ships.humpbackCombat, skills))
    } else if (ship === 'covetor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.covetor, skills))
    } else if (ship === 'cormorant interdictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.cormorantInterdictor, skills))
    } else if (ship === 'thrasher interdictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.thrasherInterdictor, skills))
    } else if (ship === 'coercer interdictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.coercerInterdictor, skills))
    } else if (ship === 'catalyst interdictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.catalystInterdictor, skills))
    } else if (ship === 'blackbird interdictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.blackbirdInterdictor, skills))
    } else if (ship === 'bellicose interdictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.bellicoseInterdictor, skills))
    } else if (ship === 'arbitrator interdictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.arbitratorInterdictor, skills))
    } else if (ship === 'celesti interdictor') {
      client.channels.cache.get(testChannel).send(getBuild(ships.celestisInterdictor, skills))
    }
}})

// Discord login
client.login(token);
