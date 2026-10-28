import { Suspense } from "react";
import { supabase } from "../lib/supabase/client";

async function DemoList() {
    const { data, error } = await supabase.from("Demo").select("*");

    if (error) {
        console.error(error);
        return <p>Could not load Demo rows.</p>;
    }

    console.log(data);

    if (!data?.length) {
        return <p>Demo is empty.</p>;
    }

    return (
        <>
            {data.map((item) => (
                <div key={item.id}>
                    <h1>{item.Data}</h1>
                    <p>{item.Data}</p>
                </div>
            ))}
        </>
    );
}

export default function TestPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Suspense fallback={<div>Loading...</div>}>
                    <DemoList />
                </Suspense>
            </main>
        </div>
    );
}
