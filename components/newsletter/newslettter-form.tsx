import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { signUpNewsletter } from "@/actions/newsletter";

async function NewsletterForm() {
  return (
    <form action={signUpNewsletter}>
      <div className="flex w-full max-w-sm items-center space-x-2 m-6">
        <Label htmlFor="email" className="hidden">
          Email
        </Label>
        <Input type="email" name="email" placeholder="Email" required />
        <Button type="submit" size={"default"}>
          Assinar
        </Button>
      </div>
    </form>
  );
}

export default NewsletterForm;
