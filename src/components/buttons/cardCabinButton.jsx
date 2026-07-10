'use client';
import { useRouter } from "next/navigation";

export default function CardCabinButton({ text, path }) {
  const router = useRouter()
  return (
    <button
      type="button"
      onClick={() => router.push(path)}
      className="border border-green-brand/20 text-green-brand text-sm font-semibold py-2 px-4 rounded-full hover:bg-green-brand hover:text-white transition-colors duration-300"
    >
      {text}
    </button>
  )
}