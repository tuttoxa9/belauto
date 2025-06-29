"use client"

import { useState } from "react"
import { StoryPreview } from "./story-preview"
import { StoryViewer } from "./story-viewer"

const mockStories = [
  {
    id: "1",
    title: "Новое поступление",
    preview: "/placeholder.svg?height=120&width=120",
    content: [
      { type: "image", url: "/placeholder.svg?height=600&width=400", duration: 5000 },
      { type: "image", url: "/placeholder.svg?height=600&width=400", duration: 5000 },
    ],
    viewed: false,
  },
  {
    id: "2",
    title: "BMW X5 2023",
    preview: "/placeholder.svg?height=120&width=120",
    content: [{ type: "image", url: "/placeholder.svg?height=600&width=400", duration: 5000 }],
    viewed: true,
  },
  {
    id: "3",
    title: "Акция недели",
    preview: "/placeholder.svg?height=120&width=120",
    content: [{ type: "image", url: "/placeholder.svg?height=600&width=400", duration: 5000 }],
    viewed: false,
  },
  {
    id: "4",
    title: "Mercedes C-Class",
    preview: "/placeholder.svg?height=120&width=120",
    content: [{ type: "image", url: "/placeholder.svg?height=600&width=400", duration: 5000 }],
    viewed: false,
  },
]

export function StoryReel() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null)
  const [stories, setStories] = useState(mockStories)

  const handleStoryClick = (storyId: string) => {
    setSelectedStory(storyId)
    // Mark story as viewed
    setStories((prev) => prev.map((story) => (story.id === storyId ? { ...story, viewed: true } : story)))
  }

  const handleCloseStory = () => {
    setSelectedStory(null)
  }

  const selectedStoryData = stories.find((story) => story.id === selectedStory)

  return (
    <>
      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story) => (
          <StoryPreview key={story.id} story={story} onClick={() => handleStoryClick(story.id)} />
        ))}
      </div>

      {selectedStoryData && <StoryViewer story={selectedStoryData} onClose={handleCloseStory} />}
    </>
  )
}
