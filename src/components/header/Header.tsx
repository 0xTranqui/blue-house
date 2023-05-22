import Link from "next/link";

export const Header = () => {
    return (
        <div className="flex flex-row justify-start ml-[16px] sm:justify-start fixed flex-wrap text-[15px] top-[20px] w-full z-10">
            <div className="text-white tracking-[0px] flex flex-row justify-start flex-wrap">
                <Link className="hover:underline" href="/">blue house</Link>
            </div>
        </div>
    );
};
