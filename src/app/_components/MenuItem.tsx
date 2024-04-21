import { cardioPNG } from "@/assets";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function MenuItem({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link href={href} className="w-full flex justify-between items-center px-2 py-1 rounded-xl">
      <div className="flex gap-x-4 items-center">
        <div>
          <Image src={cardioPNG} alt="" width={42} height={42} />
        </div>
        <div>
          <p className="font-bold text-lg">{title}</p>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
      <div>
        <ChevronRightIcon />
      </div>
    </Link>
  );
}
