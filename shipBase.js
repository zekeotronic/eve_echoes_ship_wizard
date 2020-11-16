const allShips = ['Blackbird Interdictor', 'Bellicose Interdictor', 'Arbitrator Interdictor', 'Celestis Interdictor', 'Cormorant Interdictor','Thrasher Interdictor', 'Coercer Interdictor', 'Catalyst Interdictor', 'Griffin','Condor II','Vigil','Slasher II','Crucifier','Executioner II','Maulus','Atron II','Bantam',
'Heron Covert Ops','Burst','Probe Covert Ops','Inquisitor','Magnate Covert Ops','Navitas','Imicus Covert Ops','Bantam II','Manticore','Burst II','Hound','Inquisitor II','Purifier','Navitas II','Nemesis','Worm','Dramiel','Cruor','Astero','Garmur','Succubus','Daredevil','Merlin Assault','Breacher Assault','Punisher Assault','Incursus Assault','Condor Interceptor','Slasher Interceptor','Executioner Interceptor','Atron Interceptor','Manticore II','Hound II','Purifier II','Nemesis II','Condor II Interceptor','Slasher II Interceptor','Executioner II Interceptor','Atron II Interceptor','Corax','Cormorant II','Talwar','Thrasher II','Dragoon','Coercer II','Algos','Catalyst II','Cormorant Guardian','Cormorant Navy Issue','Thrasher Guardian','Thrasher Fleet Issue','Coercer Guardian','Coercer Navy Issue','Catalyst Guardian','Catalyst Navy Issue','Corax Sniper','Talwar Sniper','Dragoon Sniper','Algos Sniper','Corax Assault','Talwar Assault','Dragoon Assault','Algos Assault','Cormorant Covert Ops',
'Thrasher Covert Ops','Coercer Covert Ops','Catalyst Covert Ops','Caracal','Stabber','Omen','Vexor','Thorax Prototype','Blackbird','Moa','Caracal Navy Issue','Bellicose','Stabber Fleet Issue','Rupture','Arbitrator','Maller','Omen Navy Issue','Celestis','Vexor Navy Issue','Thorax','Moa Guardian','Osprey','Blackbird Covert Ops','Rupture Guardian','Scythe','Bellicose Covert Ops','Maller Guardian','Augoror','Arbitrator Covert Ops','Thorax Guardian','Exequror','Celestis Covert Ops','Gila','Cynabal','Ashimmu','Stratios','Orthrus','Phantasm','Vigilant','Moa II Guardian','Caracal Sniper','Rupture II Guardian','Stabber Sniper','Maller II Guardian','Omen Sniper','Thorax II Guardian','Vexor Sniper','Blackbird II Covert Ops','Bellicose II Covert Ops','Arbitrator II Covert Ops','Celestis II Covert Ops','Ferox','Cyclone','Hurricane Prototype','Prophecy','Harbinger Prototype','Myrmidon','Naga','Drake','Tornado','Hurricane','Oracle','Harbinger','Talos','Brutix','Ferox Guardian',
'Naga II','Drake Logistics','Cyclone Guardian','Tornado II','Hurricane Logistics','Prophecy Guardian','Oracle II','Harbinger Logistics','Myrmidon Guardian','Talos II','Brutix Logistics','Ferox II Guardian','Cyclone II Guardian','Prophecy II Guardian','Myrmidon II Guardian','Rattlesnake','Machariel','Bhaalgorn','Nestor','Barghest','Nightmare','Vindicator','Scorpion','Rokh','Maelstrom','Typhoon','Armageddon','Apocalypse','Dominix','Megathron','Raven Striker','Raven','Maelstrom Striker','Tempest','Apocalypse Striker','Abaddon','Megathron Striker','Hyperion','Imicus High Mobility','Venture','Venture II','Tayra','Mammoth','Bestower','Kryos','Nereus High Mobility','Venture III','Nereus Combat','Retreiver','Badger','Wreathe','Sigil','Nereus','Nereus Hauling','Humpback High Mobility','Procurer','Badger II','Wreathe II','Sigil II','Nereus II','Humpback Hauling','Humpback Combat','Covetor'];

const allShipsLower = [];
const possibleSkills = ['000','100','200','300','400','500','410','420','430','440','450','451','452','453','454','455','510','520','530','540','550','551','552','553','554','555'];

allShips.forEach(ship => {
  allShipsLower.push(ship.toLowerCase())
});

