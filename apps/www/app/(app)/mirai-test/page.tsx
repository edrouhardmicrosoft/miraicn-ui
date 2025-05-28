"use client"

import * as React from "react"

import { Button } from "@/registry/new-york/ui/button"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Progress } from "@/registry/new-york/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/registry/new-york/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Slider } from "@/registry/new-york/ui/slider"
import { Switch } from "@/registry/new-york/ui/switch"
import { Textarea } from "@/registry/new-york/ui/textarea"

export default function MiraiTestPage() {
  const [progress, setProgress] = React.useState(33)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto p-8 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-8">Mirai Component Test Suite</h1>
        <p className="text-muted-foreground mb-4">
          Visual testing page for Mirai-styled components
        </p>
      </div>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Appearances</h3>
            <div className="flex gap-4 flex-wrap">
              <Button variant="default">Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Subtle</Button>
              <Button variant="ghost">Transparent</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Sizes</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <Button size="sm">Small</Button>
              <Button size="default">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔍</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">States</h3>
            <div className="flex gap-4 flex-wrap">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button className="bg-brand hover:bg-brand/90">Active</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Shapes</h3>
            <div className="flex gap-4 flex-wrap">
              <Button shape="square">Square</Button>
              <Button shape="rounded">Rounded</Button>
              <Button shape="circular">Circular</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">
              Size & Shape Combinations
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <Button size="sm" shape="square">
                Small Square
              </Button>
              <Button size="sm" shape="rounded">
                Small Round
              </Button>
              <Button size="sm" shape="circular">
                Small
              </Button>
              <Button size="default" shape="square">
                Med Square
              </Button>
              <Button size="default" shape="rounded">
                Med Round
              </Button>
              <Button size="default" shape="circular">
                Medium
              </Button>
              <Button size="lg" shape="square">
                Large Square
              </Button>
              <Button size="lg" shape="rounded">
                Large Round
              </Button>
              <Button size="lg" shape="circular">
                Large
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Inputs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <Input type="text" placeholder="Default input" />
          <Input type="text" placeholder="Disabled input" disabled />
          <Input type="email" placeholder="Email input" />
          <Input type="password" placeholder="Password input" />
          <Input type="number" placeholder="Number input" />
          <Input type="date" />
          <Input type="color" className="w-32" />
          <Input type="file" />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Textarea</h3>
          <Textarea
            placeholder="Enter your message here..."
            className="max-w-md"
          />
        </div>
      </section>

      {/* Checkboxes & Radio Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">
          Checkboxes & Radio Buttons
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-2">Checkboxes</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="check1" defaultChecked />
              <Label htmlFor="check1">Checked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="check2" />
              <Label htmlFor="check2">Unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="check3" disabled />
              <Label htmlFor="check3">Disabled</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-2">Radio Buttons</h3>
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-1" id="option-1" />
                <Label htmlFor="option-1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-2" id="option-2" />
                <Label htmlFor="option-2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-3" id="option-3" disabled />
                <Label htmlFor="option-3">Disabled</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Switch</h3>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>
      </section>

      {/* Select Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Select</h2>
        <div className="max-w-xs">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Progress & Slider Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Progress & Slider</h2>

        <div className="space-y-4 max-w-md">
          <div>
            <h3 className="text-lg font-medium mb-2">Progress</h3>
            <Progress value={progress} className="w-full" />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Slider</h3>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </div>
      </section>

      {/* Dialog Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a sample dialog window with some content.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>This is the main content of the dialog.</p>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Color Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Backgrounds</h3>
            <div className="space-y-2">
              <div className="w-full h-12 bg-background border rounded flex items-center justify-center text-xs">
                BG 1
              </div>
              <div className="w-full h-12 bg-background-2 border rounded flex items-center justify-center text-xs">
                BG 2
              </div>
              <div className="w-full h-12 bg-background-3 border rounded flex items-center justify-center text-xs">
                BG 3
              </div>
              <div className="w-full h-12 bg-background-4 border rounded flex items-center justify-center text-xs">
                BG 4
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Text</h3>
            <div className="space-y-2">
              <div className="text-foreground-1">Text 1</div>
              <div className="text-foreground-2">Text 2</div>
              <div className="text-foreground-3">Text 3</div>
              <div className="text-foreground-4">Text 4</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Brand</h3>
            <div className="space-y-2">
              <div className="w-full h-12 bg-brand border rounded"></div>
              <div className="text-brand-text">Brand Text</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Borders</h3>
            <div className="space-y-2">
              <div className="w-full h-12 border border-border rounded"></div>
              <div className="w-full h-12 border border-border-2 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
