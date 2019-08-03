const txt = `
anti-mage,1,500,1000,2000,0.83,0.83,0.83,0,0,0,1,3600,3600,3600,elusive,demon hunter
axe,1,700,1400,2800,0.67,0.67,0.67,50,50,50,1,10,10,10,brawny,warrior
batrider,1,500,1000,2000,0.77,0.77,0.77,20,20,20,3,2,2,2,troll,knight
bloodseeker,1,500,1000,2000,0.59,0.59,0.59,0,0,0,1,3600,3600,3600,human,assassin
bounty hunter,1,550,1100,2200,1,1,1,100,100,100,1,5,5,5,scrappy,assassin
drow ranger,1,400,800,1600,0.77,0.77,0.77,0,0,0,4,3600,3600,3600,heartless,hunter
enchantress,1,400,800,1500,0.67,0.67,0.67,100,100,100,2,15,15,15,savage,druid
ogre magi,1,800,1600,3000,0.71,0.71,0.71,100,100,100,1,5,5,5,blood-bound,mage
razor,1,500,1000,2000,0.91,0.91,0.91,100,100,100,3,10,10,10,primordial,mage
shadow shaman,1,550,1100,2200,0.62,0.62,0.62,100,100,100,3,10,10,10,troll,shaman
tiny,1,650,1300,2600,0.53,0.53,0.53,100,100,100,1,10,8,6,primordial,warrior
tusk,1,700,1400,2800,0.83,0.83,0.83,100,100,100,1,7,7,7,savage,warrior
venomancer,1,500,1000,2000,0.83,0.83,0.83,100,100,100,3,5,6,7,savage,warlock
warlock,1,650,1450,2850,0.59,0.59,0.59,100,100,100,4,6,6,6,blood-bound,warlock
beastmaster,2,600,1200,2400,0.91,0.91,0.91,100,100,100,1,7,7,7,brawny,hunter
chaos knight,2,750,1500,3000,0.77,0.77,0.77,100,100,100,1,5,5,5,demon,knight
juggernaut,2,600,1200,2400,0.91,1,1.25,100,100,100,1,12,12,12,brawny,warrior
lina,2,550,1100,2200,0.62,0.62,0.62,100,100,100,4,10,8,6,human,mage
luna,2,500,1000,2000,0.77,0.77,0.77,0,0,0,3,3600,3600,3600,elusive,knight
morphling,2,500,1000,2000,0.91,0.91,0.91,75,75,75,3,8,6,4,primordial,assassin
nature's prophet,2,500,1000,2000,0.71,0.71,0.71,50,50,50,3,6,6,6,elusive,druid
puck,2,450,900,1800,0.59,0.59,0.59,60,60,60,3,5,4,3,elusive,dragon,mage
pudge,2,1000,2500,5500,0.59,0.59,0.59,100,100,100,1,10,10,10,heartless,warrior
queen of pain,2,550,1100,2200,0.83,0.83,0.83,100,100,100,3,6,6,6,demon,assassin
slardar,2,650,1300,2600,0.83,0.83,0.83,75,75,75,1,3,3,3,scaled,warrior
timbersaw,2,800,1600,3200,0.71,0.71,0.71,100,100,100,1,6,5,4,scrappy,inventor
windranger,2,550,1100,2300,1.11,1.11,1.11,100,100,100,4,10,10,10,elusive,hunter
witch doctor,2,550,1100,2200,0.71,0.71,0.71,100,100,100,3,10,10,10,troll,warlock
abaddon,3,750,1500,3000,0.67,0.67,0.67,100,100,100,1,12,12,12,heartless,knight
clockwerk,3,800,1600,3200,0.71,0.71,0.71,100,100,100,1,12,10,8,scrappy,inventor
crystal maiden,3,550,1100,2000,0.59,0.59,0.59,0,0,0,4,3600,3600,3600,human,mage
lycan,3,750,1500,3600,0.91,0.91,0.91,100,100,100,1,60,60,60,human,savage,hunter
omniknight,3,700,1400,3360,0.71,0.71,0.71,100,100,100,1,10,10,10,human,knight
phantom assassin,3,550,1100,2200,0.83,0.83,0.83,0,0,0,1,3600,3600,3600,elusive,assassin
shadow fiend,3,450,900,1800,0.91,0.91,0.91,100,100,100,3,20,20,20,demon,warlock
slark,3,500,1000,2400,1,1.25,1.67,0,0,0,1,3600,3600,3600,scaled,assassin
sniper,3,450,900,2160,0.62,0.62,0.77,100,100,100,7,10,10,10,deadeye,hunter
terrorblade,3,650,1300,3120,0.71,0.71,0.71,100,100,100,1,60,60,60,demon,demon hunter
tinker,3,750,1500,3500,0.77,0.77,0.77,100,100,100,4,8,6,5,scrappy,inventor
treant protector,3,750,1500,2500,0.5,0.5,0.5,100,100,100,1,7,7,7,elusive,druid
viper,3,550,1100,3000,1,1,1,100,100,100,3,3,3,3,dragon,assassin
alchemist,4,1000,2000,4000,1,1,1,100,100,100,1,10,10,10,scrappy,warlock
arc warden,4,600,1100,2650,1,1,1,0,0,0,4,3600,3600,3600,primordial,shaman
disruptor,4,700,1400,2800,0.67,0.67,0.67,100,100,100,4,15,12,9,brawny,shaman,warlock
doom,4,1050,2100,4200,0.77,0.77,0.77,100,100,100,1,10,10,10,demon,warrior
dragon knight,4,1000,2000,4000,0.83,0.83,0.83,100,100,100,1,10,8,6,human,dragon,knight
keeper of the light,4,550,1100,2200,0.59,0.59,0.59,150,150,150,4,10,8,6,human,mage
kunkka,4,950,1900,3800,0.71,0.71,0.71,100,100,100,1,15,15,15,human,warrior
lone druid,4,800,1600,3000,0.77,0.77,0.77,60,60,60,3,60,60,60,savage,druid
mirana,4,750,1500,3000,1,1,1,70,70,70,4,8,8,8,elusive,hunter
necrophos,4,850,1700,3400,0.83,0.83,0.83,100,100,100,3,7.5,7.5,7.5,heartless,warlock
sand king,4,750,1500,3200,0.71,0.71,0.71,100,100,100,1,12,10,8,savage,assassin
templar assassin,4,750,1500,3000,0.83,0.83,0.83,100,100,100,3,6,6,6,elusive,assassin
tidehunter,4,850,1700,3400,0.5,0.5,0.5,100,100,100,1,30,30,30,scaled,warrior
enigma,5,1000,2000,4000,0.67,0.67,0.67,100,100,100,3,20,20,20,primordial,shaman
gyrocopter,5,900,1800,3600,1.11,1.11,1.11,100,100,100,6,10,10,10,deadeye,inventor
lich,5,850,1700,3400,0.67,0.67,0.67,100,100,100,3,10,8,6,heartless,mage
medusa,5,850,1700,3300,1,1,1,100,100,100,4,20,20,20,scaled,hunter
techies,5,1000,2000,4000,0.67,0.67,0.67,100,100,100,4,10,10,10,scrappy,inventor
troll warlord,5,1200,2000,4000,1,1,1,0,0,0,3,3600,3600,3600,troll,warrior`;

const allianceLimits = {
  assassin: [3,6,9],
  ['blood-bound']: [2],
  brawny: [2,4],
  deadeye: [2],
  demon: [1],
  ['demon hunter']: [1,2],
  dragon: [2],
  druid: [2,4],
  elusive: [3,6,9],
  heartless: [2,4,6],
  human: [2,4,6],
  hunter: [3,6],
  inventor: [2,4],
  knight: [2,4,6],
  mage: [3,6],
  primordial: [2,4],
  savage: [2,4,6],
  scaled: [2,4],
  scrappy: [2,4,6],
  shaman: [3],
  troll: [2,4],
  warlock: [2,4,6],
  warrior: [3,6,9],
};

const poolsPercentage = [
  [100, 0, 0, 0, 0],
  [70, 30, 0, 0, 0],
  [60, 35, 5, 0, 0],
  [50, 35, 15, 0, 0],
  [40, 35, 23, 2, 0],
  [33, 30, 30, 7, 0],
  [30, 30, 30, 10, 0],
  [24, 30, 30, 15, 1],
  [22, 25, 30, 20, 3],
  [19, 25, 25, 25, 6],
]

let heroes = {};
let heroesByAlliances = {};
let alliances = [];
let tierPoolCounts = [0, 0, 0, 0, 0];

