import { ReadingCard } from "@/components/ReadingCard";
import Link from "next/link";

const page = ({params}) => {
    
    const folders = [
        { id: 1, name: 'Sohaib Ali' },
    ];

    const folder = folders.find(f => f.id === parseInt(params.folder));

    if (!folder) {
    return <p>Folder not found</p>;
    }

    const readings = [
        { id: 1, title: 'Religion and Conflict Resolution – An Introduction', authorName: 'Lee Marsden', year: 2012 },
        { id: 2, title: 'Towards a Political Theology of Post-coloniality', authorName: 'Kwok Pui-lan', year: 2023 },
        { id: 3, title: 'Islamic Ethics in International Society', authorName: 'Sohail H. Hashmi', year: 2002 },
        { id: 4, title: 'Islam and International Law', authorName: 'Wahbah M. al-Zuhayli', year: 2005 },
        { id: 5, title: 'America as a Jihad State', authorName: 'Tim Winter', year: 2011 }
    ];
      

  return (
    <main className="py-12 px-2 md:px-24 min-h-screen bg-[#0A0708]">

        <Link href="/folders"><p className="text-xl text-[#89BE63] mb-8 max-md:mx-2"><span className="text-5xl">←</span></p></Link>
        
        <p className="text-2xl md:text-3xl font-bold text-[#89BE63] mb-16 max-md:mx-2">Readings Collection by {folder.name}</p>
        
        {/* readings div */}
        <div className="flex gap-x-8 flex-wrap gap-y-8 max-md:mx-2">
            {readings.map((reading) => (
            <ReadingCard
                key={reading.id}
                title={reading.title}
                authorName={reading.authorName}
                year={reading.year}
            />
            ))}
        </div>

    </main>
  )
}

export default page;