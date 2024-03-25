"use client";

import { usePathname, useRouter } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { formatDonationUrl } from "@/lib/utils";
import { donationFormSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
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

import { Textarea } from "../ui/textarea";

export function DonationForm() {
  const form = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
  });

  const pathname = usePathname();
  const organisationName = formatDonationUrl(pathname);

  const createDonation = useOrganisationStore((state) => state.createDonation);

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof donationFormSchema>) => {
    try {
      const createdDonation = await createDonation(
        data.firstName,
        data.lastName,
        data.email,
        data.donationAmount ?? 0,
        data.reason || "",
        organisationName,
      );

      const res = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "paypal"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: "Spende",
              },
              unit_amount: createdDonation.amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${window.location.origin}/donate/thank-you?oid=${createdDonation.id}`,
        cancel_url: `${window.location.origin}/donate/cancel`,
      });
      const stripeSessionUrl = res.url ?? "#";
      router.push(stripeSessionUrl);
    } catch (e) {
      console.log("error:", e);
    }
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
