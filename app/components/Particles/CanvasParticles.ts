import { getRandomBetween } from '@/common/utils/getRandomBetween';

type ParticleProps = {
  angleVelocity: number | [number, number];
  radius: number | [number, number];
  particleSize: number;
  ctx: CanvasRenderingContext2D;
};

class Particle {
  ctx: CanvasRenderingContext2D;
  particleSize: number;
  centerX: number;
  centerY: number;
  x: number;
  y: number;
  angleVelocity: number;
  radius: number;
  angle = Math.random() * 360;

  constructor({ particleSize, ctx, radius, angleVelocity }: ParticleProps) {
    this.ctx = ctx;

    this.centerX = this.ctx.canvas.width / 2;
    this.centerY = this.ctx.canvas.height / 2;

    this.particleSize = particleSize;
    this.angleVelocity = Array.isArray(angleVelocity)
      ? getRandomBetween(...angleVelocity)
      : angleVelocity;
    this.radius = Array.isArray(radius) ? getRandomBetween(...radius) : radius;

    this.x =
      this.centerX + this.radius * Math.cos((this.angle * Math.PI) / 180);
    this.y =
      this.centerY + this.radius * Math.sin((this.angle * Math.PI) / 180);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = '#00a080';
    this.ctx.fill();
  }

  updatePosition() {
    this.x =
      this.centerX + this.radius * Math.cos((this.angle * Math.PI) / 180);
    this.y =
      this.centerY + this.radius * Math.sin((this.angle * Math.PI) / 180);

    this.angle += this.angleVelocity;

    if (this.angle > 360) {
      this.angle = 0;
    }
  }
}

export type CanvasParticlesProps = {
  particlesCount: number;
  particlesSize: ParticleProps['particleSize'];
  particlesVelocity: ParticleProps['angleVelocity'];
  particlesRadius: ParticleProps['radius'];
};

export class CanvasParticles {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private reqId: number | null = 0;
  private particles: Particle[] = [];

  constructor(canvas: HTMLCanvasElement, props: CanvasParticlesProps) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.init(props);
  }

  onUnMount = () => {
    cancelAnimationFrame(this.reqId as number);
    this.reqId = null;

    this.unMountEvents();
  };

  mountEvents() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  unMountEvents() {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  private animationLoop() {
    if (this.reqId === null) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const particle of this.particles) {
      particle.draw();
      particle.updatePosition();
    }

    this.reqId = requestAnimationFrame(this.animationLoop.bind(this));
  }

  private init({
    particlesCount,
    particlesVelocity,
    particlesSize,
    particlesRadius,
  }: CanvasParticlesProps) {
    this.onWindowResize();
    this.mountEvents();

    for (let i = 0; i <= particlesCount; i++) {
      const newParticle = new Particle({
        angleVelocity: particlesVelocity,
        ctx: this.ctx,
        particleSize: particlesSize,
        radius: particlesRadius,
      });

      // INFO: do little delay for remove strange effect of particles moving
      // newParticle.y += particlesCount * 2;

      this.particles.push(newParticle);
    }

    this.animationLoop();
  }

  private onWindowResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}
