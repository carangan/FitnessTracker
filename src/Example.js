import Counter from "./Counter";

const Example = () => {
    const names = [
        'Jan',
        'Jay',
        'Ramon'
    ]

    return (
        <>
        {
        names.map((name) => {
            return <Counter name={name} key={name}></Counter>
        })
        }
        </>
    )
};

export default Example;