import Animal from "./Animal";
import Computer from "./Computer";
import Food from "./Food";
import Misc from "./Misc";

function getRandomItemFromArray(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default {
    animal: () => getRandomItemFromArray(Animal),
    computer: () => getRandomItemFromArray(Computer),
    food: () => getRandomItemFromArray(Food),
    misc: () => getRandomItemFromArray(Misc),
    about: (topic: string) => {
        switch (topic) {
            case 'animal': return getRandomItemFromArray(Animal);
            case 'computer': return getRandomItemFromArray(Computer);
            case 'food': return getRandomItemFromArray(Food);
            case 'misc': return getRandomItemFromArray(Misc);
            default: {
                console.warn(`Joke about ${topic} not found`);
                return getRandomItemFromArray([...Misc, ...Animal, ...Computer, ...Food]);
            }
        }
    }
}
