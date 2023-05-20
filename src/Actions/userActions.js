const updateName = (name) =>{
    return {
        type: "UPDATE_NAME",
        payLoad: name,
    };
};

export default updateName;