import IUIElement from "core/Interfaces/ICompositeElement";
import IComponent from "core/Interfaces/IComponent";
import IBehaviourFactory from "core/Interfaces/IBehaviourFactory";
import IComponentFactory from "core/Interfaces/IComponentFactory";
import UIElement from "core/Classes/CompositeElement";


export default class Page implements IUIElement {
    private renderer: IUIElement;
    private page: IComponent[] = [];

    constructor(behaviours: IBehaviourFactory, components: IComponentFactory) {
        this.renderer = new UIElement(behaviours, components);
    }

    public setConfig(config: IComponent[]) {
        this.page = config;
    }

    public render(): JSX.Element {
        const root: IComponent = {
            component: "div",
            props: {},
            children: this.page
        }

        return this.renderer.render(root);
    }

}
