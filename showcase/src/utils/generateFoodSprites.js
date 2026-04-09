/**
 * Food Sprite & Agent Avatar Generator
 * Using Canvas 2D API to draw monochrome brown pixel art
 */

// Monochrome brown palette (4 colors only)
const MONO_PALETTE = {
  dark: '#3d3d3d',      // Darkest brown/black
  mid: '#6d5d4d',       // Medium brown
  light: '#9d8d7d',      // Light brown
  highlight: '#cdbdaa',  // Highlight brown
};

// All foods use the same monochrome palette
const PALETTE = MONO_PALETTE;

const SPRITE_GRID = 32;

/**
 * Draw pixel food art scaled to the requested canvas size.
 */
function drawPixelFood(ctx, drawFunction, targetSize = SPRITE_GRID) {
  const padding = Math.max(1, Math.floor(targetSize * 0.08));
  const drawableSize = targetSize - padding * 2;
  const scale = drawableSize / SPRITE_GRID;

  ctx.imageSmoothingEnabled = false;
  ctx.save();
  ctx.translate(padding, padding);
  ctx.scale(scale, scale);
  drawFunction(ctx);
  ctx.restore();
}

/**
 * Draw Dan Dan Noodles
 */
function drawNoodle(ctx) {
  const p = PALETTE;
  // Bowl bottom
  ctx.fillStyle = p.dark;
  ctx.fillRect(8, 22, 16, 8);
  ctx.fillStyle = p.mid;
  ctx.fillRect(6, 26, 20, 4);
  // Bowl body
  ctx.fillStyle = p.mid;
  ctx.fillRect(6, 16, 20, 8);
  // Noodles
  ctx.fillStyle = p.light;
  for (let i = 0; i < 6; i++) {
    ctx.fillRect(8 + i * 2, 12 + (i % 2) * 2, 1, 6);
  }
  // Meat
  ctx.fillStyle = p.dark;
  ctx.fillRect(10, 14, 2, 2);
  ctx.fillRect(14, 13, 2, 2);
  ctx.fillRect(18, 14, 2, 2);
  // Scallion
  ctx.fillStyle = p.highlight;
  ctx.fillRect(12, 11, 1, 3);
  ctx.fillRect(16, 12, 1, 2);
}

/**
 * Draw Xiao Long Bao
 */
function drawDumpling(ctx) {
  const p = PALETTE;
  // Body
  ctx.fillStyle = p.highlight;
  ctx.fillRect(10, 12, 12, 12);
  ctx.fillRect(8, 14, 16, 8);
  // Folds
  ctx.fillStyle = p.light;
  ctx.fillRect(12, 10, 8, 4);
  ctx.fillRect(10, 14, 2, 2);
  ctx.fillRect(18, 14, 2, 2);
  // Soup
  ctx.fillStyle = p.highlight;
  ctx.fillRect(13, 16, 2, 2);
  ctx.fillRect(17, 17, 2, 2);
}

/**
 * Draw Kung Pao Chicken
 */
function drawKungPao(ctx) {
  const p = PALETTE;
  // Plate
  ctx.fillStyle = p.light;
  ctx.fillRect(4, 18, 24, 10);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(6, 16, 20, 6);
  // Chicken
  ctx.fillStyle = p.mid;
  ctx.fillRect(8, 14, 4, 4);
  ctx.fillRect(14, 12, 4, 4);
  ctx.fillRect(20, 14, 4, 4);
  // Peanuts
  ctx.fillStyle = p.light;
  ctx.fillRect(10, 16, 2, 2);
  ctx.fillRect(18, 15, 2, 2);
}

/**
 * Draw Peking Duck
 */
function drawDuck(ctx) {
  const p = PALETTE;
  // Duck body
  ctx.fillStyle = p.mid;
  ctx.fillRect(8, 10, 16, 14);
  ctx.fillRect(6, 12, 20, 10);
  // Crispy texture
  ctx.fillStyle = p.light;
  for (let i = 0; i < 4; i++) {
    ctx.fillRect(10 + i * 4, 12, 2, 2);
    ctx.fillRect(12 + i * 4, 16, 2, 2);
  }
  // Pancakes
  ctx.fillStyle = p.highlight;
  ctx.fillRect(18, 8, 8, 4);
}

/**
 * Draw Sushi Platter
 */
function drawSushi(ctx) {
  const p = PALETTE;
  // Plate
  ctx.fillStyle = p.mid;
  ctx.fillRect(2, 20, 28, 8);
  // Sushi 1
  ctx.fillStyle = p.light;
  ctx.fillRect(6, 14, 8, 6);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(8, 12, 4, 2);
  // Sushi 2
  ctx.fillStyle = p.light;
  ctx.fillRect(18, 16, 8, 4);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(20, 14, 4, 2);
  // Gunkan
  ctx.fillStyle = p.dark;
  ctx.fillRect(12, 8, 4, 6);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(12, 6, 4, 2);
}

