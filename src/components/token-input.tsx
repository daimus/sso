'use client'

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {copyTextToClipboard} from "@/lib/string";
import {Label} from "@/components/ui/label";

export default function TokenInput ({token} : {token : string}){
    return (
        <>
            <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Token</Label>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="password" defaultValue={token || ""}/>
                <Button type="button" onClick={() => copyTextToClipboard(token)}>Copy</Button>
            </div>
            </div>
        </>
    )
}