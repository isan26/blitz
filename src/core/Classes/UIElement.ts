import { createElement } from "react"
import IUIElement from "../Interfaces/IUIElement";
import IBehaviourFactory from "core/Interfaces/IBehaviourFactory";
import IComponentFactory from "core/Interfaces/IComponentFactory";
import IComponent from "core/Interfaces/IComponent";

export default class UIElement implements IUIElement {
    private behaviours: IBehaviourFactory;
    private components: IComponentFactory;

    constructor(behaviours: IBehaviourFactory, components: IComponentFactory) {
        this.behaviours = behaviours;
        this.components = components;
    }

    render(component: IComponent): JSX.Element {
        console.log("RENDERING: ", component.component);
        const uiComponent = this.components.get(component);
        const newProps = this.replaceBehaviours(component.props);
        const children = component.children ? this.renderChildren(component) : [];

        console.log("RENDERED: ", uiComponent, newProps, children)

        return createElement(uiComponent, newProps, ...children);
    }

    private replaceBehaviours(props: { [key: string]: any } = {}): { [key: string]: any } {
        const newProps: { [key: string]: any } = {};
        for (const key in props) {
            if (typeof props[key] == 'object') {
                if (props[key]['behaviour']) {
                    const behaviour = this.behaviours.getBehaviour(props[key]['behaviour']);
                    if (props[key]['args']) {
                        const args = props[key]['args'];
                        newProps[key] = () => behaviour(...args);
                    } else {
                        newProps[key] = behaviour;
                    }
                } else {
                    newProps[key] = this.replaceBehaviours(props[key]);
                }
            } else {
                newProps[key] = props[key];
            }
        }

        return newProps;
    }

    private renderChildren(component: IComponent): JSX.Element[] {
        console.log("RENDER CHILDREN", component);
        const { children } = component;
        if (!children) return [];
        if (typeof children === 'string') return children;
        return children.map(child => typeof child === 'string' ? child : this.render(child));
    }

}