/**
 * Draw Ramen
 */
function drawRamen(ctx) {
  const p = PALETTE;
  // Bowl
  ctx.fillStyle = p.dark;
  ctx.fillRect(6, 20, 20, 10);
  ctx.fillStyle = p.mid;
  ctx.fillRect(4, 22, 24, 6);
  // Noodles
  ctx.fillStyle = p.highlight;
  for (let i = 0; i < 8; i++) {
    ctx.fillRect(8 + (i % 4) * 4, 14 + Math.floor(i / 4) * 4, 3, 1);
  }
  // Chashu
  ctx.fillStyle = p.mid;
  ctx.fillRect(8, 12, 6, 4);
  ctx.fillRect(18, 12, 6, 4);
  // Egg
  ctx.fillStyle = p.highlight;
  ctx.fillRect(14, 16, 4, 4);
  ctx.fillStyle = p.light;
  ctx.fillRect(15, 17, 2, 2);
}

/**
 * Draw Onigiri
 */
function drawRiceBall(ctx) {
  const p = PALETTE;
  // Nori
  ctx.fillStyle = p.dark;
  ctx.fillRect(10, 18, 12, 10);
  // Rice
  ctx.fillStyle = p.highlight;
  ctx.fillRect(8, 14, 16, 8);
  ctx.fillRect(10, 12, 12, 4);
  // Filling
  ctx.fillStyle = p.mid;
  ctx.fillRect(14, 16, 4, 4);
}

/**
 * Draw Miso Soup
 */
function drawMisoSoup(ctx) {
  const p = PALETTE;
  // Bowl
  ctx.fillStyle = p.light;
  ctx.fillRect(6, 18, 20, 10);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(8, 16, 16, 4);
  // Soup
  ctx.fillStyle = p.light;
  ctx.fillRect(8, 14, 16, 4);
  // Tofu
  ctx.fillStyle = p.highlight;
  ctx.fillRect(10, 14, 3, 3);
  ctx.fillRect(16, 14, 3, 3);
}

/**
 * Draw Bibimbap
 */
function drawBibimbap(ctx) {
  const p = PALETTE;
  // Stone pot
  ctx.fillStyle = p.dark;
  ctx.fillRect(4, 20, 24, 8);
  ctx.fillStyle = p.mid;
  ctx.fillRect(6, 16, 20, 6);
  // Rice
  ctx.fillStyle = p.highlight;
  ctx.fillRect(8, 12, 16, 8);
  // Toppings
  ctx.fillStyle = p.mid;
  ctx.fillRect(10, 10, 4, 4);
  ctx.fillStyle = p.light;
  ctx.fillRect(16, 10, 4, 4);
  ctx.fillStyle = p.dark;
  ctx.fillRect(12, 14, 4, 4);
  // Egg
  ctx.fillStyle = p.highlight;
  ctx.fillRect(14, 12, 4, 4);
  ctx.fillStyle = p.light;
  ctx.fillRect(15, 13, 2, 2);
}

/**
 * Draw Burger
 */
function drawBurger(ctx) {
  const p = PALETTE;
  // Top bun
  ctx.fillStyle = p.highlight;
  ctx.fillRect(6, 8, 20, 6);
  ctx.fillRect(8, 6, 16, 4);
  // Lettuce
  ctx.fillStyle = p.light;
  ctx.fillRect(6, 14, 20, 3);
  // Patty
  ctx.fillStyle = p.mid;
  ctx.fillRect(6, 17, 20, 4);
  // Cheese
  ctx.fillStyle = p.light;
  ctx.fillRect(5, 16, 22, 2);
  // Bottom bun
  ctx.fillStyle = p.highlight;
  ctx.fillRect(6, 21, 20, 4);
  ctx.fillRect(8, 24, 16, 2);
}

/**
 * Draw Pizza
 */
function drawPizza(ctx) {
  const p = PALETTE;
  // Crust
  ctx.fillStyle = p.highlight;
  ctx.fillRect(6, 8, 20, 16);
  ctx.fillRect(8, 6, 16, 2);
  ctx.fillRect(8, 24, 16, 2);
  // Sauce
  ctx.fillStyle = p.mid;
  ctx.fillRect(8, 10, 16, 10);
  // Cheese
  ctx.fillStyle = p.light;
  ctx.fillRect(9, 11, 14, 8);
  // Toppings
  ctx.fillStyle = p.dark;
  ctx.fillRect(10, 12, 3, 3);
  ctx.fillRect(17, 14, 3, 3);
}

/**
 * Draw Steak
 */