function setup() {
  const lines = txt.split('\n').filter(s => s).map(s => s.split(','));
  heroes = lines.reduce((accum,line) => {
    const name = line[0].toLowerCase();
    const alliances = line.slice(15);
    const tier =  parseInt(line[1], 10);
    const hero = {
      name, alliances, tier,
      health: line.slice(2,5).map(s => parseInt(s,10)),
      attackRate: line.slice(5,8).map(s => parseFloat(s,10)),
      mana: line.slice(8,11).map(s => parseInt(s,10)),
      attackRange: parseInt(line[11], 10),
      coolDown: line.slice(12,15).map(s => parseInt(s, 10)),
    };

    tierPoolCounts[tier-1] += 1;
    accum[name] = hero;
    return accum;
  }, {});

  Object.keys(heroes).forEach(name => {
    const hero = heroes[name];
    hero.alliances.forEach(alliance => {
      heroesByAlliances[alliance] = heroesByAlliances[alliance] || [];
      heroesByAlliances[alliance].push(hero.name);
    });
  });

  alliances = Object.keys(heroesByAlliances);
  alliances.sort();

  alliances.forEach(alliance => {
    heroesByAlliances[alliance].sort();
  });
}

setup();


function alliancesCount(selectedHeroes) {
  const counts = {};
  selectedHeroes.forEach(hero => {
    hero.alliances.forEach(alliance => {
      counts[alliance] = counts[alliance] || [];
      if(counts[alliance].findIndex(s => s === hero.name) === -1) {
        counts[alliance].push(hero.name);
      };
    });
  });

  return alliances.map(alliance => {
    if (alliance === 'demon') return counts[alliance] === 1 ? ['demon', 1] : ['demon', 0];
    return [alliance, counts[alliance] ? counts[alliance].length : 0];
  });
}

function perkCountRaw(selectedHeroes) {
  const counts = alliancesCount(selectedHeroes);
  return counts.map(s => {
    const count = s[1];
    const limitPassed = allianceLimits[s[0]].filter(x => x <= count);
    if (s[0] === 'demon') return count === 1 ? [s[0], 1] : [s[0], 0];
    return limitPassed.length > 0 ? [s[0], limitPassed[limitPassed.length-1]] : [s[0], 0];
  });
}

function allianceOnPerkCount(selectedHeroes) {
  const counts = alliancesCount(selectedHeroes);
  return counts.map(s => {
    const count = s[1];
    const limitPassed = allianceLimits[s[0]].filter(x => x <= count);
    if (s[0] === 'demon') return count === 1 ? 1 : 0;
    return limitPassed.length > 0 ? count : 0;
  });
}

function weightedAllianceCount(selectedHeroes) {
  const counts = alliancesCount(selectedHeroes);
  const recap = counts.map(s => {
    const count = s[1];
    const limitPassed = allianceLimits[s[0]].filter(x => x <= count);
    if (s[0] === 'demon') return count === 1 ? 1 : 0;
    return limitPassed.length > 0 ? count * limitPassed.length : 0;
  });

  recap.sort(compareNumBigger);
  return recap;
}

function preferredAllianceCount(selectedHeroes) {
  const countsTemp = {};
  selectedHeroes.forEach(hero => {
    hero.alliances.forEach(alliance => {
      countsTemp[alliance] = countsTemp[alliance] || [];
      if(countsTemp[alliance].findIndex(s => s === hero.name) === -1) {
        countsTemp[alliance].push(hero.name);
      };
    });
  });

  const counts = alliances.map(alliance => {
    return [alliance, countsTemp[alliance] ? countsTemp[alliance].length : 0];
  });

  const recap = counts.map(s => {
    const count = s[1];
    // const limitPassed = allianceLimits[s[0]].filter(x => x <= count);
    // if (s[0] === 'demon') return count === 1 && preferredAlliances.indexOf(s[0]) !== -1 ? 1 : 0;
    return preferredAlliances.indexOf(s[0]) !== -1 ? count : 0;
  });

  recap.sort(compareNumBigger);
  return recap;
}

const EPS = 1e-6;
function compareNumBigger(a, b) {
  if (Math.abs(a-b) > EPS) return b - a;
  return 0;
}

function allsValueSorted(selectedHeroes) {
  const result = alliancesCount(selectedHeroes).map(counts => counts[1]);
  result.sort(compareNumBigger);
  return result;
}

function perksValueSorted(selectedHeroes) {
  const result = perkCountRaw(selectedHeroes).map(s => s[1]);
  result.sort(compareNumBigger);
  return result;
}

// function potentialCount(selectedHeroes) {
//   const counts = alliancesCount(selectedHeroes);
//   const result = counts.map(s => {
//     const count = s[1];
//     const limitPassed = allianceLimits[s[0]].filter(x => x <= count + 10 - selectedHeroes.length);
//     return limitPassed.length > 0 ? limitPassed[limitPassed.length-1] : 0;
//   });

//   result.sort((a,b) => b-a);
//   return result;
// }

function toStar(n) {
  if (n < 3) return 1;
  if (n < 9) return 2;
  return 3;
}

function starsCount(selectedHeroes) {
  // const counts = selectedHeroes.map(s => toStar(s.star));
  const counts = selectedHeroes.map(s => {
    const n = selectedHeroes.filter(h => s.name === h.name).length;
    return n * s.star;
  });

  counts.sort();
  counts.reverse();
  return counts;
}

function starsRealCount(selectedHeroes) {
  // const counts = selectedHeroes.map(s => toStar(s.star));
  const counts = selectedHeroes.map(s => s.star);

  counts.sort();
  counts.reverse();
  return counts;
}

function tiersCount(selectedHeroes) {
  const counts = selectedHeroes.map(s => s.tier);

  counts.sort();
  counts.reverse();
  return counts;
}

function findSeq(colls, items) {
  return items.reduce((accum, item) => {
    const idx = colls.slice(accum).indexOf(item);
    return idx === -1 ? colls.length + 1 : accum + idx + 1;
  }, 0) !== colls.length + 1;
}

function heroByName(name) {
  const lowerCaseName = name.toLowerCase();
  const fullName = Object.keys(heroes).find(heroName => {
    if (lowerCaseName.length === 3) return heroName.startsWith(lowerCaseName);
    return findSeq(heroName.split(''), lowerCaseName.split(''));
  });

  return heroes[fullName];
}

function copyHeroStat(name, level) {
  const h = heroByName(name);
  return {
      name: h.name,
      alliances: h.alliances,
      tier: h.tier,
      health: h.health[level-1],
      attackRate: h.attackRate[level-1],
      attackRange: h.attackRange,
      mana: h.mana[level-1],
      coolDown: h.coolDown[level-1],
  };
}

function getHeroes(names) {
  return names.map(s => s.split(',')).map(([name, star]) => {
    const h = heroByName(name);
    if (h === undefined) throw new Error('Cant find ' + name);
    const starVal = star ? parseInt(star, 10) : 1;

    return {
      ...copyHeroStat(name, toStar(starVal)),
      star: starVal,
    };
  });
}

function compArr(first, second, comp) {
  for(let i = 0; i < Math.max(first.length, second.length); i++) {
    const x = i < first.length ? first[i] : 0;
    const y = i < second.length ? second[i] : 0;
    if (x !== y) return comp(x, y);
  }
  return 0;
}

function compArrBig(first, second) {
  return compArr(first, second, compareNumBigger);
}

function compareAlliance(first, second) {
  return compArrBig(allsValueSorted(first), allsValueSorted(second));
}

function compareStars(first, second) {
  return compArrBig(starsCount(first), starsCount(second));  
}

function compareTiers(first, second) {
  return compArrBig(tiersCount(first), tiersCount(second));  
}

function comparePerks(first, second) {
  return compArrBig(perksValueSorted(first), perksValueSorted(second));
}

// function comparePotential(first, second) {
//   return compArrBig(potentialCount(first), potentialCount(second));
// }

function hashTeam(teams) {
  const copyHero = [...teams];
  copyHero.sort((a, b) => {
    if (a.name !== b.name) {
      if (a.name < b.name) return -1;
      return 1;
    }

    return a.star - b.star;
  })

  return copyHero.map(h => `${h.name}${h.star}`).join('');
}

function createTeams(heroes, n) {
  if (n === 0) return [];
  if (heroes.length <= n) return [heroes];

  const results = {};
  const selected = heroes.slice(0, n);
  function rec(x, k) {
    if (heroes.length - k < n - x) return;

    if (x === n) {
      results[hashTeam(selected)] = [...selected];
      return;
    }

    if (k === heroes.length) {
      return;
    }

    selected[x] = heroes[k];
    const first = rec(x+1, k+1);
    const second = rec(x, k+1);
    // return [...first, ...second];
    return;
  }

  rec(0, 0);
  return Object.keys(results).map(k => results[k]);
}

