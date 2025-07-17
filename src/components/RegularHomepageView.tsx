export default function RegularHomepageView() {
    return (
        <div className="min-h-screen max-h-screen grid grid-cols-1 grid-rows-12 items-center text-white font-mono">
            {/* Gradient Top */}
            <div className="row-span-5 bg-[linear-gradient(to_bottom,_#A586C4_0%,_#A586C4_50%,_#CAD7D8_90%,_#00A86B_100%)] z-10 h-full" />

            {/* Footer Services */}
            <div className="row-span-2 bg-[#26211C] px-4 py-10 flex justify-between leading-3 text-[#CAD7D8]">
                <div className="space-y-2">
                    <p>SOUND DESIGN</p>
                    <p>AUDIO PRODUCTION</p>
                    <p>MIX & MASTERING</p>
                    <p>RECORDING</p>
                    <p>DJING</p>
                </div>
                <div className="text-right space-y-2">
                    <p>HELLO@DAKSTUDIO.IT</p>
                    <p>@_DAKSTUDIO</p>
                </div>
            </div>

            {/* Gradient Bottom */}
            <div className="row-span-5  bg-[linear-gradient(to_top,_#A586C4_0%,_#A586C4_50%,_#CAD7D8_90%,_#00A86B_100%)] h-full" />
        </div>
    );
}
