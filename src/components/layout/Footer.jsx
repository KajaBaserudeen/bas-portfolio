import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Container from "../common/Container";

const Footer = () => {
  //const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">
              <span className="text-accent-light">Bas</span>.dev
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              Lead UI Engineer | React.js | Frontend Development
            </p>
          </div>

          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Bas. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