// function countMatters(selectedHeroes) {
//   const allianceMatter = perkCountRaw(selectedHeroes).filter(s => s[1] > 0).map(s => s[0]);
//   const recap = selectedHeroes.map(hero => {
//     // if (selectedHeroes.length <= 3) return [hero.tier, hero.star];
//     // return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, toStar(hero.star)] : [0, 0];
//     // return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, hero.star] : [0, 0];
//     const starCount = selectedHeroes.filter(h => hero.name === h.name).reduce((accum, h) => accum + h.star, 0);
//     return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, starCount] : [0, 0];
//   });

//   const tierCount = recap.map(x => x[0]);
//   const starCount = recap.map(x => x[1]);

//   tierCount.sort(compareNumBigger); starCount.sort(compareNumBigger);
//   return {tier: tierCount, star: starCount};
// }
const globalAllCount = {};
const globalStarCount = {};
const globalStarUniqCount = {};
alliances.forEach(a => globalAllCount[a] = {n:0, t:true, h: {}});

function compareWithFn(first, second, fn) {
  if (isArray(fn(first))) return compArrBig(fn(first), fn(second));
  return compareNumBigger(fn(first), fn(second));
}

// function compareMatter(first, second) {
//   // const firstMatter = countMatters(first);
//   // const secondMatter = countMatters(second);
//   // console.log('matter', firstMatter, secondMatter);

//   const starResult = compArrBig(firstMatter.star, secondMatter.star);
//   if (starResult !== 0) return starResult;

//   // const tierResult = compareValues(firstMatter.tier, secondMatter.tier);
//   // if (tierResult !== 0) return tierResult;

//   return 0;
// }

function compareWithArrFns(first, second, fns) {
  return fns.reduce((accum, fn) => {
    if (accum !== 0) return accum;
    return compareWithFn(first, second, fn);
  }, 0);
}

function chopSome(colls, n) {
  return colls.slice(0, colls.length - n);
}

function compareTeamsPotential(first, second) {
  // const sortFns = [
  //   (t => t.score.mattersStar.slice(0, 6)),
  //   // (t => t.score.mattersStar),
  //   // (t => t.score.tiers.slice(0, Math.min(GLOBAL_N + 2, t.score.stars.length))),
  //   (t => t.score.tiers.slice(0, 6)),
  //   (t => t.score.stars),
  //   // (t => t.score.mattersTier.slice(0, Math.min(GLOBAL_N + 3, t.score.stars.length))),
  //   // (t => t.score.mattersTier),
  //   // (t => t.score.allOnPerk.reduce((a,b) => a + b, 0)),
  //   (t => t.score.preferredAlliances),
  //   (t => t.score.weightedAlliance),
  //   // (t => t.score.perk),
  //   // (t => t.score.perk.reduce((a,b) => a+b,0)),
  //   // (t => t.score.all),
  //   (t => t.idx * -1),
  // ];
  const sortFns = [
    // // (t => t.score.mattersStarSimilar),
    // // (t => chopSome(t.score.stars, 0)),
    // // (t => t.score.stars),
    // (t => t.score.tiers),
    // (t => t.score.preferredAlliances),
    // (t => t.score.weightedAlliance),
    // (t => t.score.mattersStar.map(x => x < 5 && x > 3 ? 3 : x)),
    (t => t.score.starsSimilar),//.slice(0, Math.max(0, GLOBAL_N - 2))),
    // (t => t.score.starsReal),
    (t => t.score.weightedAlliance.slice(0,2).reduce((a,b) => a+b, 0)),
    (t => t.score.mattersTier),
    (t => t.score.preferredAlliances),
    (t => t.score.weightedAlliance.reduce((a,b) => a+b, 0)),
    (t => t.score.tiers),
    (t => t.idx * -1),
  ];

  const minSort = sortFns;
  // const minSort = [
  //   (t => t.score.stars),
  //   (t => t.score.tiers),
  //   (t => t.idx * -1),
  // ]

  return first.heroes.length > 3 ? compareWithArrFns(first, second, sortFns) : compareWithArrFns(first, second, minSort);
}

function compareTeams(first, second) {
  const sortFns = [
    (t => t.score.starsReal.slice(0, Math.max(0, GLOBAL_N - Math.floor(GLOBAL_N / 3)))),
    // (t => t.score.starsSimilar),
    // (t => t.score.mattersStarReal.map(s => toStar(s))),
    // (t => t.score.allOnPerk.reduce((a,b) => a + b, 0)),

    (t => t.score.weightedAlliance.slice(0,2).reduce((a,b) => a+b, 0)),
    (t => t.score.mattersTier),
    (t => t.score.preferredAlliances),
    (t => t.score.weightedAlliance.reduce((a,b) => a+b, 0)),
    // (t => t.score.perk),
    // (t => t.score.perk.reduce((a,b) => a+b,0)),
    // (t => t.score.all),

    (t => t.score.tiers),
    (t => t.score.starsReal),
    (t => t.idx * -1),
  ];

  const minSort = sortFns;
  // const minSort = [
  //   (t => t.score.stars),
  //   (t => t.score.tiers),
  //   (t => t.idx * -1),
  // ]

  return first.heroes.length > 3 ? compareWithArrFns(first, second, sortFns) : compareWithArrFns(first, second, minSort);
}

function prepareTeam(heroes, idx) {
  const mergedHeroes = mergeHeroes([], heroes);
  return {
    heroes: mergedHeroes, idx, score: prepareTeamScore(mergedHeroes),
  }
}

function prepareTeamScore(rawHeroes) {
  const heroes = globalPotentialNames.length > 0 ? rawHeroes.filter(h => globalPotentialNames.indexOf(h.name) !== -1) : rawHeroes;
  const uniqueHeroes = heroes.reduce((accum, h) => {
    const idx = accum.findIndex(a => a.name === h.name);
    if (idx === -1) return accum.concat([{...h}]);
    accum[idx].star = Math.max(accum[idx].star, h.star);
    return accum;
  }, []);

  alliances.forEach(a => {
    globalAllCount[a].n = 0;
    globalAllCount[a].t = true;
    globalAllCount[a].h = {};
  });

  heroes.forEach(hero => {
    globalStarCount[hero.name] = 0;
  })

  heroes.forEach(hero => {
    hero.alliances.forEach(a => globalAllCount[a].h[hero.name] = true);
    globalStarCount[hero.name] += hero.star;
  })

  alliances.forEach(a => {
    globalAllCount[a].n = Object.keys(globalAllCount[a].h).length;
    globalAllCount[a].t = globalAllCount[a].n >= allianceLimits[a][0];
  })

  if (globalAllCount['demon'].n !== 1) {
    globalAllCount['demon'].n = 0; globalAllCount['demon'].t = false;
  }

  const recap = heroes.map(hero => {
    // if (selectedHeroes.length <= 3) return [hero.tier, hero.star];
    // return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, toStar(hero.star)] : [0, 0];
    // return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, hero.star] : [0, 0];
    return hero.alliances.some(all => globalAllCount[all].t) ? globalStarCount[hero.name] : 0;
  });
  recap.sort(); recap.reverse();

  const mattersStarReal = heroes.map(hero => {
    // if (selectedHeroes.length <= 3) return [hero.tier, hero.star];
    // return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, toStar(hero.star)] : [0, 0];
    // return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, hero.star] : [0, 0];
    return hero.alliances.some(all => globalAllCount[all].t) ? hero.star : 0;
  });
  mattersStarReal.sort(); mattersStarReal.reverse();

  const mattersStarSimilar = heroes.map(hero => {
    if (hero.alliances.every(all => !globalAllCount[all].t)) return 0;
    const similar = heroes.filter(a => a.name === hero.name && a.star === hero.star);
    return similar.length * hero.star;
  });
  mattersStarSimilar.sort(); mattersStarSimilar.reverse();

  const mattersTier = uniqueHeroes.map(hero => {
    // if (selectedHeroes.length <= 3) return [hero.tier, hero.star];
    // return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, toStar(hero.star)] : [0, 0];
    // return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, hero.star] : [0, 0];
    return hero.alliances.some(all => globalAllCount[all].t) ? hero.tier : 0;
  });
  mattersTier.sort(); mattersTier.reverse();

  const stars = heroes.map(h => {
    const similar = heroes.filter(a => a.name === h.name && a.star === h.star);
    return similar.length * h.star;
  });
  
  stars.sort(); stars.reverse();

  // const starsSimilar = heroes.map(h => {
  //   // if (globalPotentialNames.length > 0 && globalPotentialNames.indexOf(h.name) === -1) return 1;
  //   if (globalStarCount[h.name] === 4 || globalStarCount[h.name] === 5) return h.star === 1 ? globalStarCount[h.name] - 3 : 3;
  //   return globalStarCount[h.name];
  // });
  const starsSimilar = uniqueHeroes.reduce((accum, h) => {
    // if (globalPotentialNames.length > 0 && globalPotentialNames.indexOf(h.name) === -1) return 1;
    if (globalStarCount[h.name] <= 3) return accum.concat([globalStarCount[h.name]]);
    if (globalStarCount[h.name] === 9) return accum.concat([9]);
    if (globalStarCount[h.name] === 6) return accum.concat([6, 6]);
    if (globalStarCount[h.name] < 6) return accum.concat([3, globalStarCount[h.name] - 3]);
    // if (globalStarCount[h.name] < 6) return accum.concat([globalStarCount[h.name], globalStarCount[h.name]]);
    return accum.concat([globalStarCount[h.name], globalStarCount[h.name], globalStarCount[h.name]]);
  }, []);
  
  starsSimilar.sort(); starsSimilar.reverse();

  const starsReal = heroes.map(h => h.star);
  starsReal.sort(); starsReal.reverse();

  const tiers = heroes.map(h => h.tier);
  tiers.sort(); tiers.reverse();

  const weightedAlliance = alliances.map(a => {
    const limitPassed = allianceLimits[a].filter(x => x <= globalAllCount[a].n);
    return limitPassed.length * globalAllCount[a].n;
  })

  weightedAlliance.sort(); weightedAlliance.reverse();

  return {
    stars,
    starsSimilar,
    starsReal,
    mattersStarReal,
    tiers,
    // weightedAlliance,
    weightedAlliance: weightedAlliance,//.reduce((a,b) => a+b,0),
    preferredAlliances: preferredAllianceCount(heroes).reduce((a,b) => a + b, 0),
    mattersStar: recap,
    mattersStarSimilar,
    mattersTier,
    alliances: alliances.filter(all => globalAllCount[all].t),
  };  
}

