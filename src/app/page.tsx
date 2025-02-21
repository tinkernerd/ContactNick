import { FaGithubAlt, FaInstagram } from "react-icons/fa";
import { TbPhotoCircle } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import ContactForm from "@/components/ContactForm";


export default function Home() {
  return (
    <main className="h-dvh w-full flex flex-col gap-6 items-center justify-center">
      <p>
        Hi, it&apos;s <span className="font-semibold">Nick &#40;Tinkernerd&#41; </span> here.
      </p>
      <div className="flex gap-3">
        <a href="https://github.com/tinkernerd" target="_blank">
          <FaGithubAlt size={22} />
        </a>
        <a href="https://www.instagram.com/therealnicholasstull" target="_blank">
          <FaInstagram size={22} />
        </a>
        <a href="https://photos.tinkernerd.dev" target="_blank">
          <TbPhotoCircle size={22} />
        </a>
        <a href="https://tinkernerd.dev" target="_blank">
        <CgWebsite size={22} />
        </a>
      </div>
      {/* Horizontal Rule */}
      <hr className="w-1/2 border-gray-300 my-4" />
      <ContactForm />
    </main>
  );
}
