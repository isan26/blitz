
import { DetailedReactHTMLElement } from 'react';
import IComponent from './IComponent';
import IBehaviourFactory from './IBehaviourFactory';
import IComponentFactory from './IComponentFactory';

export default interface IUIElement {
    // new(behaviours: IBehaviourFactory, components: IComponentFactory): IUIElement;
    render(component: IComponent): JSX.Element | DetailedReactHTMLElement<{}, HTMLElement>;
}

// declare const IUIElement: IUIElement;
