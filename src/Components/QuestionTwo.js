import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import updateName from "../Actions/userActions";

const QuestionTwo = () => {

    const dispatch = useDispatch();
    const getName = useSelector((state) => state.userReducer.name);

    console.log("Name = "+getName);

    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [finalName, setFinalName] = useState("");

    useEffect(() => {
        if (name) {
            setGreeting(`Hello, ${name}!`);
        } else {
            setGreeting('');
        }
    }, [name]);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const showName = () =>{
        dispatch(updateName(name));
        setFinalName("Hello "+name);
        setName("");

    }


    return <>
        <div className="flex flex-col items-center justify-center gap-y-12 w-full h-full">
            <div className="flex flex-col items-center gap-y-4 bg-blue-200 rounded-md p-4 text-3xl h-fit font-bold">
                <h1>For this task, I have used useEffect() Hook to update the State Value Of Functional Component.</h1>

                <h1>Also, Redux Store is used to store the name entered.</h1>

            </div>


            <div className="flex flex-col items-center gap-y-4 bg-blue-400 rounded-md p-4 text-3xl h-fit">
                    <h1>Greetings: {finalName}</h1>
                    <input type="text" value={name} onChange={handleChange} />
                    <button type="button" onClick={showName} className="bg-blue-600 p-4 rounded-md hover:cursor-pointer">Submit</button>
            </div>
        </div>
    </>
};

export default QuestionTwo;