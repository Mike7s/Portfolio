import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProgettiCarousel() {
  const progetti = [
    {
      titolo: "Global Warming",
      img: "/img/image.png",
      link: "https://global-warming-red.vercel.app/",
      descrizione: "Il mio sito per il riscaldamento globale con React e Tailwind.",
      tags: ["React", "Tailwind", "Typescript"],
    },
    {
      titolo: "Atletico San Lorenzo",
      img: "/img/sanlorenzo.png",
      link: "https://atletico-san-lorenzo.vercel.app/",
      descrizione: "Un sito per una squadra di calcio amatoriale.",
      tags: ["React", "Typescript", "Tailwind"],
    },
    {
      titolo: "Vegetarian Recipes",
      img: "/img/vegetarianRecipes.png",
      link: "https://vegetarian-recipes-five.vercel.app/",
      descrizione: "Il mio sito per un progetto di ricette vegetariane.",
      tags: ["React", "Typescript", "Vite"],
    },
    {
      titolo: "Cocktail Recipes",
      img: "/img/cocktail.png",
      link: "https://cocktail-recipes-beige.vercel.app/",
      descrizione: "Un sito di ricette per cocktail.",
      tags: ["React", "Tailwind", "Vite"],
    },
    {
      titolo: "Guess the Number",
      img: "/img/guessTheNumber.png",
      link: "https://guess-the-number-tau-two.vercel.app/",
      descrizione:
        "Un gioco creato da me, dove l'utente deve indovinare il numero con un numero limitato di tentativi.",
      tags: ["React", "Tailwind", "Vite"],
    },
  ];

  return (
    <div className="w-full min-w-0 max-w-xl mx-auto py-8 sm:py-10 px-2 sm:px-0">
      <Carousel className="w-full">
        <CarouselContent>
          {progetti.map((p, index) => (
            <CarouselItem key={index} className="basis-full">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={p.img}
                  alt={p.titolo}
                  className="w-full h-56 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 bg-[#0F172A] text-[#f96c38] font-semibold text-base sm:text-lg">
                  {p.titolo}
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex -left-12 hover:cursor-pointer h-10 w-10" />
        <CarouselNext className="hidden sm:flex -right-12 hover:cursor-pointer h-10 w-10" />
      </Carousel>
    </div>
  );
}

export default ProgettiCarousel;