function pickBest(heroes, n, flag = false) {
  const teams = createTeams(heroes, n).map(prepareTeam);
  // teams.sort(flag ? compareTeamsPotential : compareTeams);
  sortTeam(teams, flag ? compareTeamsPotential : compareTeams);
  return teams;
}

function pickBestWithBench(heroes, n, bench) {
  // const compactRun = pickBest(heroes, Math.min(heroes.length, n));
  // // console.log('compact', compactRun.slice(0,15));
  // globalCompact = compactRun;
  // // console.log('compact', compactRun);

  // const compactBest = compactRun[0];
  // const nonPickedHeroes = substractHero(heroes, compactBest.heroes);
  // const teams = createTeams(nonPickedHeroes, Math.min(nonPickedHeroes.length, n <= 3 ? 0 : bench)).map(t => [...compactBest.heroes, ...t]).map(prepareTeam);

  // teams.sort(compareTeamsPotential);
  // globalCompact2 = teams;
  // // console.log('int team', teams);
  //   // const subBest = pickBest(t.heroes, Math.min(heroes.length, 10, n), true);
  //   // console.log('s', subBest)
  // return {
  //   ...compactBest, bench: substractHero(teams[0].heroes, compactBest.heroes),
  //   // ...subBest[0], bench: substractHero(t.heroes, subBest[0].heroes),
  // }

  /** LETS TRY AGAIN */
  globalHeroes = heroes;
  const compactRun = pickBest(heroes, Math.min(heroes.length, n <= 5 ? n : n - 1));
  // console.log('compact', compactRun.slice(0,15));
  globalCompact = compactRun;
  // console.log('compact', compactRun);

  const firstIterHeroes = compactRun.length > 0 ? compactRun[0].heroes : [];
  const nonPickedHeroes = substractHero(heroes, firstIterHeroes);

  const diffCount = n - firstIterHeroes.length;
  const teams = createTeams(nonPickedHeroes, Math.min(nonPickedHeroes.length, n <= 3 ? diffCount : bench + diffCount)).map(t => [...firstIterHeroes, ...t]).map(prepareTeam);

  teams.sort(n <= 5 ? compareTeams : compareTeamsPotential);
  // console.log('int team', teams);
  globalCompact2 = teams;

  const lastBest = pickBest(teams[0].heroes, n);
  globalCompact3 = lastBest;
  return {
    ...lastBest[0],
    bench: teams[0].heroes.filter(h => lastBest[0].heroes.every(s => s.name !== h.name)),
  }

  /** ONCE UPON A TIME */
  // const fullBest = pickBest(heroes, Math.min(heroes.length, n + bench), true);
  // // const fullBest = pickBest(heroes, Math.min(10, heroes.length));
  // console.log('FULL', fullBest.slice(0,5));
  // return fullBest.slice(0,5).map(full => {
  //   const best = pickBest(full.heroes, n);
  //   const bench = full.heroes.filter(hero => best[0].heroes.every(b => b.name !== hero.name));
  //   return { ...best[0], bench };
  // });
}

// function solve(names, n) {
//   const heroes = getHeroes(names);
//   return pickBest(heroes, n);
// }
function isArray(x) {
  return (Object.prototype.toString.call(x) === '[object Array]');
}

function toString(s) {
  if (s === undefined) return '';
  if (typeof s === 'string') return s;
  if (typeof s === 'number') return s.toString();
  if (isArray(s)) {
    return `<ul>${s.reduce((accum, item) => `${accum}<li>${toString(item)}</li>`, '')}</ul>`;
  }

  return Object.keys(s).reduce((accum, key) => {
    return accum + `<h4>${key}</h4><span class="detail">${toString(s[key])}</span>`;
  }, '');
}

function getText(name) {
  return document.getElementById(name).value;
}

function printToScreen(s) {
  document.getElementById('text').innerHTML = toString(s);
}

// function fromStar(x) {
//   if (x === 1) return 1;
//   if (x === 2) return 3;
//   return 9;
// }

function mergeHeroes(first, second) {
  function canBeMerged(selectedHeroes, hero) {
    const similarCount = selectedHeroes.filter(h => h.name === hero.name && h.star === hero.star).length;
    return (similarCount >= 2);
  }

  function merge(selectedHeroes, hero) {
    if (!canBeMerged(selectedHeroes, hero)) return [...selectedHeroes, hero];

    const firstIdx = selectedHeroes.findIndex(h => h.name === hero.name && h.star === hero.star);
    const secondIdx = selectedHeroes.slice(firstIdx + 1).findIndex(h => h.name === hero.name && h.star === hero.star) + firstIdx + 1;

    const upgradedHero = { ...hero, star: hero.star * 3 };
    return merge([...selectedHeroes.slice(0, firstIdx), ...selectedHeroes.slice(firstIdx + 1, secondIdx), ...selectedHeroes.slice(secondIdx + 1)], upgradedHero);
  }

  return [...first, ...second].reduce(merge, []).map(h => ({...h, ...copyHeroStat(h.name, toStar(h.star))}));
}

function mergeAllHeroes(allHeroes) {
  function merge(selectedHeroes, hero) {
    const idx = selectedHeroes.findIndex(a => a.name === hero.name);
    if (idx === -1) return selectedHeroes.concat([{...hero}]);
    selectedHeroes[idx].star += hero.star;
    return selectedHeroes;
  }

  return allHeroes.reduce(merge, []);
}

function sortForWeapon(mode) {
  const fns = [
    (h => h.attackRate),
    (h => h.mana * -1),
    (h => h.coolDown * -1),
    (h => h.health),
  ];

  let newFns = [];
  if (mode === 0) newFns = [fns[0], fns[3], fns[2], fns[1]];
  if (mode === 1) newFns = [fns[2], fns[1], fns[0], fns[3]];
  if (mode === 2) newFns = [fns[3], fns[2], fns[1], fns[0]];
  // const newFns = [...fns.slice(mode), ...fns.slice(0,mode)];
  return (first, second) => compareWithArrFns(first, second, newFns);
}

function sortForUpgrade(selectedHeroes, lvl) {
  const heroCopy = [...selectedHeroes];
  heroCopy.sort((first, second) => compareWithArrFns(first, second, [(h) => h.star >= 9 ? -10 : (9 - h.star) * -1 / poolsPercentage[lvl - 1][h.tier-1] * tierPoolCounts[h.tier-1]]));
  return heroCopy.map(h => h.name);
}

function sortWeapon(off, sup, def) {
  const maxLen = Math.max(off.length, sup.length, def.length);
  const result = [];
  for(let i = maxLen - 1; i > -1; i--) {
    result.push([1, sup[i] || 0]);
    result.push([2, def[i] || 0]);
    result.push([0, off[i] || 0]);
  }

  return result.filter(s => s[1] > 0);
}

function pickForWeapon(heroes, off, sup, def) {
  const heroCopy = [...heroes];
  const weights = sortWeapon(off, sup, def);

  const whero = [[], [], []];
  weights.forEach(w => {
    const m = w[0];
    heroCopy.sort(sortForWeapon(m));
    whero[m] = [...whero[m], ...heroCopy.splice(0, w[1]).map(h => h.name)];
  })

  return {
    offHero: whero[0], supHero: whero[1], defHero: whero[2],
  }

  // heroCopy.sort(sortForWeapon(0));
  // console.log('w', [...heroCopy]);
  // const offHero = heroCopy.splice(0, off).map(h => h.name);

  // heroCopy.sort(sortForWeapon(1));
  // console.log('w', [...heroCopy]);
  // const supHero = heroCopy.splice(0, sup).map(h => h.name);

  // heroCopy.sort(sortForWeapon(2));
  // console.log('w', [...heroCopy]);
  // const defHero = heroCopy.splice(0, def).map(h => h.name);
  // return { offHero, supHero, defHero };
}

