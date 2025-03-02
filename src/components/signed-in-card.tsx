import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {auth, currentUser} from "@clerk/nextjs/server";
import Image from 'next/image'
import {SignOutButton} from "@clerk/nextjs";
import TokenInput from "@/components/token-input";

export default async function SignedInCard (){
    const {getToken } = await auth()
    const user = await currentUser()
    const token = await getToken()
    return (
        <>
            <div className={cn("flex flex-col gap-6")}>
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Welcome back</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center items-center space-y-4 flex-col">
                            <Image src={user?.imageUrl || "https://www.gravatar.com/avatar?d=mp"} width={50} height={50} alt="user profile" className="block rounded-full" />
                            <p>
                                {user?.username}
                            </p>
                            <div className="w-full">
                                <TokenInput token={token || ""} />
                            </div>
                            <div className="w-full">
                                <SignOutButton>
                                    <Button variant="destructive" className="w-full">Logout</Button>
                                </SignOutButton>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}