import LoginModal from "@/components/auth/login";
import RegisterModal from "@/components/auth/register";

export default function Home() {
  return (
    <div className="flex h-full justify-center items-center flex-col">
      {/* Tab */}
      <h1>Tab</h1>
      {/* List Group */}
      <h1>List Group</h1>
      <LoginModal />
      <RegisterModal />
    </div>
  );
}
