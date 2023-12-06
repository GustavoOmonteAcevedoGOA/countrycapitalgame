import { useState } from 'react';
import './CountryCapitalGame.css';
type ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';
type Option = {
    value: string;
    state: ButtonState;
};

const CountryCapitalGame = ({ data }: { data: Record<string, string> }) => {
    const countries = Object.keys(data);
    const capitalArray = Object.values(data);
    const [options, setOptions] = useState<Option[]>(
        [...countries, ...capitalArray]
            .sort(() => Math.random() - 0.5)
            .map((value) => ({
                value,
                state: 'DEFAULT',
            }))
    );

    const [selected, setSelected] = useState<Option>();
    const isGameOver = options.length === 0;

    const isCorrectPair = (opt: Option, selected: Option, option: string) => {
        return !(opt.value === selected.value || opt.value === option);
    };

    const SelectButton: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        const option = event.currentTarget.textContent || '';
        if (!selected) {
            setSelected({ value: option, state: 'SELECTED' });
            setOptions(
                options.map((opt) => {
                    return {
                        ...opt,
                        state: opt.value === option ? 'SELECTED' : 'DEFAULT',
                    };
                })
            );
        } else {
            if (
                selected.value === data[option] ||
                data[selected.value] === option
            ) {
                setOptions(
                    options.filter((opt) =>
                        isCorrectPair(opt, selected, option)
                    )
                );
            } else {
                setOptions(
                    options.map((opt) => ({
                        ...opt,
                        state: !isCorrectPair(opt, selected, option)
                            ? 'WRONG'
                            : opt.state,
                    }))
                );
            }

            setSelected(undefined);
        }
    };

    if (isGameOver) {
        return <div>Congratulations</div>;
    }
    return (
        <>
            <h2>CountryCapitalGame</h2>
            <div className="game-container">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={
                            option.state === 'SELECTED'
                                ? 'selected'
                                : option.state === 'WRONG'
                                ? 'wrong'
                                : ''
                        }
                        onClick={SelectButton}
                    >
                        {option.value}
                    </button>
                ))}
            </div>
        </>
    );
};

export default CountryCapitalGame;
