interface Props {
    title: string;
    assetPath: string;
    url: string;
    coursePlatform: string;
}

export default ({ title, assetPath, url, coursePlatform }: Props) => {
    return (
        <div className="flex flex-col rounded-lg bg-base-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row transition hover:scale-105 transform-gpu w-full">
            <a href={url} target="_blank" className="w-full">
                <div className="block">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                        <figure><img src={ assetPath } className="rounded-lg object-cover w-full h-64"  alt="Icon logo" /></figure>
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                    </div>

                    <div className="rounded-lg bg-base-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row transition w-full px-4 py-4">                        
                        <div className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            {title}
                        </div>
                        
                        <article className="grow prose text-justify sm:w-full mt-4">
                            { coursePlatform }
                        </article>
                    </div>
                </div>
            </a>
        </div>
    )
}