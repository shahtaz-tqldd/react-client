import { Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function DeleteModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[485px]">
        <DialogHeader className="flex flex-row items-center gap-2">
          <Trash2Icon className="text-red-500 bg-red-500/10 h-8 w-8 p-1.5 rounded-full -mb-2" />
          <DialogTitle className="text-red-500 text-xl">
            Confirm Delete
          </DialogTitle>
        </DialogHeader>
        <p className="text-[15px]">
          Are you sure about the following actions? This can not be undone once
          you confirm this. Your data will be deleted as well within it
        </p>

        <DialogFooter className="mt-4">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" className="bg-red-500">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
