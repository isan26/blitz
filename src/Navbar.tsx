function APPNavBar({ setConfig }: { setConfig: (config: string) => void }) {
    return (
        <>
            <nav>
                <ul>
                    <li><strong>@blitzui</strong></li>
                </ul>
                <ul>
                    <li><a href="#" onClick={() => setConfig('html')}>HTML</a></li>
                    <li><a href="#" onClick={() => setConfig('register')}>Form</a></li>
                    <li><a href="#" onClick={() => setConfig('jokes')}>Jokes</a></li>
                    <li><a href="#" onClick={() => setConfig('url')}>Load from URL</a></li>
                    <li><a href="#" onClick={() => setConfig('load-from-api')}>Daily Joke</a></li>
                </ul>
            </nav>
        </>
    );
}

export default APPNavBar;
