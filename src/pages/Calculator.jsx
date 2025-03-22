import { useEffect, useState } from "react";

function Calculator() {

    const tipPercentage = [5, 10, 15, 25, 50];

    const [bill, setBill] = useState('');
    const [selected, setSelected] = useState('');
    const [customPer, setCustomPer] = useState('');
    const [people, setPeople] = useState('');

    const [tip, setTip] = useState(0);
    const [total, setTotal] = useState(0);

    const [resetEnable, setResetEnable] = useState(false);


    useEffect(() => {

        if (bill < 1 || (selected < 0 || 100 < selected) || people < 1) {
            return
        }

        const before = bill / people;
        const tipResult = bill * (selected / 100) / people;
        const totalResult = ceilFunc(before + tipResult, 2);

        setTip(floorFunc(tipResult, 2));
        setTotal(ceilFunc(totalResult, 2));

        setResetEnable(true);

    }, [bill, selected, people])


    /* Bill */
    const onChangeBill = e => {
        setBill(e.target.value);
    }


    /* Select Tip % */
    const onSelectTip = (percentage) => {
        setSelected(percentage);
    }
    const onChangeCustom = e => {
        setCustomPer(e.target.value);
        setSelected(e.target.value);
    }


    /* Number of People */
    const onChangePeople = e => {
        setPeople(e.target.value);
    }


    /* Reset Button */
    const onReset = () => {
        setBill('');
        setSelected(0);
        setCustomPer('');
        setPeople('');
        setTip(0);
        setTotal(0);
        setResetEnable(false);
    }


    const ceilFunc = (num, n) => Math.ceil(num * 10 ** n) / 10 ** n;
    const floorFunc = (num, n) => Math.floor(num * 10 ** n) / 10 ** n;


    return (
        <div className="flex flex-col items-center min-h-screen mobile:px-[25px] desktop:px-[50px] py-[100px]">
            <div className="flex flex-col mb-[80px] text-cal-grey-500 text-2xl">
                <span>S P L I</span>
                <span>T T E R</span>
            </div>

            <div className="flex flex-col tablet:flex-row items-center justify-between gap-[25px] desktop:gap-[50px]
                rounded-3xl bg-white 
                p-[25px] desktop:p-[50px] w-full min-w-[320px] max-w-[1000px]"
            >
                <div className="flex flex-col w-full tablet:w-1/2 h-[450px] tablet:h-[400px]">
                    <label htmlFor="billInput" className="cal-label">Bill</label>
                    <input
                        id="billInput"
                        type="text"
                        className="cal-input-text bg-[url('images/icon-dollar.svg')] mb-auto"
                        placeholder="0"
                        onChange={onChangeBill}
                        value={bill}
                    />


                    <label className="cal-label">Select Tip %</label>
                    <div className="flex flex-wrap justify-between gap-y-[15px] mb-auto">
                        {
                            tipPercentage.map(item =>
                                <button
                                    key={item}
                                    className={`cal-input-button ${item === selected && 'bg-cal-green-400 text-cal-green-900 pointer-events-none'}`}
                                    onClick={() => onSelectTip(item)}
                                >
                                    {item}%
                                </button>
                            )
                        }
                        <input
                            type="text"
                            className="cal-input-text w-full max-w-[48%] desktop:max-w-[32%] placeholder:text-cal-grey-500"
                            placeholder="Custom"
                            onClick={onChangeCustom}
                            onChange={onChangeCustom}
                            value={customPer}
                        />
                    </div>


                    <label htmlFor="peopleInput" className="cal-label">Number of People</label>
                    <input
                        id="peopleInput"
                        type="text"
                        className="cal-input-text bg-[url('images/icon-person.svg')]"
                        placeholder="0"
                        onChange={onChangePeople}
                        value={people}
                    />

                </div>

                <div className="flex flex-col rounded-3xl bg-cal-green-900 p-[25px] tablet:p-[40px] w-full tablet:w-1/2 tablet:h-[400px]">
                    <div className="flex justify-between mb-6">
                        <div className="flex flex-col justify-center">
                            <span className="text-cal-grey-50">Tip Amount</span>
                            <span className="text-cal-grey-500 text-[12px]">/ person</span>
                        </div>
                        <span className="text-cal-green-400 text-[48px]">${tip}</span>
                    </div>

                    <div className="flex justify-between mb-6">
                        <div className="flex flex-col justify-center">
                            <span className="text-cal-grey-50">Total</span>
                            <span className="text-cal-grey-500 text-[12px]">/ person</span>
                        </div>
                        <span className="text-cal-green-400 text-[48px]">${total}</span>
                    </div>

                    <button
                        className="cal-input-button bg-cal-green-400 text-cal-green-900 disabled:bg-cal-grey-500 mt-auto max-w-full"
                        onClick={onReset}
                        disabled={!resetEnable}
                    >
                        RESET
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