let nextNames = '', globalBest = [];
let prevTurnBest = { bestHeroes: [], bestBench: [], weapons: { offHero: [], supHero: [], defHero: [] } };

// function substractHero(first, second) {
//   return first.filter(h => second.every(s => h.name !== s.name));
// }

function substractHero(first, second) {
  return second.reduce((accum, hero) => {
    const idx = accum.findIndex(h => h.name === hero.name && h.star === hero.star);
    if (idx === -1) return accum;
    return [...accum.slice(0, idx), ...accum.slice(idx + 1)];
  }, first || []);
}

function unionHero(first, second) {
  let firstCopy = [...first];
  return second.reduce((accum, hero) => {
    const idx = firstCopy.findIndex(h => h.name === hero.name && h.star === hero.star);
    if (idx === -1) return accum;
    firstCopy = [...firstCopy.slice(0, idx), ...firstCopy.slice(idx+1)];
    return accum.concat([hero]);
  }, []);
}

function sortForPosition(selectedHeroes) {
  const copyHero = [...selectedHeroes];
  const fns = [
    (h) => -1 * h.attackRange,
    h => h.health,
  ];

  copyHero.sort((a,b) => compareWithArrFns(a,b,fns));
  return copyHero.map(h => h.name);
}

function getDiffBest(now, prev, bestDefHero) {
  // console.log('DIFF', now, prev);
  const nowFull = [...now.bestHeroes, ...now.bestBench];
  const prevFull = [...prev.bestHeroes, ...prev.bestBench];

  const toBeSold = substractHero(prevFull, nowFull);
  const toBeBought = substractHero(nowFull, prevFull);
  const toBeBench = substractHero(substractHero(prev.bestHeroes, toBeSold), now.bestHeroes);
  const toBeFielded = substractHero(now.bestHeroes, prev.bestHeroes).map(s => `${bestDefHero.length - bestDefHero.findIndex(h => h === s.name)} - ${s.name}`);
  toBeFielded.sort().reverse();

  return {
    toBeSold: toBeSold.map(h => `${h.name},${h.star}`),
    toBeBought: toBeBought.map(h => h.name),
    toBeBench: toBeBench.map(h => h.name), 
    toBeFielded,
  };
}

function priceOfHeroes(selectedHeroes) {
  return selectedHeroes.reduce((accum, hero) => accum + (hero.name.startsWith('##') ? 100 : Math.min(5, hero.tier * toStar(hero.star))), 0);
}

function canBeBought(money, selectedHeroes) {
  const total = priceOfHeroes(selectedHeroes);
  return money >= total;
}

function getBuyingOptions(money, picked, bench, sold) {
  const alreadyBought = [...picked, ...bench];
  const everyHero = [...alreadyBought, ...sold];
  // console.log('start', alreadyBought, everyHero);
  let maxN = everyHero.length + 1;
  let results = [];

  if (canBeBought(money, sold)) return [everyHero];

  let havePass = true;
  while ((results.length === 0 || !havePass) && maxN > 0) {
    if (results.length !== 0) havePass = true;
    maxN -= 1;
    const teams = createTeams(everyHero, maxN);
    results = results.concat(teams.filter(t => {
      const notUsed = substractHero(alreadyBought, t);
      const needToBeBought = substractHero(t, alreadyBought);
      // console.log('--', t, notUsed, needToBeBought, money, priceOfHeroes(notUsed), priceOfHeroes(needToBeBought), canBeBought(money + priceOfHeroes(notUsed), needToBeBought) );
      return canBeBought(money + priceOfHeroes(notUsed), needToBeBought);
    }));
    // console.log(maxN, teams, results);
  }

  return results;
}

function unmergeHeroes(selectedHeroes) {
  const base = selectedHeroes.reduce((accum, hero) => {
    const downgradedHero = { ...hero, star: Math.floor(hero.star / 3) };
    return accum.concat([ downgradedHero, downgradedHero, downgradedHero ]);
  }, []);

  // console.log('unmerge', base);
  return base.map(h => ({ ...h, ...copyHeroStat(h.name, toStar(h.star)) }));
}

function deSpread(selectedHeroes, picked, bench, sold) {
  // console.log('deSpreadArgs', selectedHeroes, picked, bench, sold);
  const alreadyPicked = unionHero(selectedHeroes, picked);

  const rem1 = substractHero(selectedHeroes, alreadyPicked);
  const onTheBench = unionHero(rem1, bench);

  const rem2 = substractHero(rem1, onTheBench);
  const needToBeBought = unionHero(rem2, sold);

  const rem = substractHero(rem2, needToBeBought);
  // console.log('deSpread', alreadyPicked, rem1, onTheBench, rem2, needToBeBought, rem);
  if (rem.length === 0) return {alreadyPicked, onTheBench, needToBeBought};

  const nextIter = deSpread(unmergeHeroes(rem), substractHero(picked, alreadyPicked), substractHero(bench, onTheBench), substractHero(sold, needToBeBought));
  return {
    alreadyPicked: [...alreadyPicked, ...nextIter.alreadyPicked],
    onTheBench: [...onTheBench, ...nextIter.onTheBench],
    needToBeBought: [...needToBeBought, ...nextIter.needToBeBought],
  }
}

function sortTeam(teams, fn) {
  function mergeSort(lo, hi) {
    if (lo + 1 === hi) return [teams[lo]];
    const mid = Math.floor((hi + lo) / 2);
    const left = mergeSort(lo, mid);
    const right = mergeSort(mid, hi);

    let lidx = lo;
    let hidx = mid;
    const result = [];
    while (lidx < mid && hidx < hi) {
      if (fn(teams[lidx], teams[hidx]) < 0) {
        result.push(teams[lidx]);
        lidx += 1;
      } else {
        result.push(teams[hidx]);
        hidx += 1;
      }
    }

    while(lidx < mid) {
        result.push(teams[lidx]);
        lidx += 1;
    }

    while(hidx < hi) {
        result.push(teams[hidx]);
        hidx += 1;
    }

    return result;
  }

  return mergeSort(0, teams.length);
}

function cleanUpBench(core, bench) {
  // const sortFns = [
  //   (t => t.score.starsSimilar),
  //   (t => chopSome(t.score.mattersStarSimilar, 0)),
  //   (t => t.score.weightedAlliance),
  //   (t => t.score.preferredAlliances),
  //   (t => t.score.stars),
  //   (t => t.score.tiers),
  //   (t => t.idx * -1),
  // ];

  if (bench.length < 8) return bench;
  // const copyBench = [...bench].map(h => ({...h, star: 1}));
  return bench.filter(hero => {
    if (bench.filter(h => h.name === hero.name && h.star === hero.star).length === 3) return true;
    const copy = {...hero, star:1};
    // const idx = copyBench.findIndex(h => h.name === copy.name && h.star === copy.star);
    // const tempTeams = createTeams([...bench.slice(0,idx), ...bench.slice(idx+1), copy, copy], bench.length).map(t => [...core, ...t]).map(prepareTeam);
    const tempTeams = createTeams(bench.concat([copy]), bench.length).map(t => [...core, ...t]).map(prepareTeam);
    tempTeams.sort(compareTeamsPotential);
    // tempTeams.sort((a, b) => compareWithArrFns(a, b, sortFns));
    // console.log('---', copy, core, bench, tempTeams);
    return tempTeams[0].heroes.filter(h => h.name === copy.name).reduce((x, h) => x + h.star, 0) === core.concat(bench).filter(h => h.name === copy.name).reduce((x,h) => x + h.star, 0) + 1;
  });
}

