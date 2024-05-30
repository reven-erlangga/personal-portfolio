interface Props {
    title: string;
    assetPath: string;
    docUrl: string;
    projectUrl: string;
    bootcampPlatform: string;
}

export default ({ title, assetPath, docUrl, projectUrl, bootcampPlatform }: Props) => {
    return (
        <div className="flex flex-col rounded-lg bg-base-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row transition hover:scale-105 transform-gpu w-full">
            <figure>
                <img src={ assetPath } alt="Logo" className="rounded-lg object-cover w-full h-64" />
            </figure>
            
            <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                <p>{ bootcampPlatform }</p>
                
                <div className="card-actions">
                    <div className="flex gap-2">
                        <a href={ projectUrl } className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200" target="_blank" rel="noopener noreferrer" title="Harisenin">
                            <img src="/assets/icons/socials/github.svg" width={25} height={25} />
                        </a>
                        
                        <a href={ docUrl } className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200" target="_blank" rel="noopener noreferrer" title="Harisenin">
                            <img src="/assets/icons/pdf.svg" width={25} height={25} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}