// app/page.tsx (Server Component by default)
import { FaGithubAlt, FaInstagram } from "react-icons/fa";
import { TbPhotoCircle } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import ContactForm from "@/components/ContactForm"; // or wherever your client form lives



export default function Home() {
  return (
    <main className="h-dvh w-full flex flex-col gap-6 items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Welcome to Nick’s Homepage</h1>
      <p>
        Hi, I’m <span className="font-semibold">Nickq</span>—a
        developer and tech enthusiast. Feel free to explore my links below:
      </p>

      <div className="flex gap-3">
        <a
          href="https://github.com/tinkernerd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt size={22} />
        </a>
        <a
          href="https://www.instagram.com/therealnicholasstull"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://photos.tinkernerd.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbPhotoCircle size={22} />
        </a>
        <a
          href="https://tinkernerd.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CgWebsite size={22} />
        </a>
      </div>

      <hr className="w-1/2 border-gray-300 my-4" />

      {/* Contact Form (Client Component) */}
      <ContactForm />
    </main>
  );
}
