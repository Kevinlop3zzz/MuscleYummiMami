import { MenuBar, MacWindow } from "@/components/MacWindow";
import { CerealBox } from "@/components/CerealBox";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shirts",
  description: "Shop Muscle Yummi Mami custom shirts. Limited drops, original designs, built different. Find your flavor.",
  keywords: ["custom shirts", "streetwear shirts", "limited edition shirts", "muscle yummi mami shirts"],
  openGraph: {
    title: "Shirts — Muscle Yummi Mami",
    description: "Shop custom shirts. Limited drops, original designs, built different.",
    url: "https://musclemami.fit/shop/shirts",
  },
};

const shirtCereals = [
  { name: "MUSCLE YUMMI", flavor: "Yummi Crunch",      color: "#f4a234", accent: "#c0571a",               emoji: "💪", tagline: "Honey Wheat Blast" },
  { name: "MUSCLE YUMMI", flavor: "Cocoa Pump",         color: "#5c3317", accent: "#3b1f0a", textColor: "#ffd700", emoji: "🍫", tagline: "Double Chocolate" },
  { name: "MUSCLE YUMMI", flavor: "Lucky Fitz",         color: "#2e8b57", accent: "#1a5c36",               emoji: "🍀", tagline: "Marshmallow Magic" },
  { name: "MUSCLE YUMMI", flavor: "Frosted Flex",       color: "#a8d8f0", accent: "#2a7ab0",               emoji: "❄️", tagline: "Sugar Frosted" },
  { name: "MUSCLE YUMMI", flavor: "Berry Bomb",         color: "#8b2fc9", accent: "#5a1a8a",               emoji: "🫐", tagline: "Mixed Berry Crunch" },
  { name: "MUSCLE YUMMI", flavor: "Golden Gains",       color: "#ffd700", accent: "#b8860b", textColor: "#5a3e00", emoji: "✨", tagline: "Honey Gold Corn" },
  { name: "MUSCLE YUMMI", flavor: "Cinnamon Swirl",     color: "#c0522a", accent: "#7a2e10",               emoji: "🌀", tagline: "Cinnamon Toast" },
  { name: "MUSCLE YUMMI", flavor: "Apple Craze",        color: "#c8e6a0", accent: "#4a7c30", textColor: "#1a3a10", emoji: "🍎", tagline: "Apple Cinnamon" },
  { name: "MUSCLE YUMMI", flavor: "Trix Mix",           color: "#ff6b9d", accent: "#cc2266",               emoji: "🌈", tagline: "Fruity Rainbow" },
  { name: "MUSCLE YUMMI", flavor: "Cap'n Mami",         color: "#003087", accent: "#c8102e",               emoji: "⚓", tagline: "Original Crunch" },
  { name: "MUSCLE YUMMI", flavor: "Sugar Rush",         color: "#ff9fd4", accent: "#cc2288",               emoji: "💕", tagline: "Pink Sugar Coated" },
  { name: "MUSCLE YUMMI", flavor: "Corn Pop-Off",       color: "#f5e642", accent: "#c4991a", textColor: "#3a2800", emoji: "🌽", tagline: "Classic Corn" },
  { name: "MUSCLE YUMMI", flavor: "Count Yummi",        color: "#2d1b4e", accent: "#6a1b9a",               emoji: "🧛", tagline: "Chocolate Vampire" },
  { name: "MUSCLE YUMMI", flavor: "Honey Hustle",       color: "#f5b731", accent: "#c47c00", textColor: "#3a2000", emoji: "🍯", tagline: "Honey Glazed" },
  { name: "MUSCLE YUMMI", flavor: "Rice Gainz",         color: "#f0ece0", accent: "#cc2222", textColor: "#000",   emoji: "🍚", tagline: "Snap Crackle Grow" },
  { name: "MUSCLE YUMMI", flavor: "Reese Flex",         color: "#c87028", accent: "#5c2d00",               emoji: "🥜", tagline: "Peanut Butter Cup" },
  { name: "MUSCLE YUMMI", flavor: "Grape Ape",          color: "#6a0dad", accent: "#380070",               emoji: "🍇", tagline: "Grape Infused" },
  { name: "MUSCLE YUMMI", flavor: "Smores Pump",        color: "#c8a87a", accent: "#5c3a10",               emoji: "🔥", tagline: "Toasted Marshmallow" },
  { name: "MUSCLE YUMMI", flavor: "Strawberry Splash",  color: "#ff4757", accent: "#c0000a",               emoji: "🍓", tagline: "Fresh Strawberry" },
  { name: "MUSCLE YUMMI", flavor: "Mango Madness",      color: "#ffb347", accent: "#e65c00", textColor: "#3a1500", emoji: "🥭", tagline: "Tropical Mango" },
  { name: "MUSCLE YUMMI", flavor: "Peach Crunch",       color: "#ffdab9", accent: "#e8902a", textColor: "#3a1500", emoji: "🍑", tagline: "Georgia Peach" },
  { name: "MUSCLE YUMMI", flavor: "Blueberry Blaze",    color: "#1a237e", accent: "#0d1057",               emoji: "🫐", tagline: "Wild Blueberry" },
  { name: "MUSCLE YUMMI", flavor: "Watermelon Wave",    color: "#e8534a", accent: "#2d7a2a",               emoji: "🍉", tagline: "Summer Melon" },
  { name: "MUSCLE YUMMI", flavor: "Kiwi Kick",          color: "#76c442", accent: "#3a7a10",               emoji: "🥝", tagline: "Tangy Kiwi" },
  { name: "MUSCLE YUMMI", flavor: "Pineapple Pop",      color: "#f5d020", accent: "#f5a623", textColor: "#3a2800", emoji: "🍍", tagline: "Tropical Pine" },
  { name: "MUSCLE YUMMI", flavor: "Banana Boom",        color: "#ffe135", accent: "#c8a000", textColor: "#3a2800", emoji: "🍌", tagline: "Banana Split" },
  { name: "MUSCLE YUMMI", flavor: "Cherry Charge",      color: "#8b0000", accent: "#5c0000",               emoji: "🍒", tagline: "Wild Cherry" },
  { name: "MUSCLE YUMMI", flavor: "Lemon Lift",         color: "#fff44f", accent: "#c8a000", textColor: "#3a2800", emoji: "🍋", tagline: "Lemon Zest" },
  { name: "MUSCLE YUMMI", flavor: "Orange Burst",       color: "#ff6600", accent: "#cc3300",               emoji: "🍊", tagline: "Citrus Blast" },
  { name: "MUSCLE YUMMI", flavor: "Coconut Craze",      color: "#f0ece8", accent: "#8b6914", textColor: "#000",   emoji: "🥥", tagline: "Coconut Island" },
  { name: "MUSCLE YUMMI", flavor: "Caramel Crush",      color: "#c68642", accent: "#8b4513",               emoji: "🍮", tagline: "Salted Caramel" },
  { name: "MUSCLE YUMMI", flavor: "Mocha Muscle",       color: "#3c2415", accent: "#1a0a00", textColor: "#d4a96a", emoji: "☕", tagline: "Espresso Crunch" },
  { name: "MUSCLE YUMMI", flavor: "Mint Chip",          color: "#98ff98", accent: "#2d8a2d", textColor: "#1a3a10", emoji: "🌿", tagline: "Peppermint Crisp" },
  { name: "MUSCLE YUMMI", flavor: "Vanilla Vault",      color: "#fff8dc", accent: "#d4b896", textColor: "#5a3e00", emoji: "🤍", tagline: "Madagascar Vanilla" },
  { name: "MUSCLE YUMMI", flavor: "Maple Magic",        color: "#d4692a", accent: "#8b3a0f",               emoji: "🍁", tagline: "Vermont Maple" },
  { name: "MUSCLE YUMMI", flavor: "Almond Armor",       color: "#d4b896", accent: "#8b6914", textColor: "#3a2800", emoji: "🌰", tagline: "Almond Butter" },
  { name: "MUSCLE YUMMI", flavor: "Matcha Move",        color: "#7cb342", accent: "#33691e",               emoji: "🍵", tagline: "Japanese Matcha" },
  { name: "MUSCLE YUMMI", flavor: "Lavender Lift",      color: "#b39ddb", accent: "#7e57c2",               emoji: "💜", tagline: "French Lavender" },
  { name: "MUSCLE YUMMI", flavor: "Dragonfruit Drop",   color: "#ff1493", accent: "#8b0066",               emoji: "🐉", tagline: "Dragon Fire" },
  { name: "MUSCLE YUMMI", flavor: "Passion Pump",       color: "#ff7f50", accent: "#cc3300",               emoji: "🔥", tagline: "Passion Fruit" },
  { name: "MUSCLE YUMMI", flavor: "Guava Gains",        color: "#ff8fab", accent: "#cc2244",               emoji: "🌺", tagline: "Tropical Guava" },
  { name: "MUSCLE YUMMI", flavor: "Lychee Luxe",        color: "#ffe4e1", accent: "#ff9ab2", textColor: "#5a0030", emoji: "🤍", tagline: "Lychee Rose" },
  { name: "MUSCLE YUMMI", flavor: "Acai Attack",        color: "#4a0e8f", accent: "#2d0060",               emoji: "💪", tagline: "Amazon Acai" },
  { name: "MUSCLE YUMMI", flavor: "Ginger Snap",        color: "#c8922a", accent: "#7a4e10",               emoji: "🫚", tagline: "Spicy Ginger" },
  { name: "MUSCLE YUMMI", flavor: "Chai Charge",        color: "#c4a882", accent: "#7a4a20", textColor: "#3a1500", emoji: "🫖", tagline: "Masala Chai" },
  { name: "MUSCLE YUMMI", flavor: "Nutmeg Nourish",     color: "#c47820", accent: "#7a3e10",               emoji: "🌰", tagline: "Holiday Spice" },
  { name: "MUSCLE YUMMI", flavor: "Salt & Sand",         color: "#20b2aa", accent: "#0d7a75",               emoji: "🌊", tagline: "Sun Kissed" },
  { name: "MUSCLE YUMMI", flavor: "Saffron Swirl",      color: "#ff9f1c", accent: "#c05a00",               emoji: "🌟", tagline: "Golden Saffron" },
  { name: "MUSCLE YUMMI", flavor: "Hibiscus Hit",       color: "#c2185b", accent: "#880e4f",               emoji: "🌺", tagline: "Hibiscus Tea" },
  { name: "MUSCLE YUMMI", flavor: "Rose Rush",          color: "#e91e8c", accent: "#880e4f",               emoji: "🌹", tagline: "Rose Petal" },
  { name: "MUSCLE YUMMI", flavor: "Cookies N Gainz",    color: "#2c2c2c", accent: "#111111", textColor: "#fff",   emoji: "🍪", tagline: "Oreo Crème Crunch" },
];

export default function ShirtsPage() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#000", fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif", userSelect: "none" }}>
      <MenuBar active="Shirts" />

      <div style={{ paddingTop: 28, padding: "28px 60px 60px" }}>
        <div style={{ color: "#888", fontSize: 10, marginBottom: 12, paddingTop: 28 }}>
          💾 musclemami.fit &nbsp;▶&nbsp; Shop &nbsp;▶&nbsp; Shirts
        </div>

        <div style={{ position: "relative" }}>
          <MacWindow title="MUSCLE YUMMI MAMI — SHIRTS" itemCount={shirtCereals.length}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
              {shirtCereals.map((box) => (
                <CerealBox
                  key={box.flavor}
                  {...box}
                  href={`/shop/shirts/${box.flavor.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
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
