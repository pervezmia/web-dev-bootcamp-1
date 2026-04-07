import useInputField from "../Hooks/UsedInputHook";


const HookForm = () => {
    const [name, setName] = useInputField('');
    const [email, setEmail] = useInputField('');
    const [phn, setPhn] = useInputField("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, phn);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={setName} type="text" name="name" id="" />
                <br />
                <input onChange={setEmail} type="email" name="email" id="" />
                <br />
                <input type="number" onChange={setPhn} name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;