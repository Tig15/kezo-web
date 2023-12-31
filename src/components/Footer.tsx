import t from "@/components/translate";

const Footer = () => {
  return (
    <div className="fixed bottom-0 container max-w-[1944px] py-6 border-t border-third flex justify-center">
      <span className="text-sm font-normal text-center opacity-60">
        {t("footer")}
      </span>
    </div>
  );
};

export default Footer;
