"use client";

import { usePathname } from "next/navigation";
import { formatDonationUrl } from "@/lib/utils";
import { donationFormSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Donation } from "@prisma/client";
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

import { Textarea } from "../ui/textarea";

interface DonationFormProps {
  handleDonationSuccess: (donation: Donation) => void;
}

export function DonationForm({ handleDonationSuccess }: DonationFormProps) {
  const form = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
  });

  const pathname = usePathname();
  const organisationName = formatDonationUrl(pathname);

  const createDonation = useOrganisationStore((state) => state.createDonation);

  const onSubmit = async (data: z.infer<typeof donationFormSchema>) => {
    const createdDonation = await createDonation(
      data.firstName,
      data.lastName,
      data.email,
      data.donationAmount ?? 0,
      data.reason || "",
      organisationName,
    );
    handleDonationSuccess(createdDonation);
  };

  return (
    <div className='pt-4'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mx-auto w-full space-y-6'
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
            name='reason'
            render={({ field }) => (
              <FormItem>
                <div className='flex justify-between'>
                  <FormLabel>Spendengrund</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Textarea rows={5} placeholder='Spendengrund' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className='w-full' type='submit'>
            Spenden
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default DonationForm;
