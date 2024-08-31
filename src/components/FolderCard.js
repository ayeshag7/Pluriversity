import { FaFolder } from 'react-icons/fa';
import Link from 'next/link';

export const FolderCard = ({id, name}) => {
  return (
    <div className="flex items-center gap-x-4 mb-4">
            <FaFolder size={40} color="#89BE63" />
            <Link href={`/folders/${id}`} passHref><p className="text-white underline">{name}</p></Link>
    </div>
  )
};