import IComponent from "./IComponent";
import IComponentPool from "./IComponentPool";
import ComponentFactory from "../Classes/ComponentFactory";
import { FunctionComponent } from "react";

export default interface IComponentFactory {
    // new(ComponentPool: IComponentPool): ComponentFactory;
    get(component: IComponent): FunctionComponent | string;
}
