import { ReactNode, Children } from "react"

export default function Tip({children}: {children: ReactNode}) {
    return <div className="bg-amber-50 border-[1.5px] border-amber-300 p-3 m-8 rounded-md w-[40%]">
        <div className="flex flex-row items-center gap-2">
            <img src="/misc/caution.png" className="invert sepia saturate-[100000%] hue-rotate-[145deg] w-8 h-8 -translate-y-1" />
            <div className="text-xl mb-1 text-amber-700">{ Children.toArray(children)[0] }</div>
        </div>
        { Children.toArray(children).slice(1) }
    </div>
}