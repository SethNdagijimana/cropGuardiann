"use client"

import { useState } from "react";
import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Icon from '../../components/Icon/Icon';
import { Loader } from "@/components/Loader";

const ApplyInsurance = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [userId, setUserId] = useState("");
  const [insurance, setInsurance] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !contact || !userId || !insurance) {
      toast({
        variant: "destructive",
        description: "All fields are required",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/user/insurance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, contact, userId, insurance }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          variant: "default",
          description: data.message,
        });
        router.push("/dashboard"); // Redirect to dashboard or any other page
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
    <>
      <Button text="Back to Dashboard" onClick={router.back} />

      <div className="mt-10">
        <h1 className="font-bricolage text-center">Insurance Application</h1>
      </div>

      <div className="flex justify-center items-center  m-24">
        <div className="bg-[#F2F2F2] rounded-2xl p-6 w-[500px]">
          <h2>Application</h2>
          <form className="space-y-6 mt-4" onSubmit={onSubmitHandler}>
            <FormField
              label="Name"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormField
              type="email"
              label="Email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormField
              label="Contact"
              placeholder="Your Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <FormField
              label="User ID"
              placeholder="Enter your ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <FormField
              label="Insurance"
              placeholder="Enter your insurance"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
            />
            <Button type="submit" 
            disabled={
                    isLoading || 
                    !( 
                      name &&
                      email &&
                      contact &&
                      userId &&
                      insurance
                    )
                  } className="rounded-2xl w-[100px] bg-[#0E4D0C]">
              {isLoading ? <Loader /> : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyInsurance;
