import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CreateAssistant() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-white p-10 rounded-md m-10">
      <Avatar seed="create-chatbot" />
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light">
          Create a new AI Assistant to help you with your tasks
        </h2>
        <form className="flex flex-col md:flex-row gap-2 mt-5">
          <Input
            type="text"
            required
            placeholder="Assistant Name..."
            className="max-w-lg"
          />
          <Button>Create Assistant</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateAssistant;
