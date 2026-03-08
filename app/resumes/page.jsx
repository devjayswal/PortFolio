import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

function formatResumeName(fileName) {
  const extension = path.extname(fileName);
  const baseName = fileName.replace(extension, "");
  return baseName.replace(/_/g, " ");
}

async function getResumeFiles() {
  const resumesDirectory = path.join(process.cwd(), "public", "Resumes");

  try {
    const files = await fs.readdir(resumesDirectory);

    return files
      .filter((file) => /\.(pdf|doc|docx)$/i.test(file))
      .sort((first, second) => first.localeCompare(second));
  } catch {
    return [];
  }
}

export default async function ResumesPage() {
  const resumeFiles = await getResumeFiles();

  return (
    <main className="mx-auto mb-20 max-w-3xl px-4 pt-6 sm:pt-12">
      <section className="rounded-xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5">
        <p className="mb-2 font-mono text-xs text-emerald-600 dark:text-emerald-400">
          $ ls ~/Resumes
        </p>
        <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">Resumes</h1>

        {resumeFiles.length === 0 ? (
          <p className="text-sm text-gray-600 dark:text-white/70">
            No resume files found in /public/Resumes.
          </p>
        ) : (
          <ul className="space-y-3">
            {resumeFiles.map((file) => (
              <li
                key={file}
                className="flex items-center justify-between gap-3 rounded-lg border border-black/10 bg-gray-50 px-3 py-2 dark:border-white/10 dark:bg-gray-900/40"
              >
                <span className="truncate font-mono text-xs text-gray-700 dark:text-white/80 sm:text-sm">
                  {formatResumeName(file)}
                </span>
                <a
                  href={`/Resumes/${encodeURIComponent(file)}`}
                  download
                  className="shrink-0 rounded-md border border-black/10 bg-white px-3 py-1.5 text-xs font-medium hover:bg-gray-100 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5">
          <Link
            href="/"
            className="text-sm text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-400"
          >
            Back to portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
