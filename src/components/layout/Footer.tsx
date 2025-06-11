import { Link } from "react-router-dom";
import { ArrowRight, Github, Instagram, MessageSquare, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <footer className="border-t bg-background w-full">
      <div className="container mx-auto py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
          {/* Logo and social media section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Avatar className="size-12 mb-2">
                <AvatarFallback className="bg-primary text-primary-foreground font-bold text-lg">CX</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold"><span className="text-primary">CodeX</span></h3>
              <p className="text-muted-foreground max-w-md text-center md:text-left text-sm">
                Empowering students through coding and robotics innovation. Join our community of tech enthusiasts and future innovators.
              </p>
            </div>
            
            <div className="flex gap-3 justify-center md:justify-start">
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9 transition-colors hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9 transition-colors hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9 transition-colors hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://chat.whatsapp.com/HXQnlpYjI1tELYU2zUgCe7" target="_blank" rel="noreferrer">
                  <MessageSquare className="h-4 w-4" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-center sm:text-left">Quick Links</h4>
            <nav aria-label="Quick links" className="flex flex-col space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-0">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left text-sm">Home</a>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left text-sm">About Us</a>
                <a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left text-sm">Programs</a>
                <a href="/events" className="text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left text-sm">Events</a>
                <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left text-sm">Blog</a>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left text-sm">Contact</a>
              </div>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-center sm:text-left">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Invertis University, Bareilly, Himgiri</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 7310458301</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">apanacodex@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter subscription card */}
          <div className="lg:col-span-1">
            <Card className="border-primary/10 shadow-md mx-auto sm:mx-0 max-w-sm w-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-center sm:text-left text-sm font-semibold tracking-wider uppercase">Newsletter</CardTitle>
                <CardDescription className="text-center sm:text-left text-xs">
                  Stay updated with our latest news
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 w-full text-sm"
                    />
                  </div>
                  <Button type="submit" className="w-full text-sm">
                    Subscribe
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground px-4 sm:px-6 md:px-8">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} <span className="text-primary font-medium">CodeX</span>. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link to="/" className="hover:text-foreground transition-colors text-xs">Privacy Policy</Link>
            <Link to="/" className="hover:text-foreground transition-colors text-xs">Terms of Service</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors text-xs">Support</Link>
          </div>
        </div>
        
        
          
      </div>
    </footer>
  );
}