import React, {useRef, useEffect} from "react";
import ReactDOM from "react-dom";

import solidCounter from "solid_component/counterWrapper";
import renderReactCounter1 from "react_component_1/counterWrapper";
import renderReactCounter2 from "react_component_2/counterWrapper";
import ReactCounter1 from "react_component_1/Counter";
import ReactCounter2 from "react_component_2/Counter";
import renderReactCounterByVite from "react_component_by_vite/counterWrapper";

import "./index.scss";

const App = () => {
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);

    useEffect(() => {
        solidCounter(div1Ref.current);
        renderReactCounter1(div2Ref.current);
        renderReactCounter2(div3Ref.current);
        renderReactCounterByVite(div4Ref.current);
    }, []);

    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: react-host</div>
            <ReactCounter1/>
            <ReactCounter2/>
            <div ref={div1Ref}></div>
            <div ref={div2Ref}></div>
            <div ref={div3Ref}></div>
            <div ref={div4Ref}></div>
        </div>
    );
};
ReactDOM.render(<App/>, document.getElementById("app"));
