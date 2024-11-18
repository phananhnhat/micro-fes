import {createSignal} from "solid-js";

export default () => {
    const [count, setCount] = createSignal(0);

    return (
        <div class="bg-blue-600 text-white p-5">
            <div>This is counter solid</div>
            <div>Count = {count()}</div>
            <button onClick={() => setCount(count() + 1)}>Add One</button>
        </div>
    );
};
