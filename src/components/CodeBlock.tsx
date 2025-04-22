
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
};

export function CodeBlock({
  children,
  language,
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const codeRef = React.useRef<HTMLPreElement>(null);

  const onCopy = async () => {
    if (!codeRef.current) return;
    const text = codeRef.current.textContent || "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative my-4 overflow-hidden rounded-lg", className)}>
      <div className="flex items-center justify-between bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
        {language && <span>{language}</span>}
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2"
          onClick={onCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <pre
        ref={codeRef}
        className={cn(
          "px-4 py-3 font-mono text-sm bg-code text-code-foreground overflow-x-auto",
          showLineNumbers && "line-numbers"
        )}
      >
        {children}
      </pre>
    </div>
  );
}
