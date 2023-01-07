import IBehaviourFactory from "../Interfaces/IBehaviourFactory";
import IBehaviourPool from "../Interfaces/IBehaviourPool";
import IBehaviour from "../Interfaces/IBehaviour";

class BehaviourFactory implements IBehaviourFactory {

    private behaviourPool: IBehaviourPool;
    constructor(BehaviourPool: IBehaviourPool) {
        this.behaviourPool = BehaviourPool;
    }

    getBehaviour(behaviour: IBehaviour): Function {
        const { behaviour: behaviourName } = behaviour;
        const address = behaviourName.split(".");

        const behaviourFromPool = this.getBehaviourFromPool(address);

        if (!behaviourFromPool) {
            throw new Error(`Behaviour ${behaviourName} not found in the behaviour pool`);
        }

        return behaviourFromPool;
    }

    private getBehaviourFromPool(address: string[]): Function | null {
        let behaviour = { ...this.behaviourPool } as any;
        for (let i = 0; i < address.length; i++) {
            if (!behaviour[address[i]]) {
                return null;
            }
            behaviour = behaviour[address[i]];
        }

        return behaviour;
    }

}

export default BehaviourFactory;
