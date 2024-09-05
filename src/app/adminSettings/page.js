"use client"

import { StoryForm } from "@/components/StoryForm";
import DeleteStoryComponent from "@/components/DeleteStoryComponent";
import AddFolderComponent from "@/components/AddFolderComponent";
import AddReadingComponent from "@/components/AddReadingComponent";
import DeleteReadingComponent from "@/components/DeleteReadingComponent";
import DeleteFolderComponent from "@/components/DeleteFolderComponent";
import AddMemberComponent from "@/components/AddMemberComponent";
import AddVideoComponent from "@/components/AddVideo";
import DeleteVideoComponent from "@/components/DeleteVideoComponent";

const Page = () => {
  return (
    <main className="p-24 min-h-screen bg-[#0A0708]">

      <h1 className="text-2xl text-white font-bold">Add a Story</h1>

      <StoryForm/>

      <h1 className="text-2xl text-white font-bold">Delete a Story</h1>

      <DeleteStoryComponent/>

      <h1 className="text-2xl text-white font-bold">Add a Folder</h1>

      <AddFolderComponent/>

      <h1 className="text-2xl text-white font-bold">Add a Reading</h1>

      <AddReadingComponent/>

      <h1 className="text-2xl text-white font-bold">Delete a Reading</h1>

      <DeleteReadingComponent/>

      <h1 className="text-2xl text-white font-bold">Delete a Folder</h1>

      <DeleteFolderComponent/>

      <h1 className="text-2xl text-white font-bold">Add a Video</h1>

      <AddVideoComponent/>

      <h1 className="text-2xl text-white font-bold">Delete a Video</h1>

      <DeleteVideoComponent/>

      <h1 className="text-2xl text-white font-bold">Add a Member</h1>

      <AddMemberComponent/>

    </main>
  )
}

export default Page;
