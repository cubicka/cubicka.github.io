const txt = `
anti-mage,1,elusive,demon hunter
axe,1,brawny,warrior
batrider,1,troll,knight
bloodseeker,1,human,assassin
bounty hunter,1,scrappy,assassin
clockwerk,1,scrappy,inventor
drow ranger,1,heartless,hunter
enchantress,1,savage,druid
ogre magi,1,blood-bound,mage
shadow shaman,1,troll,shaman
tinker,1,scrappy,inventor
tiny,1,primordial,warrior
tusk,1,savage,warrior
warlock,1,blood-bound,warlock
beastmaster,2,brawny,hunter
chaos knight,2,demon,knight
crystal maiden,2,human,mage
juggernaut,2,brawny,warrior
luna,2,elusive,knight
morphling,2,primordial,assassin
nature's prophet,2,elusive,druid
puck,2,elusive,dragon,mage
pudge,2,heartless,warrior
queen of pain,2,demon,assassin
slardar,2,scaled,warrior
timbersaw,2,scrappy,inventor
treant protector,2,elusive,druid
witch doctor,2,troll,warlock
abaddon,3,heartless,knight
arc warden,3,primordial,shaman
lina,3,human,mage
lycan,3,human,savage,warrior
omniknight,3,human,knight
phantom assassin,3,elusive,assassin
razor,3,primordial,mage
sand king,3,savage,assassin
shadow fiend,3,demon,warlock
slark,3,scaled,assassin
sniper,3,deadeye,hunter
terrorblade,3,demon,demon hunter
venomancer,3,savage,warlock
viper,3,dragon,assassin
windranger,3,elusive,hunter
alchemist,4,scrappy,warlock
disruptor,4,brawny,shaman
doom,4,demon,warrior
dragon knight,4,human,dragon,knight
keeper of the light,4,human,mage
kunkka,4,human,warrior
lone druid,4,savage,druid
medusa,4,scaled,hunter
mirana,4,elusive,hunter
necrophos,4,heartless,warlock
templar assassin,4,elusive,assassin
troll warlord,4,troll,warrior
enigma,5,primordial,warlock
gyrocopter,5,deadeye,inventor
lich,5,heartless,mage
techies,5,scrappy,inventor
tidehunter,5,scaled,hunter`;
 
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
  scrappy: [3,6],
  shaman: [2],
  troll: [2,4],
  warlock: [2,4,6],
  warrior: [3,6,9],
};
 
let heroes = [];
let heroesByAlliances = {};
let alliances = [];
 
