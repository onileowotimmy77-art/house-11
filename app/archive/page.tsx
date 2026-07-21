import {
  ArchiveThreshold,
  ArchivePrologue,
  ArchiveTimeline,
 
  ArchiveChapter,
} from "@/components/archive";

export default function ArchivePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <ArchiveThreshold />

      <ArchivePrologue />

      <ArchiveTimeline />

      

      <ArchiveChapter />

    </main>
  );
}