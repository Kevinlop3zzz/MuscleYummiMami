import { MenuBar, MacWindow } from "@/components/MacWindow";
import { CerealBox } from "@/components/CerealBox";
import { shoeInventory } from "@/data/inventory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoes",
  description: "Shop Muscle Yummi Mami custom shoes. Limited drops, original designs, built different. Find your sole.",
  keywords: ["custom shoes", "streetwear shoes", "limited edition sneakers", "muscle yummi mami shoes"],
  openGraph: {
    title: "Shoes — Muscle Yummi Mami",
    description: "Shop custom shoes. Limited drops, original designs, built different.",
    url: "https://musclemami.fit/shop/shoes",
  },
};

const shoeCereals = [
  { name: "MUSCLE YUMMI", flavor: "Kick Krispies",    color: "#f5f0e8", accent: "#cc2222", textColor: "#000",   emoji: "👟", tagline: "Snap Crackle Kick" },
  { name: "MUSCLE YUMMI", flavor: "Sole Smacks",      color: "#ffd700", accent: "#b8860b", textColor: "#3a2800", emoji: "🔥", tagline: "Honey Coated Sole" },
  { name: "MUSCLE YUMMI", flavor: "Fresh Flakes",     color: "#dceeff", accent: "#1a6cbf", textColor: "#000",   emoji: "💨", tagline: "Air-Fresh Corn" },
  { name: "MUSCLE YUMMI", flavor: "Sugar Stepz",      color: "#ffb6d9", accent: "#cc2288",               emoji: "💅", tagline: "Pink Sugar Glazed" },
  { name: "MUSCLE YUMMI", flavor: "Tread Trix",       color: "#ff6b9d", accent: "#7b2d8b",               emoji: "🌈", tagline: "Fruity All-Stars" },
  { name: "MUSCLE YUMMI", flavor: "Cap'n Sole",       color: "#003087", accent: "#c8102e",               emoji: "⚓", tagline: "Deep Crunch Walk" },
  { name: "MUSCLE YUMMI", flavor: "Wheat Walkerz",    color: "#c8a96e", accent: "#7a4e20",               emoji: "🌾", tagline: "Whole Grain Step" },
  { name: "MUSCLE YUMMI", flavor: "Cocoa Kickz",      color: "#3d1a0a", accent: "#7a3010", textColor: "#ffd700", emoji: "🍫", tagline: "Dark Chocolate Run" },
  { name: "MUSCLE YUMMI", flavor: "Cinna Stepz",      color: "#c0522a", accent: "#7a2e10",               emoji: "🌀", tagline: "Cinnamon Heat" },
  { name: "MUSCLE YUMMI", flavor: "Lucky Laces",      color: "#2e8b57", accent: "#1a5c36",               emoji: "🍀", tagline: "Lucky Charm Fit" },
  { name: "MUSCLE YUMMI", flavor: "Berry Runner",     color: "#6a0dad", accent: "#380070",               emoji: "🫐", tagline: "Berry Boost" },
  { name: "MUSCLE YUMMI", flavor: "Golden Sole",      color: "#ffd700", accent: "#8b6914", textColor: "#3a2800", emoji: "✨", tagline: "24K Gold Step" },
  { name: "MUSCLE YUMMI", flavor: "Frosted Air",      color: "#c8e8ff", accent: "#2a7ab0", textColor: "#000",   emoji: "❄️", tagline: "Icy Fresh Sole" },
  { name: "MUSCLE YUMMI", flavor: "Grape Grip",       color: "#6a0dad", accent: "#2d0060",               emoji: "🍇", tagline: "Grape Traction" },
  { name: "MUSCLE YUMMI", flavor: "Apple Stepz",      color: "#c8e6a0", accent: "#4a7c30", textColor: "#1a3a10", emoji: "🍎", tagline: "Apple Bottom" },
  { name: "MUSCLE YUMMI", flavor: "Peanut Pace",      color: "#c8922a", accent: "#5c2d00",               emoji: "🥜", tagline: "Butter Crunch Run" },
  { name: "MUSCLE YUMMI", flavor: "Mango Miles",      color: "#ffb347", accent: "#e65c00", textColor: "#3a1500", emoji: "🥭", tagline: "Tropical Mile" },
  { name: "MUSCLE YUMMI", flavor: "Cherry Chase",     color: "#8b0000", accent: "#5c0000",               emoji: "🍒", tagline: "Wild Cherry Sprint" },
  { name: "MUSCLE YUMMI", flavor: "Lemon Leap",       color: "#fff44f", accent: "#c8a000", textColor: "#3a2800", emoji: "🍋", tagline: "Lemon Zest Jump" },
  { name: "MUSCLE YUMMI", flavor: "Orange Hustle",    color: "#ff6600", accent: "#cc3300",               emoji: "🍊", tagline: "Citrus Hustle" },
  { name: "MUSCLE YUMMI", flavor: "Coconut Coast",    color: "#f0ece8", accent: "#8b6914", textColor: "#000",   emoji: "🥥", tagline: "Island Walker" },
  { name: "MUSCLE YUMMI", flavor: "Caramel Court",    color: "#c68642", accent: "#8b4513",               emoji: "🍮", tagline: "Salted Court Walk" },
  { name: "MUSCLE YUMMI", flavor: "Mocha March",      color: "#3c2415", accent: "#1a0a00", textColor: "#d4a96a", emoji: "☕", tagline: "Espresso Step" },
  { name: "MUSCLE YUMMI", flavor: "Mint Mile",        color: "#98ff98", accent: "#2d8a2d", textColor: "#1a3a10", emoji: "🌿", tagline: "Peppermint Run" },
  { name: "MUSCLE YUMMI", flavor: "Vanilla Vault",    color: "#fff8dc", accent: "#d4b896", textColor: "#5a3e00", emoji: "🤍", tagline: "Pure Vanilla Step" },
  { name: "MUSCLE YUMMI", flavor: "Maple Marathon",   color: "#d4692a", accent: "#8b3a0f",               emoji: "🍁", tagline: "Vermont Long Run" },
  { name: "MUSCLE YUMMI", flavor: "Almond Athlete",   color: "#d4b896", accent: "#8b6914", textColor: "#3a2800", emoji: "🌰", tagline: "Almond Power" },
  { name: "MUSCLE YUMMI", flavor: "Matcha March",     color: "#7cb342", accent: "#33691e",               emoji: "🍵", tagline: "Zen Run" },
  { name: "MUSCLE YUMMI", flavor: "Lavender Lap",     color: "#b39ddb", accent: "#7e57c2",               emoji: "💜", tagline: "French Lap" },
  { name: "MUSCLE YUMMI", flavor: "Dragon Dash",      color: "#ff1493", accent: "#8b0066",               emoji: "🐉", tagline: "Fire Dash" },
  { name: "MUSCLE YUMMI", flavor: "Passion Pace",     color: "#ff7f50", accent: "#cc3300",               emoji: "🔥", tagline: "Passion Fruit Pace" },
  { name: "MUSCLE YUMMI", flavor: "Guava Glide",      color: "#ff8fab", accent: "#cc2244",               emoji: "🌺", tagline: "Tropical Glide" },
  { name: "MUSCLE YUMMI", flavor: "Acai Athlete",     color: "#4a0e8f", accent: "#2d0060",               emoji: "💪", tagline: "Amazon Power" },
  { name: "MUSCLE YUMMI", flavor: "Ginger Glide",     color: "#c8922a", accent: "#7a4e10",               emoji: "🫚", tagline: "Spicy Glide" },
  { name: "MUSCLE YUMMI", flavor: "Sand Sole",        color: "#20b2aa", accent: "#0d7a75",               emoji: "🌊", tagline: "Sun Kissed" },
  { name: "MUSCLE YUMMI", flavor: "Saffron Sprint",   color: "#ff9f1c", accent: "#c05a00",               emoji: "🌟", tagline: "Golden Sprint" },
  { name: "MUSCLE YUMMI", flavor: "Hibiscus Hustle",  color: "#c2185b", accent: "#880e4f",               emoji: "🌺", tagline: "Floral Hustle" },
  { name: "MUSCLE YUMMI", flavor: "Rose Run",         color: "#e91e8c", accent: "#880e4f",               emoji: "🌹", tagline: "Rose Petal Run" },
  { name: "MUSCLE YUMMI", flavor: "Watermelon Walk",  color: "#e8534a", accent: "#2d7a2a",               emoji: "🍉", tagline: "Summer Stroll" },
  { name: "MUSCLE YUMMI", flavor: "Kiwi Kick",        color: "#76c442", accent: "#3a7a10",               emoji: "🥝", tagline: "Tangy Kick" },
  { name: "MUSCLE YUMMI", flavor: "Pineapple Pace",   color: "#f5d020", accent: "#f5a623", textColor: "#3a2800", emoji: "🍍", tagline: "Island Pace" },
  { name: "MUSCLE YUMMI", flavor: "Banana Boost",     color: "#ffe135", accent: "#c8a000", textColor: "#3a2800", emoji: "🍌", tagline: "Banana Split Run" },
  { name: "MUSCLE YUMMI", flavor: "Strawberry Sprint",color: "#ff4757", accent: "#c0000a",               emoji: "🍓", tagline: "Fresh Berry Sprint" },
  { name: "MUSCLE YUMMI", flavor: "Peach Pace",       color: "#ffdab9", accent: "#e8902a", textColor: "#3a1500", emoji: "🍑", tagline: "Peach Fuzz Step" },
  { name: "MUSCLE YUMMI", flavor: "Blueberry Bolt",   color: "#1a237e", accent: "#0d1057",               emoji: "🫐", tagline: "Wild Bolt" },
  { name: "MUSCLE YUMMI", flavor: "Smores Step",      color: "#c8a87a", accent: "#5c3a10",               emoji: "🔥", tagline: "Campfire Walk" },
  { name: "MUSCLE YUMMI", flavor: "Count Kickz",      color: "#2d1b4e", accent: "#6a1b9a",               emoji: "🧛", tagline: "Midnight Kick" },
  { name: "MUSCLE YUMMI", flavor: "Reese Run",        color: "#c87028", accent: "#5c2d00",               emoji: "🥜", tagline: "PB Cup Mile" },
  { name: "MUSCLE YUMMI", flavor: "Rice Rocket",      color: "#f0ece0", accent: "#cc2222", textColor: "#000",   emoji: "🚀", tagline: "Snap Launch" },
  { name: "MUSCLE YUMMI", flavor: "Lychee Luxe",      color: "#ffe4e1", accent: "#ff9ab2", textColor: "#5a0030", emoji: "🤍", tagline: "Silk Step" },
  { name: "MUSCLE YUMMI", flavor: "Cookies N Kickz",  color: "#2c2c2c", accent: "#111111", textColor: "#fff",   emoji: "🍪", tagline: "Oreo Crunch Sole" },
];

export default function ShoesPage() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#a4bccc", fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif", userSelect: "none" }}>
      <MenuBar active="Shoes" />

      <div style={{ paddingTop: 28, padding: "28px 20px 60px" }}>
        <div style={{ color: "#888", fontSize: 10, marginBottom: 12, paddingTop: 28 }}>
          💾 musclemami.fit &nbsp;▶&nbsp; Shop &nbsp;▶&nbsp; Shoes
        </div>

        <div style={{ position: "relative" }}>
          <MacWindow title="MUSCLE YUMMI MAMI — SHOES" itemCount={shoeCereals.length}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
              {shoeCereals.map((box) => (
                <CerealBox
                  key={box.flavor}
                  {...box}
                  href={`/shop/shoes/${box.flavor.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                  count={shoeInventory[box.flavor] ?? 0}
                />
              ))}
            </div>
          </MacWindow>
        </div>

        <div style={{ color: "#555", fontSize: 10, marginTop: 16, textAlign: "center" }}>
          Click a box to view product — Limited drops only
        </div>
      </div>
    </div>
  );
}
