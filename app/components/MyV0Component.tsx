/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j5irYqCMJDj
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-lg w-full space-y-6 bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Current Weather</h2>
            <p className="text-gray-600 dark:text-gray-300">Sunny, 24°C</p>
          </div>
          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            <svg
              className=" w-6 h-6 text-yellow-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
        <div className="space-y-4">
          <Label htmlFor="poem">Generate a Poem</Label>
          <Input id="poem" placeholder="Enter a keyword" />
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" type="submit">
            Generate
          </Button>
        </div>
      </div>
    </div>
  )
}
