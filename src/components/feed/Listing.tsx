// @ts-nocheck
import Image from "next/image";
import Link from 'next/link';

export const Listing = ({index,  metadata, collection}: any) => {

    return (
        <>
        {!metadata || !collection ? (
            // TODO: maybe add a loading state instead here ?
            <div></div>            
        ) : (
            <div className="relative flex flex-row items-start flex-wrap w-full max-w-full text-[14px] border-b-[0.5px] border-black pb-[12px]">
                <Link href={`/${index}`}>
                    <div className="overflow-hidden relative w-full sm:w-[340px] sm:h-[191px] aspect-video mb-[4px]">
                        <Image
                            src={metadata?.media[0]?.thumbnail}
                            fill
                        />
                    </div>
                    <div className="flex flex-row items-start flex-wrap w-full break-words">
                        <b>{metadata?.contract.name}</b>
                        &nbsp;{'April 4, 2023'}
                    </div>  
                </Link>                                                                                                                                
            </div>
        )}
        </>
    )
}