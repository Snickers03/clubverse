import { changeOrganisationNameFormSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function ChangeOrganisationNameDialog() {
  const organisation = useOrganisationStore((state) => state.organisation);

  const updateOrganisationName = useOrganisationStore(
    (state) => state.updateOrganisationName,
  );

  const form = useForm<z.infer<typeof changeOrganisationNameFormSchema>>({
    resolver: zodResolver(changeOrganisationNameFormSchema),
    defaultValues: {
      name: organisation?.name,
    },
  });

  const onSubmit = async (
    values: z.infer<typeof changeOrganisationNameFormSchema>,
  ) => {
    if (values.name === organisation?.name) return;
    await updateOrganisationName(organisation?.id ?? "", values.name);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className='cursor-default rounded-sm px-2 py-1.5 text-sm  transition-colors hover:bg-slate-100 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          Name ändern
        </p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Organisationsname ändern</DialogTitle>
          <DialogDescription>
            Ändere den Namen deiner Organisation.
          </DialogDescription>
        </DialogHeader>
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
            <Button type='submit'>Ändern</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
