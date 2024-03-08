"use client";

import { donationFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function DonationForm() {
  const form = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      donationAmount: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof donationFormSchema>) => {
    console.log("Test");
  };

  return (
    <div className='py-12'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mx-auto w-full space-y-6 md:w-1/2 lg:w-1/3'
        >
          <div className='flex w-full space-x-2'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='w-1/2'>
                  <div className='flex justify-between'>
                    <FormLabel>Vorname</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input placeholder='Vorname' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='w-1/2'>
                  <div className='flex justify-between'>
                    <FormLabel>Nachname</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input placeholder='Nachname' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <div className='flex justify-between'>
                  <FormLabel>Email</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    placeholder='max.mustermann@clubverse.org'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='donationAmount'
            render={({ field }) => (
              <FormItem>
                <div className='flex justify-between'>
                  <FormLabel>Spendenbetrag</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    placeholder='0'
                    {...field}
                    onChange={(e) => {
                      const numberValue =
                        e.target.value === "" ? "" : Number(e.target.value);
                      field.onChange(numberValue);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='donationPurpose'
            render={({ field }) => (
              <FormItem>
                <div className='flex justify-between'>
                  <FormLabel>Spendengrund</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder='Spendengrund' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit'>Spenden</Button>
        </form>
      </Form>
    </div>
  );
}

export default DonationForm;