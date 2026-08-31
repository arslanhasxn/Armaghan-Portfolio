import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useSearch } from "@/context/SearchContext";
import { searchIndex } from "@/lib/search";

export function OmnibarSearch() {
  const { isOpen, openSearch, closeSearch } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openSearch]);

  const pages = searchIndex.filter((item) => item.type === "page");
  const projects = searchIndex.filter((item) => item.type === "project");
  const skills = searchIndex.filter((item) => item.type === "skill");

  const goTo = (href: string) => {
    navigate(href);
    closeSearch();
  };

  return (
    <CommandDialog
      open={isOpen}
      onOpenChange={(open) => (open ? openSearch() : closeSearch())}
    >
      <CommandInput placeholder="Search projects, pages, skills..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Pages">
          {pages.map((item) => (
            <CommandItem key={item.id} onSelect={() => goTo(item.href)}>
              <span>{item.title}</span>
              {item.subtitle ? (
                <span className="text-muted-foreground">— {item.subtitle}</span>
              ) : null}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          {projects.map((item) => (
            <CommandItem key={item.id} onSelect={() => goTo(item.href)}>
              <span>{item.title}</span>
              <CommandShortcut>{item.subtitle}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Skills">
          {skills.map((item) => (
            <CommandItem key={item.id} onSelect={() => goTo(item.href)}>
              {item.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
