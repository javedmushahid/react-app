import React, { useState } from 'react';

const QuestionSix = () => {
    const [data, setData] = useState('');

    const handleDataChange = (newData) => {
        setData(newData);
    };

    return <>
        <div>
        <h1 className="font-bold text-2xl">First Child Component Data Is Passed To Second Child Component.</h1>
            <ChildComponentA onDataChange={handleDataChange} />
            <br></br>
            <hr></hr>
            <ChildComponentB data={data} />
        </div>
    </>
};

const ChildComponentA = ({ onDataChange }) => {
    const handleInputChange = (event) => {
        const newData = event.target.value;
        onDataChange(newData);
    };

    return <>
        <div className="flex flex-col gap-y-6 items-center justify-center w-full h-full text-3xl font-bold">
            <h1>First Child Component</h1>
            <h1>Enter Text:</h1>
            <input type="text" onChange={handleInputChange} />
        </div>
    </>
};

const ChildComponentB = ({ data }) => {
    return <>
        <div className="flex flex-col gap-y-6 items-center justify-center w-full h-full text-3xl font-bold">
            <h1>Second Child Component</h1>
            <p>Data from First Child Component: <span className="text-white">{data}</span></p>
        </div>
    </>
};

export default QuestionSix;
