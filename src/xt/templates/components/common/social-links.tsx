import xtConfig from "@/xt/lib/config";
import { Github, Instagram, Linkedin, Package, Twitter } from "lucide-react";

const SocialLinks = () => {
  return (
    <>
      {xtConfig.social.instagram && (
        <a href={xtConfig.social.instagram} target="_blank" className="opacity-60 hover:opacity-100">
          <Instagram className="w-6 h-6" />
        </a>
      )}
      {xtConfig.social.twitter && (
        <a href={xtConfig.social.twitter} target="_blank" className="opacity-60 hover:opacity-100">
          <Twitter className="w-6 h-6" />
        </a>
      )}
      {xtConfig.social.linkedin && (
        <a href={xtConfig.social.linkedin} target="_blank" className="opacity-60 hover:opacity-100">
          <Linkedin className="w-6 h-6" />
        </a>
      )}
      {xtConfig.social.github && (
        <a href={xtConfig.social.github} target="_blank" className="opacity-60 hover:opacity-100">
          <Github className="w-6 h-6" />
        </a>
      )}
      {xtConfig.social.npm && (
        <a href={xtConfig.social.npm} target="_blank" className="opacity-60 hover:opacity-100">
          <Package className="w-6 h-6" />
        </a>
      )}
    </>
  );
};

export default SocialLinks;
