"use client";

import { AddMemberFormSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DialogFooter } from "../../ui/dialog";
import { Input } from "../../ui/input";

export function AddMemberForm() {
  const organisation = useOrganisationStore((state) => state.organisation);
  const addMemberToOrganisation = useOrganisationStore(
    (state) => state.addMemberToOrganisation,
  );

  const form = useForm<z.infer<typeof AddMemberFormSchema>>({
    resolver: zodResolver(AddMemberFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof AddMemberFormSchema>) => {
    const newMember = await addMemberToOrganisation(
      data.firstName,
      data.lastName,
      data.email,
      data.role,
      organisation?.id || "",
    );

    toast.success(newMember.firstName + " wurde hinzugefügt");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-3'>
        <div className='flex space-x-2'>
          <FormField
            control={form.control}
            name='firstName'
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
          name='role'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rolle</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={"USER"}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Wähle eine Rolle' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='USER'>User</SelectItem>
                  <SelectItem value='ADMIN'>Admin</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type='submit'>Hinzufügen</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
