import { FolderCard } from "@/components/FolderCard";

const page = () => {

    const folders = [
      { id: 1, name: 'Sohaib Ali' },
    ];

    return (
      <main className="py-20 px-4 md:px-24 min-h-screen bg-[#0A0708]">

        <div className="reading-collections mb-20">

          <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-20">All Reading Folders:</p>

          {/* folders div */}
          <div className="flex gap-x-16">
              {folders.map((folder) => (
                  <FolderCard
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                  />
                ))}
          </div>

        </div>
  
      </main>
    )
  }
  
  export default page;