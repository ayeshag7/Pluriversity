"use client"

import { StoryForm } from "@/components/StoryForm";
import DeleteStoryComponent from "@/components/DeleteStoryComponent";

const Page = () => {
  return (
    <main className="p-24 min-h-screen bg-[#0A0708]">

      <h1 className="text-2xl text-white font-bold">Add a Story</h1>

      <StoryForm/>

      <h1 className="text-2xl text-white font-bold">Delete a Story</h1>

      <DeleteStoryComponent/>

    </main>
  )
}

export default Page;
