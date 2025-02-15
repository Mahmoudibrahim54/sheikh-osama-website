import styles from "./bg-pattern.module.css";
import icon from "@/app/[lang]/styles//islamic-icon.module.css";

import siteConfig from "@/config/site";
import { PaddingContainer } from "../layout/padding-container";
import Link from "next/link";
import { SocialLinks } from "../elements/social-links";
import { getDictionary } from "@/lib/dictionary";
import { DictionarySchema } from "@/types/dictionary";

export const Footer = async ({ locale }: { locale: "ar" | "en" }) => {
  const dictionary: DictionarySchema = await getDictionary(locale);
  return (
    <div
      className={` ${styles.islamicBgPattern} relative   w-screen border-t py-8`}
    >
      <div
        className={`absolute inset-0 z-10 ${
          locale === "ar" ? "bg-gradient-to-br" : "bg-gradient-to-bl"
        } from-white/95 via-white/70 to-white/30`}
      />

      <div
        className={`absolute inset-0 z-10 ${
          locale === "ar" ? "bg-gradient-to-br" : "bg-gradient-to-bl"
        } from-black/95 via-black/70 to-black/30`}
      />
      <div className="relative z-20">
        <PaddingContainer>
          <div className=" text-neutral-100 ">
            <div className="font-reem-kufi">
              <h2 className="text-3xl font-extrabold">
                {dictionary.footer.titleOne}
              </h2>
              <h2 className="text-4xl font-extrabold">
                {dictionary.footer.titleTwo}
              </h2>
            </div>
            <p className="mt-2 max-w-md font-noto-kufi text-lg">
              {dictionary.footer.description}
            </p>
          </div>

          {/*social and country section*/}
          <div className="mt-6 flex flex-col flex-wrap justify-between gap-4 font-noto-kufi text-neutral-100 md:flex-row ">
            <div>
              <div className="text-lg font-medium">
                {dictionary.footer.socialMedia}
              </div>
              <div className="mt-2 flex items-center gap-3">
                <SocialLinks
                  platform="youtube"
                  link={siteConfig.socialLinks.youtube}
                />
                <SocialLinks
                  platform="twitter"
                  link={siteConfig.socialLinks.twitter}
                />
                <SocialLinks
                  platform="facebook"
                  link={siteConfig.socialLinks.facebook}
                />
              </div>
            </div>
            <div className=" font-noto-kufi">
              <div className="my-2 text-sm text-neutral-100">
                {dictionary.footer.country}
              </div>

              <div className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-black opacity-50 shadow-md backdrop-blur-md">
                <div
                  className={`${icon.islamicIcon}`}
                  style={{
                    ["--icon-dim" as any]: "15px",
                    ["--icon-color" as any]: "var(--primary-color)",
                  }}
                />
                {dictionary.footer.location}
              </div>
            </div>
          </div>

          {/*bottom section*/}
          <div className="mt-16 flex flex-wrap items-center  justify-between gap-4 border-t py-3 font-noto-kufi text-neutral-100">
            <div className="text-sm">
              <Link
                className="underline underline-offset-4"
                href="https://www.linkedin.com/in/mahmoud-m-ibrahim/"
              >
                Mahmoud Ibrahim
              </Link>
            </div>
            <div className="text-sm text-neutral-400">
              {dictionary.footer.rightsText} {new Date().getFullYear()}
            </div>
          </div>
        </PaddingContainer>
      </div>
    </div>
  );
};
