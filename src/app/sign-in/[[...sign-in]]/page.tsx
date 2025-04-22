import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-100">
      <SignIn />
    </div>
  );
}
