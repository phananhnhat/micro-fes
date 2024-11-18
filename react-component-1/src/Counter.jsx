import { useState } from "react";
import React from "react";

export default () => {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-red-300 text-white p-5">
            <div>This is counter react 1</div>
            <div>Count = {count}</div>
            <button onClick={() => setCount(count + 1)}>Add One</button>
        </div>
    );
};
