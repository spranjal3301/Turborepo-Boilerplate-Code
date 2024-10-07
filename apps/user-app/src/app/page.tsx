"use client";
import {useBalance} from "@repo/store";


export default function Page(): JSX.Element {
  const balance = useBalance();
  const x=10;
  return <div>
    hi there {balance}
  </div>
}
