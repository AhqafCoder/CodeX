import { Code, Cpu, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function HeroShowcase() {
  return (
    <div className="mt-10 w-full max-w-5xl animate-fade-in-up delay-400 relative">
      {/* Vite-like grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-[50px]"></div>
      </div>
      
      {/* Floating elements (reduced blur for performance) */}
      <div className="absolute -top-20 -left-20 h-32 w-32 rounded-full bg-primary/5 blur-[50px]"></div>
      <div className="absolute -bottom-20 -right-20 h-32 w-32 rounded-full bg-primary/10 blur-[50px]"></div>
      
      {/* Main content cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        {/* Feature highlight card */}
        <Card className="col-span-1 md:col-span-1 bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transform hover:-translate-y-1">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Modern Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-foreground/70">
              Learn and build with cutting-edge technologies including React, Node.js, Python, and machine learning frameworks.
            </CardDescription>
          </CardContent>
        </Card>
        
        {/* Main feature card */}
        <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-xl hover:border-purple-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Join Our Community</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">200+ Members</h4>
                  <p className="text-xs text-muted-foreground">From all departments</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">50+ Projects</h4>
                  <p className="text-xs text-muted-foreground">Completed annually</p>
                </div>
              </div>
            </div>
            
            {/* Code snippet effect */}
            <div className="relative rounded-md overflow-hidden border border-white/10 dark:border-white/5 bg-black/80 p-4 text-xs font-mono text-green-400">
              <div className="absolute top-2 right-2 flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-3">
                <span className="text-blue-400">const</span> <span className="text-yellow-400">codeX</span> = <span className="text-purple-400">{`{`}</span><br />
                <span className="pl-4">join: <span className="text-orange-400">()</span> <span className="text-purple-400">=</span> <span className="text-blue-400">{`{`}</span></span><br />
                <span className="pl-8">console.<span className="text-yellow-400">log</span>(<span className="text-green-400">"Hello, Developer!"</span>);</span><br />
                <span className="pl-8">return <span className="text-green-400">"Welcome to CodeX!"</span>;</span><br />
                <span className="pl-4"><span className="text-blue-400">{`}`}</span></span><br />
                <span className="text-purple-400">{`}`}</span>;
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <Separator className="my-8 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-30" />
      
      {/* Tech logos */}
      <div className="flex justify-center items-center gap-8 flex-wrap mt-6 opacity-70">
        <div className="h-6 w-6 bg-foreground/80 mask-image-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ28gPC90aXRsZT4KICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMi4wNSIgZmlsbD0iIzYxZGFmYiIgLz4KICA8ZyBzdHJva2U9IiM2MWRhZmIiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIC8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIgLz4KICAgIDxlbGxpcHNlIHJ4PSIxMSIgcnk9IjQuMiIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIgLz4KICA8L2c+Cjwvc3ZnPg==')]" aria-hidden="true" />
        <div className="h-6 w-6 bg-foreground/80 mask-image-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTIyNCAyNzMgTDg5LjIgMzY4LjlDODIuNCAzNzMuNSA3My43IDM3MC44IDcwLjMgMzYzLjVMNDIuMiAyNTQuOEMzOC44IDI0Ny41IDQyLjkgMjM5LjEgNTAuNCAyMzYuNUw2Ni42IDIzMC41IDIyNCAyNzN6TTIyNCAyNzMgTDM1OC44IDM2OC45QzM2NS42IDM3My41IDM3NC4zIDM3MC44IDM3Ny43IDM2My41TDQwNS44IDI1NC44QzQwOS4yIDI0Ny41IDQwNS4xIDIzOS4xIDM5Ny42IDIzNi41TDM4MS40IDIzMC41IDIyNCAyNzN6TTIyNCAyNzMgVjIzMC41TDIyNCAyMzAuNSAyMjQgMTQ0LjggMjI0IDE0NC44IDIyNCA1OC4yQzIyNCA1MC43IDIzMC43IDQ0IDIzOC4yIDQ0SDI0NS44QzI1My4zIDQ0IDI2MCA1MC43IDI2MCA1OC4yVjE0NC44SDI5Ni4yQzMwMy43IDE0NC44IDMxMCAxNTEuNSAzMTAgMTU5VjE2Ni41QzMxMCAxNzQgMzAzLjMgMTgwLjggMjk1LjggMTgwLjhIMjYwVjIzMC41TDM4MS40IDIzMC41IDIyNCAyNzN6TTIyNCAyNzMgVjIzMC41TDIyNCAyMzAuNSAyMjQgMTQ0LjggMjI4IDE0NC44IDIyNCA1OC4yQzIyNCA1MC43IDIxNy4zIDQ0IDIwOS44IDQ0SDIwMi4yQzE5NC43IDQ0IDE4OCA1MC43IDE4OCA1OC4yVjE0NC44SDE1MS44QzE0NC4zIDE0NC44IDEzOCAxNTEuNSAxMzggMTU5VjE2Ni41QzEzOCAxNzQgMTQ0LjcgMTgwLjggMTUyLjIgMTgwLjhIMTg4VjIzMC41TDY2LjYgMjMwLjUgMjI0IDI3M3oiLz48L3N2Zz4=')]" aria-hidden="true" />
        <div className="h-6 w-6 bg-foreground/80 mask-image-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTQzOS44IDIwMC41YzAtNy4xLTUuNy0xMi44LTEyLjgtMTIuOGgtNzQuNFYxMTMuOWMwLTcuMS01LjctMTIuOC0xMi44LTEyLjhIMzE1LjFjLTcuMSAwLTEyLjggNS43LTEyLjggMTIuOHY3My44aC03NC40Yy03LjEgMC0xMi44IDUuNy0xMi44IDEyLjh2MjQuNWMwIDcuMSA1LjcgMTIuOCAxMi44IDEyLjhoNzQuNHY3My44YzAgNy4xIDUuNyAxMi44IDEyLjggMTIuOGgyNC41YzcuMSAwIDEyLjgtNS43IDEyLjgtMTIuOHYtNzMuOGg3NC40YzcuMSAwIDEyLjgtNS43IDEyLjgtMTIuOFYyMDAuNXpNMjI0IDI4OGMtNDUuNCAwLTgzLjUtMzMuNi05MC4xLTc3LjhjLTEuNi0xMC42LTEwLjYtMTguNy0yMS41LTE4LjdoLTI0LjZjLTEzLjIgMC0yMy40IDExLjUtMjEuOSAyNC42QzczLjkgMzA0LjYgMTQzLjkgMzY4IDIyNCAzNjhjNTcuOSAwIDEwOS4yLTI5LjUgMTM5LjItNzQuNGM1LjctOC41IDQuOS0xOS44LTEuOS0yNy40bC0xNy41LTE5LjRjLTcuMi04LTE5LjctOC41LTI3LjQtLjljLTIzLjIgMjIuOS01NC45IDM3LjItOTAuMyAzNy4yYy01Ny45IDAtMTA1LjYtNDMuNi0xMTEuOS0xMDAuMWMtMS42LTE0LjIgOS4zLTI2LjcgMjMuNi0yNi43aDI0LjRjMTAuOSAwIDE5LjktOC4xIDIxLjUtMTguNyA2LjYtNDQuMiA0NC43LTc3LjggOTAuMS03Ny44YzM1LjQgMCA2Ny4xIDE0LjMgOTAuMyAzNy4yYzcuNyA3LjYgMjAuMiA3LjEgMjcuNC0uOWwxNy41LTE5LjRjNi44LTcuNSA3LjYtMTguOSAxLjktMjcuNEMzMzMuMiA0MS41IDI4MS45IDEyIDIyNCAxMkMxNDMuOSAxMiA3My45IDc1LjQgNjYuOSAxNjRjLTEuNSAxMy4xIDguNyAyNC42IDIxLjkgMjQuNmgyNC42YzEwLjkgMCAxOS45IDguMSAyMS41IDE4LjcgNi42IDQ0LjIgNDQuNyA3Ny44IDkwLjEgNzcuOGMzNS40IDAgNjcuMS0xNC4zIDkwLjMtMzcuMmM3LjctNy42IDIwLjIgNy4xIDI3LjQuOWwxNy41IDE5LjRjNi44IDcuNSA3LjYgMTguOSAxLjkgMjcuNC0zMCAzNC45LTgxLjMgNjQuNC0xMzkuMiA2NC40LTgwLjEgMC0xNTAuMS02My40LTE1Ny4xLTE1MmMtMS41LTEzLjEgOC43LTI0LjYgMjEuOS0yNC42aDI0LjZjMTAuOSAwIDE5LjkgOC4xIDIxLjUgMTguNyA2LjYgNDQuMiA0NC43IDc3LjggOTAuMSA3Ny44YzM1LjQgMCA2Ny4xLTE0LjMgOTAuMy0zNy4yYzcuNy03LjYgMjAuMi03LjEgMjcuNC45bDE3LjUgMTkuNGM2LjggNy41IDcuNiAxOC45IDEuOSAyNy40LTMwIDM0LjktODEuMyA2NC40LTEzOS4yIDY0LjR6Ii8+PC9zdmc=')]" aria-hidden="true" />
      </div>
    </div>
  )
} 