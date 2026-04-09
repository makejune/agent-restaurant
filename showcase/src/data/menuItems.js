/**
 * Menu Item Data Definition
 */

// Food Categories
export const CATEGORIES = {
  chinese: {
    id: 'chinese',
    name: 'Chinese',
    description: 'Chinese Cuisine',
  },
  japanese: {
    id: 'japanese',
    name: 'Japanese',
    description: 'Japanese Cuisine',
  },
  korean: {
    id: 'korean',
    name: 'Korean',
    description: 'Korean Cuisine',
  },
  western: {
    id: 'western',
    name: 'Western',
    description: 'Western Cuisine',
  },
};

// Food Definitions
export const MENU_ITEMS = [
  // Chinese
  {
    id: 'noodle',
    name: 'Dan Dan Noodles',
    category: 'chinese',
    price: 8,
    effect: { hunger: 15, mood: 5 },
    rarity: 'common',
  },
  {
    id: 'dumpling',
    name: 'Xiao Long Bao',
    category: 'chinese',
    price: 9,
    effect: { hunger: 20, mood: 10 },
    rarity: 'common',
  },
  {
    id: 'kungpao',
    name: 'Kung Pao Chicken',
    category: 'chinese',
    price: 13,
    effect: { hunger: 30, mood: 15 },
    rarity: 'uncommon',
  },
  {
    id: 'duck',
    name: 'Peking Duck',
    category: 'chinese',
    price: 38,
    effect: { hunger: 50, mood: 30 },
    rarity: 'rare',
  },
  {
    id: 'feast',
    name: 'Manchu-Han Feast',
    category: 'chinese',
    price: 96,
    effect: { hunger: 80, mood: 50 },
    rarity: 'legendary',
  },

  // Japanese
  {
    id: 'riceball',
    name: 'Onigiri',
    category: 'japanese',
    price: 8,
    effect: { hunger: 10, mood: 5 },
    rarity: 'common',
  },
  {
    id: 'miso',
    name: 'Miso Soup',
    category: 'japanese',
    price: 2,
    effect: { hunger: 15, mood: 8 },
    rarity: 'common',
  },
  {
    id: 'ramen',
    name: 'Ramen',
    category: 'japanese',
    price: 14,
    effect: { hunger: 35, mood: 15 },
    rarity: 'uncommon',
  },
  {
    id: 'sushi',
    name: 'Sushi Platter',
    category: 'japanese',
    price: 29,
    effect: { hunger: 40, mood: 25 },
    rarity: 'rare',
  },
  {
    id: 'wagyu',
    name: 'Wagyu Steak',
    category: 'japanese',
    price: 52,
    effect: { hunger: 70, mood: 45 },
    rarity: 'legendary',
  },

  // Korean
  {
    id: 'kimchi',
    name: 'Kimchi',
    category: 'korean',
    price: 5,
    effect: { hunger: 8, mood: 3 },
    rarity: 'common',
  },
  {
    id: 'bibimbap',
    name: 'Bibimbap',
    category: 'korean',
    price: 14,
    effect: { hunger: 25, mood: 12 },
    rarity: 'common',
  },
  {
    id: 'chicken',
    name: 'Samgyetang',
    category: 'korean',
    price: 18,
    effect: { hunger: 40, mood: 25 },
    rarity: 'rare',
  },
  {
    id: 'bbq',
    name: 'Korean BBQ',
    category: 'korean',
    price: 28,
    effect: { hunger: 45, mood: 30 },
    rarity: 'rare',
  },
  {
    id: 'setmeal',
    name: 'Hanjeongsik',
    category: 'korean',
    price: 36,
    effect: { hunger: 65, mood: 40 },
    rarity: 'legendary',
  },

  // Western
  {
    id: 'fries',
    name: 'French Fries',
    category: 'western',
    price: 4,
    effect: { hunger: 12, mood: 5 },
    rarity: 'common',
  },
  {
    id: 'burger',
    name: 'Burger',
    category: 'western',
    price: 12,
    effect: { hunger: 20, mood: 10 },
    rarity: 'common',
  },
  {
    id: 'pizza',
    name: 'Pizza',
    category: 'western',
    price: 14,
    effect: { hunger: 30, mood: 18 },
    rarity: 'uncommon',
  },
  {
    id: 'steak',
    name: 'Steak',
    category: 'western',
    price: 28,
    effect: { hunger: 55, mood: 35 },
    rarity: 'rare',
  },
  {
    id: 'dessert',
    name: 'Dessert Platter',
    category: 'western',
    price: 22,
    effect: { hunger: 15, mood: 40 },
    rarity: 'uncommon',
  },
];

// Get foods by category
export function getMenuItemsByCategory(categoryId) {
  return MENU_ITEMS.filter(food => food.category === categoryId);
}

// Get single food by ID
export function getMenuItemById(foodId) {
  return MENU_ITEMS.find(food => food.id === foodId);
}

// Rarity Configuration
export const RARITY_CONFIG = {
  common: {
    name: 'Common',
    color: '#5a5a5a',
    glow: 'none',
  },
  uncommon: {
    name: 'Uncommon',
    color: '#6d4c41',
    glow: '0 0 8px #6d4c41',
  },
  rare: {
    name: 'Rare',
    color: '#5d4037',
    glow: '0 0 12px #5d4037',
  },
  legendary: {
    name: 'Legendary',
    color: '#4a3728',
    glow: '0 0 16px #4a3728',
  },
};
