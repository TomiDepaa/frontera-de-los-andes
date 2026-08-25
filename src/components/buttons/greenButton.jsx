'use client'
import { useRouter } from "next/navigation";

export default function GreenButton({ text, path, img }) {
  const router = useRouter()
  return (
    <button
      type="button"
      onClick={() => router.push(path)}
      className="group inline-flex items-center gap-2 bg-green-brand text-white text-sm font-semibold py-3 px-6 rounded-full shadow-card hover:shadow-card-hover hover:bg-green-brand/90 transition-all duration-300"
    >
      {text}
      <img src={img} alt="" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  )
}