function setup() {
  const lines = txt.split('\n').filter(s => s).map(s => s.split(','));
  heroes = lines.map(line => {
    const name = line[0];
    const alliances = line.slice(2);
    return { name, alliances, tier: parseInt(line[1], 10) };
  });
 
  heroes.forEach(hero => {
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
 
function perksCount(selectedHeroes) {
  const counts = alliancesCount(selectedHeroes);
  const result = counts.map(s => {
    const count = s[1];
    const limitPassed = allianceLimits[s[0]].filter(x => x <= count);
    return limitPassed.length > 0 ? limitPassed[limitPassed.length-1] : 0;
  });
 
  result.sort((a,b) => b-a);
  return result;
}
 
function potentialCount(selectedHeroes) {
  const counts = alliancesCount(selectedHeroes);
  const result = counts.map(s => {
    const count = s[1];
    const limitPassed = allianceLimits[s[0]].filter(x => x <= count + 10 - selectedHeroes.length);
    return limitPassed.length > 0 ? limitPassed[limitPassed.length-1] : 0;
  });
 
  result.sort((a,b) => b-a);
  return result;
}
 
function alliancesCount(selectedHeroes) {
  const counts = {};
  selectedHeroes.forEach(hero => {
    hero.alliances.forEach(alliance => {
      counts[alliance] = counts[alliance] || 0;
      counts[alliance]++;
    });
  });
 
  return alliances.map(alliance => ([alliance, counts[alliance] || 0]));
}
 
function starsCount(selectedHeroes) {
  const counts = selectedHeroes.map(s => s.star);
  counts.sort((a,b) => b-a);
  return counts;
}
 
function tiersCount(selectedHeroes) {
  const counts = selectedHeroes.map(s => s.tier);
  counts.sort((a,b) => b-a);
  return counts;
}
 
function toStar(n) {
  if (n < 3) return 1;
  if (n < 9) return 2;
  return 3;
}
 
function findSeq(colls, items) {
  return items.reduce((accum, item) => {
    const idx = colls.slice(accum).indexOf(item);
    return idx === -1 ? colls.length + 1 : accum + idx + 1;
  }, 0) !== colls.length + 1;
}
 
function getHeroes(names) {
  return names.map(s => s.split(',')).map(([name, star]) => {
    const h = heroes.find(hero => {
      if (name.length === 3) return hero.name.toLowerCase().startsWith(name.toLowerCase());
      return findSeq(hero.name.toLowerCase().split(''), name.split(''));
    });
    if (h === undefined) throw new Error('Cant find ' + name);
    return {...h, star: star ? toStar(parseInt(star, 10)) : 1};
  });
}
 
function compareValues(first, second) {
  for(let i = 0; i < Math.min(first.length, second.length); i++) if (first[i] !== second[i]) return second[i] - first[i];
  return 0;
}
 
function compareAlliance(first, second) {
  const firstCount = alliancesCount(first).map(counts => counts[1]);
  const secondCount = alliancesCount(second).map(counts => counts[1]);
 
  firstCount.sort((a,b) => b-a); secondCount.sort((a,b) => b-a);
  return compareValues(firstCount, secondCount);
}
 
function compareStars(first, second) {
  return compareValues(starsCount(first), starsCount(second));  
}
 
function compareTiers(first, second) {
  return compareValues(tiersCount(first), tiersCount(second));  
}
 
function comparePerks(first, second) {
  return compareValues(perksCount(first), perksCount(second));
}
 
function comparePotential(first, second) {
  return compareValues(potentialCount(first), potentialCount(second));
}
 
function createTeams(heroes, n) {
  function rec(selected, x, k) {
    if (k === heroes.length) {
      if (x === n) return [selected];
      return [];
    }
 
    const first = rec([...selected, heroes[k]], x+1, k+1);
    const second = rec(selected, x, k+1);
    return [...first, ...second];
  }
 
  return rec([], 0, 0);
}
 
function countMatters(selectedHeroes) {
  const counts = alliancesCount(selectedHeroes);
  const allianceMatter = counts.map(s => {
    const count = s[1];
    const limitPassed = allianceLimits[s[0]].filter(x => x <= count);
    return limitPassed.length > 0 ? s[0] : undefined;
  }).filter(s => s);
 
  const recap = selectedHeroes.map(hero => {
    return hero.alliances.some(all => allianceMatter.indexOf(all) !== -1) ? [hero.tier, hero.star] : [0, 0];
  });
 
  const tierCount = recap.map(x => x[0]);
  const starCount = recap.map(x => x[1]);
 
  tierCount.sort((a,b) => b-a); starCount.sort((a,b) => b-a);
  return {tier: tierCount, star: starCount};
}
 
function compareMatter(first, second) {
  const firstMatter = countMatters(first);
  const secondMatter = countMatters(second);
  // console.log('matter', firstMatter, secondMatter);
 
  const starResult = compareValues(firstMatter.star, secondMatter.star);
  if (starResult !== 0) return starResult;
 
  const tierResult = compareValues(firstMatter.tier, secondMatter.tier);
  if (tierResult !== 0) return tierResult;
 
  return 0;
}
 
function compareHeroes(first, second) {
  const matterResult = compareMatter(first, second);
  if (matterResult !== 0) return matterResult;
 
  const allcounts = compareAlliance(first, second);
  if (allcounts !== 0) return allcounts;
 
  const perks = comparePerks(first, second);
  if (perks !== 0) return perks;
 
  const stars = compareStars(first, second);
  if (stars !== 0) return stars;
 
  const tiers = compareTiers(first, second);
  if (tiers !== 0) return tiers;
 
  const potential = comparePotential(first, second);
  if (potential !== 0) return potential;
 
  return 0;
}
 
function compareTeams(first, second) {
  const heroesComparison = compareHeroes(first.heroes, second.heroes);
  if (heroesComparison !== 0) return heroesComparison;
  return first.idx - second.idx;
}
 
function pickBest(heroes, n) {
  const teams = createTeams(heroes, n).map((heroes, idx) => {
      const all = alliancesCount(heroes).map(counts => counts[1]);
      all.sort((a,b) => b-a);
      return {
        heroes, idx, score: {
          perk: perksCount(heroes), stars: starsCount(heroes), tiers: tiersCount(heroes), all, potential: potentialCount(heroes),
        }
      };
    });
  teams.sort(compareTeams);
  console.log('best', teams[0].heroes.map(s => s.name), teams[0].score.perk);
  return teams;
}
 
function solve(names, n) {
  const heroes = getHeroes(names);
  return pickBest(heroes, n);
}
 
setup();
 
function printHeroes() {
  const heroNames = heroes.map(hero => hero.name);
  printToScreen(heroNames);
}
 
function toString(s) {
  if (typeof s === 'string') return s;
  if (typeof s === 'number') return s.toString();
  if (Object.prototype.toString.call(s) === '[object Array]') {
    return `<ul>${s.reduce((accum, item) => `${accum}<li>${toString(item)}</li>`, '')}</ul>`;
  }
 
  return Object.keys(s).reduce((accum, key) => {
    return accum + `<h3>${key}</h3><span>${toString(s[key])}</span>`;
  }, '');
}
 
function getText(name) {
  return document.getElementById(name).value;
}
 
function printToScreen(s) {
  document.getElementById('text').innerHTML = toString(s);
}
 
let bestHeroesPerLatestCalculation;
function calculateScore() {
  const lines = getText('current').split('\n').map(s => s.trim()).filter(s => s);
  const firstSepIdx = lines.indexOf('---');
  const secondSepIdx = lines.slice(firstSepIdx+1).indexOf('---') + firstSepIdx + 1;
 
  const mainNames = getHeroes(lines.slice(0, firstSepIdx));
  const optNames = getHeroes(lines.slice(firstSepIdx+1,secondSepIdx));
  const n = parseInt(lines[secondSepIdx+1],10);
 
  const names = [...lines.slice(0, firstSepIdx), ...lines.slice(firstSepIdx+1,secondSepIdx)];
 
  const best = solve(names, n);
  const bestHeroes = best[0].heroes.map(s => s.name);
  const cleanNames = mainNames.map(hero => hero.name);
  console.log('best', best);
 
  printToScreen({
    best: bestHeroes,
    delete: cleanNames.filter(name => bestHeroes.indexOf(name) === -1),
    buy: bestHeroes.filter(name => cleanNames.indexOf(name) === -1),
  });
}
 
function applyText() {
 
}
 
let autoId = '';
function calculateScoreAuto() {
  printToScreen('calculate');
  clearTimeout(autoId);
  autoId = setTimeout(() => {
    calculateScore();
  }, 1000);
}