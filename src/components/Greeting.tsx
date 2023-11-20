import { useStore } from "@builder.io/qwik";
import { component$, useComputed$, $ } from "@builder.io/qwik";

interface Props {
    messages: string[];
}
export const Greeting = component$(({ messages }: Props) => {
    const greeting = useStore({ msg: messages[0] });

    const randomMessage = $(() => {
        greeting.msg = messages[Math.floor(Math.random() * messages.length)];
    });
    return (
        <div>
            <h3>{greeting.msg}! Thank you for visiting!</h3>
            <button class=" border-2" onClick$={randomMessage}>
                New Greeting
            </button>
        </div>
    );
});
