import BehaviourFactory from "core/Classes/BehaviourFactory";


const behaviourPool = {
    "category": {
        "subcategory": {
            "test": () => "outputfromtest"
        }
    }
}

describe('BehaviourFactory', () => {
    it('should return a behaviour', () => {
        const behaviour = new BehaviourFactory(behaviourPool);
        const method = behaviour.getBehaviour({
            behaviour: "category.subcategory.test",
        });

        expect(method()).toBe("outputfromtest");
    });
});
