import NewsletterForm from "@/components/newsletter/newslettter-form";

export default function Newsletter() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl md:text-6xl text-center font-bold">
        É um pecado o que eu ensino aqui.
      </h1>
      <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-orange-600 text-transparent bg-clip-text">
        Newsletter
      </h2>
      <NewsletterForm />
    </main>
  );
}
