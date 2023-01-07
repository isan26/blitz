import IComponent from "core/Interfaces/IComponent";
import IBehaviourFactory from "core/Interfaces/IBehaviourFactory";
import IComponentFactory from "core/Interfaces/IComponentFactory";
import UIElement from "core/Classes/UIElement";

function blitz(components: IComponentFactory, behaviours: IBehaviourFactory) {
    const renderer = new UIElement(behaviours, components);

    return function (config: IComponent[]) {

        console.log(config);
        const root: IComponent = {
            component: "div",
            props: {},
            children: config
        };

        return renderer.render(root);
    };
};


export default blitz;
