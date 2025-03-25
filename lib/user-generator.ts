import type { User } from "@/types/user"

interface GenerateOptions {
  country?: string
  gender?: string
  includeEmail?: boolean
  includePhone?: boolean
  includeAddress?: boolean
}

// Données pour la génération aléatoire
const firstNamesMale = {
  france: ["Jean", "Pierre", "Michel", "Thomas", "Nicolas", "Julien", "David", "François", "Éric", "Antoine"],
  belgium: ["Luc", "Marc", "Mathieu", "Benoît", "Philippe", "Olivier", "Vincent", "Christophe", "Stéphane", "Grégoire"],
  switzerland: ["Alain", "Bernard", "Claude", "Daniel", "Étienne", "Fabien", "Gilles", "Henri", "Jacques", "Kevin"],
  canada: ["Alexandre", "Maxime", "Samuel", "Gabriel", "William", "Félix", "Émile", "Léo", "Louis", "Nathan"],
  usa: ["John", "Michael", "David", "James", "Robert", "William", "Richard", "Joseph", "Thomas", "Christopher"],
}

const firstNamesFemale = {
  france: ["Marie", "Sophie", "Isabelle", "Catherine", "Nathalie", "Claire", "Julie", "Céline", "Émilie", "Anne"],
  belgium: ["Emma", "Louise", "Élise", "Charlotte", "Juliette", "Camille", "Léa", "Manon", "Chloé", "Inès"],
  switzerland: [
    "Aurélie",
    "Béatrice",
    "Caroline",
    "Delphine",
    "Estelle",
    "Florence",
    "Géraldine",
    "Hélène",
    "Irène",
    "Jeanne",
  ],
  canada: [
    "Amélie",
    "Béatrice",
    "Caroline",
    "Dominique",
    "Élisabeth",
    "Florence",
    "Gabrielle",
    "Hélène",
    "Isabelle",
    "Josée",
  ],
  usa: ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen"],
}

const lastNames = {
  france: ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau"],
  belgium: ["Peeters", "Janssens", "Maes", "Jacobs", "Mertens", "Willems", "Claes", "Goossens", "Wouters", "De Smet"],
  switzerland: [
    "Müller",
    "Schmidt",
    "Schneider",
    "Fischer",
    "Weber",
    "Meyer",
    "Wagner",
    "Becker",
    "Schulz",
    "Hoffmann",
  ],
  canada: ["Tremblay", "Gagnon", "Roy", "Côté", "Bouchard", "Gauthier", "Morin", "Lavoie", "Fortin", "Gagné"],
  usa: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"],
}

const cities = {
  france: [
    "Paris",
    "Lyon",
    "Marseille",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Montpellier",
    "Bordeaux",
    "Lille",
  ],
  belgium: ["Bruxelles", "Anvers", "Gand", "Charleroi", "Liège", "Bruges", "Namur", "Louvain", "Mons", "Ostende"],
  switzerland: [
    "Zurich",
    "Genève",
    "Bâle",
    "Lausanne",
    "Berne",
    "Winterthour",
    "Lucerne",
    "Saint-Gall",
    "Lugano",
    "Bienne",
  ],
  canada: [
    "Montréal",
    "Québec",
    "Ottawa",
    "Toronto",
    "Vancouver",
    "Calgary",
    "Edmonton",
    "Winnipeg",
    "Halifax",
    "Victoria",
  ],
  usa: [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ],
}

const streets = {
  france: [
    "Rue de la Paix",
    "Avenue des Champs-Élysées",
    "Boulevard Saint-Michel",
    "Rue de Rivoli",
    "Avenue Victor Hugo",
  ],
  belgium: ["Rue Neuve", "Avenue Louise", "Boulevard Anspach", "Rue Royale", "Avenue de Tervueren"],
  switzerland: ["Bahnhofstrasse", "Rue du Rhône", "Avenue de la Gare", "Marktgasse", "Bundesplatz"],
  canada: [
    "Rue Sainte-Catherine",
    "Boulevard René-Lévesque",
    "Avenue du Mont-Royal",
    "Rue Sherbrooke",
    "Boulevard Saint-Laurent",
  ],
  usa: ["Broadway", "Fifth Avenue", "Main Street", "Park Avenue", "Wall Street"],
}

