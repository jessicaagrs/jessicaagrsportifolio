const SocialNetworks = () => {
    return (
        <div className="flex gap-8">
            <a
                href="https://www.linkedin.com/in/jessicaag-rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:shadow-xl hover:shadow-green-500/50"
            >
                <button className="bg-[url('/linkedin-logo.svg')] bg-cover w-8 h-8"></button>
            </a>
            <a
                href="https://github.com/jessicaagrs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:shadow-xl hover:shadow-green-500/50"
            >
                <button className="bg-[url('/github-logo.svg')] bg-cover w-8 h-8"></button>
            </a>
        </div>
    );
};

export default SocialNetworks;
