"use client";

import { spendenFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

import { DialogClose, DialogFooter } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";

export function Spendenform() {
const form = useForm<z.infer<typeof spendenFormSchema>>({
  resolver: zodResolver(spendenFormSchema),
  defaultValues: {
    name: '',
    lastName: '',
    email: '',
    donationAmount: 0,
  },
});

  const onSubmit = (data: z.infer<typeof spendenFormSchema>) => {
    console.log(data);
  };

  return (
    <div className='py-12'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <div className='flex space-x-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
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
                <Input placeholder='max.mustermann@clubverse.org' {...field} />
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
                placeholder='0€'
                type='number'
                {...field}
                value={Number(field.value)}
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
        <DialogFooter>
          
            <Button type='submit'>Spenden</Button>
          
        </DialogFooter>
      </form>
    </Form>
    </div>
  );
}

export default Spendenform;