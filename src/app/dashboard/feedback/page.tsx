"use client";

import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "@/components/ui/use-toast";
import { userFeedback } from "@/services/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const FeedBack = () => {
  const [feedback, setIsFeedback] = useState("");
  const [email, setIsEmail] = useState("");
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !feedback) {
      toast({
        variant: "destructive",
        description: "All fields are required",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/user/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name,  email, feedback }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          variant: "default",
          description: data.message,
        });
        router.push("/dashboard");
      } else {
        toast({
          variant: "destructive",
          description: data.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occurred",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-[32px]">
      <div className="space-y-6 text-center flex items-center justify-center flex-col">
        <p className="text-2xl font-bricolage font-bold">Give Us A Feedback</p>
        <p className="text-base font-bricolage font-semibold">
          Beyond the farming community, agricultural investors find value in the system, gaining insights that guide their investment strategies.
        </p>
        <Sheet>
          <SheetTrigger className="w-full bg-black text-white p-3 rounded-[32px]">
            Continue
          </SheetTrigger>
          <SheetContent className="w-[537px] pt-[70px] px-[38px] mx-auto">
            <form onSubmit={onSubmitHandler}>
              <div className="h-[499px] w-[328px] rounded-[16px] bg-gradient-to-b from-teal-900 via-teal-700 to-[#DFEAF3]">
                <h2 className="p-8 text-center text-2xl text-white font-bricolage">
                  Hi there!! Your Feedback is important to us
                </h2>
                <div className="w-full px-4 rounded-[10px] space-y-4">
                <FormField
                    label="Your Name"
                    type="text"
                    className="w-[300px]"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <FormField
                    label="Your Email"
                    type="email"
                    className="mt-1 w-[300px]"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setIsEmail(e.target.value)}
                  />
                  <FormField
                    label="Send us your feedback"
                    isTextArea
                    className="w-[300px]"
                    placeholder="Your feedback..."
                    value={feedback}
                    onChange={(e) => setIsFeedback(e.target.value)}
                  />
                </div>
                <div className="p-2 w-full flex items-center justify-between">
                  <Button
                    text="Send"
                    variant="default"
                    type="submit"
                    className="w-full rounded-[32px] text-center text-white"
                    loading={isLoading}
                  />
                </div>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="h-[550px] w-[550px] rounded-[16px] relative overflow-hidden">
        <Image
          src={"/ag.webp"}
          fill
          style={{ objectFit: "cover" }}
          priority
          alt="bg-image"
          className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
        />
      </div>
    </div>
  );
};

export default FeedBack;
