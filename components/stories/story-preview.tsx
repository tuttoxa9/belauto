"use client"

import { cn } from "@/lib/utils"

interface Story {
  id: string
  title: string
  preview: string
  viewed: boolean
}

interface StoryPreviewProps {
  story: Story
  onClick: () => void
}

export function StoryPreview({ story, onClick }: StoryPreviewProps) {
  return (
    <div className="flex-shrink-0 cursor-pointer group" onClick={onClick}>
      <div
        className={cn(
          "w-20 h-20 rounded-2xl p-0.5 transition-transform group-hover:scale-105",
          story.viewed ? "bg-gray-300" : "bg-gradient-to-tr from-blue-500 to-blue-600",
        )}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden bg-white p-0.5">
          <img
            src={story.preview || "/placeholder.svg"}
            alt={story.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <p className="text-xs text-center mt-2 text-gray-600 max-w-20 truncate">{story.title}</p>
    </div>
  )
}
