import { createStore } from "solid-js/store";

interface Props {
    messages: string[];
}
export default function Greeting({ messages }: Props) {
    const randomMessage = () =>
        messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = createStore({ msg: messages[0] });

    return (
        <div>
            <h3>{greeting.msg}! Thank you for visiting!</h3>
            <button
                class=" border-2"
                onClick={() => setGreeting({ msg: randomMessage() })}
            >
                New Greeting
            </button>
        </div>
    );
}
