"use client";

import { createOrganisationFormSchema } from "@/schemas";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateOrganisationFormProps {
  goToClerkSignUp: () => void;
}

export function CreateOrganisationForm({
  goToClerkSignUp,
}: CreateOrganisationFormProps) {
  const form = useForm<z.infer<typeof createOrganisationFormSchema>>({
    resolver: zodResolver(createOrganisationFormSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof createOrganisationFormSchema>) {
    localStorage.setItem("organisation", JSON.stringify(values));
    goToClerkSignUp();
  }

  return (
    <div className='mx-auto w-full md:w-1/4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
          <div>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <div className='flex justify-between'>
                    <FormLabel>Organisationname</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input placeholder='Organisationsname...' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organisationsart</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"NGO"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Wähle eine Organisationart' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='NGO'>NGO</SelectItem>
                    <SelectItem value='Fußballverein'>Fußballverein</SelectItem>
                    <SelectItem value='Tennisverein'>Tennisverein</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Erstellen</Button>
        </form>
      </Form>
    </div>
  );
}
