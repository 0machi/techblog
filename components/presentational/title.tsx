import { robotoBold } from "@/styles/fonts";

export default function Title() {
    return (
        <div className={`h-[72px] max-w-5xl mx-auto flex items-end border-x border-dashed border-slate-200`}>
            <h2 className={`${robotoBold.className} text-violet-600 p-3`}>Tech Blog</h2>
        </div>
    )
}