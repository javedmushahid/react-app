import React, { useState, useEffect, useCallback, useContext } from "react";


const MyContext = React.createContext();

const ExampleComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('Component mounted');

        // Cleanup function
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    useEffect(() => {
        console.log('Count value changed:', count);
    }, [count]);

    const handleChange = useCallback((event) => {
        setText(event.target.value);
    }, []);

    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const contextValue = useContext(MyContext);

    return <>
        <div className="flex flex-col gap-y-12 w-full h-full items-center justify-center text-3xl">

            <div className="flex flex-col gap-y-4 bg-blue-200 rounded-md p-4 text-3xl text-center font-bold">
                <h1 className="">For This Task, I Have Used, UseState, UseEffect, UseCallback and UseContext Hook To Update The State Values.</h1>
                <h1>
                    Context Value Field Is The Context Passed.
                </h1>
            </div>

            <div className="flex flex-col gap-y-4 items-center justify-center">
                <h1>Count: {count}</h1>
                <button onClick={handleClick} className="bg-red-600 p-4 text-white rounded-md hover:cursor-pointer">Increment</button>

                <input type="text" value={text} onChange={handleChange} />
                <p>Entered Text: {text}</p>

                <p>Context Value: {contextValue}</p>
            </div>
        </div>
    </>
};

const QuestionThree = () => {
    return (
        <MyContext.Provider value="Hello from Context!">
            <ExampleComponent />
        </MyContext.Provider>
    );
};

export default QuestionThree;
