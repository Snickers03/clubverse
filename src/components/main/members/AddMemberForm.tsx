"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { organisationRoles } from "@/mocks/roles";
import { AddMemberFormSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DialogClose, DialogFooter } from "../../ui/dialog";
import { Input } from "../../ui/input";

export function AddMemberForm() {
  const organisation = useOrganisationStore((state) => state.organisation);
  const addMemberToOrganisation = useOrganisationStore(
    (state) => state.addMemberToOrganisation,
  );

  const form = useForm<z.infer<typeof AddMemberFormSchema>>({
    resolver: zodResolver(AddMemberFormSchema),
  });

  const [date, setDate] = useState<Date | undefined>(new Date());

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
                <div className='flex  justify-between'>
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
        <div className='flex w-full space-x-2'>
          <FormField
            control={form.control}
            name='role'
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Rolle</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"USER"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Wähle eine Rolle' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {organisationRoles.map((role) => (
                      <SelectItem key={role.id} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='memberSince'
            render={({ field }) => (
              <FormItem className='mt-[10px] flex flex-col'>
                <FormLabel>Geburtsdatum</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Wähle ein Datum</span>
                        )}
                        <CalendarDays className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type='submit'>Hinzufügen</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  );
}