let globalDebug = false;
function getNameOfBestPotential(selectedHeroes) {
  const fns = [
    (t => t.score.mattersTier),
    (t => t.score.weightedAlliance.slice(0,2).reduce((a,b) => a+b, 0)),
    (t => t.score.preferredAlliances),
    (t => t.score.weightedAlliance.reduce((a,b) => a+b, 0)),
    (t => t.score.tiers),
    (t => t.idx * -1),
  ]

  // const uniqueHeroes = selectedHeroes.reduce((accum, hero) => {
  //   const idx = accum.findIndex(h => h.name === hero.name);
  //   if (idx === -1)return accum.concat([{...hero}]);
  //   accum[idx].star = Math.max(accum[idx].star, hero.star);
  //   return accum;    
  // }, []);

  // const uniqueCoreHeroes = globalBestCore.reduce((accum, hero) => {
  //   const idx = accum.findIndex(h => h.name === hero.name);
  //   if (idx === -1)return accum.concat([{...hero}]);
  //   accum[idx].star = Math.max(accum[idx].star, hero.star);
  //   return accum;    
  // }, []);

  // const firstTeams = createTeams(selectedHeroes, Math.min(10, GLOBAL_N, selectedHeroes.length)).map(prepareTeam);
  // firstTeams.sort(compareTeams);
  // const firstBest = firstTeams[0].heroes;

  // if (firstBest.length === selectedHeroes.length) return firstBest.map(h => h.name);
  // if (uniqueCoreHeroes.length === uniqueHeroes.length) return uniqueCoreHeroes;
  if (globalBestCore.length === selectedHeroes.length) return globalBestCore;

  const leftoverHeroes = substractHero(selectedHeroes, globalBestCore);
  // console.log('unique', uniqueHeroes, globalBestCore, leftoverHeroes)
  const secondTeams = createTeams(leftoverHeroes, 2).map(t => prepareTeam([...globalBestCore, ...t]));
  secondTeams.sort(compareTeamsPotential);

  return secondTeams[0].heroes.map(h => h.name);
}

function createSentinel() {
  return {
    name: `##${new Date().getTime()}`,
    star: 1,
    tier: 1,
    alliances: [],
  }
}

function prepareBeforeBuy(core, bench, idx, names) {
  const heroes = [...core, ...bench];
  let bestNames = [];
  if (names !== undefined) bestNames = names;
  else bestNames = getNameOfBestPotential(heroes).concat(core.map(h => h.name));
  // return prepareTeam(heroes.map(h => bestNames.indexOf(h.name) === -1 ? createSentinel(): h), idx);
  return prepareTeam(heroes.filter(h => bestNames.indexOf(h.name) !== -1), idx);
}

let globalPotentialNames = [];
function solveIt(n, money, picked, bench, sold) {
  // console.log('n', money, picked, bench, sold);
  const d = new Date();
  const buyingOptions = getBuyingOptions(money, picked, bench, sold);
  console.log('01', (new Date().getTime() - d.getTime()) / 1000);
  console.log('bo', buyingOptions.length, n);
  // const bestOfOptionsObj = buyingOptions.map(b => pickBest(mergeHeroes([], b), n)).reduce((accum, b) => {
  const temp01 = buyingOptions.map(b => createTeams(mergeHeroes([], b), n));
  // console.log('temo01', temp01);
  console.log('01.05', (new Date().getTime() - d.getTime()) / 1000);
  const bestOfOptionsObj = temp01.reduce((accum, b) => {
    b.forEach(team => {
      accum[hashTeam(team)] = team;
      // accum[hashTeam(team.heroes)] = team;
    })

    return accum;
  }, {});
  console.log('02', (new Date().getTime() - d.getTime()) / 1000);
  const bestOfOptions = Object.keys(bestOfOptionsObj).map(k => bestOfOptionsObj[k]).map(prepareTeam);
  console.log('03', (new Date().getTime() - d.getTime()) / 1000);
  console.log('len', bestOfOptions.length);
  bestOfOptions.sort(compareTeams);
  // sortTeam(bestOfOptions, compareTeams);
  console.log('bestOfOptions', bestOfOptions)
  globalOptions = bestOfOptions;
  globalBestCore = globalOptions[0].heroes;

  const bestHeroes = bestOfOptions[0].heroes;
  const despreadResult = deSpread(bestHeroes, picked, bench, sold);
  // console.log('deSpread', bestHeroes, despreadResult.alreadyPicked, despreadResult.onTheBench, despreadResult.needToBeBought);

  const canBeSold = substractHero([...picked, ...bench], [...despreadResult.alreadyPicked, ...despreadResult.onTheBench]);
  const allHeros = [...picked, ...bench, ...sold];
  globalPotentialNames = [];
  const bestPrePotentialNames = getNameOfBestPotential(allHeros);//.concat(bestHeroes.map(h => h.name));
  globalPotentialNames = bestPrePotentialNames;
  const reallyCanBeSold = canBeSold.filter(h => bestPrePotentialNames.indexOf(h.name) === -1);
  // const reallyCanBeSold = substractHero(canBeSold, allHeros.filter(h => allHeros.filter(a => a.name === h.name && a.star === h.star).length > 1));
  // const mustBeSold = substractHero([...picked, ...bench], [...despreadResult.alreadyPicked, ...despreadResult.onTheBench]).filter(h => bestPotentialNames.indexOf(h.name) === -1);
  // const nextBench = substractHero([...picked, ...bench], [...despreadResult.alreadyPicked, ...despreadResult.onTheBench]).filter(h => bestPotentialNames.indexOf(h.name) !== -1);
  const targetPrice = Math.max(0, Math.min(50, Math.floor((money + priceOfHeroes(reallyCanBeSold) - priceOfHeroes(despreadResult.needToBeBought)) / 10) * 10));
  console.log('canBeSold', canBeSold, targetPrice);
  // const BENCH_MAX_SIZE = Math.min(8, Math.max(8, 18 - n));
  // const mustBeSold = [];
  // const canBeSold = substractHero([...picked, ...bench], [...despreadResult.alreadyPicked, ...despreadResult.onTheBench]);
  const BENCH_MAX_SIZE = 8;

  let newMoneyInitial = money - priceOfHeroes(despreadResult.needToBeBought);
  // console.log('nmi', newMoneyInitial, money, priceOfHeroes(despreadResult.needToBeBought));
  let maxBenchSize = Math.min(BENCH_MAX_SIZE, canBeSold.length);
  let tempTeams = createTeams(canBeSold, maxBenchSize).map(t => [...bestHeroes, ...t]).map(prepareTeam);
  tempTeams.sort(compareTeamsPotential);
  // // console.log('tempTeams',createTeams(canBeSold, maxBenchSize), tempTeams);
  let nextBench = substractHero(tempTeams.length > 0 ? tempTeams[0].heroes : [], bestHeroes);
  let newMoney = newMoneyInitial + priceOfHeroes(substractHero(canBeSold, nextBench));
  // let newMoney = newMoneyInitial + priceOfHeroes(mustBeSold);
  console.log('start newMoney', newMoney, nextBench, tempTeams);

  while (newMoney < targetPrice && maxBenchSize > 0) {
    maxBenchSize -= 1;
    tempTeams = createTeams(canBeSold, maxBenchSize).map(t =>  [...bestHeroes, ...t]).map(prepareTeam);
    tempTeams.sort(compareTeamsPotential);
    nextBench = substractHero(tempTeams.length > 0 ? tempTeams[0].heroes : [], bestHeroes);
    newMoney = newMoneyInitial + priceOfHeroes(substractHero(canBeSold, nextBench));
    console.log('newMoney', newMoney, nextBench, tempTeams);
  }

  const mustBeSold = substractHero(canBeSold, nextBench);

  const mayBought = substractHero(sold, despreadResult.needToBeBought);//.filter(h => bestPotentialNames.indexOf(h.name) !== -1);
  let canBeBench = [...nextBench, ...mayBought];
  maxBenchSize = Math.min(BENCH_MAX_SIZE, nextBench.length + mayBought.length);

  // tempTeams = createTeams(canBeBench, maxBenchSize).map(t => [...bestHeroes, ...t]).map(t => ({ t: prepareTeam(mergeHeroes([], t)), l: t}));
  // tempTeams.sort((a, b) => compareTeamsPotential(a.t, b.t));
  // tempTeams = createTeams(canBeBench, maxBenchSize).map(t => {
  //   const bestName = getNameOfBestPotential([...bestHeroes, ...t]);
  //   return t.filter(h => bestName.indexOf(h.name) !== -1);
  // }).map(t => [...bestHeroes, ...t]).map(t => ({ t: prepareTeam(t), x:t}));
  console.log('04', (new Date().getTime() - d.getTime()) / 1000);
  tempTeamsObj = createTeams(canBeBench, maxBenchSize).reduce((accum, t) => {
    accum[hashTeam(t)] = t;
    return accum;
  }, {});

  // globalDebug = true;
  globalPotentialNames = [];
  const bestPotentialNames = getNameOfBestPotential([...bestHeroes, ...nextBench, ...mayBought]);//.concat(bestHeroes.map(h => h.name));
  globalPotentialNames = bestPotentialNames;
  // globalDebug = false;
  console.log("potential", bestPotentialNames);
  console.log('04.05', (new Date().getTime() - d.getTime()) / 1000);
  tempTeams = Object.keys(tempTeamsObj).map(k => tempTeamsObj[k]).map(t => [...bestHeroes, ...t]).map(prepareTeam);//.map((t, idx) => prepareBeforeBuy(bestHeroes, t, idx, bestPotentialNames));
  console.log('05', (new Date().getTime() - d.getTime()) / 1000);
  tempTeams.sort(compareTeamsPotential);
  console.log('06', (new Date().getTime() - d.getTime()) / 1000);
  globalC = tempTeams;

  const startMoney = newMoney;
  let tempBreak = tempTeams.length > 0 ? tempTeams[0].heroes : [];
  // const bestBreakNames = getNameOfBestPotential(tempBreak).concat(bestHeroes.map(h => h.name));
  breakBench = substractHero(tempBreak, bestHeroes);
  // globalA = tempTeams[0].heroes; globalB = bestHeroes;
  newMoney = startMoney - priceOfHeroes(substractHero(breakBench, nextBench)) + priceOfHeroes(substractHero(nextBench, breakBench));
  console.log('mustBeSold', mustBeSold, mayBought, breakBench, newMoney, tempTeams)

  while (newMoney < 0) {
    maxBenchSize -= 1;
    tempTeams = createTeams(canBeBench, maxBenchSize).map(t => [...bestHeroes, ...t]).map(prepareTeam);//.map((t, idx) => prepareBeforeBuy(bestHeroes, t, idx));
    // tempTeams = createTeams(canBeBench, maxBenchSize).map(t => [...bestHeroes, ...t]).map(t => ({ t: prepareTeam(mergeHeroes([], t)), l: t}));
    tempTeams.sort(compareTeamsPotential);

    breakBench = substractHero(tempTeams.length > 0 ? tempTeams[0].heroes : [], bestHeroes);
    newMoney = startMoney - priceOfHeroes(substractHero(breakBench, nextBench)) + priceOfHeroes(substractHero(nextBench, breakBench));
    console.log('mustBeSold', breakBench, newMoney, tempTeams)
  }

  globalPotentialNames = [];

  globalBreak = breakBench;
  breakBench = cleanUpBench(bestHeroes, breakBench);
  globalA = nextBench;
  globalB = tempTeams;

  const soldFromBench = unionHero(mustBeSold, bench);
  const soldFromField = substractHero(mustBeSold, soldFromBench);
  // const reallyBestNames = getNameOfBestPotential([...bestHeroes, ...breakBench]).concat(bestHeroes.map(h => h.name));
  // breakBench = breakBench.filter(h => reallyBestNames.indexOf(h.name) !== -1);

  console.log('99', (new Date().getTime() - d.getTime()) / 1000);
  return { 
    mustBeSold, soldFromBench, soldFromField, mustBeBench: substractHero(substractHero(picked, despreadResult.alreadyPicked), soldFromField),
    boughtLater: substractHero(breakBench, nextBench), bestHeroes, nextBench, breakBench: mergeHeroes([], breakBench), despreadResult,
    soldLater: substractHero(nextBench, breakBench),
   };
}