// Frigates - Tech 4
const griffin  = [
  {
    name: 'Griffin',
    type: 'Frigate',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1052],
      ['Gleaming Alloy', 1059],
      ['Motley Compound', 1059],
      ['Base Metals', 317],
      ['Noble Metals', 1200],
      ['Tritanium', 57951],
      ['Pyerite', 14464],
      ['Mexallon', 5280]
    ]
  }
];
const condorII = [
  {
    name: 'Condor II',
    type: 'Frigate',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1040],
      ['Gleaming Alloy', 1048],
      ['Motley Compound', 1048],
      ['Base Metals', 313],
      ['Noble Metals', 1188],
      ['Tritanium', 57293],
      ['Pyerite', 14300],
      ['Mexallon', 5219]
    ]
  }
];
const vigil = [
  {
    name: 'Vigil',
    type: 'Frigate',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1088],
      ['Gleaming Alloy', 1094],
      ['Motley Compound', 1094],
      ['Base Metals', 327],
      ['Noble Metals', 1240],
      ['Tritanium', 61169],
      ['Pyerite', 12365],
      ['Mexallon', 4982]
    ]
  }
];
const slasherII = [
  {
    name: 'Slasher II',
    type: 'Frigate',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1050],
      ['Gleaming Alloy', 1058],
      ['Motley Compound', 1058],
      ['Base Metals', 316],
      ['Noble Metals', 1198],
      ['Tritanium', 59084],
      ['Pyerite', 11943],
      ['Mexallon', 4813]
    ]
  }
];
const crucifier = [
  {
    name: 'Crucifier',
    type: 'Frigate',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1034],
      ['Sheen Compound', 1115],
      ['Motley Compound', 1042],
      ['Base Metals', 311],
      ['Heavy Metals', 1115],
      ['Tritanium', 73470],
      ['Pyerite', 12144],
      ['Mexallon', 4888]
    ]
  }
];
const executionerII = [
  {
    name: 'Executioner II',
    type: 'Frigate',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1047],
      ['Sheen Compound', 1127],
      ['Motley Compound', 1053],
      ['Base Metals', 316],
      ['Heavy Metals', 1127],
      ['Tritanium', 74315],
      ['Pyerite', 12284],
      ['Mexallon', 4944]
    ]
  }
];
const maulus = [
  {
    name: 'Maulus',
    type: 'Frigate',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1001],
      ['Sheen Compound', 1080],
      ['Motley Compound', 1009],
      ['Base Metals', 302],
      ['Heavy Metals', 1080],
      ['Tritanium', 54545],
      ['Pyerite', 13136],
      ['Mexallon', 4975]
    ]
  }
];
const atronII = [
  {
    name: 'Atron II',
    type: 'Frigate',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1001],
      ['Sheen Compound', 1080],
      ['Motley Compound', 1009],
      ['Base Metals', 302],
      ['Heavy Metals', 1080],
      ['Tritanium', 54545],
      ['Pyerite', 13136],
      ['Mexallon', 4975]
    ]
  }
];
// Frigates Tech 5
const bantam = [
  {
    name: 'Bantam',
    type: 'Frigate',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 1428],
      ['Gleaming Alloy', 1438],
      ['Motley Compound', 1438],
      ['Base Metals', 430],
      ['Noble Metals', 1630],
      ['Tritanium', 244178],
      ['Pyerite', 68786],
      ['Mexallon', 19840],
      ['Isogen', 2969]
    ]
  }
];
const heronCovertOps = [
  {
    name: 'Heron Covert Ops',
    type: 'Frigate',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 1649],
      ['Gleaming Alloy', 1659],
      ['Motley Compound', 1659],
      ['Base Metals', 495],
      ['Noble Metals', 1880],
      ['Tritanium', 281897],
      ['Pyerite', 79413],
      ['Mexallon', 22906],
      ['Isogen', 3426]
    ]
  }
];
const burst = [
  {
    name: 'Burst',
    type: 'Frigate',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 1399],
      ['Gleaming Alloy', 1408],
      ['Motley Compound', 1408],
      ['Base Metals', 420],
      ['Noble Metals', 1593],
      ['Tritanium', 244085],
      ['Pyerite', 55686],
      ['Mexallon', 17735],
      ['Isogen', 3444]
    ]
  }
];
const probeCovertOps = [
  {
    name: 'Probe Covert Ops',
    type: 'Frigate',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 1598],
      ['Gleaming Alloy', 1609],
      ['Motley Compound', 1609],
      ['Base Metals', 481],
      ['Noble Metals', 1822],
      ['Tritanium', 278956],
      ['Pyerite', 63641],
      ['Mexallon', 20268],
      ['Isogen', 3935]
    ]
  }
];
const inquisitor = [
  {
    name: 'Inquisitor',
    type: 'Frigate',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 1388],
      ['Sheen Compound', 1497],
      ['Motley Compound', 1397],
      ['Base Metals', 417],
      ['Heavy Metals', 1497],
      ['Tritanium', 306236],
      ['Pyerite', 57134],
      ['Mexallon', 18172],
      ['Isogen', 2826]
    ]
  }
];
const magnateCovertOps = [
  {
    name: 'Magnate Covert Ops',
    type: 'Frigate',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 1540],
      ['Sheen Compound', 1658],
      ['Motley Compound', 1549],
      ['Base Metals', 463],
      ['Heavy Metals', 1658],
      ['Tritanium', 339411],
      ['Pyerite', 633323],
      ['Mexallon', 20140],
      ['Isogen', 3133]
    ]
  }
];
const navitas = [
  {
    name: 'Navitas',
    type: 'Frigate',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 1447],
      ['Sheen Compound', 1559],
      ['Motley Compound', 1456],
      ['Base Metals', 435],
      ['Heavy Metals', 1559],
      ['Tritanium', 244615],
      ['Pyerite', 66492],
      ['Mexallon', 19898],
      ['Isogen', 2882]
    ]
  }
];
const imicusCovertOps = [
  {
    name: 'Imicus Covert Ops',
    type: 'Frigate',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 1706],
      ['Sheen Compound', 1838],
      ['Motley Compound', 1717],
      ['Base Metals', 513],
      ['Heavy Metals', 1838],
      ['Tritanium', 288367],
      ['Pyerite', 78384],
      ['Mexallon', 23458],
      ['Isogen', 3398]
    ]
  }
];
// Frigates Tech 6
const bantamII = [
  {
    name: 'Bantam II',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 4597],
      ['Gleaming Alloy', 4626],
      ['Fiber Composite', 5242],
      ['Noble Metals', 5242],
      ['Reactive Metals', 1305],
      ['Tritanium', 850709],
      ['Pyerite', 241130],
      ['Mexallon', 75581],
      ['Isogen', 12923],
      ['Nocxium', 3078]
    ]
  }
];
const manticore = [
  {
    name: 'Manticore',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 4738],
      ['Gleaming Alloy', 4769],
      ['Fiber Composite', 5402],
      ['Noble Metals', 5402],
      ['Reactive Metals', 1344],
      ['Tritanium', 876827],
      ['Pyerite', 248534],
      ['Mexallon', 77901],
      ['Isogen', 13320],
      ['Nocxium', 3173]
    ]
  }
];
const burstII = [
  {
    name: 'Burst II',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 4567],
      ['Gleaming Alloy', 4567],
      ['Fiber Composite', 5207],
      ['Noble Metals', 5207],
      ['Reactive Metals', 1297],
      ['Tritanium', 863394],
      ['Pyerite', 198194],
      ['Mexallon', 68595],
      ['Isogen', 15223],
      ['Nocxium', 3859]
    ]
  }
];
const hound = [
  {
    name: 'Hound',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 4367],
      ['Gleaming Alloy', 4395],
      ['Fiber Composite', 4981],
      ['Noble Metals', 4981],
      ['Reactive Metals', 1240],
      ['Tritanium', 825692],
      ['Pyerite', 189539],
      ['Mexallon', 65600],
      ['Isogen', 14558],
      ['Nocxium', 3689]
    ]
  }
];
const inquisitorII = [
  {
    name: 'Inquisitor II',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 4668],
      ['Sheen Compound', 5030],
      ['Fiber Composite', 5324],
      ['Heavy Metals', 5030],
      ['Reactive Metals', 1325],
      ['Tritanium', 1114822],
      ['Pyerite', 209273],
      ['Mexallon', 72334],
      ['Isogen', 12855],
      ['Nocxium', 3552]
    ]
  }
];
const purifier = [
  {
    name: 'Purifier',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 4450],
      ['Sheen Compound', 4794],
      ['Fiber Composite', 5074],
      ['Heavy Metals', 4794],
      ['Reactive Metals', 1263],
      ['Tritanium', 1062638],
      ['Pyerite', 199478],
      ['Mexallon', 68947],
      ['Isogen', 12252],
      ['Nocxium', 3386]
    ]
  }
];
const navitasII = [
  {
    name: 'Navitas II',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 4494],
      ['Sheen Compound', 4842],
      ['Fiber Composite', 5126],
      ['Heavy Metals', 4842],
      ['Reactive Metals', 1275],
      ['Tritanium', 822951],
      ['Pyerite', 225080],
      ['Mexallon', 73199],
      ['Isogen', 12116],
      ['Nocxium', 3455]
    ]
  }
];
const nemesis = [
  {
    name: 'Nemesis',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 4616],
      ['Sheen Compound', 4973],
      ['Fiber Composite', 5264],
      ['Heavy Metals', 4973],
      ['Reactive Metals', 1310],
      ['Tritanium', 845094],
      ['Pyerite', 231138],
      ['Mexallon', 75168],
      ['Isogen', 12443],
      ['Nocxium', 3548]
    ]
  }
];
const worm = [
  {
    name: 'Worm',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Condensed Alloy', 45300],
      ['Precious Alloy', 35498],
      ['Fiber Composite', 45300],
      ['Reactive Metals', 11264],
      ['Toxic Metals', 11173],
      ['Tritanium', 20593556],
      ['Pyerite', 6174257],
      ['Mexallon', 2025389],
      ['Isogen', 300486],
      ['Nocxium', 68264]
    ]
  }
];
const dramiel = [
  {
    name: 'Dramiel',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Condensed Alloy', 45359],
      ['Precious Alloy', 35543],
      ['Fiber Composite', 45359],
      ['Reactive Metals', 11280],
      ['Toxic Metals', 11186],
      ['Tritanium', 21063422],
      ['Pyerite', 5114350],
      ['Mexallon', 1852489],
      ['Isogen', 356703],
      ['Nocxium', 86216]
    ]
  }
];
const cruor = [
  {
    name: 'Cruor',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Condensed Alloy', 43349],
      ['Precious Alloy', 33968],
      ['Fiber Composite', 43349],
      ['Reactive Metals', 10780],
      ['Toxic Metals', 10691],
      ['Tritanium', 25427627],
      ['Pyerite', 5048892],
      ['Mexallon', 1826323],
      ['Isogen', 281614],
      ['Nocxium', 74231]
    ]
  }
];
const astero = [
  {
    name: 'Astero',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Condensed Alloy', 45956],
      ['Precious Alloy', 36011],
      ['Fiber Composite', 45956],
      ['Reactive Metals', 11427],
      ['Toxic Metals', 11333],
      ['Tritanium', 21340573],
      ['Pyerite', 5181624],
      ['Mexallon', 1876864],
      ['Isogen', 361397],
      ['Nocxium', 87350]
    ]
  }
];
const garmur = [
  {
    name: 'Garmur',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Condensed Alloy', 44094],
      ['Precious Alloy', 34551],
      ['Fiber Composite', 44094],
      ['Reactive Metals', 10964],
      ['Toxic Metals', 10874],
      ['Tritanium', 20045005],
      ['Pyerite', 5941610],
      ['Mexallon', 1971439],
      ['Isogen', 292483],
      ['Nocxium', 66447]
    ]
  }
];
const succubus = [
  {
    name: 'Succubus',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Condensed Alloy', 44192],
      ['Precious Alloy', 34628],
      ['Fiber Composite', 44192],
      ['Reactive Metals', 10988],
      ['Toxic Metals', 10898],
      ['Tritanium', 25921650],
      ['Pyerite', 5146985],
      ['Mexallon', 1861805],
      ['Isogen', 287084],
      ['Nocxium', 75673]
    ]
  }
];
const daredevil = [
  {
    name: 'Daredevil',
    type: 'Frigate',
    techLevel: 6,
    materials: [
      ['Condensed Alloy', 45091],
      ['Precious Alloy', 35333],
      ['Fiber Composite', 45091],
      ['Reactive Metals', 11213],
      ['Toxic Metals', 11120],
      ['Tritanium', 20277863],
      ['Pyerite', 5866340],
      ['Mexallon', 1996633],
      ['Isogen', 286763],
      ['Nocxium', 77985]
    ]
  }
];
// Frigates Tech 7
const merlinAssault = [
  {
    name: 'Merlin Assault',
    type: 'Frigate',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 5963],
      ['Precious Alloy', 5295],
      ['Fiber Composite', 6757],
      ['Noble Metals', 6757],
      ['Reactive Metals', 1681],
      ['Tritanium', 1999139],
      ['Pyerite', 509881],
      ['Mexallon', 168557],
      ['Isogen', 26202],
      ['Nocxium', 7076],
      ['Zydrine', 2519]
    ]
  }
];
const breacherAssault = [
  {
    name: 'Breacher Assault',
    type: 'Frigate',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 5866],
      ['Precious Alloy', 5209],
      ['Fiber Composite', 6645],
      ['Noble Metals', 6645],
      ['Reactive Metals', 1653],
      ['Tritanium', 2008715],
      ['Pyerite', 414908],
      ['Mexallon', 151451],
      ['Isogen', 30557],
      ['Nocxium', 8849],
      ['Zydrine', 2388]
    ]
  }
];
const punisherAssault = [
  {
    name: 'Punisher Assault',
    type: 'Frigate',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 6909],
      ['Precious Alloy', 5731],
      ['Fiber Composite', 7313],
      ['Heavy Metals', 6909],
      ['Reactive Metals', 1818],
      ['Tritanium', 2791682],
      ['Pyerite', 471551],
      ['Mexallon', 171897],
      ['Isogen', 27773],
      ['Nocxium', 8773],
      ['Zydrine', 1970]
    ]
  }
];
const incursusAssault = [
  {
    name: 'Incursus Assault',
    type: 'Frigate',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 6495],
      ['Precious Alloy', 5388],
      ['Fiber Composite', 6875],
      ['Heavy Metals', 6495],
      ['Reactive Metals', 1710],
      ['Tritanium', 2012085],
      ['Pyerite', 495181],
      ['Mexallon', 169844],
      ['Isogen', 26072],
      ['Nocxium', 8328],
      ['Zydrine', 2610]
    ]
  }
];
// Frigates Tech 8
const condorInterceptor = [
  {
    name: 'Condor Interceptor',
    type: 'Frigate',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 6642],
      ['Precious Alloy', 5899],
      ['Fiber Composite', 7526],
      ['Noble Metals', 7526],
      ['Reactive Metals', 1873],
      ['Tritanium', 2467872],
      ['Pyerite', 854017],
      ['Mexallon', 233965],
      ['Isogen', 38498],
      ['Nocxium', 10814],
      ['Zydrine', 4448],
      ['Megacyte', 1813]
    ]
  }
];
const slasherInterceptor = [
  {
    name: 'Slasher Interceptor',
    type: 'Frigate',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 6373],
      ['Precious Alloy', 5659],
      ['Fiber Composite', 7222],
      ['Noble Metals', 7222],
      ['Reactive Metals', 1797],
      ['Tritanium', 2418603],
      ['Pyerite', 677824],
      ['Mexallon', 205042],
      ['Isogen', 43790],
      ['Nocxium', 13086],
      ['Zydrine', 4109],
      ['Megacyte', 1547]
    ]
  }
];
const executionerInterceptor = [
  {
    name: 'Executioner Interceptor',
    type: 'Frigate',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 7026],
      ['Precious Alloy', 5828],
      ['Fiber Composite', 7436],
      ['Heavy Metals', 7026],
      ['Reactive Metals', 1850],
      ['Tritanium', 3146441],
      ['Pyerite', 721108],
      ['Mexallon', 217842],
      ['Isogen', 37256],
      ['Nocxium', 12142],
      ['Zydrine', 3175],
      ['Megacyte', 2059]
    ]
  }
];
const atronInterceptor = [
  {
    name: 'Atron Interceptor',
    type: 'Frigate',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 6960],
      ['Precious Alloy', 5773],
      ['Fiber Composite', 7336],
      ['Heavy Metals', 6960],
      ['Reactive Metals', 1832],
      ['Tritanium', 2389380],
      ['Pyerite', 797849],
      ['Mexallon', 226784],
      ['Isogen', 36125],
      ['Nocxium', 12147],
      ['Zydrine', 4433],
      ['Megacyte', 1703]
    ]
  }
];
// Frigates Tech 9
const manticoreII = [
  {
    name: 'Manticore II',
    type: 'Frigate',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 17186],
      ['Precious Alloy', 15259],
      ['Fiber Composite', 19472],
      ['Noble Metals', 19472],
      ['Reactive Metals', 4842],
      ['Tritanium', 4182102],
      ['Pyerite', 1196067],
      ['Mexallon', 426022],
      ['Isogen', 68984],
      ['Nocxium', 21422],
      ['Zydrine', 6327],
      ['Megacyte', 3053]
    ]
  }
];
const houndII = [
  {
    name: 'Hound II',
    type: 'Frigate',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 15425],
      ['Precious Alloy', 13695],
      ['Fiber Composite', 17477],
      ['Noble Metals', 17477],
      ['Reactive Metals', 4347],
      ['Tritanium', 4105648],
      ['Pyerite', 1197100],
      ['Mexallon', 374539],
      ['Isogen', 58682],
      ['Nocxium', 19227],
      ['Zydrine', 6415],
      ['Megacyte', 3602]
    ]
  }
];
const purifierII = [
  {
    name: 'Purifier II',
    type: 'Frigate',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 16845],
      ['Precious Alloy', 13970],
      ['Fiber Composite', 17828],
      ['Heavy Metals', 16845],
      ['Reactive Metals', 4434],
      ['Tritanium', 4400255],
      ['Pyerite', 972342],
      ['Mexallon', 364949],
      ['Isogen', 69959],
      ['Nocxium', 16231],
      ['Zydrine', 6473],
      ['Megacyte', 3851]
    ]
  }
];
const nemesisII = [
  {
    name: 'Nemesis II',
    type: 'Frigate',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 16973],
      ['Precious Alloy', 14076],
      ['Fiber Composite', 17965],
      ['Heavy Metals', 16973],
      ['Reactive Metals', 4467],
      ['Tritanium', 4935009],
      ['Pyerite', 1106745],
      ['Mexallon', 388809],
      ['Isogen', 71622],
      ['Nocxium', 17491],
      ['Zydrine', 6890],
      ['Megacyte', 2830]
    ]
  }
];
// Frigates Tech 10
const condorIIinterceptor = [
  {
    name: 'Condor II Interceptor',
    type: 'Frigate',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 23813],
      ['Precious Alloy', 21142],
      ['Fiber Composite', 26981],
      ['Noble Metals', 26981],
      ['Reactive Metals', 6710],
      ['Tritanium', 9924236],
      ['Pyerite', 2429235],
      ['Mexallon', 937580],
      ['Isogen', 180475],
      ['Nocxium', 52208],
      ['Zydrine', 15569],
      ['Megacyte', 7805]
    ]
  }
];
const slasherIIinterceptor = [
  {
    name: 'Slasher II Interceptor',
    type: 'Frigate',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 23415],
      ['Precious Alloy', 20820],
      ['Fiber Composite', 26570],
      ['Noble Metals', 26570],
      ['Reactive Metals', 6608],
      ['Tritanium', 9859991],
      ['Pyerite', 3168719],
      ['Mexallon', 873832],
      ['Isogen', 175419],
      ['Nocxium', 48411],
      ['Zydrine', 15766],
      ['Megacyte', 9305]
    ]
  }
];
const executionerIIinterceptor = [
  {
    name: 'Executioner II Interceptor',
    type: 'Frigate',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 24434],
      ['Precious Alloy', 20264],
      ['Fiber Composite', 25860],
      ['Heavy Metals', 24434],
      ['Reactive Metals', 6431],
      ['Tritanium', 11703105],
      ['Pyerite', 2899750],
      ['Mexallon', 956080],
      ['Isogen', 162691],
      ['Nocxium', 44592],
      ['Zydrine', 16639],
      ['Megacyte', 7505]
    ]
  }
];
const atronIIinterceptor = [
  {
    name: 'Atron II Interceptor',
    type: 'Frigate',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 24260],
      ['Precious Alloy', 20120],
      ['Fiber Composite', 25676],
      ['Heavy Metals', 24260],
      ['Reactive Metals', 6384],
      ['Tritanium', 11274375],
      ['Pyerite', 2356781],
      ['Mexallon', 995240],
      ['Isogen', 135832],
      ['Nocxium', 35261],
      ['Zydrine', 15435],
      ['Megacyte', 7751]
    ]
  }
];
// Destroyers Tech 4
const corax = [
  {
    name: 'Corax',
    type: 'Destroyer',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1615],
      ['Gleaming Alloy', 1625],
      ['Motley Compound', 1625],
      ['Base Metals', 485],
      ['Noble Metals', 1841],
      ['Tritanium', 88902],
      ['Pyerite', 22189],
      ['Mexallon', 8098]
    ]
  }
];
const cormorantII = [
  {
    name: 'Cormorant II',
    type: 'Destroyer',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1555],
      ['Gleaming Alloy', 1565],
      ['Motley Compound', 1565],
      ['Base Metals', 467],
      ['Noble Metals', 1772],
      ['Tritanium', 85610],
      ['Pyerite', 21367],
      ['Mexallon', 7798]
    ]
  }
];
const talwar = [
  {
    name: 'Talwar',
    type: 'Destroyer',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1569],
      ['Gleaming Alloy', 1580],
      ['Motley Compound', 1580],
      ['Base Metals', 472],
      ['Noble Metals', 1789],
      ['Tritanium', 88277],
      ['Pyerite', 17843],
      ['Mexallon', 7190]
    ]
  }
];
const thrasherII = [
  {
    name: 'Thrasher II',
    type: 'Destroyer',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1643],
      ['Gleaming Alloy', 1653],
      ['Motley Compound', 1653],
      ['Base Metals', 494],
      ['Noble Metals', 1874],
      ['Tritanium', 92447],
      ['Pyerite', 18686],
      ['Mexallon', 7531]
    ]
  }
];
const dragoon = [
  {
    name: 'Dragoon',
    type: 'Destroyer',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1474],
      ['Sheen Compound', 1588],
      ['Motley Compound', 1483],
      ['Base Metals', 443],
      ['Heavy Metals', 1588],
      ['Tritanium', 104717],
      ['Pyerite', 17309],
      ['Mexallon', 6967]
    ]
  }
];
const coercerII = [
  {
    name: 'Coercer II',
    type: 'Destroyer',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1509],
      ['Sheen Compound', 1626],
      ['Motley Compound', 1518],
      ['Base Metals', 453],
      ['Heavy Metals', 1626],
      ['Tritanium', 107250],
      ['Pyerite', 17727],
      ['Mexallon', 7134]
    ]
  }
];
const algos = [
  {
    name: 'Algos',
    type: 'Destroyer',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1616],
      ['Sheen Compound', 1742],
      ['Motley Compound', 1626],
      ['Base Metals', 486],
      ['Heavy Metals', 1742],
      ['Tritanium', 88059],
      ['Pyerite', 21208],
      ['Mexallon', 8030]
    ]
  }
];
const catalystII = [
  {
    name: 'Catalyst II',
    type: 'Destroyer',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 1520],
      ['Sheen Compound', 1638],
      ['Motley Compound', 1530],
      ['Base Metals', 457],
      ['Heavy Metals', 1638],
      ['Tritanium', 82802],
      ['Pyerite', 19942],
      ['Mexallon', 7551]
    ]
  }
];
// Destroyers Tech 5
const cormorantGuardian = [
  {
    name: 'Cormorant Guardian',
    type: 'Destroyer',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 2323],
      ['Gleaming Alloy', 2338],
      ['Motley Compound', 2338],
      ['Base Metals', 698],
      ['Noble Metals', 2648],
      ['Tritanium', 397038],
      ['Pyerite', 111848],
      ['Mexallon', 32259],
      ['Isogen', 4826]
    ]
  }
];
const cormorantNavyIssue = [
  {
    name: 'Cormorant Navy Issue',
    type: 'Destroyer',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 2299],
      ['Gleaming Alloy', 2314],
      ['Motley Compound', 2314],
      ['Base Metals', 691],
      ['Noble Metals', 2622],
      ['Tritanium', 393067],
      ['Pyerite', 110730],
      ['Mexallon', 31938],
      ['Isogen', 4778]
    ]
  }
];
const thrasherGuardian = [
  {
    name: 'Thrasher Guardian',
    type: 'Destroyer',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 2442],
      ['Gleaming Alloy', 2459],
      ['Motley Compound', 2459],
      ['Base Metals', 734],
      ['Noble Metals', 2786],
      ['Tritanium', 426636],
      ['Pyerite', 97334],
      ['Mexallon', 30998],
      ['Isogen', 6018]
    ]
  }
];
const thrasherFleetIssue = [
  {
    name: 'Thrasher Fleet Issue',
    type: 'Destroyer',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 2525],
      ['Gleaming Alloy', 2542],
      ['Motley Compound', 2542],
      ['Base Metals', 758],
      ['Noble Metals', 2880],
      ['Tritanium', 440994],
      ['Pyerite', 100609],
      ['Mexallon', 32042],
      ['Isogen', 6222]
    ]
  }
];
const coercerGuardian = [
  {
    name: 'Coercer Guardian',
    type: 'Destroyer',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 2372],
      ['Sheen Compound', 2555],
      ['Motley Compound', 2388],
      ['Base Metals', 713],
      ['Heavy Metals', 2555],
      ['Tritanium', 523155],
      ['Pyerite', 97602],
      ['Mexallon', 31043],
      ['Isogen', 4827]
    ]
  }
];
const coercerNavyIssue = [
  {
    name: 'Coercer Navy Issue',
    type: 'Destroyer',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 2360],
      ['Sheen Compound', 2543],
      ['Motley Compound', 2375],
      ['Base Metals', 709],
      ['Heavy Metals', 2543],
      ['Tritanium', 520601],
      ['Pyerite', 97127],
      ['Mexallon', 30892],
      ['Isogen', 4803]
    ]
  }
];
const catalystGuardian = [
  {
    name: 'Catalyst Guardian',
    type: 'Destroyer',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 2375],
      ['Sheen Compound', 2559],
      ['Motley Compound', 2390],
      ['Base Metals', 713],
      ['Heavy Metals', 2559],
      ['Tritanium', 401723],
      ['Pyerite', 109198],
      ['Mexallon', 32678],
      ['Isogen', 4733]
    ]
  }
];
const catalystNavyIssue = [
  {
    name: 'Catalyst Navy Issue',
    type: 'Destroyer',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 2388],
      ['Sheen Compound', 2572],
      ['Motley Compound', 2402],
      ['Base Metals', 717],
      ['Heavy Metals', 2572],
      ['Tritanium', 403713],
      ['Pyerite', 109739],
      ['Mexallon', 32840],
      ['Isogen', 4756]
    ]
  }
];
// Destroyers Tech 6
const coraxSniper = [
  {
    name: 'Corax Sniper',
    type: 'Destroyer',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 6733],
      ['Gleaming Alloy', 6776],
      ['Lucent Compound', 7255],
      ['Noble Metals', 7677],
      ['Reactive Metals', 1910],
      ['Tritanium', 1246214],
      ['Pyerite', 353235],
      ['Mexallon', 110720],
      ['Isogen', 18932],
      ['Nocxium', 4509]
    ]
  }
];
const talwarSniper = [
  {
    name: 'Talwar Sniper',
    type: 'Destroyer',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 6600],
      ['Gleaming Alloy', 6644],
      ['Lucent Compound', 7113],
      ['Noble Metals', 7526],
      ['Reactive Metals', 1873],
      ['Tritanium', 1247963],
      ['Pyerite', 286470],
      ['Mexallon', 99148],
      ['Isogen', 22002],
      ['Nocxium', 5576]
    ]
  }
];
const dragoonSniper = [
  {
    name: 'Dragoon Sniper',
    type: 'Destroyer',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 7052],
      ['Sheen Compound', 7598],
      ['Lucent Compound', 7598],
      ['Heavy Metals', 7598],
      ['Reactive Metals', 2000],
      ['Tritanium', 1684091],
      ['Pyerite', 316136],
      ['Mexallon', 109268],
      ['Isogen', 19418],
      ['Nocxium', 5366]
    ]
  }
];
const algosSniper = [
  {
    name: 'Algos Sniper',
    type: 'Destroyer',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 7297],
      ['Sheen Compound', 7860],
      ['Lucent Compound', 7860],
      ['Heavy Metals', 7860],
      ['Reactive Metals', 2069],
      ['Tritanium', 1335913],
      ['Pyerite', 365376],
      ['Mexallon', 118826],
      ['Isogen', 19668],
      ['Nocxium', 5608]
    ]
  }
];
// Destroyers Tech 7
const coraxAssault = [
  {
    name: 'Corax Assault',
    type: 'Destroyer',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 9492],
      ['Precious Alloy', 8430],
      ['Lucent Compound', 10163],
      ['Noble Metals', 10756],
      ['Reactive Metals', 2675],
      ['Tritanium', 3182576],
      ['Pyerite', 811715],
      ['Mexallon', 268338],
      ['Isogen', 41714],
      ['Nocxium', 11355],
      ['Zydrine', 4010]
    ]
  }
];
const talwarAssault = [
  {
    name: 'Talwar Assault',
    type: 'Destroyer',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 8059],
      ['Precious Alloy', 7155],
      ['Lucent Compound', 8625],
      ['Noble Metals', 9130],
      ['Reactive Metals', 2272],
      ['Tritanium', 2759447],
      ['Pyerite', 569975],
      ['Mexallon', 208053],
      ['Isogen', 41976],
      ['Nocxium', 12157],
      ['Zydrine', 3278]
    ]
  }
];
const dragoonAssault = [
  {
    name: 'Dragoon Assault',
    type: 'Destroyer',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 10039],
      ['Precious Alloy', 8325],
      ['Lucent Compound', 10039],
      ['Heavy Metals', 10039],
      ['Reactive Metals', 2643],
      ['Tritanium', 4056664],
      ['Pyerite', 685222],
      ['Mexallon', 249785],
      ['Isogen', 40357],
      ['Nocxium', 12747],
      ['Zydrine', 2861]
    ]
  }
];
const algosAssault = [
  {
    name: 'Algos Assault',
    type: 'Destroyer',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 9881],
      ['Precious Alloy', 8195],
      ['Lucent Compound', 9881],
      ['Heavy Metals', 9881],
      ['Reactive Metals', 2601],
      ['Tritanium', 3061007],
      ['Pyerite', 753323],
      ['Mexallon', 258384],
      ['Isogen', 38884],
      ['Nocxium', 12672],
      ['Zydrine', 3972]
    ]
  }
];
// Destroyers Tech 10
const cormorantCovertOps = [
  {
    name: 'Cormorant Covert Ops',
    type: 'Destroyer',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 34924],
      ['Precious Alloy', 31006],
      ['Lucent Compound', 37385],
      ['Noble Metals', 39567],
      ['Reactive Metals', 9839],
      ['Tritanium', 14554439],
      ['Pyerite', 3562607],
      ['Mexallon', 1375011],
      ['Isogen', 264675],
      ['Nocxium', 76565],
      ['Zydrine', 22832],
      ['Megacyte', 11445]
    ]
  }
];
const thrasherCovertOps = [
  {
    name: 'Thrasher Covert Ops',
    type: 'Destroyer',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 34907],
      ['Precious Alloy', 30991],
      ['Lucent Compound', 37368],
      ['Noble Metals', 39550],
      ['Reactive Metals', 9834],
      ['Tritanium', 14676466],
      ['Pyerite', 4716597],
      ['Mexallon', 1300686],
      ['Isogen', 261109],
      ['Nocxium', 72059],
      ['Zydrine', 23465],
      ['Megacyte', 13850]
    ]
  }
];
const coercerCovertOps = [
  {
    name: 'Coercer Covert Ops',
    type: 'Destroyer',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 36300],
      ['Precious Alloy', 30106],
      ['Lucent Compound', 36300],
      ['Heavy Metals', 36300],
      ['Reactive Metals', 9555],
      ['Tritanium', 17386906],
      ['Pyerite', 4308059],
      ['Mexallon', 1420414],
      ['Isogen', 241703],
      ['Nocxium', 66250],
      ['Zydrine', 24719],
      ['Megacyte', 11149]
    ]
  }
];
const catalystCovertOps = [
  {
    name: 'Catalyst Covert Ops',
    type: 'Destroyer',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 37189],
      ['Precious Alloy', 30842],
      ['Lucent Compound', 37189],
      ['Heavy Metals', 37189],
      ['Reactive Metals', 9788],
      ['Tritanium', 17283355],
      ['Pyerite', 3612890],
      ['Mexallon', 1525680],
      ['Isogen', 208225],
      ['Nocxium', 54055],
      ['Zydrine', 23661],
      ['Megacyte', 11882]
    ]
  }
];
// Cruisers Tech 5
const caracal = [
  {
    name: 'Caracal',
    type: 'Cruiser',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 4853],
      ['Gleaming Alloy', 4883],
      ['Motley Compound', 4883],
      ['Base Metals', 1457],
      ['Noble Metals', 5532],
      ['Tritanium', 829805],
      ['Pyerite', 233760],
      ['Mexallon', 67421],
      ['Isogen', 10085]
    ]
  }
];
const stabber = [
  {
    name: 'Stabber',
    type: 'Cruiser',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 4755],
      ['Gleaming Alloy', 4785],
      ['Motley Compound', 4785],
      ['Base Metals', 1428],
      ['Noble Metals', 5423],
      ['Tritanium', 830708],
      ['Pyerite', 189518],
      ['Mexallon', 60356],
      ['Isogen', 11717]
    ]
  }
];
const omen = [
  {
    name: 'Omen',
    type: 'Cruiser',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 4985],
      ['Sheen Compound', 5370],
      ['Motley Compound', 5016],
      ['Base Metals', 1496],
      ['Heavy Metals', 5370],
      ['Tritanium', 1099896],
      ['Pyerite', 205202],
      ['Mexallon', 65264],
      ['Isogen', 10146]
    ]
  }
];
const vexor = [
  {
    name: 'Vexor',
    type: 'Cruiser',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 4701],
      ['Sheen Compound', 5066],
      ['Motley Compound', 4733],
      ['Base Metals', 1412],
      ['Heavy Metals', 5066],
      ['Tritanium', 795491],
      ['Pyerite', 216233],
      ['Mexallon', 64707],
      ['Isogen', 9371]
    ]
  }
];
const thoraxPrototype = [
  {
    name: 'Thorax Prototype',
    type: 'Cruiser',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 4853],
      ['Sheen Compound', 5229],
      ['Motley Compound', 4884],
      ['Base Metals', 1457],
      ['Heavy Metals', 5229],
      ['Tritanium', 851855],
      ['Pyerite', 187427],
      ['Mexallon', 61892],
      ['Isogen', 9774]
    ]
  }
];
// Cruisers Tech 6
const blackbird = [
  {
    name: 'Blackbird',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13445],
      ['Gleaming Alloy', 13532],
      ['Opulent Compound', 15332],
      ['Noble Metals', 15332],
      ['Reactive Metals', 3813],
      ['Tritanium', 2488695],
      ['Pyerite', 705410],
      ['Mexallon', 221106],
      ['Isogen', 37805],
      ['Nocxium', 9003]
    ]
  }
];
const moa = [
  {
    name: 'Moa',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13556],
      ['Gleaming Alloy', 13653],
      ['Opulent Compound', 15468],
      ['Noble Metals', 15468],
      ['Reactive Metals', 3846],
      ['Tritanium', 2511083],
      ['Pyerite', 711756],
      ['Mexallon', 223095],
      ['Isogen', 38145],
      ['Nocxium', 9084]
    ]
  }
];
const caracalNavyIssue = [
  {
    name: 'Caracal Navy Issue',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13808],
      ['Gleaming Alloy', 13896],
      ['Opulent Compound', 15744],
      ['Noble Metals', 15744],
      ['Reactive Metals', 3915],
      ['Tritanium', 2555856],
      ['Pyerite', 724446],
      ['Mexallon', 227073],
      ['Isogen', 38825],
      ['Nocxium', 9246]
    ]
  }
];
const bellicose = [
  {
    name: 'Bellicose',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13818],
      ['Gleaming Alloy', 13907],
      ['Opulent Compound', 15756],
      ['Noble Metals', 15756],
      ['Reactive Metals', 3918],
      ['Tritanium', 2612804],
      ['Pyerite', 599771],
      ['Mexallon', 207581],
      ['Isogen', 46064],
      ['Nocxium', 11672]
    ]
  }
];
const stabberFleetIssue = [
  {
    name: 'Stabber Fleet Issue',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 14336],
      ['Gleaming Alloy', 14429],
      ['Opulent Compound', 16347],
      ['Noble Metals', 16347],
      ['Reactive Metals', 4065],
      ['Tritanium', 2710830],
      ['Pyerite', 622272],
      ['Mexallon', 215369],
      ['Isogen', 47729],
      ['Nocxium', 12110]
    ]
  }
];
const rupture = [
  {
    name: 'Rupture',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13200],
      ['Gleaming Alloy', 13286],
      ['Opulent Compound', 15051],
      ['Noble Metals', 15051],
      ['Reactive Metals', 3743],
      ['Tritanium', 2495925],
      ['Pyerite', 572940],
      ['Mexallon', 198294],
      ['Isogen', 44004],
      ['Nocxium', 11150]
    ]
  }
];
const arbitrator = [
  {
    name: 'Arbitrator',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13487],
      ['Sheen Compound', 14531],
      ['Opulent Compound', 15378],
      ['Heavy Metals', 14531],
      ['Reactive Metals', 3824],
      ['Tritanium', 3221120],
      ['Pyerite', 604664],
      ['Mexallon', 208992],
      ['Isogen', 37139],
      ['Nocxium', 10263]
    ]
  }
];
const maller = [
  {
    name: 'Maller',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13803],
      ['Sheen Compound', 14873],
      ['Opulent Compound', 15741],
      ['Heavy Metals', 14873],
      ['Reactive Metals', 3915],
      ['Tritanium', 3297023],
      ['Pyerite', 618912],
      ['Mexallon', 213918],
      ['Isogen', 38015],
      ['Nocxium', 10505]
    ]
  }
];
const omenNavyIssue = [
  {
    name: 'Omen Navy Issue',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13803],
      ['Sheen Compound', 14873],
      ['Opulent Compound', 15741],
      ['Heavy Metals', 14873],
      ['Reactive Metals', 3915],
      ['Tritanium', 3297023],
      ['Pyerite', 618912],
      ['Mexallon', 213918],
      ['Isogen', 38015],
      ['Nocxium', 10505]
    ]
  }
];
const celestis = [
  {
    name: 'Celestis',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 14067],
      ['Sheen Compound', 15156],
      ['Opulent Compound', 16041],
      ['Heavy Metals', 15156],
      ['Reactive Metals', 3989],
      ['Tritanium', 2575874],
      ['Pyerite', 704508],
      ['Mexallon', 229115],
      ['Isogen', 37923],
      ['Nocxium', 10812]
    ]
  }
];
const vexorNavyIssue = [
  {
    name: 'Vexor Navy Issue',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 13463],
      ['Sheen Compound', 14504],
      ['Opulent Compound', 15351],
      ['Heavy Metals', 14504],
      ['Reactive Metals', 3818],
      ['Tritanium', 2465163],
      ['Pyerite', 674229],
      ['Mexallon', 219267],
      ['Isogen', 36293],
      ['Nocxium', 10347]
    ]
  }
];
const thorax = [
  {
    name: 'Thorax',
    type: 'Cruiser',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 14450],
      ['Sheen Compound', 15569],
      ['Opulent Compound', 16478],
      ['Heavy Metals', 15569],
      ['Reactive Metals', 4098],
      ['Tritanium', 2645991],
      ['Pyerite', 723686],
      ['Mexallon', 235352],
      ['Isogen', 38955],
      ['Nocxium', 11106]
    ]
  }
];
// Cruisers Tech 7
const moaGuardian = [
  {
    name: 'Moa Guardian',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 19044],
      ['Precious Alloy', 16908],
      ['Opulent Compound', 21578],
      ['Noble Metals', 21578],
      ['Reactive Metals', 5366],
      ['Tritanium', 6385208],
      ['Pyerite', 1628546],
      ['Mexallon', 538364],
      ['Isogen', 83688],
      ['Nocxium', 22779],
      ['Zydrine', 8043]
    ]
  }
];
const osprey = [
  {
    name: 'Osprey',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 18527],
      ['Precious Alloy', 16448],
      ['Opulent Compound', 20990],
      ['Noble Metals', 20990],
      ['Reactive Metals', 5220],
      ['Tritanium', 6211370],
      ['Pyerite', 1584209],
      ['Mexallon', 523707],
      ['Isogen', 81410],
      ['Nocxium', 22160],
      ['Zydrine', 7824]
    ]
  }
];
const blackbirdCovertOps = [
  {
    name: 'Blackbird Covert Ops',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 18746],
      ['Precious Alloy', 16643],
      ['Opulent Compound', 21239],
      ['Noble Metals', 21239],
      ['Reactive Metals', 5282],
      ['Tritanium', 6284916],
      ['Pyerite', 1602966],
      ['Mexallon', 529908],
      ['Isogen', 82374],
      ['Nocxium', 22422],
      ['Zydrine', 7917]
    ]
  }
];
const ruptureGuardian = [
  {
    name: 'Rupture Guardian',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 17595],
      ['Precious Alloy', 15621],
      ['Opulent Compound', 19935],
      ['Noble Metals', 19935],
      ['Reactive Metals', 4958],
      ['Tritanium', 6026144],
      ['Pyerite', 1244723],
      ['Mexallon', 454350],
      ['Isogen', 91667],
      ['Nocxium', 26546],
      ['Zydrine', 7157]
    ]
  }
];
const scythe = [
  {
    name: 'Scythe',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 18543],
      ['Precious Alloy', 16463],
      ['Opulent Compound', 21009],
      ['Noble Metals', 21009],
      ['Reactive Metals', 5225],
      ['Tritanium', 6350784],
      ['Pyerite', 1311779],
      ['Mexallon', 478827],
      ['Isogen', 96606],
      ['Nocxium', 27977],
      ['Zydrine', 7524]
    ]
  }
];
const bellicoseCovertOps = [
  {
    name: 'Bellicose Covert Ops',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 18248],
      ['Precious Alloy', 16200],
      ['Opulent Compound', 20675],
      ['Noble Metals', 20675],
      ['Reactive Metals', 5141],
      ['Tritanium', 6249335],
      ['Pyerite', 1290824],
      ['Mexallon', 471177],
      ['Isogen', 95063],
      ['Nocxium', 27530],
      ['Zydrine', 7421]
    ]
  }
];
const mallerGuardian = [
  {
    name: 'Maller Guardian',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 19541],
      ['Precious Alloy', 16131],
      ['Opulent Compound', 20586],
      ['Heavy Metals', 19541],
      ['Reactive Metals', 5120],
      ['Tritanium', 7860329],
      ['Pyerite', 1327707],
      ['Mexallon', 483990],
      ['Isogen', 78197],
      ['Nocxium', 24696],
      ['Zydrine', 5543]
    ]
  }
];
const augoror = [
  {
    name: 'Augoror',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 20703],
      ['Precious Alloy', 17169],
      ['Opulent Compound', 21911],
      ['Heavy Metals', 20703],
      ['Reactive Metals', 5448],
      ['Tritanium', 8366321],
      ['Pyerite', 1413176],
      ['Mexallon', 515145],
      ['Isogen', 83229],
      ['Nocxium', 26286],
      ['Zydrine', 5900]
    ]
  }
];
const arbitratorCovertOps = [
  {
    name: 'Arbitrator Covert Ops',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 19170],
      ['Precious Alloy', 15899],
      ['Opulent Compound', 20289],
      ['Heavy Metals', 19170],
      ['Reactive Metals', 5045],
      ['Tritanium', 7746917],
      ['Pyerite', 1308551],
      ['Mexallon', 477006],
      ['Isogen', 77067],
      ['Nocxium', 24339],
      ['Zydrine', 5463]
    ]
  }
];
const thoraxGuardian = [
  {
    name: 'Thorax Guardian',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 20144],
      ['Precious Alloy', 16706],
      ['Opulent Compound', 21318],
      ['Heavy Metals', 20144],
      ['Reactive Metals', 5301],
      ['Tritanium', 6240759],
      ['Pyerite', 1535868],
      ['Mexallon', 526790],
      ['Isogen', 79275],
      ['Nocxium', 25830],
      ['Zydrine', 8094]
    ]
  }
];
const exequror = [
  {
    name: 'Exequror',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 20015],
      ['Precious Alloy', 16599],
      ['Opulent Compound', 21183],
      ['Heavy Metals', 20015],
      ['Reactive Metals', 5268],
      ['Tritanium', 6201177],
      ['Pyerite', 1526127],
      ['Mexallon', 523449],
      ['Isogen', 78771],
      ['Nocxium', 25667],
      ['Zydrine', 8043]
    ]
  }
];
const celestisCovertOps = [
  {
    name: 'Celestis Covert Ops',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 19802],
      ['Precious Alloy', 16424],
      ['Opulent Compound', 20958],
      ['Heavy Metals', 19802],
      ['Reactive Metals', 5211],
      ['Tritanium', 6135207],
      ['Pyerite', 1509893],
      ['Mexallon', 517881],
      ['Isogen', 77934],
      ['Nocxium', 25394],
      ['Zydrine', 7958]
    ]
  }
];
const gila = [
  {
    name: 'Gila',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 127337],
      ['Precious Alloy', 99780],
      ['Opulent Compound', 127337],
      ['Reactive Metals', 31662],
      ['Toxic Metals', 31401],
      ['Tritanium', 57888200],
      ['Pyerite', 17355749],
      ['Mexallon', 5693337],
      ['Isogen', 921447],
      ['Nocxium', 230264],
      ['Zydrine', 91305],
      ['Megacyte', 39183]
    ]
  }
];
const cynabal = [
  {
    name: 'Cynabal',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 127574],
      ['Precious Alloy', 99966],
      ['Opulent Compound', 127574],
      ['Reactive Metals', 31721],
      ['Toxic Metals', 31460],
      ['Tritanium', 59242962],
      ['Pyerite', 14384610],
      ['Mexallon', 5210307],
      ['Isogen', 1094468],
      ['Nocxium', 290985],
      ['Zydrine', 88086],
      ['Megacyte', 34983]
    ]
  }
];
const ashimmu = [
  {
    name: 'Ashimmu',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 125826],
      ['Precious Alloy', 98597],
      ['Opulent Compound', 125826],
      ['Reactive Metals', 31286],
      ['Toxic Metals', 31029],
      ['Tritanium', 73808367],
      ['Pyerite', 14655336],
      ['Mexallon', 5301234],
      ['Isogen', 891743],
      ['Nocxium', 258560],
      ['Zydrine', 65160],
      ['Megacyte', 44526]
    ]
  }
];
const stratios = [
  {
    name: 'Stratios',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 120158],
      ['Precious Alloy', 94155],
      ['Opulent Compound', 120158],
      ['Reactive Metals', 29877],
      ['Toxic Metals', 29631],
      ['Tritanium', 55799264],
      ['Pyerite', 13548456],
      ['Mexallon', 4907439],
      ['Isogen', 1030848],
      ['Nocxium', 274071],
      ['Zydrine', 82967],
      ['Megacyte', 32907]
    ]
  }
];
const orthrus = [
  {
    name: 'Orthrus',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 122846],
      ['Precious Alloy', 92261],
      ['Opulent Compound', 122846],
      ['Reactive Metals', 30545],
      ['Toxic Metals', 30294],
      ['Tritanium', 55846616],
      ['Pyerite', 16743651],
      ['Mexallon', 5492547],
      ['Isogen', 888950],
      ['Nocxium', 222143],
      ['Zydrine', 88085],
      ['Megacyte', 37802]
    ]
  }
];
const phantasm = [
  {
    name: 'Phantasm',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 120069],
      ['Precious Alloy', 94086],
      ['Opulent Compound', 120069],
      ['Reactive Metals', 29855],
      ['Toxic Metals', 29609],
      ['Tritanium', 70431671],
      ['Pyerite', 13984862],
      ['Mexallon', 5058705],
      ['Isogen', 850946],
      ['Nocxium', 246731],
      ['Zydrine', 62180],
      ['Megacyte', 42489]
    ]
  }
];
const vigilant = [
  {
    name: 'Vigilant',
    type: 'Cruiser',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 119403],
      ['Precious Alloy', 93563],
      ['Opulent Compound', 119403],
      ['Reactive Metals', 29690],
      ['Toxic Metals', 29445],
      ['Tritanium', 53697600],
      ['Pyerite', 15534594],
      ['Mexallon', 5287262],
      ['Isogen', 828404],
      ['Nocxium', 247812],
      ['Zydrine', 87201],
      ['Megacyte', 35273]
    ]
  }
];
// Cruisers Tech 8
const moaIIGuardian = [
  {
    name: 'Moa II Guardian',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 20519],
      ['Precious Alloy', 18218],
      ['Opulent Compound', 23247],
      ['Noble Metals', 23247],
      ['Reactive Metals', 5781],
      ['Tritanium', 7623956],
      ['Pyerite', 2638298],
      ['Mexallon', 722780],
      ['Isogen', 118929],
      ['Nocxium', 33404],
      ['Zydrine', 13736],
      ['Megacyte', 5595]
    ]
  }
];
const caracalSniper = [
  {
    name: 'Caracal Sniper',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 19511],
      ['Precious Alloy', 17322],
      ['Opulent Compound', 22106],
      ['Noble Metals', 22106],
      ['Reactive Metals', 5498],
      ['Tritanium', 7249368],
      ['Pyerite', 2508671],
      ['Mexallon', 687267],
      ['Isogen', 113087],
      ['Nocxium', 31763],
      ['Zydrine', 13062],
      ['Megacyte', 5319]
    ]
  }
];
const ruptureIIGuardian = [
  {
    name: 'Rupture II Guardian',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 20301],
      ['Precious Alloy', 18023],
      ['Opulent Compound', 23001],
      ['Noble Metals', 23001],
      ['Reactive Metals', 5720],
      ['Tritanium', 7705085],
      ['Pyerite', 2159379],
      ['Mexallon', 653210],
      ['Isogen', 139500],
      ['Nocxium', 41685],
      ['Zydrine', 13088],
      ['Megacyte', 4926]
    ]
  }
];
const stabberSniper = [
  {
    name: 'Stabber Sniper',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 19907],
      ['Precious Alloy', 17673],
      ['Opulent Compound', 22554],
      ['Noble Metals', 22554],
      ['Reactive Metals', 5609],
      ['Tritanium', 7555326],
      ['Pyerite', 2117409],
      ['Mexallon', 640514],
      ['Isogen', 136788],
      ['Nocxium', 40875],
      ['Zydrine', 12833],
      ['Megacyte', 4830]
    ]
  }
];
const mallerIIGuardian = [
  {
    name: 'Maller II Guardian',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 20145],
      ['Precious Alloy', 16707],
      ['Opulent Compound', 21321],
      ['Heavy Metals', 20145],
      ['Reactive Metals', 5303],
      ['Tritanium', 9022320],
      ['Pyerite', 2067753],
      ['Mexallon', 624653],
      ['Isogen', 106827],
      ['Nocxium', 34814],
      ['Zydrine', 9099],
      ['Megacyte', 5901]
    ]
  }
];
const omenSniper = [
  {
    name: 'Omen Sniper',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 21098],
      ['Precious Alloy', 17498],
      ['Opulent Compound', 22329],
      ['Heavy Metals', 21098],
      ['Reactive Metals', 5553],
      ['Tritanium', 9448796],
      ['Pyerite', 2165493],
      ['Mexallon', 654179],
      ['Isogen', 111878],
      ['Nocxium', 36459],
      ['Zydrine', 9530],
      ['Megacyte', 6180]
    ]
  }
];
const thoraxIIGuardian = [
  {
    name: 'Thorax II Guardian',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 20243],
      ['Precious Alloy', 16788],
      ['Opulent Compound', 21425],
      ['Heavy Metals', 20243],
      ['Reactive Metals', 5328],
      ['Tritanium', 6950256],
      ['Pyerite', 2320791],
      ['Mexallon', 659669],
      ['Isogen', 105080],
      ['Nocxium', 35330],
      ['Zydrine', 12893],
      ['Megacyte', 4950]
    ]
  }
];
const vexorSniper = [
  {
    name: 'Vexor Sniper',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 20877],
      ['Precious Alloy', 17315],
      ['Opulent Compound', 22095],
      ['Heavy Metals', 20877],
      ['Reactive Metals', 5495],
      ['Tritanium', 7168133],
      ['Pyerite', 2393543],
      ['Mexallon', 680348],
      ['Isogen', 108374],
      ['Nocxium', 36437],
      ['Zydrine', 13298],
      ['Megacyte', 5105]
    ]
  }
];
// Cruisers Tech 9
const blackbirdIICovertOps = [
  {
    name: 'Blackbird II Covert Ops',
    type: 'Cruiser',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 50321],
      ['Precious Alloy', 44676],
      ['Opulent Compound', 57014],
      ['Noble Metals', 57014],
      ['Reactive Metals', 14177],
      ['Tritanium', 12245633],
      ['Pyerite', 3502206],
      ['Mexallon', 1247435],
      ['Isogen', 201990],
      ['Nocxium', 62726],
      ['Zydrine', 18524],
      ['Megacyte', 8936]
    ]
  }
];
const bellicoseIICovertOps = [
  {
    name: 'Bellicose II Covert Ops',
    type: 'Cruiser',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 47207],
      ['Precious Alloy', 41910],
      ['Opulent Compound', 53486],
      ['Noble Metals', 53486],
      ['Reactive Metals', 13299],
      ['Tritanium', 12565188],
      ['Pyerite', 3663677],
      ['Mexallon', 1146261],
      ['Isogen', 179589],
      ['Nocxium', 58844],
      ['Zydrine', 19626],
      ['Megacyte', 11019]
    ]
  }
];
const arbitratorIICovertOps = [
  {
    name: 'Arbitrator II Covert Ops',
    type: 'Cruiser',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 52839],
      ['Precious Alloy', 43821],
      ['Opulent Compound', 55923],
      ['Heavy Metals', 52839],
      ['Reactive Metals', 13905],
      ['Tritanium', 13803116],
      ['Pyerite', 3050129],
      ['Mexallon', 1144803],
      ['Isogen', 219453],
      ['Nocxium', 50910],
      ['Zydrine', 20300],
      ['Megacyte', 12077]
    ]
  }
];
const celestisIICovertOps = [
  {
    name: 'Celestis II Covert Ops',
    type: 'Cruiser',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 50645],
      ['Precious Alloy', 42003],
      ['Opulent Compound', 53603],
      ['Heavy Metals', 50645],
      ['Reactive Metals', 13328],
      ['Tritanium', 14726156],
      ['Pyerite', 3302547],
      ['Mexallon', 1160211],
      ['Isogen', 213716],
      ['Nocxium', 52188],
      ['Zydrine', 20556],
      ['Megacyte', 8441]
    ]
  }
];
// Battlecruiser Tech 7
const ferox = [
  {
    name: 'Ferox',
    type: 'Battlecruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 28058],
      ['Precious Alloy', 24911],
      ['Glossy Compound', 28058],
      ['Noble Metals', 31790],
      ['Reactive Metals', 7905],
      ['Tritanium', 9407316],
      ['Pyerite', 2399333],
      ['Mexallon', 793172],
      ['Isogen', 123297],
      ['Nocxium', 33561],
      ['Zydrine', 11850]
    ]
  }
];
const cyclone = [
  {
    name: 'Cyclone',
    type: 'Battlecruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 28002],
      ['Precious Alloy', 24861],
      ['Glossy Compound', 28002],
      ['Noble Metals', 31727],
      ['Reactive Metals', 7889],
      ['Tritanium', 9590429],
      ['Pyerite', 1980938],
      ['Mexallon', 723084],
      ['Isogen', 145886],
      ['Nocxium', 42248],
      ['Zydrine', 11388]
    ]
  }
];
const hurricanePrototype = [
  {
    name: 'Hurricane Prototype',
    type: 'Battlecruiser',
    techLevel: 7,
    materials: [
      ['Gleaming Alloy', 31469],
      ['Precious Alloy', 27939],
      ['Glossy Compound', 31469],
      ['Noble Metals', 35655],
      ['Reactive Metals', 8865],
      ['Tritanium', 7847003],
      ['Pyerite', 1997868],
      ['Mexallon', 791223],
      ['Isogen', 105734],
      ['Nocxium', 31497],
      ['Zydrine', 14274]
    ]
  }
];
const prophecy = [
  {
    name: 'Prophecy',
    type: 'Battlecruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 30114],
      ['Precious Alloy', 24975],
      ['Glossy Compound', 28131],
      ['Heavy Metals', 30114],
      ['Reactive Metals', 7926],
      ['Tritanium', 12169986],
      ['Pyerite', 2055663],
      ['Mexallon', 749352],
      ['Isogen', 121068],
      ['Nocxium', 38235],
      ['Zydrine', 8580]
    ]
  }
];
const harbingerPrototype = [
  {
    name: 'Harbinger Prototype',
    type: 'Battlecruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 32526],
      ['Precious Alloy', 26975],
      ['Glossy Compound', 30383],
      ['Heavy Metals', 32526],
      ['Reactive Metals', 8561],
      ['Tritanium', 9767015],
      ['Pyerite', 1889577],
      ['Mexallon', 605636],
      ['Isogen', 127322],
      ['Nocxium', 36041],
      ['Zydrine', 11763]
    ]
  }
];
const myrmidon = [
  {
    name: 'Myrmidon',
    type: 'Battlecruiser',
    techLevel: 7,
    materials: [
      ['Sheen Compound', 28149],
      ['Precious Alloy', 23345],
      ['Glossy Compound', 26295],
      ['Heavy Metals', 28149],
      ['Reactive Metals', 7409],
      ['Tritanium', 8721230],
      ['Pyerite', 2146319],
      ['Mexallon', 736170],
      ['Isogen', 110783],
      ['Nocxium', 36098],
      ['Zydrine', 11310]
    ]
  }
];
// Battlecruiser Tech 8
const naga = [
  {
    name: 'naga',
    type: 'Battlecruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 29196],
      ['Precious Alloy', 25922],
      ['Glossy Compound', 29196],
      ['Noble Metals', 33080],
      ['Reactive Metals', 8226],
      ['Tritanium', 10848345],
      ['Pyerite', 3754109],
      ['Mexallon', 1028465],
      ['Isogen', 169229],
      ['Nocxium', 47529],
      ['Zydrine', 19545],
      ['Megacyte', 7961]
    ]
  }
];
const drake = [
  {
    name: 'Drake',
    type: 'Battlecruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 29670],
      ['Precious Alloy', 26342],
      ['Glossy Compound', 29670],
      ['Noble Metals', 33617],
      ['Reactive Metals', 8360],
      ['Tritanium', 11024622],
      ['Pyerite', 3815109],
      ['Mexallon', 1045176],
      ['Isogen', 171978],
      ['Nocxium', 48302],
      ['Zydrine', 19863],
      ['Megacyte', 8090]
    ]
  }
];
const tornado = [
  {
    name: 'Tornado',
    type: 'Battlecruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 30461],
      ['Precious Alloy', 27044],
      ['Glossy Compound', 30461],
      ['Noble Metals', 34512],
      ['Reactive Metals', 8582],
      ['Tritanium', 11561370],
      ['Pyerite', 3240117],
      ['Mexallon', 980132],
      ['Isogen', 209316],
      ['Nocxium', 62547],
      ['Zydrine', 19637],
      ['Megacyte', 7392]
    ]
  }
];
const hurricane = [
  {
    name: 'Hurricane',
    type: 'Battlecruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 30282],
      ['Precious Alloy', 26886],
      ['Glossy Compound', 30282],
      ['Noble Metals', 34311],
      ['Reactive Metals', 8532],
      ['Tritanium', 11493980],
      ['Pyerite', 3221231],
      ['Mexallon', 974418],
      ['Isogen', 208097],
      ['Nocxium', 62183],
      ['Zydrine', 19521],
      ['Megacyte', 7349]
    ]
  }
];
const oracle = [
  {
    name: 'Oracle',
    type: 'Battlecruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 31043],
      ['Precious Alloy', 25746],
      ['Glossy Compound', 28998],
      ['Heavy Metals', 31043],
      ['Reactive Metals', 8171],
      ['Tritanium', 13903092],
      ['Pyerite', 3186336],
      ['Mexallon', 962568],
      ['Isogen', 164618],
      ['Nocxium', 53645],
      ['Zydrine', 14021],
      ['Megacyte', 9092]
    ]
  }
];
const harbinger = [
  {
    name: 'Harbinger',
    type: 'Battlecruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 32969],
      ['Precious Alloy', 27342],
      ['Glossy Compound', 30797],
      ['Heavy Metals', 32969],
      ['Reactive Metals', 8676],
      ['Tritanium', 14765520],
      ['Pyerite', 3383990],
      ['Mexallon', 1022277],
      ['Isogen', 174828],
      ['Nocxium', 56973],
      ['Zydrine', 14891],
      ['Megacyte', 9656]
    ]
  }
];
const talos = [
  {
    name: 'Talos',
    type: 'Battlecruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 30627],
      ['Precious Alloy', 25401],
      ['Glossy Compound', 28610],
      ['Heavy Metals', 30627],
      ['Reactive Metals', 8061],
      ['Tritanium', 10516166],
      ['Pyerite', 3511499],
      ['Mexallon', 998118],
      ['Isogen', 158991],
      ['Nocxium', 53456],
      ['Zydrine', 19508],
      ['Megacyte', 7488]
    ]
  }
];
const brutix = [
  {
    name: 'Brutix',
    type: 'Battlecruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 31959],
      ['Precious Alloy', 26505],
      ['Glossy Compound', 29855],
      ['Heavy Metals', 31959],
      ['Reactive Metals', 8411],
      ['Tritanium', 10973706],
      ['Pyerite', 3664278],
      ['Mexallon', 1041545],
      ['Isogen', 165909],
      ['Nocxium', 55781],
      ['Zydrine', 20357],
      ['Megacyte', 7814]
    ]
  }
];
// Battlecruisers Tech 9
const feroxGuardian = [
  {
    name: 'Ferox Guardian',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 72260],
      ['Precious Alloy', 64154],
      ['Glossy Compound', 72260],
      ['Noble Metals', 81872],
      ['Reactive Metals', 20357],
      ['Tritanium', 17584874],
      ['Pyerite', 5029209],
      ['Mexallon', 1791332],
      ['Isogen', 290060],
      ['Nocxium', 90074],
      ['Zydrine', 26600],
      ['Megacyte', 12381]
    ]
  }
];
const nagaII = [
  {
    name: 'Naga II',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 70463],
      ['Precious Alloy', 62559],
      ['Glossy Compound', 70463],
      ['Noble Metals', 79835],
      ['Reactive Metals', 19851],
      ['Tritanium', 17147529],
      ['Pyerite', 4904130],
      ['Mexallon', 1746780],
      ['Isogen', 282845],
      ['Nocxium', 87833],
      ['Zydrine', 25938],
      ['Megacyte', 12513]
    ]
  }
];
const drakeLogistics = [
  {
    name: 'Drake Logistics',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 74019],
      ['Precious Alloy', 65717],
      ['Glossy Compound', 74019],
      ['Noble Metals', 83865],
      ['Reactive Metals', 20853],
      ['Tritanium', 18013106],
      ['Pyerite', 5151683],
      ['Mexallon', 1834955],
      ['Isogen', 297123],
      ['Nocxium', 92267],
      ['Zydrine', 27248],
      ['Megacyte', 13145]
    ]
  }
];
const cycloneGuardian = [
  {
    name: 'Cyclone Guardian',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 71418],
      ['Precious Alloy', 63407],
      ['Glossy Compound', 71418],
      ['Noble Metals', 80918],
      ['Reactive Metals', 20120],
      ['Tritanium', 19010097],
      ['Pyerite', 5542841],
      ['Mexallon', 1734198],
      ['Isogen', 271703],
      ['Nocxium', 89025],
      ['Zydrine', 29693],
      ['Megacyte', 16671]
    ]
  }
];
const tornadoII = [
  {
    name: 'Tornado II',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 72602],
      ['Precious Alloy', 64458],
      ['Glossy Compound', 72602],
      ['Noble Metals', 82259],
      ['Reactive Metals', 20454],
      ['Tritanium', 19325181],
      ['Pyerite', 5634711],
      ['Mexallon', 1762941],
      ['Isogen', 276207],
      ['Nocxium', 90500],
      ['Zydrine', 30185],
      ['Megacyte', 16947]
    ]
  }
];
const hurricaneLogistics = [
  {
    name: 'Hurricane Logistics',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 68226],
      ['Precious Alloy', 60573],
      ['Glossy Compound', 68226],
      ['Noble Metals', 77301],
      ['Reactive Metals', 19221],
      ['Tritanium', 18160325],
      ['Pyerite', 5295069],
      ['Mexallon', 1656678],
      ['Isogen', 259557],
      ['Nocxium', 85046],
      ['Zydrine', 28365],
      ['Megacyte', 15296]
    ]
  }
];
const prophecyGuardian = [
  {
    name: 'Prophecy Guardian',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 80196],
      ['Precious Alloy', 66510],
      ['Glossy Compound', 74913],
      ['Heavy Metals', 80196],
      ['Reactive Metals', 21105],
      ['Tritanium', 20949698],
      ['Pyerite', 4629336],
      ['Mexallon', 1737527],
      ['Isogen', 333074],
      ['Nocxium', 77268],
      ['Zydrine', 30810],
      ['Megacyte', 18330]
    ]
  }
];
const oracleII = [
  {
    name: 'Oracle II',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 77226],
      ['Precious Alloy', 64047],
      ['Glossy Compound', 72138],
      ['Heavy Metals', 77226],
      ['Reactive Metals', 20324],
      ['Tritanium', 20173784],
      ['Pyerite', 4457879],
      ['Mexallon', 1673174],
      ['Isogen', 320738],
      ['Nocxium', 74408],
      ['Zydrine', 29669],
      ['Megacyte', 17651]
    ]
  }
];
const harbingerLogistics = [
  {
    name: 'Harbinger Logistics',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 77733],
      ['Precious Alloy', 64467],
      ['Glossy Compound', 72614],
      ['Heavy Metals', 77733],
      ['Reactive Metals', 20457],
      ['Tritanium', 20306505],
      ['Pyerite', 4487207],
      ['Mexallon', 1684182],
      ['Isogen', 322848],
      ['Nocxium', 74897],
      ['Zydrine', 29865],
      ['Megacyte', 17768]
    ]
  }
];
const myrmidonGuardian = [
  {
    name: 'Myrmidon Guardian',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 75833],
      ['Precious Alloy', 62891],
      ['Glossy Compound', 70838],
      ['Heavy Metals', 75833],
      ['Reactive Metals', 19956],
      ['Tritanium', 22049798],
      ['Pyerite', 4944975],
      ['Mexallon', 1737209],
      ['Isogen', 320001],
      ['Nocxium', 78143],
      ['Zydrine', 30779],
      ['Megacyte', 12638]
    ]
  }
];
const talosII = [
  {
    name: 'Talos II',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 75405],
      ['Precious Alloy', 62537],
      ['Glossy Compound', 70439],
      ['Heavy Metals', 75405],
      ['Reactive Metals', 19844],
      ['Tritanium', 21925860],
      ['Pyerite', 4917180],
      ['Mexallon', 1727445],
      ['Isogen', 318203],
      ['Nocxium', 77703],
      ['Zydrine', 30605],
      ['Megacyte', 12567]
    ]
  }
];
const brutixLogistics = [
  {
    name: 'Brutix Logistics',
    type: 'Battlecruiser',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 72693],
      ['Precious Alloy', 60288],
      ['Glossy Compound', 67905],
      ['Heavy Metals', 72693],
      ['Reactive Metals', 19131],
      ['Tritanium', 21137160],
      ['Pyerite', 4740303],
      ['Mexallon', 1665306],
      ['Isogen', 306756],
      ['Nocxium', 74909],
      ['Zydrine', 29504],
      ['Megacyte', 12116]
    ]
  }
];
// Battlecruisers Tech 10
const feroxIIGuardian = [
  {
    name: 'Ferox II Guardian',
    type: 'Battlecruiser',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 110540],
      ['Precious Alloy', 98141],
      ['Glossy Compound', 110540],
      ['Noble Metals', 125244],
      ['Reactive Metals', 31142],
      ['Tritanium', 46069691],
      ['Pyerite', 11276844],
      ['Mexallon', 4352370],
      ['Isogen', 837783],
      ['Nocxium', 242349],
      ['Zydrine', 72267],
      ['Megacyte', 36227]
    ]
  }
];
const cycloneIIGuardian = [
  {
    name: 'Cyclone II Guardian',
    type: 'Battlecruiser',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 98354],
      ['Precious Alloy', 87320],
      ['Glossy Compound', 98354],
      ['Noble Metals', 111435],
      ['Reactive Metals', 27708],
      ['Tritanium', 41353575],
      ['Pyerite', 13289855],
      ['Mexallon', 3664916],
      ['Isogen', 735717],
      ['Nocxium', 203036],
      ['Zydrine', 66116],
      ['Megacyte', 39023]
    ]
  }
];
const prophecyIIGuardian = [
  {
    name: 'Prophecy II Guardian',
    type: 'Battlecruiser',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 113294],
      ['Precious Alloy', 94482],
      ['Glossy Compound', 106419],
      ['Heavy Metals', 113924],
      ['Reactive Metals', 29981],
      ['Tritanium', 54568433],
      ['Pyerite', 13520751],
      ['Mexallon', 4457934],
      ['Isogen', 758577],
      ['Nocxium', 207918],
      ['Zydrine', 77577],
      ['Megacyte', 34988]
    ]
  }
];
const myrmidonIIGuardian = [
  {
    name: 'Myrmidon II Guardian',
    type: 'Battlecruiser',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 112557],
      ['Precious Alloy', 93348],
      ['Glossy Compound', 105143],
      ['Heavy Metals', 112557],
      ['Reactive Metals', 29621],
      ['Tritanium', 52312292],
      ['Pyerite', 10935290],
      ['Mexallon', 4617839],
      ['Isogen', 630240],
      ['Nocxium', 163605],
      ['Zydrine', 71615],
      ['Megacyte', 35961]
    ]
  }
];
// Battleships Tech 8
const rattlesnake = [
  {
    name: 'Rattlesnake',
    type: 'Battleship',
    techLevel: 8,
    materials: [
      ['Condensed Alloy', 426755],
      ['Precious Alloy', 334403],
      ['Crystal Compound', 399894],
      ['Reactive Metals', 106110],
      ['Toxic Metals', 105236],
      ['Tritanium', 156978818],
      ['Pyerite', 38424953],
      ['Mexallon', 14830953],
      ['Isogen', 2854677],
      ['Nocxium', 825783],
      ['Zydrine', 246242],
      ['Megacyte', 123440]
    ]
  }
];
const machariel = [
  {
    name: 'Machariel',
    type: 'Battleship',
    techLevel: 8,
    materials: [
      ['Condensed Alloy', 468134],
      ['Precious Alloy', 366827],
      ['Crystal Compound', 438668],
      ['Reactive Metals', 116399],
      ['Toxic Metals', 115440],
      ['Tritanium', 205571426],
      ['Pyerite', 42972369],
      ['Mexallon', 18146702],
      ['Isogen', 2476653],
      ['Nocxium', 642914],
      ['Zydrine', 281418],
      ['Megacyte', 141315]
    ]
  }
];
const bhaalgorn = [
  {
    name: 'Bhaalgorn',
    type: 'Battleship',
    techLevel: 8,
    materials: [
      ['Condensed Alloy', 451422],
      ['Precious Alloy', 353730],
      ['Crystal Compound', 423008],
      ['Reactive Metals', 112242],
      ['Toxic Metals', 111318],
      ['Tritanium', 204301052],
      ['Pyerite', 50620907],
      ['Mexallon', 16690245],
      ['Isogen', 2840067],
      ['Nocxium', 778431],
      ['Zydrine', 290445],
      ['Megacyte', 130991]
    ]
  }
];
const nestor = [
  {
    name: 'Nestor',
    type: 'Battleship',
    techLevel: 8,
    materials: [
      ['Condensed Alloy', 433853],
      ['Precious Alloy', 339963],
      ['Crystal Compound', 406545],
      ['Reactive Metals', 107874],
      ['Toxic Metals', 106986],
      ['Tritanium', 161003252],
      ['Pyerite', 51741833],
      ['Mexallon', 14268734],
      ['Isogen', 2864391],
      ['Nocxium', 790482],
      ['Zydrine', 257406],
      ['Megacyte', 151926]
    ]
  }
];
const barghest = [
  {
    name: 'Barghest',
    type: 'Battleship',
    techLevel: 8,
    materials: [
      ['Condensed Alloy', 428154],
      ['Precious Alloy', 335499],
      ['Crystal Compound', 401205],
      ['Reactive Metals', 106458],
      ['Toxic Metals', 105581],
      ['Tritanium', 157493285],
      ['Pyerite', 38550884],
      ['Mexallon', 14878958],
      ['Isogen', 2864033],
      ['Nocxium', 828489],
      ['Zydrine', 247049],
      ['Megacyte', 123845]
    ]
  }
];
const nightmare = [
  {
    name: 'Nightmare',
    type: 'Battleship',
    techLevel: 8,
    materials: [
      ['Condensed Alloy', 436682],
      ['Precious Alloy', 342182],
      ['Crystal Compound', 409197],
      ['Reactive Metals', 108578],
      ['Toxic Metals', 107684],
      ['Tritanium', 197630481],
      ['Pyerite', 49968099],
      ['Mexallon', 16145297],
      ['Isogen', 2747337],
      ['Nocxium', 753015],
      ['Zydrine', 280961],
      ['Megacyte', 126714]
    ]
  }
];
const vindictor = [
  {
    name: 'Vindicator',
    type: 'Battleship',
    techLevel: 8,
    materials: [
      ['Condensed Alloy', 422228],
      ['Precious Alloy', 330855],
      ['Crystal Compound', 395652],
      ['Reactive Metals', 104984],
      ['Toxic Metals', 104120],
      ['Tritanium', 156689507],
      ['Pyerite', 50355518],
      ['Mexallon', 13886433],
      ['Isogen', 2787645],
      ['Nocxium', 769304],
      ['Zydrine', 250509],
      ['Megacyte', 147855]
    ]
  }
];
//Battleships Tech 9
const scorpion = [
  {
    name: 'Scorpion',
    type: 'Battleship',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 112209],
      ['Precious Alloy', 99621],
      ['Crystal Compound', 119132],
      ['Noble Metals', 127134],
      ['Reactive Metals', 31611],
      ['Tritanium', 27306665],
      ['Pyerite', 7809606],
      ['Mexallon', 2781668],
      ['Isogen', 450417],
      ['Nocxium', 139871],
      ['Zydrine', 41306],
      ['Megacyte', 19925]
    ]
  }
];
const rokh = [
  {
    name: 'Rokh',
    type: 'Battleship',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 114230],
      ['Precious Alloy', 101417],
      ['Crystal Compound', 121278],
      ['Noble Metals', 129425],
      ['Reactive Metals', 32181],
      ['Tritanium', 27798677],
      ['Pyerite', 7950320],
      ['Mexallon', 2831787],
      ['Isogen', 458534],
      ['Nocxium', 142391],
      ['Zydrine', 42050],
      ['Megacyte', 20285]
    ]
  }
];
const maelstrom = [
  {
    name: 'Maelstrom',
    type: 'Battleship',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 101370],
      ['Precious Alloy', 89999],
      ['Crystal Compound', 107625],
      ['Noble Metals', 114854],
      ['Reactive Metals', 28559],
      ['Tritanium', 26982689],
      ['Pyerite', 7867437],
      ['Mexallon', 2461499],
      ['Isogen', 385652],
      ['Nocxium', 126360],
      ['Zydrine', 42146],
      ['Megacyte', 23663]
    ]
  }
];
const typhoon = [
  {
    name: 'Typhoon',
    type: 'Battleship',
    techLevel: 9,
    materials: [
      ['Gleaming Alloy', 103845],
      ['Precious Alloy', 92196],
      ['Crystal Compound', 110253],
      ['Noble Metals', 117659],
      ['Reactive Metals', 29255],
      ['Tritanium', 27641502],
      ['Pyerite', 8059530],
      ['Mexallon', 2521599],
      ['Isogen', 395067],
      ['Nocxium', 129446],
      ['Zydrine', 43175],
      ['Megacyte', 24240]
    ]
  }
];
const armageddon = [
  {
    name: 'Armageddon',
    type: 'Battleship',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 111695],
      ['Precious Alloy', 92634],
      ['Crystal Compound', 110775],
      ['Heavy Metals', 111695],
      ['Reactive Metals', 29394],
      ['Tritanium', 29178479],
      ['Pyerite', 6447681],
      ['Mexallon', 2420006],
      ['Isogen', 463901],
      ['Nocxium', 107619],
      ['Zydrine', 42912],
      ['Megacyte', 25529]
    ]
  }
];
const apocalypse = [
  {
    name: 'Apocalypse',
    type: 'Battleship',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 110054],
      ['Precious Alloy', 91272],
      ['Crystal Compound', 109148],
      ['Heavy Metals', 110054],
      ['Reactive Metals', 28962],
      ['Tritanium', 28746683],
      ['Pyerite', 6352989],
      ['Mexallon', 2384442],
      ['Isogen', 457085],
      ['Nocxium', 106037],
      ['Zydrine', 42281],
      ['Megacyte', 25154]
    ]
  }
];
const dominix = [
  {
    name: 'Dominix',
    type: 'Battleship',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 110513],
      ['Precious Alloy', 91652],
      ['Crystal Compound', 109602],
      ['Heavy Metals', 110513],
      ['Reactive Metals', 29082],
      ['Tritanium', 32133891],
      ['Pyerite', 7206474],
      ['Mexallon', 2531691],
      ['Isogen', 466349],
      ['Nocxium', 113880],
      ['Zydrine', 44853],
      ['Megacyte', 18417]
    ]
  }
];
const megathron = [
  {
    name: 'Megathron',
    type: 'Battleship',
    techLevel: 9,
    materials: [
      ['Sheen Compound', 109583],
      ['Precious Alloy', 90881],
      ['Crystal Compound', 108680],
      ['Heavy Metals', 109583],
      ['Reactive Metals', 28838],
      ['Tritanium', 31863479],
      ['Pyerite', 7145831],
      ['Mexallon', 2510387],
      ['Isogen', 462425],
      ['Nocxium', 112922],
      ['Zydrine', 44477],
      ['Megacyte', 18263]
    ]
  }
];
// Battleships Tech 10
const ravenStriker = [
  {
    name: 'Raven Striker',
    type: 'Battleship',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 162983],
      ['Precious Alloy', 144699],
      ['Crystal Compound', 173039],
      ['Noble Metals', 184662],
      ['Reactive Metals', 45915],
      ['Tritanium', 67926240],
      ['Pyerite', 16626846],
      ['Mexallon', 6417237],
      ['Isogen', 1235247],
      ['Nocxium', 357324],
      ['Zydrine', 106551],
      ['Megacyte', 53414]
    ]
  }
];
const raven = [
  {
    name: 'Raven',
    type: 'Battleship',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 155975],
      ['Precious Alloy', 138477],
      ['Crystal Compound', 165599],
      ['Noble Metals', 176721],
      ['Reactive Metals', 43941],
      ['Tritanium', 65005395],
      ['Pyerite', 15911888],
      ['Mexallon', 6141294],
      ['Isogen', 1182131],
      ['Nocxium', 341960],
      ['Zydrine', 101970],
      ['Megacyte', 51117]
    ]
  }
];
const maelstromStriker = [
  {
    name: 'Maelstrom Striker',
    type: 'Battleship',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 148841],
      ['Precious Alloy', 132144],
      ['Crystal Compound', 158024],
      ['Noble Metals', 168638],
      ['Reactive Metals', 41931],
      ['Tritanium', 62581743],
      ['Pyerite', 20111981],
      ['Mexallon', 5546238],
      ['Isogen', 1113386],
      ['Nocxium', 307260],
      ['Zydrine', 100055],
      ['Megacyte', 59054]
    ]
  }
];
const tempest = [
  {
    name: 'Tempest',
    type: 'Battleship',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 146912],
      ['Precious Alloy', 130431],
      ['Crystal Compound', 155976],
      ['Noble Metals', 166454],
      ['Reactive Metals', 41388],
      ['Tritanium', 61770890],
      ['Pyerite', 19851395],
      ['Mexallon', 5474376],
      ['Isogen', 1098960],
      ['Nocxium', 303279],
      ['Zydrine', 98757],
      ['Megacyte', 58289]
    ]
  }
];
const apocalypseStriker = [
  {
    name: 'Apocalypse Striker',
    type: 'Battleship',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 167486],
      ['Precious Alloy', 138903],
      ['Crystal Compound', 166486],
      ['Heavy Metals', 167486],
      ['Reactive Metals', 44076],
      ['Tritanium', 80224476],
      ['Pyerite', 19877705],
      ['Mexallon', 6553889],
      ['Isogen', 1115232],
      ['Nocxium', 305673],
      ['Zydrine', 114051],
      ['Megacyte', 51438]
    ]
  }
];
const abaddon = [
  {
    name: 'Abaddon',
    type: 'Battleship',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 158051],
      ['Precious Alloy', 131078],
      ['Crystal Compound', 156749],
      ['Heavy Metals', 158051],
      ['Reactive Metals', 41592],
      ['Tritanium', 75705066],
      ['Pyerite', 18757902],
      ['Mexallon', 6184677],
      ['Isogen', 1052406],
      ['Nocxium', 288453],
      ['Zydrine', 107627],
      ['Megacyte', 48540]
    ]
  }
];
const megathronStriker = [
  {
    name: 'Megathron Striker',
    type: 'Battleship',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 167385],
      ['Precious Alloy', 138821],
      ['Crystal Compound', 166008],
      ['Heavy Metals', 167385],
      ['Reactive Metals', 44049],
      ['Tritanium', 77795190],
      ['Pyerite', 16262201],
      ['Mexallon', 6867327],
      ['Isogen', 937250],
      ['Nocxium', 243300],
      ['Zydrine', 106499],
      ['Megacyte', 53478]
    ]
  }
];
const hyperion = [
  {
    name: 'Hyperion',
    type: 'Battleship',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 179450],
      ['Precious Alloy', 148826],
      ['Crystal Compound', 177972],
      ['Heavy Metals', 179450],
      ['Reactive Metals', 47225],
      ['Tritanium', 83402231],
      ['Pyerite', 17434289],
      ['Mexallon', 7362285],
      ['Isogen', 1004801],
      ['Nocxium', 260837],
      ['Zydrine', 114174],
      ['Megacyte', 57333]
    ]
  }
];
// Industrial Tech 4
const imicusHighMobility = [
  {
    name: 'Imicus High Mobility',
    type: 'Industrial',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 388],
      ['Condensed Alloy', 441],
      ['Motley Compound', 389],
      ['Base Metals', 118],
      ['Toxic Metals', 111],
      ['Tritanium', 21031],
      ['Pyerite', 5066],
      ['Mexallon', 1919]
    ]
  }
];
const venture = [
  {
    name: 'Venture',
    type: 'Industrial',
    techLevel: 4,
    materials: [
      ['Lustering Alloy', 483],
      ['Condensed Alloy', 552],
      ['Motley Compound', 487],
      ['Base Metals', 146],
      ['Toxic Metals', 137],
      ['Tritanium', 26287],
      ['Pyerite', 6332],
      ['Mexallon', 2397]
    ]
  }
];
// Industrial Tech 5
const ventureII = [
  {
    name: 'Venture II',
    type: 'Industrial',
    techLevel: 5,
    materials: [
      ['Lustering Alloy', 754],
      ['Condensed Alloy', 858],
      ['Motley Compound', 758],
      ['Base Metals', 228],
      ['Toxic Metals', 214],
      ['Tritanium', 127280],
      ['Pyerite', 34598],
      ['Mexallon', 10355],
      ['Isogen', 1500]
    ]
  }
];
// Industrial Tech 6
const tayra = [
  {
    name: 'Tayra',
    type: 'Industrial',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 8588],
      ['Gleaming Alloy', 8644],
      ['Opulent Compound', 9793],
      ['Noble Metals', 9793],
      ['Reactive Metals', 2436],
      ['Tritanium', 1589483],
      ['Pyerite', 450533],
      ['Mexallon', 141216],
      ['Isogen', 24146],
      ['Nocxium', 5752]
    ]
  }
];
const mammoth = [
  {
    name: 'Mammoth',
    type: 'Industrial',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 9153],
      ['Gleaming Alloy', 9212],
      ['Opulent Compound', 10438],
      ['Noble Metals', 10438],
      ['Reactive Metals', 2596],
      ['Tritanium', 1730558],
      ['Pyerite', 397252],
      ['Mexallon', 137489],
      ['Isogen', 30511],
      ['Nocxium', 7731]
    ]
  }
];
const bestower = [
  {
    name: 'Bestower',
    type: 'Industrial',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 8760],
      ['Sheen Compound', 9437],
      ['Opulent Compound', 9989],
      ['Heavy Metals', 9437],
      ['Reactive Metals', 2485],
      ['Tritanium', 2092069],
      ['Pyerite', 392720],
      ['Mexallon', 135739],
      ['Isogen', 24122],
      ['Nocxium', 6666]
    ]
  }
];
const kryos = [
  {
    name: 'Kryos',
    type: 'Industrial',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 9453],
      ['Sheen Compound', 10185],
      ['Opulent Compound', 10778],
      ['Heavy Metals', 10185],
      ['Reactive Metals', 2681],
      ['Tritanium', 1730781],
      ['Pyerite', 473373],
      ['Mexallon', 153947],
      ['Isogen', 25482],
      ['Nocxium', 7265]
    ]
  }
];
const nereusHighNobility = [
  {
    name: 'Nereus High Nobility',
    type: 'Industrial',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 6107],
      ['Condensed Alloy', 6964],
      ['Opulent Compound', 6964],
      ['Reactive Metals', 1733],
      ['Toxic Metals', 1719],
      ['Tritanium', 1118181],
      ['Pyerite', 305827],
      ['Mexallon', 99460],
      ['Isogen', 16463],
      ['Nocxium', 4694]
    ]
  }
];
const ventureIII = [
  {
    name: 'Venture III',
    type: 'Industrial',
    techLevel: 6,
    materials: [
      ['Condensed Alloy', 2345],
      ['Precious Alloy', 1838],
      ['Fiber Composite', 2345],
      ['Reactive Metals', 585],
      ['Toxic Metals', 580],
      ['Tritanium', 376419],
      ['Pyerite', 102952],
      ['Mexallon', 33482],
      ['Isogen', 5544],
      ['Nocxium', 1581]
    ]
  }
];
// Industrial Tech 7
const retreiver = [
  {
    name: 'Retreiver',
    type: 'Industrial',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 13410],
      ['Precious Alloy', 10508],
      ['Opulent Compound', 13410],
      ['Reactive Metals', 3336],
      ['Toxic Metals', 3308],
      ['Tritanium', 3925214],
      ['Pyerite', 966006],
      ['Mexallon', 331332],
      ['Isogen', 49862],
      ['Nocxium', 16247],
      ['Zydrine', 5091]
    ]
  }
];
const nereusCombat = [
  {
    name: 'Nereus Combat',
    type: 'Industrial',
    techLevel: 7,
    materials: [
      ['Condensed Alloy', 9196],
      ['Precious Alloy', 7206],
      ['Opulent Compound', 9196],
      ['Reactive Metals', 2288],
      ['Toxic Metals', 2269],
      ['Tritanium', 2691575],
      ['Pyerite', 662405],
      ['Mexallon', 227199],
      ['Isogen', 34191],
      ['Nocxium', 11141],
      ['Zydrine', 3491]
    ]
  }
];
// Industrial Tech 8
const badger = [
  {
    name: 'Badger',
    type: 'Industrial',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 15182],
      ['Precious Alloy', 13480],
      ['Opulent Compound', 17202],
      ['Noble Metals', 17202],
      ['Reactive Metals', 4279],
      ['Tritanium', 5640847],
      ['Pyerite', 1952036],
      ['Mexallon', 534774],
      ['Isogen', 87995],
      ['Nocxium', 24714],
      ['Zydrine', 10164],
      ['Megacyte', 4140]
    ]
  }
];
const wreathe = [
  {
    name: 'Wreathe',
    type: 'Industrial',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 14896],
      ['Precious Alloy', 13224],
      ['Opulent Compound', 16878],
      ['Noble Metals', 16878],
      ['Reactive Metals', 4197],
      ['Tritanium', 5653391],
      ['Pyerite', 1584385],
      ['Mexallon', 479274],
      ['Isogen', 102355],
      ['Nocxium', 30586],
      ['Zydrine', 9604],
      ['Megacyte', 3615]
    ]
  }
];
const sigil = [
  {
    name: 'Sigil',
    type: 'Industrial',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 15300],
      ['Precious Alloy', 12689],
      ['Opulent Compound', 16194],
      ['Heavy Metals', 15300],
      ['Reactive Metals', 4028],
      ['Tritanium', 6852037],
      ['Pyerite', 1570363],
      ['Mexallon', 474395],
      ['Isogen', 81131],
      ['Nocxium', 26439],
      ['Zydrine', 6911],
      ['Megacyte', 4482]
    ]
  }
];
const nereus = [
  {
    name: 'Nereus',
    type: 'Industrial',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 15366],
      ['Precious Alloy', 12719],
      ['Opulent Compound', 16231],
      ['Heavy Metals', 15336],
      ['Reactive Metals', 4037],
      ['Tritanium', 5267347],
      ['Pyerite', 1758177],
      ['Mexallon', 499749],
      ['Isogen', 79607],
      ['Nocxium', 26765],
      ['Zydrine', 9769],
      ['Megacyte', 3750]
    ]
  }
];
const nereusHauling = [
  {
    name: 'Nereus Hauling',
    type: 'Industrial',
    techLevel: 8,
    materials: [
      ['Condensed Alloy', 11687],
      ['Precious Alloy', 9158],
      ['Opulent Compound', 11687],
      ['Reactive Metals', 2906],
      ['Toxic Metals', 2883],
      ['Tritanium', 3791049],
      ['Pyerite', 1265887],
      ['Mexallon', 359821],
      ['Isogen', 57317],
      ['Nocxium', 19271],
      ['Zydrine', 7035],
      ['Megacyte', 2700]
    ]
  }
];
// Industrial Tech 9
const humpbackHighMobility = [
  {
    name: 'Humpback High Mobility',
    type: 'Industrial',
    techLevel: 9,
    materials: [
      ['Condensed Alloy', 77174],
      ['Precious Alloy', 60473],
      ['Crystal Compound', 72317],
      ['Reactive Metals', 19190],
      ['Toxic Metals', 19031],
      ['Tritanium', 20190797],
      ['Pyerite', 4218662],
      ['Mexallon', 1782454],
      ['Isogen', 243132],
      ['Nocxium', 63169],
      ['Zydrine', 27627],
      ['Megacyte', 13927]
    ]
  }
];
const procurer = [
  {
    name: 'Procurer',
    type: 'Industrial',
    techLevel: 9,
    materials: [
      ['Condensed Alloy', 33385],
      ['Precious Alloy', 26161],
      ['Opulent Compound', 33385],
      ['Reactive Metals', 8302],
      ['Toxic Metals', 8235],
      ['Tritanium', 9171455],
      ['Pyerite', 2056828],
      ['Mexallon', 722581],
      ['Isogen', 133103],
      ['Nocxium', 32504],
      ['Zydrine', 12803],
      ['Megacyte', 5258]
    ]
  }
];
// Industrial Tech 10
const badgerII = [
  {
    name: 'Badger II',
    type: 'Industrial',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 38945],
      ['Precious Alloy', 34575],
      ['Opulent Compound', 44124],
      ['Noble Metals', 44124],
      ['Reactive Metals', 10972],
      ['Tritanium', 16230605],
      ['Pyerite', 3972895],
      ['Mexallon', 1533365],
      ['Isogen', 295157],
      ['Nocxium', 85382],
      ['Zydrine', 25462],
      ['Megacyte', 12764]
    ]
  }
];
const wreatheII = [
  {
    name: 'Wreathe II',
    type: 'Industrial',
    techLevel: 10,
    materials: [
      ['Gleaming Alloy', 38724],
      ['Precious Alloy', 34381],
      ['Opulent Compound', 43875],
      ['Noble Metals', 43875],
      ['Reactive Metals', 10911],
      ['Tritanium', 16281957],
      ['Pyerite', 5232556],
      ['Mexallon', 1442972],
      ['Isogen', 289672],
      ['Nocxium', 79941],
      ['Zydrine', 26031],
      ['Megacyte', 15365]
    ]
  }
];
const sigilII = [
  {
    name: 'Sigil II',
    type: 'Industrial',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 41450],
      ['Precious Alloy', 34377],
      ['Opulent Compound', 43870],
      ['Heavy Metals', 41450],
      ['Reactive Metals', 10908],
      ['Tritanium', 19853832],
      ['Pyerite', 4919305],
      ['Mexallon', 1621947],
      ['Isogen', 275997],
      ['Nocxium', 75648],
      ['Zydrine', 28227],
      ['Megacyte', 12731]
    ]
  }
];
const nereusII = [
  {
    name: 'Nereus II',
    type: 'Industrial',
    techLevel: 10,
    materials: [
      ['Sheen Compound', 42074],
      ['Precious Alloy', 34895],
      ['Opulent Compound', 44531],
      ['Heavy Metals', 42074],
      ['Reactive Metals', 11073],
      ['Tritanium', 19554308],
      ['Pyerite', 4087607],
      ['Mexallon', 1726147],
      ['Isogen', 235585],
      ['Nocxium', 61156],
      ['Zydrine', 26770],
      ['Megacyte', 13444]
    ]
  }
];
const humpbackHauling = [
  {
    name: 'Humpback Hauling',
    type: 'Industrial',
    techLevel: 10,
    materials: [
      ['Condensed Alloy', 78671],
      ['Precious Alloy', 61647],
      ['Crystal Compound', 73720],
      ['Reactive Metals', 19562],
      ['Toxic Metals', 19402],
      ['Tritanium', 34546612],
      ['Pyerite', 7221578],
      ['Mexallon', 3049585],
      ['Isogen', 416207],
      ['Nocxium', 108044],
      ['Zydrine', 47294],
      ['Megacyte', 23748]
    ]
  }
];
const humpbackCombat = [
  {
    name: 'Humpback Combat',
    type: 'Industrial',
    techLevel: 10,
    materials: [
      ['Condensed Alloy', 80639],
      ['Precious Alloy', 63189],
      ['Crystal Compound', 75564],
      ['Reactive Metals', 20052],
      ['Toxic Metals', 19886],
      ['Tritanium', 35410780],
      ['Pyerite', 7402222],
      ['Mexallon', 3125867],
      ['Isogen', 426617],
      ['Nocxium', 110747],
      ['Zydrine', 48497],
      ['Megacyte', 24344]
    ]
  }
];
const covetor = [
  {
    name: 'Covetor',
    type: 'Industrial',
    techLevel: 10,
    materials: [
      ['Condensed Alloy', 53180],
      ['Precious Alloy', 41672],
      ['Opulent Compound', 53180],
      ['Reactive Metals', 13224],
      ['Toxic Metals', 13115],
      ['Tritanium', 23352627],
      ['Pyerite', 4881603],
      ['Mexallon', 2061441],
      ['Isogen', 281345],
      ['Nocxium', 73036],
      ['Zydrine', 31970],
      ['Megacyte', 16055]
    ]
  }
];
//  Destroyer Interdictors Tech 6
const cormorantInterdictor = [
  {
    name: 'Cormorant Interdictor',
    type: 'Destroyer',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 7096],
      ['Gleaming Alloy', 7142],
      ['Lucent Compound', 7645],
      ['Noble Metals', 8092],
      ['Reactive Metals', 2013],
      ['Tritanium', 1313375],
      ['Pyerite', 372272],
      ['Mexallon', 116687],
      ['Isogen', 19953],
      ['Nocxium', 4753]
    ]
  }
];
const thrasherInterdictor = [
  {
    name: 'Thrasher Interdictor',
    type: 'Destroyer',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 6620],
      ['Gleaming Alloy', 6663],
      ['Lucent Compound', 7133],
      ['Noble Metals', 7550],
      ['Reactive Metals', 1879],
      ['Tritanium', 1251734],
      ['Pyerite', 287336],
      ['Mexallon', 99447],
      ['Isogen', 22068],
      ['Nocxium', 5592]
    ]
  }
];
const coercerInterdictor = [
  {
    name: 'Coercer Interdictor',
    type: 'Destroyer',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 6636],
      ['Sheen Compound', 7149],
      ['Lucent Compound', 7149],
      ['Heavy Metals', 7149],
      ['Reactive Metals', 1882],
      ['Tritanium', 1584470],
      ['Pyerite', 297436],
      ['Mexallon', 102805],
      ['Isogen', 18270],
      ['Nocxium', 5050]
    ]
  }
];
const catalystInterdictor = [
  {
    name: 'Catalyst Interdictor',
    type: 'Destroyer',
    techLevel: 6,
    materials: [
      ['Lustering Alloy', 7175],
      ['Sheen Compound', 7730],
      ['Lucent Compound', 7730],
      ['Heavy Metals', 7730],
      ['Reactive Metals', 2036],
      ['Tritanium', 1313770],
      ['Pyerite', 359321],
      ['Mexallon', 116857],
      ['Isogen', 19343],
      ['Nocxium', 5514]
    ]
  }
];
// Tech 8 Cruiser Interdictors
const blackbirdInterdictor = [
  {
    name: 'Blackbird Interdictor',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 19413],
      ['Precious Alloy', 17235],
      ['Opulent Compound', 21993],
      ['Noble Metals', 21993],
      ['Reactive Metals', 5469],
      ['Tritanium', 7212644],
      ['Pyerite', 2495961],
      ['Mexallon', 683786],
      ['Isogen', 112514],
      ['Nocxium', 31601],
      ['Zydrine', 12996],
      ['Megacyte', 5293]
    ]
  }
];
const bellicoseInterdictor = [
  {
    name: 'Bellicose Interdictor',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Gleaming Alloy', 19394],
      ['Precious Alloy', 17218],
      ['Opulent Compound', 21972],
      ['Noble Metals', 21972],
      ['Reactive Metals', 5465],
      ['Tritanium', 7360640],
      ['Pyerite', 2062847],
      ['Mexallon', 624010],
      ['Isogen', 133264],
      ['Nocxium', 39822],
      ['Zydrine', 12503],
      ['Megacyte', 4706]
    ]
  }
];
const arbitratorInterdictor = [
  {
    name: 'Arbitrator Interdictor',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 21351],
      ['Precious Alloy', 17708],
      ['Opulent Compound', 22599],
      ['Heavy Metals', 21351],
      ['Reactive Metals', 5619],
      ['Tritanium', 9562524],
      ['Pyerite', 2191558],
      ['Mexallon', 662054],
      ['Isogen', 113224],
      ['Nocxium', 36897],
      ['Zydrine', 9644],
      ['Megacyte', 6254]
    ]
  }
];
const celestisInterdictor = [
  {
    name: 'Celestis Interdictor',
    type: 'Cruiser',
    techLevel: 8,
    materials: [
      ['Sheen Compound', 20601],
      ['Precious Alloy', 17088],
      ['Opulent Compound', 21804],
      ['Heavy Metals', 20601],
      ['Reactive Metals', 5424],
      ['Tritanium', 7073721],
      ['Pyerite', 2362018],
      ['Mexallon', 671388],
      ['Isogen', 106946],
      ['Nocxium', 35957],
      ['Zydrine', 13122],
      ['Megacyte', 5038]
    ]
  }
];

