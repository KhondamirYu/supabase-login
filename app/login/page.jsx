import LogIn from "@/Components/Login";
import Registration from "@/Components/Registration";
import bgImage from "./../../src/public/images/bgImage.jpg";
export default function Login() {
  return (
    <div
      className="relative bg-cover bg-no-repeat w-screen h-screen" // Ensures the background covers the whole screen
      style={{ backgroundImage: `url(${bgImage.src})`}} // Correctly applying the background image
    >
      <LogIn />
      {/* <Registration /> */}
    </div>
  );
}