function heroesToLines(selectedHeroes) {
  return selectedHeroes.map(h => `${h.name},${h.star}`).join('\n');
}

function iterativeElimination(n, money, core, bench, sold, compareFn) {
  const allHeroes = [...bench, ...sold];
  console.log('allheroes', allHeroes.map(h => h.name));
  let current = mergeHeroes(core, allHeroes);
  let excluded = {};
  let currentMoney = money;
  while(currentMoney < priceOfHeroes(sold.filter((_, x) => excluded[x + bench.length] === undefined)) || current.length > n) {
    // console.log('iter', currentMoney,  priceOfHeroes(sold.filter((_, x) => excluded[x + core.length + bench.length] === undefined)))
    // console.log(sold.filter((_, x) => excluded[x + bench.length] === undefined), current);
    // console.log(allHeroes.filter((_, x) => excluded[x] === undefined))
    if (allHeroes.filter((_, x) => excluded[x] === undefined).length === 0) break;
    const stillPossibleIdx = Array.from(new Array(allHeroes.length)).map((_, idx) => idx).filter(x => excluded[x] === undefined);
    const candidateHeroes = stillPossibleIdx.map((x, idx) => {
      const filteredHeroes = allHeroes.filter((_, y) => x !== y && excluded[y] === undefined);
      const mergedFilteredHeroes = mergeHeroes(core, filteredHeroes);
      return {
        ...prepareTeam(mergedFilteredHeroes, -1*idx),
        x,
      }
    })

    const sortedCandidates = candidateHeroes.sort(compareFn);
    // console.log('sorted', sortedCandidates[0].heroes.map(h => h.name))
    console.log('sorted', sortedCandidates)
    const deletedX = sortedCandidates[0].x;
    excluded[deletedX] = true;
    if (deletedX < bench.length) currentMoney += priceOfHeroes([allHeroes[deletedX]]);
    current = sortedCandidates[0].heroes;
  }

  return allHeroes.filter((_, x) => excluded[x] === undefined);
}

function pickCore(money, picked, bench, sold) {
  return iterativeElimination(GLOBAL_N, money, [], [...picked, ...bench], sold, compareTeams);
}

function pickMainBench(money, core, picked, bench, sold) {
  return iterativeElimination(GLOBAL_N + 4, money, core, [...picked, ...bench], sold, compareTeamsPotential);
}

function pickAdditionalBench(money, core, picked, bench, sold) {
  return iterativeElimination(GLOBAL_N + 8, money, core, [...picked, ...bench], sold, compareTeamsPotential);
}

function simpleSolver(money, picked, bench, sold) {
  const core = pickCore(money, picked, bench, sold, compareTeams);
  console.log('======= core =======', core);
  const fieldLimbo = substractHero(picked, core);
  const coreNotFromField = substractHero(core, picked);
  const benchLimbo = substractHero(bench, coreNotFromField);
  const coreFromSold = substractHero(coreNotFromField, bench);
  const soldLimbo = substractHero(sold, coreFromSold);

  const moneyAfterCore = money - priceOfHeroes(coreFromSold);
  const mainBench = pickMainBench(moneyAfterCore, core, fieldLimbo, benchLimbo, soldLimbo);
  console.log('======= mainBench =======', mainBench);
  const fieldLimbo2 = substractHero(fieldLimbo, mainBench);
  const coreNotFromField2 = substractHero(mainBench, fieldLimbo);
  const coreFromField2 = unionHero(mainBench, fieldLimbo);
  const benchLimbo2 = substractHero(benchLimbo, coreNotFromField2);
  const coreFromBench2 = unionHero(substractHero(mainBench, coreFromField2), benchLimbo);
  const coreFromSold2 = substractHero(coreNotFromField2, benchLimbo);
  const soldLimbo2 = substractHero(soldLimbo, coreFromSold2);

  // const moneyAfterBench = moneyAfterCore - priceOfHeroes(coreFromSold2);
  const targetPrice = Math.max(0, Math.min(50, Math.floor((moneyAfterCore + priceOfHeroes(fieldLimbo2) + priceOfHeroes(benchLimbo2)) / 10) * 10));
  console.log('======= targetPrice =======', targetPrice);

  const benchBeforeStart = pickAdditionalBench(moneyAfterCore - targetPrice, [...core, ...coreFromField2, ...coreFromBench2], fieldLimbo2, benchLimbo2, []);
  console.log('======= benchBeforeStart =======', benchBeforeStart);
  const soldBench = substractHero([...fieldLimbo2, ...benchLimbo2], benchBeforeStart);
  const moneyBeforeStart = moneyAfterCore + priceOfHeroes(soldBench);

  // const fullBench = pickAdditionalBench(moneyBeforeStart, [...core, ...mainBench], [], benchBeforeStart, soldLimbo2);
  const fullBench = pickAdditionalBench(moneyBeforeStart, core, [...coreFromField2, ...coreFromBench2], benchBeforeStart, soldLimbo);
  console.log('======= fullBench =======', fullBench);
  const cleanFullBench = cleanUpBench(core, fullBench);

  const soldFromField = substractHero(fieldLimbo, cleanFullBench);
  const fullBenchNotFromField = substractHero(cleanFullBench, fieldLimbo);
  globalBestCore = core;
  console.log('result', benchBeforeStart, fullBench, cleanFullBench)

  const core1 =  mergeHeroes([], core);
  const bench1 = mergeHeroes([], cleanFullBench);
  const merged = mergeHeroes(core1, bench1);
  const definitelyBench = unionHero(bench1, substractHero(merged, core1));
  const definitelyCore = substractHero(merged, definitelyBench);
  console.log('CORE', definitelyCore)

  return {
    core: definitelyCore, bench: definitelyBench,
    soldFromField,
    soldFromBench: substractHero(benchLimbo, fullBenchNotFromField),
    benchToField: substractHero(bench, benchLimbo),
    soldToField: coreFromSold,
    fieldToBench: unionHero(fieldLimbo, cleanFullBench),
    soldToBench: substractHero(fullBenchNotFromField, benchLimbo),
  };
}

