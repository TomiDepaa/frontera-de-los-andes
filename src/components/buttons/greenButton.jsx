'use client'
import { useRouter } from "next/navigation";

export default function GreenButton ({ text, path, img }) {
    const router = useRouter()
    return (
        <>
            <button type="button" className="text-white bg-green-600 py-1 px-4 rounded-md hover:bg-green-700 flex items-center" onClick={ () => router.push(path)}>{text} <img src={img} alt="" className="ms-1 size-4"/></button>
        </>
    )
}