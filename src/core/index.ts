import IComponent from "core/Interfaces/IComponent";
import UIElement from "core/Classes/UIElement";
import IComponentPool from "./Interfaces/IComponentPool";
import IBehaviourPool from "./Interfaces/IBehaviourPool";
import ComponentFactory from "./Classes/ComponentFactory";
import BehaviourFactory from "./Classes/BehaviourFactory";


function blitz(components: IComponentPool, behaviours: IBehaviourPool) {
    const componentFactory = new ComponentFactory(components);
    const behaviourFactory = new BehaviourFactory(behaviours);

    const renderer = new UIElement(behaviourFactory, componentFactory);

    return function (config: any[]) {
        const root: IComponent = {
            component: "div",
            props: {},
            children: config as IComponent[]
        };

        return renderer.render(root);
    };
};


export default blitz;
