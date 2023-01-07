import IBehaviour from "./IBehaviour";

export default interface IBehaviourFactory {
    getBehaviour(behaviour: string): Function;
}
