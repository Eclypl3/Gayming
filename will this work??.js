World.frameRate = 40;
var score = 0;
var highscore = 0;
var mode = 0;
var speed = 0;
var wave = 1;
var enemy = [0,1,2,3,5,6,7,8,9,10,11];
enemy[0] = createSprite(50, 50);
var enemy1 = createSprite(100, 50);
var enemy2 = createSprite(150, 50);
var enemy3 = createSprite(200, 50);
var enemy4 = createSprite(250, 50);
var enemy5 = createSprite(300, 50);
var enemy6 = createSprite(50, 85);
var enemy7 = createSprite(100, 85);
var enemy8 = createSprite(150, 85);
var enemy9 = createSprite(200, 85);
var enemy10 = createSprite(250, 85);
var enemy11 = createSprite(300, 85);
var enemies = createGroup();
enemies.add(enemy[0]);
enemies.add(enemy1);
enemies.add(enemy2);
enemies.add(enemy3);
enemies.add(enemy4);
enemies.add(enemy5);
enemies.add(enemy6);
enemies.add(enemy7);
enemies.add(enemy8);
enemies.add(enemy9);
enemies.add(enemy10);
enemies.add(enemy11);
enemies.setAnimationEach("enemy");
enemies.setScaleEach(0.2);
var boom = createSprite(200, 200);
boom.setAnimation("dead");
boom.scale = 4;
boom.visible = false;
var player = createSprite(200, 380);
player.setAnimation("player_retro");
player.scale = 4;
var laser = createSprite(200, -20);
laser.setAnimation("laser");
createEdgeSprites();
function draw() {
  playerMove();
  playerShoot();
  enemyFunction();
  showScore();
  sideWalls();
  modes();
  gameOver();
  drawSprites();
}
function playerMove() {
  if (keyDown("left")) {
    player.x += -5;
  }
  if (keyDown("right")) {
    player.x += 5;
  }
}
function playerShoot() {
  if (keyDown("up")&&laser.y < -10) {
    laser.x = player.x;
    laser.y = player.y - 20;
    laser.velocityY = -15;
    playSound("sound://category_retro/retro_game_enemy_spawn_10.mp3", false);
  }
}
function enemyFunction() {
  if (laser.isTouching(enemy[0])&&enemy[0].visible == true){
    boom.x = enemy[0].x;
    boom.y = enemy[0].y;
    boom.visible = true;
    enemy[0].visible = false;
    enemy[0].velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy1)&&enemy1.visible == true){
    boom.x = enemy1.x;
    boom.y = enemy1.y;
    boom.visible = true;
    enemy1.visible = false;
    enemy1.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy2)&&enemy2.visible == true){
    boom.x = enemy2.x;
    boom.y = enemy2.y;
    boom.visible = true;
    enemy2.visible = false;
    enemy2.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy3)&&enemy3.visible == true){
    boom.x = enemy3.x;
    boom.y = enemy3.y;
    boom.visible = true;
    enemy3.visible = false;
    enemy3.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy4)&&enemy4.visible == true){
    boom.x = enemy4.x;
    boom.y = enemy4.y;
    boom.visible = true;
    enemy4.visible = false;
    enemy4.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy5)&&enemy5.visible == true){
    boom.x = enemy5.x;
    boom.y = enemy5.y;
    boom.visible = true;
    enemy5.visible = false;
    enemy5.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy6)&&enemy6.visible == true){
    boom.x = enemy6.x;
    boom.y = enemy6.y;
    boom.visible = true;
    enemy6.visible = false;
    enemy6.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy7)&&enemy7.visible == true){
    boom.x = enemy7.x;
    boom.y = enemy7.y;
    boom.visible = true;
    enemy7.visible = false;
    enemy7.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy8)&&enemy8.visible == true){
    boom.x = enemy8.x;
    boom.y = enemy8.y;
    boom.visible = true;
    enemy8.visible = false;
    enemy8.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy9)&&enemy9.visible == true){
    boom.x = enemy9.x;
    boom.y = enemy9.y;
    boom.visible = true;
    enemy9.visible = false;
    enemy9.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy10)&&enemy10.visible == true){
    boom.x = enemy10.x;
    boom.y = enemy10.y;
    boom.visible = true;
    enemy10.visible = false;
    enemy10.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else if (laser.isTouching(enemy11)&&enemy11.visible == true){
    boom.x = enemy11.x;
    boom.y = enemy11.y;
    boom.visible = true;
    enemy11.visible = false;
    enemy11.velocityX = 0;
    laser.y = -20;
    score += 1;
    playSound("sound://category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
  }
  else{
    boom.visible = false;
  }
  if (enemy[0].visible == false&&enemy1.visible == false&&enemy2.visible == false&&enemy3.visible == false&&enemy4.visible == false&&enemy5.visible == false&&mode==1){
    enemy[0].x = 50;
    enemy[0].y = 50;
    enemy1.x = 100;
    enemy1.y = 50;
    enemy2.x = 150;
    enemy2.y = 50;
    enemy3.x = 200;
    enemy3.y = 50;
    enemy4.x = 250;
    enemy4.y = 50;
    enemy5.x = 300;
    enemy5.y = 50;
    enemy6.x = 50;
    enemy6.y = 85;
    enemy7.x = 100;
    enemy7.y = 85;
    enemy8.x = 150;
    enemy8.y = 85;
    enemy9.x = 200;
    enemy9.y = 85;
    enemy10.x = 250;
    enemy10.y = 85;
    enemy11.x = 300;
    enemy11.y = 85;
    enemies.setVisibleEach(true);
    speed += 1;
    enemies.setVelocityXEach(speed);
    wave+=1;
  }
  if (mode==1){
    if(enemies.isTouching(rightEdge)||enemies.isTouching(leftEdge)){
      enemy[0].y += 20;
      enemy1.y += 20;
      enemy2.y += 20;
      enemy3.y += 20;
      enemy4.y += 20;
      enemy5.y += 20;
      enemy6.y += 20;
      enemy7.y += 20;
      enemy8.y += 20;
      enemy9.y += 20;
      enemy10.y += 20;
      enemy11.y += 20;
      enemy[0].velocityX *= -1;
      enemy1.velocityX *= -1;
      enemy2.velocityX *= -1;
      enemy3.velocityX *= -1;
      enemy4.velocityX *= -1;
      enemy5.velocityX *= -1;
      enemy6.velocityX *= -1;
      enemy7.velocityX *= -1;
      enemy8.velocityX *= -1;
      enemy9.velocityX *= -1;
      enemy10.velocityX *= -1;
      enemy11.velocityX *= -1;
    }
  }
}
function showScore() {
  if(mode==1){
  background("black");
  fill("white");
  textSize(20);
  text("Score: " + score, 10, 20);
  text("High Score: " + highscore, 120, 20);
  text("Wave: " + wave, 300, 20);
  }
}
function sideWalls(){
  player.collide(leftEdge);
  player.collide(rightEdge);
}
function modes(){
    if (mode==0){
    stopSound("Space-Invaders---Space-Invaders.mp3");
    background("black");
    textSize(40);
    fill("white");
    text("SPACE INVADERS", 20, 100);
    textSize(35);
    text("Press 1 to Play", 80, 200);
    text("Press 2 for Instructions", 20, 250);
    player.visible = false;
    enemies.setVisibleEach(false);
    laser.visible = false;
    score = 0;
    wave = 1;
  }
    if (keyWentDown("1")&&mode==0) {
    mode=1;
    player.visible = true;
    enemies.setVisibleEach(true);
    laser.visible = true;
    speed = 1;
    enemies.setVelocityXEach(speed);
    playSound("Space-Invaders---Space-Invaders.mp3", true);
  }
    if (keyWentDown("0")) {
    mode=0;
    enemy[0].x = 50;
    enemy[0].y = 50;
    enemy1.x = 100;
    enemy1.y = 50;
    enemy2.x = 150;
    enemy2.y = 50;
    enemy3.x = 200;
    enemy3.y = 50;
    enemy4.x = 250;
    enemy4.y = 50;
    enemy5.x = 300;
    enemy5.y = 50;
    enemy6.x = 50;
    enemy6.y = 85;
    enemy7.x = 100;
    enemy7.y = 85;
    enemy8.x = 150;
    enemy8.y = 85;
    enemy9.x = 200;
    enemy9.y = 85;
    enemy10.x = 250;
    enemy10.y = 85;
    enemy11.x = 300;
    enemy11.y = 85;
    enemies.setVelocityXEach(0);
  }
    if (keyWentDown("2")&&mode==0) {
    mode=2;
    background("black");
    textSize(50);
    fill("white");
    text("Instructions", 30, 100);
    textSize(20);
    text("Press 0 to return to menu", 20, 30);
    text("Left/Right to move and Up to shoot", 20, 150);
    text("Killing an enemy is 1 point", 20, 180);
    text("Game over if an enemy reaches ground", 20, 210);
    text("Every wave enemy speed increases", 20, 240);
  }
}
function gameOver() {
  if (enemy[0].y > 400||enemy1.y > 400||enemy2.y > 400||enemy3.y > 400||enemy4.y > 400||enemy5.y > 400||enemy6.y > 400||enemy7.y > 400||enemy8.y > 400||enemy9.y > 400||enemy10.y > 400||enemy11.y > 400) {
    mode = 3;
    stopSound("Space-Invaders---Space-Invaders.mp3");
    if (score > highscore) {
      highscore = score;
    }
    background("black");
    fill("white");
    textSize(40);
    text("Game Over", 100, 200);
    textSize(20);
    text("Score: " + score, 170, 250);
    text("High Score: " + highscore, 170, 270);
    text("Wave: " + wave, 170, 300);
    text("Press 0 to return to menu", 90, 330);
    player.visible = false;
    enemies.setVisibleEach(false);
    laser.visible = false;
  }
}
