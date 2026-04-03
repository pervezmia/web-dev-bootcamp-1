

const Models = ({age, setAge, handleAge}) => {
    const data = {
    name: "Pervez",
    age: 26,
  }
    return (
        <div>
            Model Component
            <div>{data.name}</div>
            <div>{data.age}</div>
            *********
            <button className="btn" onClick={() => setAge(data.age)}>child to parent</button>
            <button className="btn" onClick={() => handleAge(data.age)}>sand age c to p</button>
        </div>
    );
};

export default Models;