module.exports = {celestisInterdictor, arbitratorInterdictor, bellicoseInterdictor, blackbirdInterdictor, catalystInterdictor, coercerInterdictor, thrasherInterdictor, cormorantInterdictor, covetor, humpbackCombat, humpbackHauling, nereusII, sigilII, wreatheII, badgerII, procurer, humpbackHighMobility, nereusHauling, nereus, sigil, wreathe, badger, nereusCombat, retreiver, ventureIII, nereusHighNobility, kryos, bestower, mammoth, tayra, ventureII, venture, imicusHighMobility, hyperion, megathronStriker, abaddon, apocalypseStriker, tempest, maelstromStriker, raven, ravenStriker, megathron, dominix, apocalypse, armageddon, typhoon, maelstrom, rokh, scorpion, vindictor, nightmare, barghest, nestor, bhaalgorn, machariel, rattlesnake, myrmidonIIGuardian, prophecyIIGuardian, cycloneIIGuardian, feroxIIGuardian, brutixLogistics, talosII, myrmidonGuardian, harbingerLogistics, oracleII, prophecyGuardian, hurricaneLogistics, tornadoII, cycloneGuardian, feroxGuardian, drakeLogistics, nagaII, brutix, talos, harbinger, oracle, hurricane, tornado, drake, naga, myrmidon, harbingerPrototype, prophecy, hurricanePrototype, cyclone, ferox, celestisIICovertOps, arbitratorIICovertOps, bellicoseIICovertOps, blackbirdIICovertOps, vexorSniper, thoraxIIGuardian, omenSniper, mallerIIGuardian, stabberSniper, ruptureIIGuardian, caracalSniper, moaIIGuardian, vigilant, phantasm, orthrus, stratios, ashimmu, cynabal, gila, celestisCovertOps, exequror, thoraxGuardian, arbitratorCovertOps, augoror, mallerGuardian, bellicoseCovertOps, scythe, ruptureGuardian, allShipsLower, possibleSkills, griffin, condorII, vigil, slasherII, crucifier, executionerII, maulus, atronII, bantam, heronCovertOps, burst, probeCovertOps, inquisitor, magnateCovertOps, navitas, imicusCovertOps, bantamII, manticore, burstII, hound, inquisitorII, purifier, navitasII, nemesis, worm, dramiel, cruor, astero, garmur, succubus, daredevil, merlinAssault, breacherAssault, punisherAssault, incursusAssault, condorInterceptor, slasherInterceptor, executionerInterceptor, atronInterceptor, manticoreII, houndII, purifierII, nemesisII, condorIIinterceptor, slasherIIinterceptor, executionerIIinterceptor, atronIIinterceptor, corax, cormorantII, talwar, thrasherII, dragoon, coercerII, algos, catalystII, cormorantGuardian, cormorantNavyIssue, thrasherGuardian, thrasherFleetIssue, coercerGuardian, coercerNavyIssue, catalystGuardian, catalystNavyIssue, coraxSniper, talwarSniper, dragoonSniper, algosSniper, coraxAssault, talwarAssault, dragoonAssault, algosAssault, cormorantCovertOps, thrasherCovertOps, coercerCovertOps, catalystCovertOps, caracal, stabber, omen, vexor, thoraxPrototype, blackbird, moa, caracalNavyIssue, bellicose, stabberFleetIssue, rupture, arbitrator, maller, omenNavyIssue, celestis, vexorNavyIssue, thorax, moaGuardian, osprey, blackbirdCovertOps};
