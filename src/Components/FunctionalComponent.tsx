import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

interface GreetingProps {
    name: string;
}

const FunctionalComponent: React.FC<GreetingProps> = ({ name }) => {

    const dispatch = useDispatch();
    const getName = useSelector((state) => state.userReducer.name);

    const [updatedName, setUpdatedName] = useState(name);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedName(event.target.value);
    };

    return <>

        <div className="flex flex-row items-center justify-center gap-x-12 w-full h-full p-12">
            <div className="flex flex-col items-center gap-y-4 bg-blue-400 rounded-md p-4 h-fit">
                <h1 className="text-3xl text-center font-bold">Functional Component With TypeScript </h1>
                <h1 className="text-2xl text-center font-bold">Interface For Function Props</h1>
                <h1 className="text-2xl">Hello, {updatedName}!</h1>
                <input type="text" value={updatedName} onChange={handleNameChange} />
            </div>

            <div className="flex flex-col items-center gap-y-4 bg-blue-400 rounded-md p-4 h-fit">
                <h1 className="font-bold text-3xl text-center">The Name text From Question 2 Is Updated Here</h1>
                <h1 className="text-2xl">Name Entered: {getName}</h1>
            </div>
        </div>

    </>
};

export default FunctionalComponent;
