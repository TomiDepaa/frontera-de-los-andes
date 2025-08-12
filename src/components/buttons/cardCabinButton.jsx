'use client';
import { useRouter } from "next/navigation";

export default function CardCabinButton({ text, path }) {
  const router = useRouter()
  return (
    <>
      <button type="button" onClick={ () => router.push(path)} className="border p-1 rounded-lg">{text}</button>
    </>
  )
}