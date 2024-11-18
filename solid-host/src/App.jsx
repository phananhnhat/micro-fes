import {render} from "solid-js/web";
import {onMount} from "solid-js";

import Counter from "solid_component/Counter";
import renderSolidCounter from "solid_component/counterWrapper";
import renderReactCounter1 from "react_component_1/counterWrapper";
import renderReactCounter2 from "react_component_2/counterWrapper";

import "./index.scss";

const App = () => {

    let div1Ref;
    let div2Ref;
    let div3Ref;

    onMount(() => {
        renderSolidCounter(div3Ref);
        renderReactCounter1(div1Ref);
        renderReactCounter2(div2Ref);
    });

    return (<div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: host</div>
        <Counter />
        <div ref={div1Ref}></div>
        <div ref={div2Ref}></div>
        <div ref={div3Ref}></div>
    </div>)
};
render(App, document.getElementById("app"));