function calculateScore() {
  const lines = getText('current').split('\n').map(s => s.trim()).filter(s => s);
  console.log(getText('current'));
  const firstSepIdx = lines.indexOf('---');
  const secondSepIdx = lines.slice(firstSepIdx+1).indexOf('---') + firstSepIdx + 1;
  const thirdSepIdx = lines.slice(secondSepIdx+1).indexOf('---') + secondSepIdx + 1;
  const fourthSepIdx = lines.slice(thirdSepIdx+1).indexOf('---') + thirdSepIdx + 1;

  const pickLines = lines.slice(0, firstSepIdx);
  const benchLines = lines.slice(firstSepIdx+1, secondSepIdx);
  const shopLines = lines.slice(secondSepIdx+1, thirdSepIdx);

  // const lastLine = lines[secondSepIdx+1].split(',');
  // const n = parseInt(lastLine[0],10);
  // const off = parseInt(lastLine[1], 10);
  // const sup = parseInt(lastLine[2], 10);
  // const def = parseInt(lastLine[3], 10);

  const lastLine = lines.slice(thirdSepIdx+1, fourthSepIdx).join('\n');
  const n = parseInt(lines[thirdSepIdx+1].split(',')[0],10);
  GLOBAL_N = n;
  const prevN = parseInt(lines[thirdSepIdx+1].split(',')[1] || n,10);
  const money = parseInt(lines[thirdSepIdx+2], 10);
  const off = (lines[thirdSepIdx+3] || '').split(',').map(s => parseInt(s, 10));
  const sup = (lines[thirdSepIdx+4] || '').split(',').map(s => parseInt(s, 10));
  const def = (lines[thirdSepIdx+5] || '').split(',').map(s => parseInt(s, 10));


  const mainHeroes = getHeroes(pickLines);
  const optHeroes = getHeroes(benchLines);
  const shopHeroes = getHeroes(shopLines);

  preferredAlliances = lines.slice(fourthSepIdx+1);//.concat(reallyTempTeam[0].heroes[0].alliances);
  // const reallyTempTeam = createTeams([...mainHeroes, ...optHeroes, ...shopHeroes], 1).map(prepareTeam);
  // reallyTempTeam.sort(compareTeams);
  // preferredAlliances = lines.slice(fourthSepIdx+1).concat(reallyTempTeam[0].heroes[0].alliances);
  // console.log('prove', preferredAlliances);

  // const candidates = mergeHeroes(mainHeroes, optHeroes);

  // const best = n >= 4 ? pickBestWithBench(candidates, n, 1) : pickBestWithBench(candidates, n, 0);
  // const best = pickBestWithBench(candidates, n, 2);
  // globalBest = best;
  // const bestHeroes = best.heroes;
  // const bestBench = best.bench;
  // const cleanNames = mainNames.map(hero => hero.name);

  const solveResults = simpleSolver(money, mainHeroes, optHeroes, shopHeroes);
  console.log('solveResults', solveResults);
  globalSolved = solveResults;

  const bestFull = [...solveResults.core, ...solveResults.bench].reduce((accum, hero) => {
    if (accum.findIndex(h => h.name === hero) === -1) return [...accum, hero];
    return accum;
  }, []);
  // const bestUpgrade = sortForUpgrade(bestFull, n).slice(0,2);

  nextNames = `${heroesToLines(solveResults.core)}\n---\n${heroesToLines(solveResults.bench)}\n---\n\n---\n${lastLine}\n---\n${preferredAlliances.join('\n')}`;

  // nextNames = bestFull.map(h => {
  //   // if (h.name === bestUpgrade[0] || h.name === bestUpgrade[1] || h.star === 9) return h;
  //   if (h.star === 9) return h;
  //   h.star = Math.min(3, h.star);
  //   return h;
  // }).reduce((accum, hero,idx) => {
  //   // const correctName = names.find(name => {
  //   //   const h = findHero(name.split(',')[0]);
  //   //   return h && h.name === heroName;
  //   // });
  //   // if (!correctName) throw new Error('no correct name found!');
  //   return `${accum}${hero.name},${hero.star}\n`
  // }, '') + `\n---\n\n---\n${lastLine}\n---\n${preferredAlliances.join('\n')}`;

  // const bestPerk = perkCountRaw(best[0].heroes).filter(s => s[1] > 0).map(s => s[0]);
  // const noPerkYet = best[0].heroes.filter(hero => {
  //   return bestPerk.every(alliance => hero.alliances.indexOf(alliance) === -1);
  // }).map(h => h.name);

  // const mainNames = mainHeroes.map(h => h.name);
  // const optNames = optHeroes.map(h => h.name);
  // console.log('heroes', mainNames, optNames);
  // best.slice(0,5).forEach(opt => {
  //   // console.log(opt.heroes.map(h => h.name), opt.bench.map(h => h.name));
  //   const perk = perkCountRaw(opt.heroes).filter(s => s[1] > 0);
  //   // console.log(perk, opt.score.stars, opt.score.tiers);
  // })

  // console.log('f', bestFull);

  // const shouldBuyStar = bestHeroes.filter(hero => hero.star < 3 && hero.tier < 4).length;
  // const supportShouldBuy = bestHeroes.filter(hero => hero.star >= 3 && hero.tier === 2).length;
  // const shouldBuy = bestFull.map(hero => (hero.star >= 3 && hero.name !== bestUpgrade[0] && hero.name !== bestUpgrade[1]) ? 0 : poolsPercentage[n-1][hero.tier-1] / tierPoolCounts[hero.tier-1])
  const someBest = getNameOfBestPotential(bestFull);
  // const shouldBuy = bestFull.filter(h => someBest.indexOf(h.name) !== -1).reduce((accum, h) => {
    const shouldBuy = bestFull.filter(h => someBest.indexOf(h.name) !== -1 && bestFull.findIndex(a => a.name === h.name && a.star >= 3) === -1).reduce((accum, h) => {
    if (h.star >= 3 || accum.some(a => h.name === a.name)) return accum;
    return accum.concat([h]);
  }, []).map(hero => (hero.star >= 3) ? 0 : poolsPercentage[n-1][hero.tier-1] / tierPoolCounts[hero.tier-1])
    .reduce((accum, x) => accum + x, 0) / 100;
  // console.log('s?', bestFull.map(hero => hero.tier >= 4 || (hero.star >= 3 && hero.tier !== 2)? 0 : poolsPercentage[n-1][hero.tier-1] / tierPoolCounts[hero.tier-1]));

  // console.log('prob', shouldBuy);
  const bestDefHero = sortForPosition(solveResults.core);
  const weapons = pickForWeapon(solveResults.core, off, sup, def);
  const offWeapons = weapons.offHero.map(w => bestDefHero.length - bestDefHero.indexOf(w));
  const supWeapons = weapons.supHero.map(w => bestDefHero.length - bestDefHero.indexOf(w));
  const defWeapons = weapons.defHero.map(w => bestDefHero.length - bestDefHero.indexOf(w));

  globalPrinted = {
    probability: 100 * (1 - Math.pow(1 - shouldBuy,5)),
    soldFromField: solveResults.soldFromField.map(h => h.name),
    soldFromBench: solveResults.soldFromBench.map(h => h.name),
    mustBeBench: solveResults.fieldToBench.map(h => h.name),
    mustBeFielded: solveResults.benchToField.map(h => h.name),
    mustBeBought: solveResults.soldToField.map(h => h.name),
    weapons: `${stylizeLine(offWeapons)}${stylizeLine(supWeapons)}${stylizeLine(defWeapons)}`,

    boughtLater: solveResults.soldToBench.map(h => h.name),
    bestDefHero: bestDefHero.map((s,id) => `${bestDefHero.length - id} - ${s}`),
  };

  printToScreen(globalPrinted);
} 

function stylizeLine(colls) {
  return `<p>${colls.map(s => s.toString()).join(', ')}</p>`;
}

function applyText() {
  document.getElementById('current').value = nextNames;
}

// function cleanText() {
//   const lines = getText('current').split('\n').map(s => s.trim()).filter(s => s);
//   const firstSepIdx = lines.indexOf('---');
//   const secondSepIdx = lines.slice(firstSepIdx+1).indexOf('---') + firstSepIdx + 1;
//   const n = parseInt(lines[secondSepIdx+1],10);

//   document.getElementById('current').value = lines.slice(0,firstSepIdx+1).join('\n') + `\n\n---\n${n}`;
// }

let autoId = '';
let globalPrinted = '';
function calculateScoreAuto() {
  printToScreen({ calculating: true, ...globalPrinted});
  clearTimeout(autoId);
  autoId = setTimeout(() => {
    calculateScore();
  }, 1000);
}

function resetText() {
  document.getElementById('current').value = `---\n\n---\n\n---\n1\n1\n0\n0\n0\n---\n`;
}