const postalCodes = {
  france: ["75001", "69001", "13001", "31000", "06000", "44000", "67000", "34000", "33000", "59000"],
  belgium: ["1000", "2000", "9000", "6000", "4000", "8000", "5000", "3000", "7000", "8400"],
  switzerland: ["8001", "1201", "4001", "1001", "3001", "8400", "6000", "9000", "6900", "2500"],
  canada: [
    "H2X 1Y6",
    "G1R 4P3",
    "K1P 1J1",
    "M5V 2H1",
    "V6B 2W9",
    "T2P 1J9",
    "T5J 0N3",
    "R3B 0Y4",
    "B3J 1S0",
    "V8W 1W5",
  ],
  usa: ["10001", "90001", "60601", "77001", "85001", "19101", "78201", "92101", "75201", "95101"],
}

const emailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "protonmail.com", "aol.com", "icloud.com"]

const phoneFormats = {
  france: "06 ## ## ## ##",
  belgium: "04## ## ## ##",
  switzerland: "07# ### ## ##",
  canada: "514-###-####",
  usa: "555-###-####",
}

// Fonction utilitaire pour obtenir un élément aléatoire d'un tableau
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

// Fonction utilitaire pour formater un numéro de téléphone
function formatPhoneNumber(format: string): string {
  return format.replace(/#/g, () => Math.floor(Math.random() * 10).toString())
}

// Fonction pour générer une date de naissance aléatoire (entre 18 et 70 ans)
function generateRandomBirthDate(): string {
  const now = new Date()
  const year = now.getFullYear() - Math.floor(Math.random() * 52) - 18 // Entre 18 et 70 ans
  const month = Math.floor(Math.random() * 12) + 1
  const day = Math.floor(Math.random() * 28) + 1 // Pour éviter les problèmes avec février

  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`
}

// Fonction principale pour générer un utilisateur aléatoire
export async function generateRandomUser(options: GenerateOptions = {}): Promise<User> {
  const country = options.country || "france"
  const gender = options.gender || (Math.random() > 0.5 ? "male" : "female")

  // Sélection du prénom en fonction du genre et du pays
  const firstName =
    gender === "male"
      ? getRandomElement(firstNamesMale[country as keyof typeof firstNamesMale] || firstNamesMale.france)
      : getRandomElement(firstNamesFemale[country as keyof typeof firstNamesFemale] || firstNamesFemale.france)

  // Sélection du nom de famille en fonction du pays
  const lastName = getRandomElement(lastNames[country as keyof typeof lastNames] || lastNames.france)

  // Génération de l'email
  const email =
    options.includeEmail !== false
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${getRandomElement(emailDomains)}`
      : undefined

  // Génération du numéro de téléphone
  const phone =
    options.includePhone !== false
      ? formatPhoneNumber(phoneFormats[country as keyof typeof phoneFormats] || phoneFormats.france)
      : undefined

  // Génération de l'adresse
  const address =
    options.includeAddress !== false
      ? {
          street: `${Math.floor(Math.random() * 100) + 1} ${getRandomElement(streets[country as keyof typeof streets] || streets.france)}`,
          city: getRandomElement(cities[country as keyof typeof cities] || cities.france),
          postalCode: getRandomElement(postalCodes[country as keyof typeof postalCodes] || postalCodes.france),
          country: country,
        }
      : undefined

  // Génération de la date de naissance
  const birthDate = generateRandomBirthDate()

  // Simulation d'un délai pour donner l'impression d'un traitement
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    firstName,
    lastName,
    email,
    phone,
    address,
    birthDate,
    gender,
  }
}

