"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/inpot";
import { Textarea } from "./ui/textorea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ScrollParallax from "./ScrollParallax";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  website: z.string().optional(),
  interestedIn: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      interestedIn: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  return (
    <section className="section container relative h-full bg-white">
      <div className="mx-auto">
        {/* Main Heading */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3">
          <h1 className="col-span-2 header">
            Schedule your personalized consultation today
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8">
          {/* Left side - Image and Contact Info */}
          <div className="w-full space-y-8 col-span-2">
            {/* Business Meeting Image */}
            <div className="relative order-1">
              <img
                src="/business-project-discussion-2025-01-29-07-49-22-utc.jpg"
                alt="Professional consultation meeting"
                className="w-full h-auto object-contain object-top"
              />
            </div>
          </div>

          {/* Third column - Slogan */}
          <div className="hidden lg:flex relative md:-top-3 items-center space-y-8 order-2 lg:order-2">
            {/* Slogan - Now at the top of the third column */}
            <ScrollParallax>
              <div className="text-center mb-8 ml-8">
                <h2 className="font-sans flex flex-col text-2xl lg:text-3xl font-bold text-black leading-tight">
                  <span>We</span>
                  <span>are</span>
                  <span className="font-black">better</span>
                  <span>together.</span>
                </h2>

                <div className="h-[40px] my-4">
                  <div className="w-1/2 border-r h-full" />
                </div>
                <p className="text-gray-600">
                  Drop your contact details into the form, and we&apos;ll reach
                  out to you!
                </p>
              </div>
            </ScrollParallax>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-startspace-y-4 order-6 lg:order-2 sm:px-8">
            <div className="border-b pb-5">
              <h3 className="text-sm font-semibold text-black">
                OR REACH US AT:
              </h3>
            </div>
            <div className="space-y-4 text-gray-700 pt-5">
              <p>T: 1-800-356-8933</p>
              <p>E: office@beratung.com</p>
              <p>
                Seventh Ave, 20th Floor
                <br />
                New York, NY 10018
              </p>
            </div>
          </div>

          {/* Form - Spans from col 2 to col 3, positioned vertically in middle of top cols */}
          <div className="col-span-2 lg:col-start-2 order-3">
            <div className="w-full bg-white sm:px-8 py-8 mt-0 lg:-mt-40 relative z-10">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="border-gray-300 focus:border-black focus:ring-black"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your.email@example.com"
                              type="email"
                              className="border-gray-300 focus:border-black focus:ring-black"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Phone number
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your phone number"
                              className="border-gray-300 focus:border-black focus:ring-black"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Company name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company"
                              className="border-gray-300 focus:border-black focus:ring-black"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Website
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="www.yourwebsite.com"
                              className="border-gray-300 focus:border-black focus:ring-black"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="interestedIn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Interested in
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-black focus:ring-black">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="consultation">
                              General Consultation
                            </SelectItem>
                            <SelectItem value="audit">
                              Business Audit
                            </SelectItem>
                            <SelectItem value="strategy">
                              Strategic Planning
                            </SelectItem>
                            <SelectItem value="implementation">
                              Implementation Services
                            </SelectItem>
                            <SelectItem value="training">
                              Training & Development
                            </SelectItem>
                            <SelectItem value="support">
                              Ongoing Support
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your needs..."
                            className="min-h-[120px] border-gray-300 focus:border-black focus:ring-black"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
