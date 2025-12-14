import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WHATSAPP_NUMBER = "916385444407";

interface WhatsAppQuoteDialogProps {
  variant?: "hero" | "cta";
}

export function WhatsAppQuoteDialog({ variant = "hero" }: WhatsAppQuoteDialogProps) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = encodeURIComponent(
      `Hi Spectra 3D Hub 👋\nMy name is ${name.trim()}.\nI want a quote for 3D printing.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setOpen(false);
    setName("");
  };

  const buttonClasses = variant === "cta" 
    ? "magnetic-button group relative bg-neon-cyan text-background font-semibold px-10 py-7 text-lg shadow-neon-lg"
    : "bg-neon-cyan text-black font-semibold px-8 py-6 text-lg shadow-neon hover:scale-105 transition";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={buttonClasses} data-testid="button-whatsapp">
          <MessageCircle className={variant === "cta" ? "mr-2 h-6 w-6" : "mr-2 h-5 w-5"} />
          Get Quote on WhatsApp
          {variant === "cta" && (
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-neon-cyan/30 bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Get Your Quote</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your name so we know who we're chatting with!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-neon-cyan/30 focus:border-neon-cyan bg-background/50"
              autoFocus
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-neon-cyan text-black font-semibold hover:bg-neon-cyan/90"
            disabled={!name.trim()}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Continue to WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
