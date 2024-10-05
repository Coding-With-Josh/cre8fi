"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function WaitlistForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Card className="w-[40%] mx-auto bg-background border-0 mt-[4rem]">
      <CardHeader>
        <CardTitle className="font-normal">Join waitlist</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" className="rounded-[0.3rem] w-full" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Email</Label>
              <Input id="name" placeholder="johndoe@gmail.com" className="rounded-[0.3rem] w-full" value={password} onChange={e => setPassword(e.target.value)} />
              
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-[10rem]">Deploy</Button>
      </CardFooter>
    </Card>
  )
}
