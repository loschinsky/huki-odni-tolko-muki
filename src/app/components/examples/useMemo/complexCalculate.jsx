import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("runFactorial");
    return factorial(n);
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const fact = useMemo(() => runFactorial(value), [value]);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = useMemo(
        () => ({
            value: otherState ? "primary" : "secondary"
        }),
        [otherState]
    );
    useEffect(() => {
        console.log("render buttonColor");
    }, [buttonColor]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p> Result factorial: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => {
                        setValue((prevState) => prevState + 10);
                    }}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => {
                        setValue((prevState) => prevState - 10);
                    }}
                >
                    Decrement
                </button>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor.value}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Изменить цвет
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