function drawSteak(ctx) {
  const p = PALETTE;
  // Plate
  ctx.fillStyle = p.mid;
  ctx.fillRect(2, 22, 28, 6);
  // Steak
  ctx.fillStyle = p.dark;
  ctx.fillRect(6, 12, 20, 12);
  ctx.fillStyle = p.mid;
  ctx.fillRect(8, 10, 16, 14);
  // Grill marks
  ctx.fillStyle = p.dark;
  ctx.fillRect(10, 12, 12, 2);
  ctx.fillRect(10, 16, 12, 2);
  ctx.fillRect(10, 20, 12, 2);
}

/**
 * Draw French Fries
 */
function drawFries(ctx) {
  const p = PALETTE;
  // Box
  ctx.fillStyle = p.dark;
  ctx.fillRect(10, 18, 12, 12);
  ctx.fillStyle = p.mid;
  ctx.fillRect(12, 20, 8, 8);
  // Fries
  ctx.fillStyle = p.highlight;
  ctx.fillRect(11, 6, 2, 14);
  ctx.fillRect(14, 8, 2, 12);
  ctx.fillRect(17, 6, 2, 14);
  ctx.fillRect(20, 10, 2, 10);
  ctx.fillRect(23, 8, 2, 12);
}

/**
 * Draw Dessert Platter
 */
function drawDessert(ctx) {
  const p = PALETTE;
  // Plate
  ctx.fillStyle = p.mid;
  ctx.fillRect(4, 22, 24, 6);
  // Cake
  ctx.fillStyle = p.highlight;
  ctx.fillRect(8, 14, 8, 10);
  ctx.fillStyle = p.light;
  ctx.fillRect(6, 16, 12, 6);
  // Ice cream
  ctx.fillStyle = p.highlight;
  ctx.fillRect(22, 12, 6, 6);
  ctx.fillStyle = p.light;
  ctx.fillRect(23, 13, 4, 4);
}

/**
 * Draw Kimchi
 */
function drawKimchi(ctx) {
  const p = PALETTE;
  // Bowl
  ctx.fillStyle = p.mid;
  ctx.fillRect(6, 18, 20, 10);
  // Kimchi
  ctx.fillStyle = p.dark;
  ctx.fillRect(8, 14, 6, 8);
  ctx.fillRect(16, 12, 8, 8);
  // Scallion
  ctx.fillStyle = p.light;
  ctx.fillRect(14, 10, 2, 6);
}

/**
 * Draw Korean BBQ
 */
function drawBBQ(ctx) {
  const p = PALETTE;
  // Grill
  ctx.fillStyle = p.dark;
  ctx.fillRect(4, 24, 24, 4);
  ctx.fillStyle = p.mid;
  ctx.fillRect(6, 22, 20, 4);
  // Meat
  ctx.fillStyle = p.mid;
  ctx.fillRect(6, 14, 8, 8);
  ctx.fillRect(16, 16, 10, 6);
  // Fat
  ctx.fillStyle = p.highlight;
  ctx.fillRect(8, 16, 4, 4);
}

/**
 * Draw Samgyetang
 */
function drawChicken(ctx) {
  const p = PALETTE;
  // Pot
  ctx.fillStyle = p.dark;
  ctx.fillRect(4, 22, 24, 6);
  // Chicken body
  ctx.fillStyle = p.light;
  ctx.fillRect(10, 10, 12, 14);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(12, 8, 8, 4);
  // Rice
  ctx.fillStyle = p.highlight;
  ctx.fillRect(14, 8, 4, 4);
  // Soup
  ctx.fillStyle = p.light;
  ctx.fillRect(6, 20, 20, 4);
}

/**
 * Draw Kimbap
 */
function drawKimbap(ctx) {
  const p = PALETTE;
  // Seaweed roll
  ctx.fillStyle = p.dark;
  ctx.fillRect(6, 12, 20, 10);
  // Rice
  ctx.fillStyle = p.highlight;
  ctx.fillRect(8, 14, 16, 6);
  // Filling
  ctx.fillStyle = p.mid;
  ctx.fillRect(10, 16, 3, 3);
  ctx.fillRect(14, 16, 2, 3);
  ctx.fillRect(17, 15, 3, 4);
}

/**
 * Draw Hanjeongsik
 */
function drawKoreanSetMeal(ctx) {
  const p = PALETTE;
  // Table
  ctx.fillStyle = p.mid;
  ctx.fillRect(2, 22, 28, 6);
  // Bowls
  ctx.fillStyle = p.light;
  ctx.fillRect(4, 14, 6, 8);
  ctx.fillStyle = p.mid;
  ctx.fillRect(12, 16, 6, 6);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(20, 14, 6, 8);
  // Main dish
  ctx.fillStyle = p.dark;
  ctx.fillRect(10, 8, 12, 6);
}

