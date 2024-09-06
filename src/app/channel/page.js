const page = () => {
  return (
    <main className="px-24 py-24 min-h-screen bg-[#0A0708] flex flex-col">
        <div className="text-center">
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
                Our <span className="text-[#89BE63]">YouTube</span> channel is live!
            </p>
            <p className="text-xl md:text-2xl text-white mb-8">
                Follow us for more updates, insights, and exclusive content.
            </p>
            <a
              href="https://www.youtube.com/@CPSS-Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#89BE63] underline text-lg md:text-xl"
            >
              Visit CPSS Pakistan YouTube Channel
            </a>
        </div>
    </main>
  )
}

export default page;
