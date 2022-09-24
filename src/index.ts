// import Fighter from './Fighter/Fighter';
import Character from './Character';

const c1 = new Character('');
const result = () => {
  let res = true;
  for (let i = 0; i < 3; i++) {
    const previousLife = c1.lifePoints;
    if (previousLife <= 0) break;
    console.log("l0", previousLife);
    const life = c1.receiveDamage(10 ** i);
    console.log(`l${i}`, life);
    res = 10 ** i > previousLife + c1.defense ? life === -1 : life <= previousLife && life >= previousLife - (10 ** i);
    if (!res) break;
  }
  return res;
};

console.log(result());
