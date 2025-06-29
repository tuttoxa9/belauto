"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StoryContent {
  type: "image" | "video"
  url: string
  duration: number
}

interface Story {
  id: string
  title: string
  content: StoryContent[]
}

interface StoryViewerProps {
  story: Story
  onClose: () => void
}

export function StoryViewer({ story, onClose }: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const currentContent = story.content[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (currentContent.duration / 100)
        if (newProgress >= 100) {
          if (currentIndex < story.content.length - 1) {
            setCurrentIndex((prev) => prev + 1)
            return 0
          } else {
            onClose()
            return 100
          }
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentIndex, currentContent.duration, story.content.length, onClose])

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setProgress(0)
    }
  }

  const handleNext = () => {
    if (currentIndex < story.content.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setProgress(0)
    } else {
      onClose()
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "ArrowRight") handleNext()
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative max-w-md w-full mx-4 bg-black rounded-2xl overflow-hidden">
        {/* Progress bars */}
        <div className="absolute top-4 left-4 right-4 z-10 flex space-x-1">
          {story.content.map((_, index) => (
            <div key={index} className="flex-1 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{
                  width: index < currentIndex ? "100%" : index === currentIndex ? `${progress}%` : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white hover:bg-opacity-20"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Content */}
        <div className="relative aspect-[9/16] bg-gray-900">
          <img
            src={currentContent.url || "/placeholder.svg"}
            alt={story.title}
            className="w-full h-full object-cover"
          />

          {/* Navigation areas */}
          <div
            className="absolute left-0 top-0 w-1/3 h-full cursor-pointer flex items-center justify-start pl-4"
            onClick={handlePrevious}
          >
            {currentIndex > 0 && <ChevronLeft className="w-8 h-8 text-white opacity-50" />}
          </div>
          <div
            className="absolute right-0 top-0 w-1/3 h-full cursor-pointer flex items-center justify-end pr-4"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8 text-white opacity-50" />
          </div>
        </div>

        {/* Story title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold">{story.title}</h3>
        </div>
      </div>
    </div>
  )
}
