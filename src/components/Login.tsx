import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

const LoginForm = () => {
  return (
    <form className="space-y-2 max-w-md mx-auto">
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Textarea placeholder="Feedback" />

      <Button type="submit" fullWidth>
        Send Feedback
      </Button>
    </form>
  );
};

export default LoginForm;