/**
 * Draw Manchu-Han Feast
 */
function drawFeast(ctx) {
  const p = PALETTE;
  // Table
  ctx.fillStyle = p.mid;
  ctx.fillRect(2, 20, 28, 8);
  // Dishes
  ctx.fillStyle = p.light;
  ctx.fillRect(6, 10, 6, 8);
  ctx.fillStyle = p.mid;
  ctx.fillRect(14, 8, 6, 10);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(22, 10, 6, 8);
  ctx.fillStyle = p.dark;
  ctx.fillRect(10, 16, 4, 4);
  ctx.fillRect(18, 14, 4, 6);
}

/**
 * Draw Wagyu Steak
 */
function drawWagyu(ctx) {
  const p = PALETTE;
  // Plate
  ctx.fillStyle = p.mid;
  ctx.fillRect(2, 22, 28, 6);
  ctx.fillStyle = p.light;
  ctx.fillRect(4, 20, 24, 4);
  // Wagyu
  ctx.fillStyle = p.highlight;
  ctx.fillRect(8, 10, 16, 12);
  ctx.fillStyle = p.light;
  ctx.fillRect(10, 8, 12, 14);
  // Marbling
  ctx.fillStyle = p.highlight;
  ctx.fillRect(12, 10, 2, 2);
  ctx.fillRect(16, 12, 2, 2);
  ctx.fillRect(14, 16, 2, 2);
  ctx.fillRect(18, 14, 2, 2);
}

/**
 * Draw Pixel Robot for Agent Avatar
 */
function drawRobot(ctx) {
  const p = MONO_PALETTE;
  // Head
  ctx.fillStyle = p.light;
  ctx.fillRect(8, 4, 16, 14);
  // Face plate
  ctx.fillStyle = p.highlight;
  ctx.fillRect(10, 6, 12, 10);
  // Eyes
  ctx.fillStyle = p.dark;
  ctx.fillRect(11, 8, 3, 3);
  ctx.fillRect(18, 8, 3, 3);
  // Mouth
  ctx.fillStyle = p.mid;
  ctx.fillRect(13, 13, 6, 2);
  // Antenna
  ctx.fillStyle = p.mid;
  ctx.fillRect(15, 1, 2, 4);
  ctx.fillStyle = p.highlight;
  ctx.fillRect(14, 0, 4, 2);
  // Body
  ctx.fillStyle = p.light;
  ctx.fillRect(6, 18, 20, 10);
  // Chest panel
  ctx.fillStyle = p.highlight;
  ctx.fillRect(12, 20, 8, 6);
  // Buttons
  ctx.fillStyle = p.dark;
  ctx.fillRect(13, 21, 2, 2);
  ctx.fillRect(17, 21, 2, 2);
  // Arms
  ctx.fillStyle = p.mid;
  ctx.fillRect(2, 18, 4, 8);
  ctx.fillRect(26, 18, 4, 8);
  // Legs
  ctx.fillStyle = p.light;
  ctx.fillRect(8, 28, 6, 4);
  ctx.fillRect(18, 28, 6, 4);
}

// Drawing function map
const drawFunctions = {
  'noodle': drawNoodle,
  'dumpling': drawDumpling,
  'kungpao': drawKungPao,
  'duck': drawDuck,
  'sushi': drawSushi,
  'ramen': drawRamen,
  'riceball': drawRiceBall,
  'miso': drawMisoSoup,
  'bibimbap': drawBibimbap,
  'burger': drawBurger,
  'pizza': drawPizza,
  'steak': drawSteak,
  'fries': drawFries,
  'dessert': drawDessert,
  'kimchi': drawKimchi,
  'bbq': drawBBQ,
  'chicken': drawChicken,
  'kimbap': drawKimbap,
  'setmeal': drawKoreanSetMeal,
  'feast': drawFeast,
  'wagyu': drawWagyu,
};

/**
 * Generate pixel food image (96x96 = 64 base * 1.5)
 */
export function generateFoodSprite(foodId, size = 96) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, size, size);

  const drawFunc = drawFunctions[foodId];
  if (drawFunc) {
    drawPixelFood(ctx, drawFunc, size);
  }

  return canvas.toDataURL('image/png');
}

/**
 * Generate pixel robot avatar (96x96)
 */
export function generateAgentAvatar(size = 96) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, size, size);
  drawRobot(ctx);

  return canvas.toDataURL('image/png');
}

/**
 * Pre-generate all food images
 */
export function generateAllFoodSprites() {
  const images = {};
  Object.keys(drawFunctions).forEach(foodId => {
    images[foodId] = generateFoodSprite(foodId, 96);
  });
  return images;
}
