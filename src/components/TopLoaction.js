import Image from "next/image";

const TopLoaction = () => {
  return (
    <div className="hidden lg:flexBetween max-container padding-container bg-violet-4 py-3 text-white regular-14">
      <div className="flex gap-[6px]">
        <Image src="/location.svg" alt="Location Icon" width={14} height={18} />
        <span>Rezilla, 18 Grattan St, Brooklyn</span>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2">
          <Image src="/phone.svg" alt="Phone Icon" width="16" height="16" />
          <span>+1 206-214-2298</span>
        </div>
        <div className="flex gap-2">
          <Image src="/mail.svg" alt="Mail Icon" width="18" height="13" />
          <span>support@rezilla.com</span>
        </div>
      </div>
    </div>
  );
};

export default TopLoaction;
